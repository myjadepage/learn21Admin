<template>
  <div class="container-fluid">
    <div class="row">
      <PageHeader :pageCurrentInfo="pageCurrentInfo" />

             <div class="col-sm-12">
            <!-- 검색영역 시작-->
            <div class="widget has-shadow">
                <div class="widget-body">
                    <table class="table table-bordered" summary="매입명세서 검색하기">
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
                                                <option value="">그룹</option>
                                                <option value="">Ketchup</option>
                                                <option value="">Relish</option>
                                            </select>
                                        </div>
                                        <div class="col col-sm-4">
                                            <select class="form-control">
                                                <option value="">가맹점</option>
                                                <option value="">Ketchup</option>
                                                <option value="">Relish</option>
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
                                                <button type="button" class="btn btn-sm btn-secondary" @click="openModalPopup('', 'vendorList')"><i class="la la-search"></i></button>
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
                                            <date-select @state-start-date="startDate" @state-end-date="endDate"></date-select>
                                        </div>
                                    </div>
                                </td>
                                <th><span class="text-primary">색상구분 </span></th>
                                <td>
                                    <div class="row">
                                        <div class="col col-sm-3 d-flex justify-content-start">
                                            <label class="mb-0"> <span class="badge badge-info square padding-right-5">&nbsp;</span> 편집 상태 전표</label>
                                        </div>
                                        <div class="col col-sm-5  d-flex justify-content-start">
                                            <label class="mb-0"> <span class="badge badge-danger square padding-right-5">&nbsp;</span> 명세서 미 인쇄 전표</label>
                                        </div>
                                    </div>
                                </td>
                            </tr>

                        </tbody>
                    </table>

                    <div class="text-center">
                        <button class="btn btn-primary">조회</button>
                    </div>
                </div>
            </div>
            <!-- 검색영역 끝-->

            <!-- 리스트영역 시작 -->
            <div class="widget has-shadow">
                <div class="widget-header bordered">
                    <div class="row">
                        <div class="col-sm-6 d-flex align-items-center justify-content-md-start justify-content-center">
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
                            <label class="col-sm-4">조회건수 :  {{ rows.length }}  개</label>
                        </div>
                        <div class="col-sm-6 d-flex align-items-center justify-content-md-end justify-content-center">
                            <button class="btn btn-outline-primary btn_excel" @click="excelDownFunc">엑셀다운로드</button>
                            <button class="btn btn-outline-danger"  @click="openModalPopup('', 'buySpec')">+ 신규등록</button>
                        </div>
                    </div>
                </div>
                <div class="widget-body">
                    <vue-bootstrap-4-table :rows="rows" :columns="columns" :config="config" :classes="classes" :show-loader="showLoader" >
                        <template slot="empty-results">
                            조회된 공지사항이 없습니다.
                        </template>
                        <template slot="button" slot-scope="props">
                            <button class="btn btn-sm btn-outline-dark"  @click="openModalPopup('buySpec', props.cuName)">수정</button>
                            <button class="btn btn-sm btn-danger">삭제</button>
                        </template>
                    </vue-bootstrap-4-table>
                     <vendor-list-popup title="거래처검색" v-if="modalOpenFlag && modalPopupId === 'vendorList'" @close="closeModalPopup"></vendor-list-popup>
                    <buy-spec-popup v-if="modalOpenFlag && modalPopupId === 'buySpec'" @close="closeModalPopup" :modalParamObj="modalParamObj" :key="componentKey"></buy-spec-popup>
                </div>
            </div>
            <!-- 리스트영역 끝 -->
        </div>
    </div>
  </div>
</template>

<script>
import pageHeader from '@/mixin/pageHeader'
import dateSelect from '@/mixin/dateSelect'
import VendorListPopup from '@/components/popup/common/VendorListPopup.vue'
import BuySpecPopup from '@/components/popup/common/BuySpecPopup.vue'
import { getPurchaseStatement } from '@/api'
import VueBootstrap4Table from 'vue-bootstrap4-table'
import { numberWithCommas } from '@/assets/script'
import XLSX from 'xlsx'

