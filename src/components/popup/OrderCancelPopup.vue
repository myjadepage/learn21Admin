<template>
<div id="orderCancelInfoModal" class="modal-mask">
    <div class="modal-dialog modal-item">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">주문취소/반품접수 정보</h4>
                <button type="button" class="close" @click="$emit('close')">
                    <span aria-hidden="true">×</span>
                    <span class="sr-only">close</span>
                </button>
            </div>
            <div class="modal-body">

                <div class="widget has-shadow">
                    <div class="widget-body">
                        <h5><i class="la la-minus"></i>주문취소/반품 접수 정보</h5>
                        <table class="table table-bordered totla-info" summary="주문취소/반품 접수 정보">
                            <colgroup>
                                <col width="10%">
                                <col width="23%">
                                <col width="10%">
                                <col width="23%">
                                <col width="10%">
                                <col width=*>
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th>주문자</th>
                                    <td>{{orderCancel.orderCustomerName}}</td>
                                    <th>주문접수일자</th>
                                    <td>{{this.$moment(orderCancel.orderDatetime).format('YYYY-MM-DD')}}</td>
                                    <th>주문번호</th>
                                    <td>{{orderCancel.orderNo}}</td>
                                </tr>
                                <tr>
                                    <th>예외처리상태</th>
                                    <td>{{orderCancel.exceptionStatus}}</td>
                                    <th>취소/반품구분</th>
                                    <td>{{orderCancel.exceptionType}}</td>
                                    <th></th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>접수자</th>
                                    <td>{{orderCancel.orderReceiverName}}</td>
                                    <th>접수일자</th>
                                    <td>{{this.$moment(orderCancel.exceptionReceiveDate).format('YYYY-MM-DD')}}</td>
                                    <th>접수경로</th>
                                    <td>{{orderCancel.exceptionReceiveType}}</td>
                                </tr>
                                <tr>
                                    <th>처리메모</th>
                                    <td colspan="5">
                                        <div class="row">
                                            <div class='col-sm-12'>
                                                <textarea class="form-control" v-model="orderCancel.adminMemo"></textarea>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="widget has-shadow">
                    <div class="widget-body">
                        <h5>
                            <i class="la la-minus"></i>주문취소/반품 항목 정보
                            <button type="button" class="btn btn-sm btn-dark" style="float:right; margin-bottom:5px">배송현황보기</button>
                        </h5>
                        <table class="table table-bordered" summary="주문취소/반품 항목 정보">
                            <colgroup>
                                <col width="10%">
                                <col width=*>
                                <col width="5%">
                                <col width="10%">
                                <col width="7%">
                                <col width="10%">
                                <col width="7%">
                                <col width="7%">
                                <col width="7%">
                                <col width="7%">
                                <col width="7%">
                            </colgroup>
                            <thead>
                                <th>상품코드</th>
                                <th>상품명</th>
                                <th>유형</th>
                                <th>공급처</th>
                                <th>접수수량</th>
                                <th>사유</th>
                                <th>양품회수</th>
                                <th>불량회수</th>
                                <th>상태</th>
                                <th>물류구분</th>
                            </thead>
                            <tbody>
                                <tr v-for="(o,i) in orderCancelItemList" :key="i">
                                    <td>{{o.productCode}}</td>
                                    <td class="text-left">{{o.productName}}</td>
                                    <td class="text-center">{{o.productTypeCd}}</td>
                                    <td>{{o.providerName}}</td>
                                    <td>{{o.exceptionItemQty}}</td>
                                    <td>{{o.exceptionReason}}</td>
                                    <td>{{o.exceptionNormalRecallQty}}</td>
                                    <td>{{o.exceptionBrokenRecallQty}}</td>
                                    <td>{{o.exceptionItemType}}</td>
                                    <td>{{o.deliveryTypeCd}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="widget has-shadow">
                    <div class="widget-body">
                        <h5><i class="la la-minus"></i>회수송장 정보</h5>
                        <table class="table table-bordered" summary="회수송장 정보">
                            <colgroup>
                                <col width="10%">
                                <col width="10%">
                                <col width="7%">
                                <col width="10%">
                                <col width=*>
                            </colgroup>
                            <thead>
                                <th>택배사</th>
                                <th>송장번호</th>
                                <th>회수구분</th>
                                <th>회수일자</th>
                                <th>관리메모</th>
                            </thead>
                            <tbody>
                                <tr v-for="(o,i) in ordRecallInvoiceList" :key="i">
                                    <td>{{o.logisticsName}}</td>
                                    <td>{{o.invoiceNo}}</td>
                                    <td class="text-center">{{o.statusCd}}</td>
                                    <td>{{o.dateRecall}}</td>
                                    <td class="text-left">{{o.adminMemo}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="widget has-shadow">
                    <div class="widget-body">
                        <h5><i class="la la-minus"></i>주문취소/반품 처리 정보</h5>
                        <table class="table table-bordered totla-info" summary="주문취소/반품 처리 정보">
                            <colgroup>
                                <col width="13%">
                                <col width="23%">
                                <col width="10%">
                                <col width="23%">
                                <col width="10%">
                                <col width=*>
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th>환불요청메모</th>
                                    <td colspan="5">{{refund.refundMemo}}</td>
                                </tr>
                                <tr>
                                    <th>환불계좌</th>
                                    <td colspan="3">{{refund.refundBank}}({{refund.refundAccount}})</td>
                                    <th>예금주</th>
                                    <td>{{refund.refundAccountUserName}}</td>
                                </tr>
                                <tr>
                                    <th>환불지시일</th>
                                    <td>{{refund.refundRegdate !== null ? this.$moment(refund.refundRegdate).format('YYYY-MM-DD') : ''}}</td>
                                    <th>환불완료일</th>
                                    <td>{{refund.refundDate !== null ? this.$moment(refund.refundDate).format('YYYY-MM-DD') : ''}}</td>
                                    <th>환불상태</th>
                                    <td>{{refund.refundStatus}}</td>
                                </tr>
                                <tr>
                                    <th>현금환불액</th>
                                    <td>{{numberWithCommas(refund.refundCash)}}원</td>
                                    <th>승인취소액</th>
                                    <td>{{numberWithCommas(refund.refundCardCancel)}}원</td>
                                    <th>할인취소액</th>
                                    <td>{{numberWithCommas(refund.refundMileage)}}원</td>
                                </tr>
                                <tr>
                                    <th>고객부담회수비용</th>
                                    <td>{{numberWithCommas(refund.refundCustomerDeliveryCost)}}원</td>
                                    <th>배송비취소액</th>
                                    <td>{{numberWithCommas(refund.refundDeliveryCost)}}원</td>
                                    <th>환불총액</th>
                                    <td>{{numberWithCommas(refund.refundPrice)}}원</td>
                                </tr>
                                <tr>
                                    <th>관리메모</th>
                                    <td colspan="5">
                                        <div class="row">
                                            <div class='col-sm-12'>
                                                <textarea class="form-control" v-model="refund.adminMemo"></textarea>
                                            </div>
                                        </div>
                                    </td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="modal-footer" style="justify-content: center;">
                <div class="row col">
                    <div class="col-sm-6">
                        <button type="button" class="btn btn-outline-dark" data-dismiss="modal" @click="$emit('close')" >닫기</button>
                        <button type="button" class="btn btn-outline-danger" @click="onClickExceptionOrderCancel">접수취소</button>
                        <button type="button" class="btn btn-outline-primary" @click="onClickRecovery">회수지시</button>
                    </div>
                    <div class="col-sm-6 d-flex justify-content-end">
                        <button type="button" class="btn btn-primary margin-right-5" @click="onClickAdminMemo">메모저장</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>
import { findOrderCancelDetail, deleteExceptionOrderCancel,
  saveRecovery, saveRefundAdminMemo } from '@/api/order/OrderCancelApi'

export default {
  name: 'orderCancelPopup',
  props: ['modalParamObj'],
  created () {
    // 주문서 기본정보 조회
    findOrderCancelDetail(this.modalParamObj.exceptionNo)
      .then(res => {
        this.orderCancel = res.orderCancelMainVO
        this.orderCancelItemList = res.orderCancelDetailItemVOList
        this.ordRecallInvoiceList = res.ordRecallInvoiceList
        this.refund = res.refund
      })
  },
  data: function () {
    return {
      /* 주문취소/반품 접수정보 */
      orderCancel: {},
      /* 주문취소/반품 항목정보 */
      orderCancelItemList: [],
      /* 회수송장 정보 */
      ordRecallInvoiceList: [],
      /* 환불지시 정보 */
      refund: {}
    }
  },
  methods: {
    // 접수취소 버튼
    onClickExceptionOrderCancel () {
      if (this.orderCancel.exceptionStatus !== '접수') {
        alert('예외처리상태가 "접수" 일때 접수취소가 가능합니다.')
        return
      }
      if (!confirm('해당 건을 접수취소 처리 하시겠습니까?')) {
        return
      }
      deleteExceptionOrderCancel(this.orderCancel)
        .then(res => {
          alert(res.message)
          this.$emit('close')
        })
    },
    // 회수지시 버튼
    onClickRecovery () {
      if (this.orderCancel.exceptionStatus !== '접수') {
        alert('예외처리상태가 "접수" 일때 회수지시가 가능합니다.')
        return
      }
      if (this.orderCancel.exceptionType !== '반품') {
        alert('반품건만 회수지시가 가능합니다.')
        return
      }
      if (!confirm('회수지시 처리 하시겠습니까?')) {
        return
      }
      saveRecovery(this.orderCancel)
        .then(res => {
          alert(res.message)
          findOrderCancelDetail(this.modalParamObj.exceptionNo)
            .then(res => {
              this.orderCancel = res.orderCancelMainVO
              this.orderCancelItemList = res.orderCancelDetailItemVOList
              this.ordRecallInvoiceList = res.ordRecallInvoiceList
              this.refund = res.refund
            })
        })
    },
    // 메모저장 버튼
    onClickAdminMemo () {
      if (!confirm('저장 하시겠습니까?')) {
        return
      }
      saveRefundAdminMemo(this.refund)
        .then(res => {
          alert(res.message)
          findOrderCancelDetail(this.modalParamObj.exceptionNo)
            .then(res => {
              this.orderCancel = res.orderCancelMainVO
              this.orderCancelItemList = res.orderCancelDetailItemVOList
              this.ordRecallInvoiceList = res.ordRecallInvoiceList
              this.refund = res.refund
            })
        })
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
