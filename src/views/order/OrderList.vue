<template>
  <div class="container-fluid">
    <div class="row">
      <!-- Header -->
      <PageHeader :pageCurrentInfo="pageCurrentInfo" />
      <!-- modalPopup -->
      <OrderInfoPopup v-if="modalOpenFlag && modalPopupId === 'OrderInfoPopup'"
                      :modalParamObj="modalParamObj"
                      @close="closeModalPopup" />
      <div class="col-xl-12">
            <!-- 검색영역 시작-->
            <div class="widget has-shadow">
                <div class="widget-body">
                    <table class="table table-bordered" summary="주문 검색하기">
                        <colgroup>
                            <col width="12%">
                            <col width="38%">
                            <col width="12%">
                            <col width="38%">
                        </colgroup>
                        <tbody>
                            <tr>
                                <th scope="row">고객</th>
                                <td>
                                    <div class="row">
                                        <div class="col col-sm-3">
                                            <select class="form-control" v-model="searchParam.pcustomerNameType">
                                                <option key="ORDER" value="ORDER">주문자</option>
                                                <option key="RECEIVER" value="RECEIVER">수취인</option>
                                                <option key="STUDENTID" value="STUDENTID">학생ID</option>
                                            </select>
                                        </div>
                                        <div class="col col-sm-4">
                                            <input type="text" class="form-control" v-model="searchParam.pcustomerName" placeholder="검색어 입력">
                                        </div>
                                    </div>
                                </td>
                                <th>연락처</th>
                                <td>
                                    <div class="row">
                                        <div class="col col-sm-3">
                                            <select class="form-control" v-model="searchParam.ptelNumberType">
                                                <option key="ORDER" value="ORDER">주문자</option>
                                                <option key="RECEIVER" value="RECEIVER">수취인</option>
                                            </select>
                                        </div>
                                        <div class="col col-sm-4">
                                            <input type="text" class="form-control" v-model="searchParam.ptelNumber" placeholder="검색어 입력">
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">주문경로/주문번호</th>
                                <td colspan="3">
                                    <div class="row">
                                        <div class="col col-sm-3">
                                            <select class="form-control" v-model="searchParam.porderChannel">
                                                <option key="" value="">전체</option>
                                                <option key="COBS" value="COBS">COBS</option>
                                                <option key="FRONT" value="FRONT">FRONT</option>
                                                <option key="ALLM" value="ALLM">ALLM</option>
                                            </select>
                                        </div>
                                        <div class="col col-sm-4">
                                            <input type="text" class="form-control" v-model="searchParam.porderNo" placeholder="검색어 입력">
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">조회기간</th>
                                <td>
                                    <div class="row">
                                        <div class="col col-sm-3">
                                            <select class="form-control" v-model="searchParam.pdateType">
                                                <option key="ORDER" value="ORDER">주문일자</option>
                                                <option key="PAYMENT" value="PAYMENT">결제완료일자</option>
                                            </select>
                                        </div>
                                        <div class="col">
                                            <!-- date select component -->
                                            <DateSelect @state-start-date="(date) => this.searchParam.pfromDate = date"
                                                        @state-end-date="(date) => this.searchParam.ptoDate = date"
                                                        :defStartDate="searchParam.pfromDate"
                                                        :defEndDate="searchParam.ptoDate" />
                                        </div>
                                    </div>
                                </td>
                                <th>결제수단/주문상태</th>
                                <td>
                                    <div class="row">
                                        <div class="col col-sm-3">
                                            <select class="form-control" v-model="searchParam.ppaymentType">
                                                <option key="" value="">전체</option>
                                                <option key="신용카드" value="신용카드">신용카드</option>
                                                <option key="가상계좌" value="가상계좌">가상계좌</option>
                                            </select>
                                        </div>
                                        <div class="col col-sm-3">
                                            <select class="form-control" v-model="searchParam.porderStatus">
                                                <option key="" value="">전체</option>
                                                <option key="주문접수" value="주문접수">주문접수</option>
                                                <option key="주문취소" value="주문취소">주문취소</option>
                                                <option key="입금대기" value="입금대기">입금대기</option>
                                                <option key="결제완료" value="결제완료">결제완료</option>
                                            </select>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">회원구분/학원구분</th>
                                <td>
                                    <div class="row">
                                        <div class="col col-sm-3">
                                            <select class="form-control" v-model="searchParam.pcustomerType">
                                                <option key="" value="">전체</option>
                                                <option key="회원" value="회원">회원</option>
                                                <option key="비회원" value="비회원">비회원</option>
                                            </select>
                                        </div>
                                        <div class="col col-sm-3">
                                            <select class="form-control" v-model="searchParam.prctCode">
                                                <option key="" value="">전체</option>
                                                <option v-for="(o,i) in getRctCodeList" :key="i" :value="o.fuCode">{{o.fuName}}</option>
                                            </select>
                                        </div>
                                    </div>
                                </td>
                                <th scope="row">배송구분</th>
                                <td>
                                    <div class="row">
                                        <div class="col col-sm-3">
                                            <select class="form-control" v-model="searchParam.pdeliveryGubun">
                                                <option key="" value="">전체</option>
                                                <option key="0" value="0">가맹점</option>
                                                <option key="1" value="1">택배</option>
                                            </select>
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
                                <th>주문기간</th>
                                <td>{{searchParam.pfromDate}} ~ {{searchParam.ptoDate}}</td>
                                <th>총주문금액</th>
                                <td><b class="text-danger">{{numberWithCommas(getOrderSummary.orderProductPriceTotalSum)}}</b>원</td>
                            </tr>
                            <tr>
                                <th>배송비총액</th>
                                <td><b class="text-danger">{{numberWithCommas(getOrderSummary.deliveryPriceTotalSum)}}</b>원</td>
                                <th>수수료총액</th>
                                <td>{{numberWithCommas(getOrderSummary.marginPriceTotalSum)}}원</td>

                            </tr>
                            <tr>
                                <th>신용카드결제(건수)</th>
                                <td>{{numberWithCommas(getOrderSummary.creditPaymentTotal)}}원({{numberWithCommas(getOrderSummary.creditTotal)}}건)</td>
                                <th>가상계좌입금(건수)</th>
                                <td>결제완료 : {{numberWithCommas(getOrderSummary.virtualPaymentTotal)}}원
                                    ({{numberWithCommas(getOrderSummary.virtualTotal)}}건),
                                    입금대기:{{numberWithCommas(getOrderSummary.waitVirtualPaymentTotal)}}원
                                    ({{numberWithCommas(getOrderSummary.waitVirtualTotal)}}건)</td>
                            </tr>
                            <tr>
                                <th>총결제금액</th>
                                <td><b class="text-danger">{{numberWithCommas(getOrderSummary.paymentTotalSum)}}</b>원</td>
                                <th></th>
                                <td></td>
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
import OrderInfoPopup from '@/components/popup/OrderInfoPopup'
import DataTableVue4 from '@/components/DataTableVue4'
import PageHeader from '@/mixin/pageHeader'
import DateSelect from '@/components/parts/DateSelect'
import XLSX from 'xlsx'

