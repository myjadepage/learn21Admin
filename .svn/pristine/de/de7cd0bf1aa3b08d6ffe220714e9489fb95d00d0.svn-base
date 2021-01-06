<template>
  <div class="container-fluid">
    <div class="row">
      <PageHeader :pageCurrentInfo="pageCurrentInfo" />
      <!-- modalPopup -->
      <OrderInfoPopup v-if="modalOpenFlag && modalPopupId === 'OrderInfoPopup'"
                      :modalParamObj="modalParamObj"
                      @close="closeModalPopup" />
      <OrderRefundPopup v-if="modalOpenFlag && modalPopupId === 'OrderRefundPopup'"
                      :modalParamObj="modalParamObj"
                      @close="closeModalPopup" />
      <div class="col-xl-12">
            <!-- 검색영역 시작-->
            <div class="widget has-shadow">
                <div class="widget-body">
                    <table class="table table-bordered">
                        <colgroup>
                            <col width="12%">
                            <col width="38%">
                            <col width="12%">
                            <col width="38%">
                        </colgroup>
                        <tbody>
                            <tr>
                                <th scope="row"><span class="text-primary">조회기간</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col col-sm-4">
                                            <select class="form-control" v-model="searchParam.pdateType">
                                                <option key="REFUND" value="REFUND">지시일자</option>
                                                <option key="ORDER" value="ORDER">접수일자</option>
                                            </select>
                                        </div>
                                        <div class="col col-sm-8">
                                            <!-- date select component -->
                                            <DateSelect @state-start-date="(date) => this.searchParam.pfromDate = date"
                                                        @state-end-date="(date) => this.searchParam.ptoDate = date"
                                                        :defStartDate="searchParam.pfromDate"
                                                        :defEndDate="searchParam.ptoDate" />
                                        </div>
                                    </div>
                                </td>
                                <th scope="row"><span class="text-primary">환불상태/환불유형</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col col-sm-4">
                                            <select class="form-control" v-model="searchParam.pstatusCd">
                                                <option value="">전체</option>
                                                <option value="환불지시">환불지시</option>
                                                <option value="환불대기">환불대기</option>
                                                <option value="환불완료">환불완료</option>
                                            </select>
                                        </div>
                                        <div class="col col-sm-4">
                                            <select class="form-control" v-model="searchParam.ppaymentTypeCd">
                                                <option value="">전체</option>
                                                <option value="신용카드">신용카드</option>
                                                <option value="가상계좌">가상계좌</option>
                                            </select>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row"><span class="text-primary">주문번호</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col col-sm-4">
                                            <input type="text" class="form-control" v-model="searchParam.porderNo">
                                        </div>
                                    </div>
                                </td>
                                <th><span class="text-primary" >주문자</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col col-sm-4">
                                            <input type="text" class="form-control" v-model="searchParam.pcustomerName">
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="text-center">
                        <button class="btn btn-primary" @click="onClickSearch">검색</button>
                    </div>
                </div>
            </div>
            <!-- 검색영역 끝-->
            <DataTableVue4
                :columnDef="getColumnDef"
                :rowData="getRowData"
                :isPaging="true"
                :btnList="[{btnName: '엑셀다운로드', onClick: () => { onClickExcel() }}]"
                :rowEditorList="[{
                                  type: 'LINK',
                                  editColumn: 'paymentNo',
                                  onClick: (data) => {
                                    openModalPopup('OrderRefundPopup',{exceptionNo: data.row.exceptionNo})
                                  }
                                },
                                {
                                  type: 'LINK',
                                  editColumn: 'orderNo',
                                  onClick: (data) => {
                                    openModalPopup('OrderInfoPopup',{orderNo: data.row.orderNo})
                                  }
                                }]"
            />

            <!----선택된 주문 영역-->
            <div class="widget has-shadow">
                <div class="widget-body">
                    <table class="table table-bordered totla-info" summary="선택 주문 리스트">
                        <colgroup>
                            <col width="15%">
                            <col width="35">
                            <col width="15%">
                            <col width="35">
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>환불기간</th>
                                <td>{{searchParam.pfromDate}} ~ {{searchParam.ptoDate}}</td>
                                <th>환불건수</th>
                                <td><b class="text-danger">{{numberWithCommas(getSummary.totalCount)}}</b>건</td>
                            </tr>
                            <tr>
                                <th>총환불액</th>
                                <td><b class="text-danger">{{numberWithCommas(getSummary.refundPriceSum)}}</b>원</td>
                                <th>배송비환불액</th>
                                <td><b class="text-danger">{{numberWithCommas(getSummary.refundDeliveryCostSum)}}</b>원</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PageHeader from '@/mixin/pageHeader'
