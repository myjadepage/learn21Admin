<template>
<div id="orderCancelApplyModal" class="modal-mask">
    <div class="modal-dialog modal-item">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">주문취소/반품 접수</h4>
                <button type="button" class="close" @click="$emit('close')">
                    <span aria-hidden="true">×</span>
                    <span class="sr-only">close</span>
                </button>
            </div>
            <!-- modalPopup -->
            <DaumPostPopup v-if="modalOpenFlag && modalPopupId === 'DaumPostPopup'"
                           title="주소검색"
                           @close="closeModalPopup"
                           @get-post-info="closeModalPopup" />
            <div class="modal-body">
                <div class="widget has-shadow">
                    <div class="widget-body">
                        <h5><i class="la la-minus"></i>주문정보</h5>
                        <table class="table table-bordered totla-info" summary="주문정보">
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
                                    <th>주문번호/경로</th>
                                    <td>{{ordOrder.orderNo}}/{{ordOrder.orderChannel}}</td>
                                    <th>회원ID</th>
                                    <td>{{ordOrder.customerLoginId}}</td>
                                    <th>주문자</th>
                                    <td>{{ordOrder.customerName}}</td>
                                </tr>
                                <tr>
                                    <th>SMS연락처</th>
                                    <td>{{ordOrder.customerPhoneNo}}</td>
                                    <th>주문자 E-mail</th>
                                    <td>{{ordOrder.customerEmail}}</td>
                                    <th>결제수단</th>
                                    <td>{{ordOrder.paymentType}}</td>
                                </tr>
                                <tr>
                                    <th>결제총액</th>
                                    <td>{{numberWithCommas(ordOrder.paymentPriceTotal)}}</td>
                                    <th>주문총액</th>
                                    <td>{{numberWithCommas(ordOrder.orderProductPriceTotal)}}</td>
                                    <th>배송비총액</th>
                                    <td>{{numberWithCommas(ordOrder.deliveryPriceTotal)}}</td>
                                </tr>
                                <tr>
                                    <th>주문일시</th>
                                    <td>{{this.$moment(ordOrder.orderDatetime).format('YYYY-MM-DD HH:mm:ss')}}</td>
                                    <th>주문상태</th>
                                    <td>{{ordOrder.orderStatus}}</td>
                                    <th></th>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="widget has-shadow">
                    <div class="widget-body">
                        <h5><i class="la la-minus"></i>주문 상품 정보</h5>
                        <table class="table table-bordered" summary="주문상품정보">
                            <colgroup>
                                <col width="3%">
                                <col width="5%">
                                <col width=*>
                                <col width="7%">
                                <col width="10%">
                                <col width="10%">
                                <col width="5%">
                                <col width="10%">
                                <col width="12%">
                                <col width="10%">
                                <col width="10%">
                            </colgroup>
                            <thead>
                                <th>
                                    <div class="styled-checkbox">
                                        <input type="checkbox" name="checkbox" id="chkAll" @change="(e) => {
                                            this.ordOrderItemList.map(x => x.chk = e.target.checked)
                                        }">
                                        <label for="chkAll"></label>
                                    </div>
                                </th>
                                <th>상품코드</th>
                                <th>품목</th>
                                <th>상품유형</th>
                                <th>공급처</th>
                                <th>판매가</th>
                                <th>수량</th>
                                <th>환불가</th>
                                <th>사유</th>
                                <th>회수유형</th>
                                <th>배송상태</th>
                            </thead>
                            <tbody>
                                <tr v-for="(o, i) in ordOrderItemList" :key="i">
                                    <td class="text-center">
                                        <div class="styled-checkbox" v-show="o.exceptionItemType === '' || o.exceptionItemType === null">
                                            <input type="checkbox" name="checkbox" :id="'chk'+i" v-model="o.chk">
                                            <label :for="'chk'+i"></label>
                                        </div>
                                    </td>
                                    <td>{{o.productCode}}</td>
                                    <td class="text-left">{{o.productName}}</td>
                                    <td>{{o.productTypeCd}}</td>
                                    <td class="text-left">{{o.providerName}}</td>
                                    <td class="text-right">{{numberWithCommas(o.unitPrice)}}</td>
                                    <td>{{o.orderQty}}</td>
                                    <td v-if="o.exceptionItemType === '' || o.exceptionItemType === null">
                                        <input type="text" class="form-control text-right" v-model="o.exceptionItemRefundPrice">
                                    </td>
                                    <td v-else>{{numberWithCommas(o.exceptionItemRefundPrice)}}</td>
                                    <td v-if="o.exceptionItemType === '' || o.exceptionItemType === null">
                                        <select class="form-control" v-model="o.exceptionReason">
                                            <option value=null>선택하세요</option>
                                            <option value="오배송">오배송</option>
                                            <option value="취소">취소</option>
                                            <option value="고객변심">고객변심</option>
                                            <option value="배송지연">배송지연</option>
                                        </select>
                                    </td>
                                    <td v-else>{{o.exceptionReason}}</td>
                                    <td>{{o.exceptionItemType}}</td>
                                    <td><div v-show="o.exceptionItemType === '' || o.exceptionItemType === null">{{o.deliveryStatus}}</div></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="widget has-shadow">
                    <div class="widget-body">
                        <h5><i class="la la-minus"></i>취소반품신청 정보</h5>
                        <table class="table table-bordered" summary="취소반품신청 정보">
                            <colgroup>
                                <col width="15%">
                                <col width="35%">
                                <col width="15%">
                                <col width="35%">
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th>취소/반품 구분</th>
                                    <td colspan="3">
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <select class="form-control" v-model="ordRefund.exceptionType">
                                                    <option>취소</option>
                                                    <option>반품</option>
                                                </select>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th>환불계좌</th>
                                    <td>
                                        <input type="text" class="form-control" v-model="ordRefund.refundAccount">
                                    </td>
                                    <th>환불계좌은행</th>
                                    <td>
                                        <input type="text" class="form-control" v-model="ordRefund.refundBank">
                                    </td>
                                </tr>
                                <tr>
                                    <th>환불예금주</th>
                                    <td>
                                        <input type="text" class="form-control" v-model="ordRefund.accountUserName">
                                    </td>
                                    <th>고객부담 회수비용</th>
                                    <td>
                                        <div class="row">
                                            <div class="col-sm-5">
                                                <div class="input-group">
                                                    <input type="text" class="form-control" v-model="ordRefund.customerChargeDeliveryCost">
                                                    <span>원</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th>환불요청메모</th>
                                    <td>
                                        <textarea class="form-control" v-model="ordRefund.refundMemo"></textarea>
                                    </td>
                                    <th>처리메모</th>
                                    <td>
                                        <textarea class="form-control" v-model="ordRefund.adminMemo"></textarea>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="widget has-shadow">
                    <div class="widget-body">
                        <h5><i class="la la-minus"></i>회수 정보</h5>
                        <table class="table table-bordered totla-info" summary="회수 정보">
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
                                    <th>이름</th>
                                    <td><input type="text" class="form-control" v-model="orderDelivery.receiverName"></td>
                                    <th>휴대폰번호</th>
                                    <td><input type="text" class="form-control" v-model="orderDelivery.receiverPhoneNo"></td>
                                    <th>전화번호</th>
                                    <td><input type="text" class="form-control" v-model="orderDelivery.receiverTelNo"></td>
                                </tr>
                                <tr>
                                    <th>배송지주소</th>
                                    <td colspan="5">
                                        <div class="row">
                                            <div class="col col-sm-2">
                                                <input type="text" class="form-control" v-model="orderDelivery.deliveryPostalNo">
                                            </div>
                                            <div class="col col-sm-2">
                                                <button class="btn btn-sm btn-secondary input-btn-util" @click="() => {openModalPopup('DaumPostPopup')}">주소검색</button>
                                            </div>
                                        </div>
                                        <div class="row  d-flex justify-content-start margin-top-5">
                                            <div class="col col-sm-5">
                                                <input type="text" class="form-control" v-model="orderDelivery.deliveryAddr1">
                                            </div>
                                            <div class="col col-sm-4">
                                                <input type="text" class="form-control" v-model="orderDelivery.deliveryAddr2">
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th>요청사항</th>
                                    <td colspan="5">
                                        <textarea class="form-control" v-model="orderDelivery.deliveryMemo"></textarea>
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
                        <button type="button" class="btn btn-outline-dark" @click="$emit('close')">닫기</button>
                    </div>
                    <div class="col-sm-6 d-flex justify-content-end">
                        <button type="button" class="btn btn-primary margin-right-5" @click="onClickOrderCancel">주문취소/반품접수</button>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>