const store = 'orderStore'
export default {
  name: 'orderList',
  mixins: [
    PageHeader({title: '주문서조회', groupName: '주문/배송관리'})
  ],
  components: {
    DataTableVue4,
    OrderInfoPopup,
    DateSelect
  },
  created () {
    this.actionFindFranchiseeList() // 가맹점(학원)
  },
  data: function () {
    return {
      columnDef: [
        { label: '주문번호', name: 'orderNo', sort: true },
        { label: '주문자', name: 'customerName', sort: true },
        { label: '수취인', name: 'receiverName', sort: true },
        { label: '주문상태', name: 'orderStatus', sort: true },
        { label: '주문품목', name: 'orderProductSummary', sort: true, row_classes: 'table-text-left' },
        { label: '주문총액', name: 'orderProductPriceTotal', sort: true, row_classes: 'table-text-right', type: 'Number' },
        { label: '배송비', name: 'deliveryPriceTotal', sort: true, row_classes: 'table-text-right', type: 'Number' },
        { label: '결제총액', name: 'paymentPriceTotal', sort: true, row_classes: 'table-text-right', type: 'Number' },
        { label: '결제수단', name: 'paymentType', sort: true },
        { label: '주문일', name: 'orderDatetime', type: 'Date' },
        { label: '결재완료일', name: 'datePaid', type: 'Date' },
        { label: '학원명', name: 'rctName', sort: true, row_classes: 'table-text-left' }
      ],
      searchParam: {
        pcustomerNameType: 'ORDER', // 고객타입
        pcustomerName: '', // 고객명
        ptelNumberType: 'ORDER', // 연락처타입
        ptelNumber: '', // 연락처
        porderChannel: '', // 주문경로
        porderNo: '', // 주문번호
        pdateType: 'ORDER', // 조회기간타입
        pfromDate: this.$moment().add(-7, 'days').format('YYYY-MM-DD'), // 조회기간from
        ptoDate: this.$moment().format('YYYY-MM-DD'), // 조회기간to
        pcustomerType: '', // 회원구분
        prctCode: '', // 학원구분
        porderStatus: '', // 주문상태
        ppaymentType: '', // 결제수단
        pdeliveryGubun: '' // 배송구분
      },

      modalOpenFlag: false, // 모달창 openFlag
      modalPopupId: '', // 오픈할 모달창 id
      modalParamObj: {} // 모달창 호출시 params
    }
  },
  computed: {
    ...mapGetters(store, [
      'getRowData',
      'getOrderSummary',
      'getRctCodeList'
    ]),
    getColumnDef: function () { return this.columnDef }
  },
  methods: {
    ...mapActions(store, [
      'actionFindOrderList',
      'actionFindOrderSummary',
      'actionFindFranchiseeList'
    ]),
    // 조회버튼 클릭
    onClickSearch () {
      // 주문서 조회
      this.actionFindOrderList(this.searchParam)
        .then(res => {
          this.actionFindOrderSummary(this.searchParam)
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
        this.modalPopupId = 'OrderInfoPopup'
        this.modalParamObj = o
      }
      this.modalOpenFlag = true
    },
    // 모달창 close
    closeModalPopup (data) {
      if (this.modalPopupId === 'OrderInfoPopup') {

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
