<template>
<div id="orderCancelInfoModal" class="modal-mask">
    <div class="modal-dialog modal-item">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">환불지시 상세 정보</h4>
                <button type="button" class="close" @click="$emit('close')">
                    <span aria-hidden="true">×</span>
                    <span class="sr-only">close</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="widget has-shadow">
                    <div class="widget-body">
                        <h5><i class="la la-minus"></i>주문 정보</h5>
                        <table class="table table-bordered totla-info" summary="주문 정보">
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
                                    <th>주문번호</th>
                                    <td>{{orderRefund.orderNo}}</td>
                                    <th>회원ID</th>
                                    <td>{{orderRefund.customerLoginId}}</td>
                                    <th>주문자</th>
                                    <td>{{orderRefund.customerName}}</td>
                                </tr>
                                <tr>
                                    <th>SMS연락처</th>
                                    <td>{{orderRefund.customerPhoneNo}}</td>
                                    <th>주문자 E-mail</th>
                                    <td>{{orderRefund.customerEmail}}</td>
                                    <th>결제수단</th>
                                    <td>{{orderRefund.paymentType}}</td>
                                </tr>
                                <tr>
                                    <th>결제총액</th>
                                    <td>{{numberWithCommas(orderRefund.paymentPriceTotal)}}</td>
                                    <th>주문총액</th>
                                    <td>{{numberWithCommas(orderRefund.orderProductPriceTotal)}}</td>
                                    <th>배송비총액</th>
                                    <td>{{numberWithCommas(orderRefund.deliveryPriceTotal)}}</td>
                                </tr>
                                <tr>
                                    <th>주문일시</th>
                                    <td>{{orderRefund.orderDatetime !== null ? this.$moment(orderRefund.orderDatetime).format('YYYY-MM-DD HH:mm:ss') : ''}}</td>
                                    <th>주문상태</th>
                                    <td>{{orderRefund.orderStatus}}</td>
                                    <th></th>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="widget has-shadow">
                    <div class="widget-body">
                        <h5>
                            <i class="la la-minus"></i>주문 예외 정보
                        </h5>
                        <table class="table table-bordered totla-info" summary="주문 정보">
                            <colgroup>
                                <col width="10%">
                                <col width="40%">
                                <col width="10%">
                                <col width="*">
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th>주문예외번호</th>
                                    <td>{{orderRefund.exceptionNo}}</td>
                                    <th>접수일자</th>
                                    <td>{{orderRefund.exceptionReceiveDate !== null ? this.$moment(orderRefund.exceptionReceiveDate).format('YYYY-MM-DD') : ''}}</td>
                                </tr>
                                <tr>
                                    <th>담당자</th>
                                    <td>{{orderRefund.chargeName}}</td>
                                    <th>처리일자</th>
                                    <td>{{orderRefund.exceptionCompleteDate !== null ? this.$moment(orderRefund.exceptionCompleteDate).format('YYYY-MM-DD') : ''}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="widget has-shadow">
                    <div class="widget-body">
                        <h5><i class="la la-minus"></i>환불 지시 정보</h5>
                        <table class="table table-bordered totla-info" summary="주문 정보">
                            <colgroup>
                                <col width="10%">
                                <col width="40%">
                                <col width="10%">
                                <col width=*>
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th>환불계좌</th>
                                    <td>{{orderRefund.refundAccount}}</td>
                                    <th>환불지시일</th>
                                    <td>{{orderRefund.refundRegdate !== null ? this.$moment(orderRefund.refundRegdate).format('YYYY-MM-DD') : ''}}</td>
                                </tr>
                                <tr>
                                    <th>환불요청 메모</th>
                                    <td colspan="3">{{orderRefund.refundMemo}}</td>
                                    <th></th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>환불상태</th>
                                    <td>{{orderRefund.refundStatus}}</td>
                                    <th>환불완료일</th>
                                    <td>{{orderRefund.refundDate !== null ? this.$moment(orderRefund.refundDate).format('YYYY-MM-DD') : ''}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="widget has-shadow">
                    <div class="widget-body">
                        <h5><i class="la la-minus"></i>환불 완료 처리</h5>
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
                                    <th>환불총액</th>
                                    <td>{{numberWithCommas(orderRefund.refundPrice)}}원</td>
                                    <th>승인취소액</th>
                                    <td>{{numberWithCommas(orderRefund.refundCardCancel)}}원</td>
                                    <th>현금환불액</th>
                                    <td>{{numberWithCommas(orderRefund.refundCash)}}원</td>
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
                    </div>
                    <div class="col-sm-6 d-flex justify-content-end">
                        <button type="button" class="btn btn-primary margin-right-5" @click="onClickRefundComplite">환불완료처리</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>
import { findOrderRefundDetail } from '@/api/order/OrderRefundApi'
export default {
  name: 'orderRefundPopup',
  props: ['modalParamObj'],
  created () {
    findOrderRefundDetail(this.modalParamObj.exceptionNo)
      .then(res => {
        this.orderRefund = res
      })
  },
  data: function () {
    return {
      /* 환불지시 상세정보 */
      orderRefund: {}
    }
  },
  methods: {
    onClickRefundComplite () {
      alert('준비중입니다.')
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