import { findOrderCancelDetailOrder, saveOrderCancelDetailOrder } from '@/api/order/OrderCancelApi'
import DaumPostPopup from '@/components/popup/DaumPostPopup'
export default {
  components: { DaumPostPopup },
  name: 'orderCancelApplyPopup',
  props: ['modalParamObj'],
  created () {
    // 주문취소/반품접수
    findOrderCancelDetailOrder(this.modalParamObj.orderNo)
      .then(res => {
        this.ordOrder = res.ordOrder
        this.ordOrderItemList = res.ordOrderItemList.map(x => {
          x.chk = false
          x.exceptionItemRefundPrice = x.exceptionItemRefundPrice === null ? parseInt(x.unitPrice) : x.exceptionItemRefundPrice
          return x
        })
      })
  },
  data: function () {
    return {
      /* 주문취소/반품 접수정보 */
      ordOrder: {},
      /* 주문취소/반품 항목정보 */
      ordOrderItemList: [],
      /* 환불지시 정보 */
      ordRefund: {
        exceptionType: '취소', /* 취소/반품구분 */
        refundAccount: '', /* 환불계좌번호 */
        accountUserName: '', /* 환불계좌예금주명 */
        refundBank: '', /* 환불계좌은행명 */
        customerChargeDeliveryCost: '', /* 고객부담회수비용 (사용안함) */
        refundMemo: '', /* 환불메모 */
        adminMemo: '' /* 관리자메모 */
      },
      /* 회수 정보 */
      orderDelivery: {
        receiverName: '', /* 수취인명 */
        receiverTelNo: '', /* 수취인연락처 */
        receiverPhoneNo: '', /* 수취인휴대폰 */
        deliveryPostalNo: '', /* 배송지우편번호 */
        deliveryAddr1: '', /* 배송지주소1 */
        deliveryAddr2: '', /* 배송지주소2 */
        deliveryMemo: '' /* 배송메모 */
      },
      // 모달
      modalOpenFlag: false, // 모달창 openFlag
      modalPopupId: '' // 오픈할 모달창 id
    }
  },
  methods: {
    // 주문취소/반품 접수
    onClickOrderCancel () {
      let orderItemList = this.ordOrderItemList.filter(x => x.chk && (x.exceptionItemType === null || x.exceptionItemType === ''))
      if (orderItemList.length === 0) {
        alert('주문취소/반품접수 할 상품을 선택하세요.')
        return
      }
      if (this.ordRefund.exceptionType === '취소' && orderItemList.filter(x => ['상품준비중', '배송지시'].indexOf(x.deliveryStatus) === -1).length > 0) {
        if (this.ordRefund.refundAccount.trim() === '') {
          alert('배송상태가 "상품준비중" / "배송지시" 일때만 주문취소가 가능합니다.')
          return
        }
      }
      if (this.ordRefund.exceptionType === '반품' && orderItemList.filter(x => ['배송완료'].indexOf(x.deliveryStatus) === -1).length > 0) {
        if (this.ordRefund.refundAccount.trim() === '') {
          alert('배송상태가 "배송완료" 일때만 반품접수가 가능합니다.')
          return
        }
      }
      if (this.ordRefund.refundBank.trim() === '') {
        alert('환불계좌은행을 입력하세요.')
        return
      }
      if (this.ordRefund.accountUserName.trim() === '') {
        alert('환불예금주를 입력하세요.')
        return
      }
      if (this.orderDelivery.receiverName.trim() === '') {
        alert('이름을 입력하세요.')
        return
      }
      if (this.orderDelivery.deliveryPostalNo.trim() === '') {
        alert('배송지주소를 입력하세요.')
        return
      }
      if (!confirm('주문취소/반품 접수처리 하시겠습니까?')) {
        return
      }
      let paramObj = {}
      paramObj.ordOrder = this.ordOrder
      paramObj.ordOrderItemList = orderItemList
      // 환불지시 정보
      paramObj.exceptionType = this.ordRefund.exceptionType
      paramObj.refundAccount = this.ordRefund.refundAccount
      paramObj.accountUserName = this.ordRefund.accountUserName
      paramObj.refundBank = this.ordRefund.refundBank
      paramObj.customerChargeDeliveryCost = this.ordRefund.customerChargeDeliveryCost
      paramObj.refundMemo = this.ordRefund.refundMemo
      paramObj.adminMemo = this.ordRefund.adminMemo
      // 회수 정보(배송정보)
      paramObj.receiverName = this.orderDelivery.receiverName
      paramObj.receiverTelNo = this.orderDelivery.receiverTelNo
      paramObj.receiverPhoneNo = this.orderDelivery.receiverPhoneNo
      paramObj.deliveryPostalNo = this.orderDelivery.deliveryPostalNo
      paramObj.deliveryAddr1 = this.orderDelivery.deliveryAddr1
      paramObj.deliveryAddr2 = this.orderDelivery.deliveryAddr2
      paramObj.deliveryMemo = this.orderDelivery.deliveryMemo

      saveOrderCancelDetailOrder(paramObj)
        .then(res => {
          alert(res.message)
          // 재조회
          findOrderCancelDetailOrder(this.modalParamObj.orderNo)
            .then(res => {
              this.ordOrder = res.ordOrder
              this.ordOrderItemList = res.ordOrderItemList.map(x => {
                x.chk = false
                x.exceptionItemRefundPrice = x.exceptionItemRefundPrice === null ? parseInt(x.unitPrice) : x.exceptionItemRefundPrice
                return x
              })
            })
        })
    },
    // 모달팝업 open
    openModalPopup (id, o) {
      if (id === 'DaumPostPopup') {
        // 주소검색
        this.modalPopupId = 'DaumPostPopup'
      }
      this.modalOpenFlag = true
    },
    // 모달창 close
    closeModalPopup (data) {
      if (this.modalPopupId === 'DaumPostPopup' && data !== undefined) {
        this.orderDelivery.deliveryPostalNo = data.zonecode.trim()
        this.orderDelivery.deliveryAddr1 = data.address.trim()
        this.orderDelivery.deliveryAddr2 = ''
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
