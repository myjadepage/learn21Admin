<template>
  <div class="container-fluid">
    <div class="row">
      <PageHeader :pageCurrentInfo="pageCurrentInfo" />

         <div class="col-sm-12">
            <!-- 검색영역 시작-->
            <div class="widget has-shadow">
                <div class="widget-body">
                    <table class="table table-bordered" summary="주문 검색하기">
                        <colgroup>
                            <col width="10%">
                            <col width="40%">
                            <col width="10%">
                            <col width="40%">
                        </colgroup>
                        <tbody>
                            <tr>
                                <th scope="row"><span class="text-primary">가맹점</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col col-sm-4">
                                            <select class="form-control">
                                                <option>그룹</option>
                                                <option>Ketchup</option>
                                                <option>Relish</option>
                                            </select>
                                        </div>
                                        <div class="col col-sm-4">
                                            <select class="form-control">
                                                <option>가맹점</option>
                                                <option>Ketchup</option>
                                                <option>Relish</option>
                                            </select>
                                        </div>
                                    </div>
                                </td>
                                <th><span class="text-primary">거래처</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-5">
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="거래처검색" v-model="searchParam.pcuName">
                                                <button type="button" class="btn btn-sm btn-secondary" @click="openModalPopup('vendorList')"><i class="la la-search"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row"><span class="text-primary">조회기간</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-8">
                                            <DateSelect @state-start-date="startDate" @state-end-date="endDate"
                                            :defStartDate="pfromDate"
                                            :defEndDate="ptoDate"></DateSelect>
                                        </div>
                                    </div>
                                </td>
                                <th><span class="text-primary">발주서</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-5">
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="발주서검색">
                                                <button type="button" class="btn btn-sm btn-secondary"  @click="openModalPopup('buyInvoiceList')"><i class="la la-search"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>

                        </tbody>
                    </table>

                    <div class="text-center">
                        <button class="btn btn-primary">검색</button>
                    </div>

                </div>
            </div>
            <!-- 검색영역 끝-->

            <!-- 리스트영역 시작 -->
            <div class="widget has-shadow">
                <div class="widget-header bordered">
                    <div class="row">
                        <div class="col-sm-6 d-flex align-items-center justify-content-md-start justify-content-center">
                            <!--table pageper-->
                            <div class="dropdown show vbt-per-page-dropdown col-sm-2">
                                <a class="btn btn-block dropdown-toggle form-control" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {{config.per_page}}
                                </a>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <a v-for="(option, key, index) in config.per_page_options" :key="index" class="dropdown-item" href="" @click.prevent="perPageHandler(option)" v-bind:class="{ active:  (option == config.per_page)}">
                                        {{option}}
                                    </a>
                                </div>
                            </div>
                            <label class="col-sm-4">조회건수 : {{ rows.length }} 개</label>
                        </div>
                        <div class="col-sm-6 d-flex align-items-center justify-content-md-end justify-content-center">
                            <button class="btn btn-outline-primary" @click="excelDownFunc">엑셀다운로드</button>
                            <!-- <button class="btn btn-outline-primary" @click="saveAdd">저장</button> -->
                            <button class="btn btn-outline-primary" @click="openModalPopup('buyConfirmPrint')">인쇄</button>
                            <button class="btn btn-outline-danger"  @click="checkCheckBox" :disabled="selectbefore">매입확정</button>
                        </div>
                    </div>
                </div>
                <div class="widget-body">
                    <v-table :rows="rows" :columns="columns" :config="config" :classes="classes" :show-loader="showLoader"
                             @on-select-row="selectRowData" @on-unselect-row="selectRowData" :key="componentKey">
                        <template slot="empty-results">
                            조회된 공지사항이 없습니다.
                        </template>
                        <template slot="diiAdd" slot-scope="props">
                            <input type="text" class="form-control text-right" placeholder="0" v-model.number="props.row.diiAdd"
                              @blur="(e) => { addBuy(e, props)}" @focus="reset($event, props)"  @click="warnAdd($event, props)"/>
                        </template>
                        <template slot="diiSupplyprice" slot-scope="props">
                            <input type="text" class="form-control-plaintext text-right"
                              :value ="props.row.diiSupplyprice | formatNumber" readonly/>
                        </template>
                        <template slot="diiTotalPrice" slot-scope="props">
                            <input type="text" class="form-control-plaintext text-right"
                              :value="props.row.diiTotalPrice | formatNumber" readonly/>
                        </template>
                        <template slot="balanceTot" slot-scope="props">
                            <input type="text" class="form-control-plaintext text-right"
                              :value ="props.row.balanceTot | formatNumber" readonly/>
                        </template>
                    </v-table>
                </div>
            </div>
            <!-- 리스트영역 끝 -->
        </div>
    </div>

     <vendor-list-popup title="거래처검색" v-if="modalOpenFlag && modalPopupId === 'vendorList'" @close="closeModalPopup"></vendor-list-popup>
     <buy-invoice-list-popup title="발주서 검색" v-if="modalOpenFlag && modalPopupId === 'buyInvoiceList'" @close="closeModalPopup"></buy-invoice-list-popup>
     <buy-confirm-print-popup v-if="modalOpenFlag && modalPopupId === 'buyConfirmPrint'" @close="closeModalPopup"></buy-confirm-print-popup>
     <buy-confirm-popup v-if="modalOpenFlag && modalPopupId === 'buyConfirm'" @close="closeModalPopup" :saveData="select"></buy-confirm-popup>
  </div>