export default {
  name: 'buySpecList',
  mixins: [
    pageHeader({title: '매입명세서', groupName: '구매관리'}),
    dateSelect
  ],
  components: {
    VendorListPopup,
    BuySpecPopup,
    VueBootstrap4Table
  },
  data () {
    return {
      modalOpenFlag: false,
      modalPopupId: '',
      modalParamObj: {},
      rows: [],
      columns: [
        {label: '매입일자', name: 'diiPurchdate', sort: true},
        {label: '일련번호', name: 'dpoSerialNo', sort: true},
        {label: '거래처', name: 'cuName', sort: true, row_classes: 'table-text-left'},
        {label: '상태구분', name: 'bizInvoiceState', sort: true, row_classes: 'w100'},
        {label: '공급가', name: 'totSupplyprice', sort: true, row_classes: 'table-text-right'},
        {label: '부가세', name: 'totTax', sort: true, row_classes: 'table-text-right'},
        {label: '합계금액', name: 'totPrice', sort: true, row_classes: 'table-text-right'},
        {label: '작성자', name: 'dpoOrderName', sort: true, row_classes: 'w80'},
        {label: '변경자', name: 'diiName', sort: true, row_classes: 'w80'},
        {label: '메모', name: 'dpoMemo', sort: false, row_classes: 'table-text-left w300'},
        {label: '관리', name: 'button', sort: false, row_classes: 'w150'}],
      config: {
        pagination: true,
        pagination_info: false,
        num_of_visibile_pagination_buttons: 10,
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
    // api
    init () {
      getPurchaseStatement()
        .then(res => {
          this.dataContainer(res.data)
          this.showLoader = false
        })
        .catch(err => {
          this.showLoader = false
          console.log(err)
        })
    },
    dataContainer (data) {
      this.rows = data.map(el => {
        const container = {}
        container.diiPurchdate = this.$moment(el.diiPurchdate).format('YYYY-MM-DD') // 매입일자
        container.dpoSerialNo = el.dpoSerialNo // 일련번호
        container.cuName = el.cuName // 거래처
        container.bizInvoiceState = el.bizInvoiceState // 상태구분
        container.totSupplyprice = numberWithCommas(el.totSupplyprice) // 공급가
        container.totTax = numberWithCommas(el.totTax) // 부가세
        container.totPrice = numberWithCommas(el.totPrice) // 합계금액
        container.dpoOrderName = el.dpoOrderName // 작성자
        container.diiName = el.diiName // 변경자
        container.dpoMemo = el.dpoMemo // 메모
        return container
      })
    },
    // 모달팝업 open
    openModalPopup (o, id) {
      switch (id) {
        case 'vendorList': // 거래처검색
          this.modalPopupId = 'vendorList'
          break
        case 'buySpec': // 매입명세서등록
          this.modalPopupId = 'buySpec'
          if (o) {
            this.modalParamObj = {
              pcuName: o.pcuName,
              pdpoCode: o.pdpoCode,
              pendDate: o.pendDate,
              poState: o.poState,
              pstartDate: o.pstartDate}
          } else {
            this.modalParamObj = ''
          }
          break
      }
      this.modalOpenFlag = true
      document.body.classList.remove('modal-open')
    },
    // 모달창 close
    closeModalPopup (data) {
      if (data) {
        // 거래처검색경우
        this.searchParam.pcuName = data.row.cuName
      }
      this.modalPopupId = ''
      this.modalOpenFlag = false
      document.body.classList.remove('modal-open')
    },
    forceRerender () {
      this.componentKey += 1
    },
    startDate (date) {
      this.searchParam.pstartDate = date
    },
    endDate (date) {
      this.searchParam.pendDate = date
    },
    // 엑셀다운로드
    excelDownFunc () {
      let temp = this.rows.map(el => {
        const container = {}
        container.No = el.index
        container.매입일자 = el.diiPurchdate
        container.일련번호 = el.dpoSerialNo
        container.거래처 = el.cuName
        container.상태 = el.dpoState
        container.공급가 = el.totSupplyprice
        container.부가세 = el.totTax
        container.합계금액 = el.totPrice
        container.작성자 = el.fuoFiiceNumber
        container.변경자 = el.diiName
        container.메모 = el.dpoMemo
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