import DateSelect from '@/components/parts/DateSelect'
import DataTableVue4 from '@/components/DataTableVue4'
import OrderInfoPopup from '@/components/popup/OrderInfoPopup'
import OrderRefundPopup from '@/components/popup/OrderRefundPopup'
import XLSX from 'xlsx'

const store = 'orderRefundStore'
export default {
  name: 'orderRefundList',
  mixins: [
    PageHeader({title: '환불 관리', groupName: '주문/배송관리'})
  ],
  components: { DateSelect, DataTableVue4, OrderInfoPopup, OrderRefundPopup },
  data: function () {
    return {
      columnDef: [
        { label: '결제번호', name: 'paymentNo', sort: true },
        { label: '주문번호', name: 'orderNo', sort: true },
        { label: '주문자', name: 'customerName', sort: true },
        { label: '주문일자', name: 'orderDatetime', sort: true, type: 'Date' },
        { label: '환불지시일', name: 'refundRegdate', sort: true, type: 'Date' },
        { label: '환불계좌', name: 'refundAccount' },
        { label: '환불상태', name: 'refundStatus' },
        { label: '환불완료일', name: 'refundDate', sort: true, type: 'Date' },
        { label: '환불유형', name: 'paymentTypeCd' },
        { label: '결제총액', name: 'paymentPriceTotal', sort: true, type: 'Number' },
        { label: '환불금액', name: 'refundPrice', sort: true, type: 'Number' },
        { label: '현금환불', name: 'refundCash', sort: true, type: 'Number' },
        { label: '승인취소', name: 'refundCardCancel', sort: true },
        { label: '배송비', name: 'refundDeliveryCost', type: 'Number' },
        { label: '처리자', name: 'chargeName' }
      ],
      searchParam: {
        pdateType: 'REFUND', // 조회기간구분
        pfromDate: this.$moment().add(-7, 'days').format('YYYY-MM-DD'), // 조회기간from
        ptoDate: this.$moment().format('YYYY-MM-DD'), // 조회기간to
        pstatusCd: '', // 환불상태
        ppaymentTypeCd: '', // 환불유형
        porderNo: '', // 주문번호
        pcustomerName: '' // 주문자
      },

      modalOpenFlag: false, // 모달창 openFlag
      modalPopupId: '', // 오픈할 모달창 id
      modalParamObj: {} // 모달창 호출시 params
    }
  },
  computed: {
    ...mapGetters(store, [
      'getRowData',
      'getSummary'
    ]),
    getColumnDef: function () { return this.columnDef }
  },
  methods: {
    ...mapActions(store, [
      'actionFindOrderRefundList',
      'actionFindOrderRefundSummary'
    ]),
    // 조회버튼 클릭
    onClickSearch () {
      this.actionFindOrderRefundList(this.searchParam)
        .then(res => {
          this.actionFindOrderRefundSummary(this.searchParam)
        })
    },
    // 엑셀다운로드
    onClickExcel () {
      // 컬럼명 변환
      let column = this.getColumnDef
      let rowData = this.getRowData
      let row = []
      rowData.forEach(x => {
        let container = {}
        Object.keys(x).forEach(o => {
          if (column.find(z => z.name === o) !== undefined) {
            container[column.find(z => z.name === o).label] = x[o]
          }
        })
        row.push(container)
      })
      let dataWS = XLSX.utils.json_to_sheet(row)
      let wb = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(wb, dataWS, 'Sheet')
      XLSX.writeFile(wb, this.$moment(new Date()).format('YYYY-MM-DD-h:mm:ss') + '.xlsx')
    },
    // 모달팝업 open
    openModalPopup (id, o) {
      if (id === 'OrderInfoPopup') {
        // 주문서 기본정보 팝업
        this.modalParamObj = o
      }
      if (id === 'OrderRefundPopup') {
        // 환불지시 상세팝업 오픈시
        this.modalParamObj = o
      }
      this.modalPopupId = id
      this.modalOpenFlag = true
    },
    // 모달창 close
    closeModalPopup (data) {
      if (this.modalPopupId === 'OrderInfoPopup') {
        this.onClickSearch()
      } else if (this.modalPopupId === 'OrderRefundPopup') {
        this.onClickSearch()
      }
      this.modalPopupId = ''
      this.modalOpenFlag = false
    },
    // 숫자 콤마
    numberWithCommas (data) {
      if (isNaN(Number.parseInt(data))) {
        return data
      }
      return Number.parseInt(data).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }

  }
}
</script>

<style>

</style>