</template>

<script>
import VueBootstrap4Table from 'vue-bootstrap4-table'
import pageHeader from '@/mixin/pageHeader'
import dateSelect from '@/mixin/dateSelect'
import VendorListPopup from '@/components/popup/common/VendorListPopup.vue'
import BuyInvoiceListPopup from '@/components/popup/common/BuyInvoiceListPopup.vue'
import BuyConfirmPopup from '@/components/popup/BuyConfirmPopup.vue'
import BuyConfirmPrintPopup from '@/components/popup/print/BuyConfirmPrintPopup.vue'
import { getPurchaseConfirm } from '@/api'
import XLSX from 'xlsx'

export default {
  name: 'buyConfirm',
  mixins: [
    pageHeader({title: '매입확정', groupName: '구매관리'}),
    dateSelect
  ],
  components: { VendorListPopup, BuyInvoiceListPopup, BuyConfirmPopup, BuyConfirmPrintPopup, VTable: VueBootstrap4Table },
  filters: {
    formatNumber (value) {
      if (!value) return '0'
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  },
  data () {
    return {
      modalOpenFlag: false,
      modalPopupId: '',
      rows: [],
      columns: [
        {label: '발주일자', name: 'dpoOrderRegdate', sort: true, row_classes: 'w120'},
        {label: '거래처', name: 'cuName', sort: true, row_classes: 'table-text-left w200'},
        {label: '품목', name: 'itemName', sort: true, row_classes: 'table-text-left'},
        {label: '발주수량', name: 'dpiCount', sort: true, row_classes: 'w100'},
        {label: '입고추가', name: 'diiAdd', sort: false, row_classes: 'w100'},
        {label: '입고수량', name: 'diiCount', sort: true, row_classes: 'w100'},
        {label: '잔량', name: 'balance', sort: true, row_classes: 'w80'},
        {label: '공급가', name: 'diiSupplyprice', sort: true, row_classes: 'table-text-right w120'},
        {label: '합계금액', name: 'diiTotalPrice', sort: true, row_classes: 'table-text-right w120'},
        {label: '잔량합계금액', name: 'balanceTot', sort: true, row_classes: 'table-text-right w120'}],
      config: {
        pagination: true,
        pagination_info: false,
        num_of_visibile_pagination_buttons: 10,
        checkbox_rows: true,
        highlight_row_hover: false,
        multi_column_sort: false,
        card_mode: false,
        per_page: 20,
        per_page_options: [20, 50, 100],
        show_reset_button: false,
        show_refresh_button: false,
        global_search: {
          placeholder: '',
          visibility: false,
          case_sensitive: false
        },
        loaderText: ''
      },
      classes: {
        table: 'table table-bordered'
      },
      showLoader: false,
      select: {},
      selectbefore: true,
      componentKey: 0, // component만 update
      searchParam: {
        pdpoCode: '', // 가맹점
        pstartDate: new Date(), // 시작기간
        pendDate: new Date(), // 기간
        pcuName: '' // 거래처 이름
      }
    }
  },
  mounted () {
    this.showLoader = true
    this.init()
  },
  methods: {
    forceRerender () {
      this.componentKey += 1
    },
    // api
    init () {
      getPurchaseConfirm()
        .then(res => {
          this.dataContainer(res.data)
          this.showLoader = false
        })
        .catch(err => {
          console.log(err)
          this.showLoader = false
        })
    },
    dataContainer (data) {
      this.rows = data.map(el => {
        const container = {}
        container.dpoOrderRegdate = this.$moment(el.dpoOrderRegdate).format('YYYY-MM-DD') // 발주일자
        container.cuName = el.cuName // 거래처
        container.itemName = el.itemName // 품목
        container.itemId = el.itemId
        container.dpiCount = el.dpiCount // 발주수량
        container.diiAdd = '' // 입고추가
        container.diiCount = el.diiCount // 입고수량
        container.balance = el.balance // 잔량
        container.diiSupplyprice = el.dpiSupplyPrice // 공급가
        container.diiTotalPrice = el.dpiTotalPrice // 합계금액
        container.balanceTot = el.balanceTot // 잔량합계금액
        container.diiImportdate = new Date()
        container.diiTax = el.dpiTax
        container.dpiCode = el.dpiCode
        container.dpoCode = el.dpoCode
        // 입고수량이 0일 때 단가 계산
        if (el.diiCount === '0') {
          container.unitPrice = el.balanceTot / el.balance
        } else {
          container.unitPrice = el.dpiSupplyPrice / el.diiCount
        }

        return container
      })
    },
    reset (e, props) {
      const id = props.row.vbt_id
      props.row.diiAdd = this.rows[id - 1].diiAdd
      props.row.diiCount = this.rows[id - 1].diiCount
      props.row.balance = this.rows[id - 1].balance
      props.row.balanceTot = this.rows[id - 1].balanceTot
      props.row.diiSupplyprice = this.rows[id - 1].diiSupplyprice
      props.row.diiTotalPrice = this.rows[id - 1].diiTotalPrice
    },
    warnAdd (e, props) {
      if (props.row.balance === 0) {
        alert('남은 잔량이 없습니다.')
        props.row.diiAdd = ''
      }
    },
    addBuy (e, props) {
      if (e.target.value > props.row.balance) {
        alert('잔량보다 수량이 크면 안됩니다.')
        props.row.diiAdd = ''
        e.target.value = ''
      }
      // 입고추가하기 숫자 입력시 계산
      props.row.balance = props.row.balance - props.row.diiAdd
      props.row.diiSupplyprice = parseInt(props.row.diiSupplyprice) + parseInt(props.row.unitPrice * e.target.value)
      props.row.diiTotalPrice = props.row.diiSupplyprice
      props.row.balanceTot = props.row.unitPrice * props.row.balance
    },
    // 선택하기
    selectRowData (e) {
      // e.selected_items.map(el => {
      //   if (el.diiAdd === '') {
      //     const ID = el.vbt_id.toString()
      //     let x = Array.from(document.querySelectorAll('[data-id]'))
      //     x.forEach(el => {
      //       if (el.getAttribute('data-id') === ID) {
      //         let input = el.querySelector('.custom-control-input')
      //         console.log(input)
      //         alert('입고추가에 수량을 넣어주세요')
      //       }
      //     })
      //   }
      // })

      if (e.selected_items.length > 0) {
        this.select = e.selected_items
        this.selectbefore = false
      } else {
        this.selectbefore = true
      }
    },
    // 매입확정 팝업 오픈전
    checkCheckBox () {
      if (this.select.length > 0) {
        this.openModalPopup('buyConfirm')
      } else {
        alert('체크박스를 입력해 주세요')
      }
    },
    // 모달팝업 open
    openModalPopup (id) {
      switch (id) {
        case 'vendorList': // 거래처검색
          this.modalPopupId = 'vendorList'
          break
        case 'buyInvoiceList': // 발주서 선택
          this.modalPopupId = 'buyInvoiceList'
          break
        case 'buyInvoicePrint': // 구매발주서 인쇄
          this.modalPopupId = 'buyInvoicePrint'
          break
        case 'buyConfirm': // 구매확정버튼시 팝업
          this.modalPopupId = 'buyConfirm'
          break
        case 'buyConfirmPrint': // 매입확정 인쇄 팝업
          this.modalPopupId = 'buyConfirmPrint'
          break
      }
      this.modalOpenFlag = true
    },
    // 모달창 close
    closeModalPopup (data) {
      if (data) {
        this.searchParam.pcuName = data.row.cuName
      }
      this.modalPopupId = ''
      this.modalOpenFlag = false
    },
    onlyNumberFormat (num) {
      let onlynum = /^[0-9]\d*$|^$/
      let oldNum = ''
      if (onlynum.test(num)) {
        oldNum = num
      } else {
        event.target.value = oldNum
      }
      return event.target.value
    },
    // 엑셀다운로드
    excelDownFunc () {
      let temp = this.rows.map(el => {
        const container = {}
        container.발주일자 = el.dpoOrderRegdate
        container.거래처 = el.cuName
        container.품목 = el.itemName
        container.발주수량 = el.dpiCount
        container.입고추가 = el.diiAdd
        container.입고수량 = el.diiCount
        container.잔량 = el.balance
        container.공급가 = el.diiSupplyprice
        container.합계금액 = el.diiTotalPrice
        container.잔량합계금액 = el.balanceTot
        return container
      })
      let dataWS = XLSX.utils.json_to_sheet(temp)
      let wb = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(wb, dataWS, 'Sheet')
      XLSX.writeFile(wb, this.$moment(new Date()).format('YYYY-MM-DD-h:mm:ss') + '.xlsx')
    }
  }
}
</script>

<style>

</style>
