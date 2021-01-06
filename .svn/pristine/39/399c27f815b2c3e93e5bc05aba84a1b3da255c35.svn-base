<template>
<div id="orderInfoModal" class="modal-mask">
    <div class="modal-dialog modal-item">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">주문서 정보: {{ modalParamObj.orderNo }}</h4>
                <button type="button" class="close"  @click="$emit('close')">
                    <span aria-hidden="true">×</span>
                    <span class="sr-only">close</span>
                </button>
            </div>
            <!-- modalPopup -->
            <DaumPostPopup v-if="modalOpenFlag && modalPopupId === 'DaumPostPopup'"
                            title="주소검색"
                            @close="closeModalPopup"
                            @get-post-info="closeModalPopup" />
            <OrderCancelApplyPopup v-if="modalOpenFlag && modalPopupId === 'OrderCancelApplyPopup'"
                            title="취소/반품 접수"
                            :modalParamObj="modalParamObj"
                            @close="closeModalPopup" />
            <div class="modal-body">
                <div class="widget no-margin">
                    <div class="widget-header">
                        <ul class="nav nav-tabs nav-fill" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link  active" data-toggle="tab" href="#tab-order-1" role="tab" aria-controls="tab-order-1" aria-selected="true">주문서기본정보</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#tab-order-2" role="tab" aria-controls="tab-order-2" aria-selected="false">배송정보</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#tab-order-3" role="tab" aria-controls="tab-order-3" aria-selected="false">주문예외정보</a>
                            </li>
                            <!-- <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#tab-order-4" role="tab" aria-controls="tab-order-4" aria-selected="false">SMS전송정보</a>
                            </li> -->
                        </ul>
                    </div>

                    <div class="widget-body tab-content">
                        <!-- 주문서기본정보 tab -->
                        <div class="tab-pane show active" id="tab-order-1" role="tabpanel">
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
                                        <td>{{getOrderDetail.orderNo}}/{{getOrderDetail.orderChannel}}</td>
                                        <th>회원ID</th>
                                        <td>{{getOrderDetail.customerLoginId}}</td>
                                        <th>주문자</th>
                                        <td>{{getOrderDetail.customerName}}</td>
                                    </tr>
                                    <tr>
                                        <th>SMS연락처</th>
                                        <td>{{getOrderDetail.customerPhoneNo}}</td>
                                        <th>주문자 E-mail</th>
                                        <td>{{getOrderDetail.customerEmail}}</td>
                                        <th>결제수단</th>
                                        <td>{{getOrderDetail.paymentType}}</td>
                                    </tr>
                                    <tr>
                                        <th>결제총액</th>
                                        <td>{{numberWithCommas(getOrderDetail.paymentPriceTotal)}}</td>
                                        <th>주문총액</th>
                                        <td>{{numberWithCommas(getOrderDetail.orderProductPriceTotal)}}</td>
                                        <th>배송비총액</th>
                                        <td>{{numberWithCommas(getOrderDetail.deliveryPriceTotal)}}</td>
                                    </tr>
                                    <tr>
                                        <th>주문일시</th>
                                        <td>{{convertDate(getOrderDetail.orderDatetime, 'YYYY-MM-DD HH:mm:ss')}}</td>
                                        <th>주문상태</th>
                                        <td>{{getOrderDetail.orderStatus}}</td>
                                        <th></th>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>

                            <div class='em-separator separator-dotted'></div>

                            <h5><i class="la la-minus"></i>주문 품목 정보</h5>
                            <table class="table table-bordered" summary="주문품목정보">
                                <colgroup>
                                    <col width="10%">
                                    <col width=*>
                                    <col width="10%">
                                    <col width="30%">
                                    <col width="10%">
                                    <col width="10%">
                                </colgroup>
                                <thead>
                                    <th>상품코드</th>
                                    <th>주문상품</th>
                                    <th>상품구분</th>
                                    <th>공급처</th>
                                    <th>판매가</th>
                                    <th>수량</th>
                                </thead>
                                <tbody>
                                    <tr v-for="(o, i) in getOrderItemList" :key="i">
                                        <td>{{o.productCode}}</td>
                                        <td class="text-left">{{o.productName}}</td>
                                        <td>{{o.productTypeCd}}</td>
                                        <td class="text-left">{{o.providerName}}</td>
                                        <td class="text-right">{{numberWithCommas(o.unitPrice)}}</td>
                                        <td>{{o.orderQty}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- 배송정보 tab -->
                        <div class="tab-pane" id="tab-order-2" role="tabpanel">
                            <h5><i class="la la-minus"></i>배송지정보</h5>
                            <table class="table table-bordered totla-info" summary="배송지정보">
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
                                        <th>배송지확인</th>
                                        <td>
                                            <div class="col-sm-12 d-flex align-items-center">
                                                <div class="styled-radio">
                                                    <input type="radio" name="radio" id="radCodeAll-1" value="0" v-model="getDeliveryOrder.deliveryGubun" readonly>
                                                    <label for="radCodeAll-1">가맹점</label>
                                                </div>
                                                <div class="styled-radio">
                                                    <input type="radio" name="radio" id="radCodeAll-2" value="1" v-model="getDeliveryOrder.deliveryGubun" readonly>
                                                    <label for="radCodeAll-2">택배</label>
                                                </div>
                                            </div>
                                        </td>
                                        <th>수취인명</th>
                                        <td>{{getDeliveryOrder.receiverName}}</td>
                                        <th>수취인연락처</th>
                                        <td>{{getDeliveryOrder.receiverTelNo}}</td>
                                    </tr>
                                    <tr>
                                        <th>배송지주소</th>
                                        <td colspan="5">
                                            <div class="row">
                                                <div class="col-sm-10">
                                                    <div class="row">
                                                        <div class="col col-sm-2">
                                                            <input type="text" class="form-control" placeholder="" v-model="deliveryPostalNo">
                                                        </div>
                                                        <div class="col col-sm-2">
                                                            <button class="btn btn-sm btn-secondary input-btn-util" @click="() => {openModalPopup('DaumPostPopup')}">주소검색</button>
                                                        </div>
                                                    </div>
                                                    <div class="row  d-flex justify-content-start margin-top-5">
                                                        <div class="col col-sm-5">
                                                            <input type="text" class="form-control" v-model="deliveryAddr1">
                                                        </div>
                                                        <div class="col col-sm-4">
                                                            <input type="text" class="form-control" v-model="deliveryAddr2">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-2 d-flex justify-content-end align-items-center">
                                                    <button type="button" class="btn btn-sm btn-outline-primary" @click="onClickSaveAddrDelivery">배송지 정보변경</button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>배송 메모</th>
                                        <td colspan="5">
                                            <div class="row">
                                                <div class="col-sm-10">
                                                    <textarea class="form-control" v-model="getDeliveryOrder.deliveryMemo" readonly></textarea>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <div class='em-separator separator-dotted'></div>

                            <h5><i class="la la-minus"></i>배송 지시 정보</h5>
                            <table class="table table-bordered totla-info" summary="배송지시정보">
                                <colgroup>
                                    <col width="10%">
                                    <col width="30%">
                                    <col width="10%">
                                    <col width="15%">
                                    <col width="15%">
                                    <col width=*>
                                </colgroup>
                                <thead>
                                    <th>상품코드</th>
                                    <th>주문상품</th>
                                    <th>상품구분</th>
                                    <th>공급처</th>
                                    <th>판매가</th>
                                    <th>수량</th>
                                </thead>
                                <tbody>
                                    <tr v-for="(o,i) in getDeliveryOrderItemList" :key="i">
                                        <td class="text-center">{{o.productCode}}</td>
                                        <td>{{o.productName}}</td>
                                        <td class="text-center">{{o.productTypeCd}}</td>
                                        <td>{{o.providerName}}</td>
                                        <td class="text-right">{{o.unitPrice}}</td>
                                        <td class="text-right">{{o.orderQty}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- 주문예외정보 tab -->
                        <div class="tab-pane" id="tab-order-3" role="tabpanel">
                            <h5><i class="la la-minus"></i>주문예외정보</h5>
                            <table class="table table-bordered" summary="주문예외정보">
                                <colgroup>
                                </colgroup>
                                <thead>
                                    <th>예외유형</th>
                                    <th>접수일자</th>
                                    <th>처리완료일자</th>
                                    <th>처리상태</th>
                                    <th>처리자</th>
                                    <th>관리메모</th>
                                    <th>택배사</th>
                                    <th>송장번호</th>
                                    <th>회수일자</th>
                                    <th>회수관리메모</th>
                                    <th>상품코드</th>
                                    <th>주문상품</th>
                                    <th>상품구분</th>
                                    <th>공급처</th>
                                    <th>예외수량</th>
                                    <th>양품회수</th>
                                    <th>불량회수</th>
                                    <th>LOSS비용</th>
                                </thead>
                                <tbody>
                                    <tr v-for="(o,i) in getOrderExceptionDetail" :key="i">
                                        <td>{{o.exceptionType}}</td>
                                        <td>{{convertDate(o.exceptionReceiveDate, 'YYYY-MM-DD')}}</td>
                                        <td class="text-center">{{convertDate(o.exceptionCompleteDate, 'YYYY-MM-DD')}}</td>
                                        <td>{{o.exceptionStatus}}</td>
                                        <td>{{o.chargeName}}</td>
                                        <td>{{o.adminMemo}}</td>
                                        <td>{{o.logisticsName}}</td>
                                        <td>{{o.invoiceNo}}</td>
                                        <td>{{convertDate(o.dateRecall, 'YYYY-MM-DD')}}</td>
                                        <td>{{o.recallMemo}}</td>
                                        <td>{{o.productCode}}</td>
                                        <td>{{o.productName}}</td>
                                        <td>{{o.productTypeCd}}</td>
                                        <td>{{o.providerName}}</td>
                                        <td>{{o.exceptionItemQty}}</td>
                                        <td>{{o.exceptionNormalRecallQty}}</td>
                                        <td>{{o.exceptionBrokenRecallQty}}</td>
                                        <td>{{numberWithCommas(o.exceptionLossPrice)}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- SMS전송정보 tab -->
                        <!-- <div class="tab-pane" id="tab-order-4" role="tabpanel">
                            <h5><i class="la la-minus"></i>SMS전송</h5>
                            <table class="table table-bordered totla-info" summary="SMS전송">
                                <colgroup>
                                    <col width="10%">
                                    <col width="40%">
                                    <col width="10%">
                                    <col width="40%">
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <th scope="row"><span class="text-primary">전송번호</span></th>
                                        <td>
                                            <input type="text" class="form-control" placeholder="" value="1670-5623">
                                        </td>
                                        <th scope="row"><span class="text-primary">작성자</span></th>
                                        <td>홍길동</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><span class="text-primary">메시지</span></th>
                                        <td>
                                            <textarea class="form-control sms-num-area" placeholder="전송할 SMS 내용을 입력합니다."></textarea>
                                            <small>0/80 Byte</small>
                                        </td>
                                        <th scope="row"><span class="text-primary">수신번호</span></th>
                                        <td>
                                            <textarea class="form-control sms-num-area" placeholder="">010-23610-1234
                                            </textarea>
                                            <small class="text-info">수신번호는 엔터(Enter)로 구분</small>

                                        </td>
                                    </tr>
                                    <tr>
                                        <th>전송일자</th>
                                        <td>2020-12-12 16:12</td>
                                        <th>수신자</th>
                                        <td>2명</td>
                                    </tr>
                                </tbody>
                            </table>

                            <div class="text-center">
                                <button class="btn btn-primary">SMS전송</button>
                            </div>

                            <div class='em-separator separator-dotted'></div>

                            <h5><i class="la la-minus"></i>상담전송 목록</h5>
                            <table class="table table-bordered " summary="상담전송">
                                <colgroup>
                                    <col width="5%">
                                    <col width="7%">
                                    <col width="5%">
                                    <col width="5%">
                                    <col width="10%">
                                    <col width="10%">
                                    <col width=*>
                                    <col width="10%">
                                    <col width="15%">
                                    <col width="5%">
                                </colgroup>
                                <thead>
                                    <th>
                                        <div class="styled-checkbox">
                                            <input type="checkbox" name="checkbox" id="check-1">
                                            <label for="check-1"></label>
                                        </div>
                                    </th>
                                    <th>NO</th>
                                    <th>문자구분</th>
                                    <th>전송구분</th>
                                    <th>주문번호</th>
                                    <th>학생ID</th>
                                    <th>전송내용</th>
                                    <th>수신번호</th>
                                    <th>전송일시</th>
                                    <th>결과</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div class="styled-checkbox">
                                                <input type="checkbox" name="checkbox" id="check-1">
                                                <label for="check-1"></label>
                                            </div>
                                        </td>
                                        <td>123456</td>
                                        <td>SMS</td>
                                        <td>일반</td>
                                        <td>123456789</td>
                                        <td>studkdjom</td>
                                        <td class="text-left">[홍길동]님이 주문하신 물품이 배송을 시작하였습니다.</td>
                                        <td>010-124-1234</td>
                                        <td>2020-09-18 오후 5:25:11</td>
                                        <td>성공</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class='em-separator separator-dotted'></div>

                            <h5><i class="la la-minus"></i>주문전송 목록</h5>
                            <table class="table table-bordered" summary="상담전송">
                                <colgroup>
                                    <col width="5%">
                                    <col width="7%">
                                    <col width="5%">
                                    <col width="5%">
                                    <col width="10%">
                                    <col width="10%">
                                    <col width=*>
                                    <col width="10%">
                                    <col width="15%">
                                    <col width="5%">
                                </colgroup>
                                <thead>
                                    <th>
                                        <div class="styled-checkbox">
                                            <input type="checkbox" name="checkbox" id="check-1">
                                            <label for="check-1"></label>
                                        </div>
                                    </th>
                                    <th>NO</th>
                                    <th>문자구분</th>
                                    <th>전송구분</th>
                                    <th>주문번호</th>
                                    <th>학생ID</th>
                                    <th>전송내용</th>
                                    <th>수신번호</th>
                                    <th>전송일시</th>
                                    <th>결과</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div class="styled-checkbox">
                                                <input type="checkbox" name="checkbox" id="check-1">
                                                <label for="check-1"></label>
                                            </div>
                                        </td>
                                        <td>123456</td>
                                        <td>SMS</td>
                                        <td>일반</td>
                                        <td>123456789</td>
                                        <td>studkdjom</td>
                                        <td class="text-left">[홍길동]님이 주문하신 물품이 배송을 시작하였습니다.</td>
                                        <td>010-124-1234</td>
                                        <td>2020-09-18 오후 5:25:11</td>
                                        <td>성공</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div> -->
                    </div>

                    <!-- 주문서 상담내용 -->
                    <div class="widget-footer">
                        <div class="row">
                            <div class="col-sm-12">
                                <table class="table table-bordered" summary="주문서 상담내용">
                                    <colgroup>
                                        <col width="10%">
                                        <col width="30%">
                                        <col width="10%">
                                        <col width="15%">
                                        <col width="10%">
                                        <col width=*>
                                    </colgroup>
                                    <tbody>
                                        <tr>
                                            <th>상담유형</th>
                                            <td>
                                                <div class="row">
                                                    <div class="col col-sm-6">
                                                        <select class="form-control" v-model="counselNo" @change="onChangeCounsel">
                                                            <option value=''>선택</option>
                                                            <option v-for="(o,i) in getOrderCounselList" :key="i" :value="o.counselNo">{{o.counselTypeCd + ' (' + o.childCounselTypeCd + ')'}}</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </td>
                                            <th>접수자</th>
                                            <td>{{receiveName}}</td>
                                            <th>처리자지정</th>
                                            <td>
                                                <div class="row">
                                                    <div class="col-sm-12">
                                                        <select class="form-control" v-model="chargeId">
                                                            <option value="">선택</option>
                                                            <option v-for="(o,i) in getUserList" :key="i" :value="o.loginId">{{o.userName}}</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>상담원처리내용</th>
                                            <td colspan="5">
                                                <div class="row">
                                                    <div class="col-sm-12">
                                                        <textarea class="form-control" rows="5" v-model="adminMemo" />
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>고객상담내용</th>
                                            <td colspan="5">
                                                <div class="row">
                                                    <div class="col-sm-12">
                                                        <textarea class="form-control" v-model="counselContents" readonly disabled/>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal-footer" style="justify-content:space-between;">
                <div style="justify-content: left;">
                    <button type="button" class="btn btn-danger" @click.prevent="openModalPopup('OrderCancelApplyPopup')">취소/반품접수</button>
                </div>
                <button type="button" class="btn btn-primary" @click="onClickSaveCounsel">저장</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import DaumPostPopup from '@/components/popup/DaumPostPopup'
import OrderCancelApplyPopup from './OrderCancelApplyPopup.vue'

const store = 'orderStore'
export default {
  components: { OrderCancelApplyPopup, DaumPostPopup },
  name: 'orderDetailPopup',
  props: ['modalParamObj'],
  created () {
    this.actionFindOrderDetail(this.modalParamObj.orderNo) // 주문서 기본정보 조회
    this.actionFindOrderDeliveryDetail(this.modalParamObj.orderNo) // 배송정보 조회
      .then(res => {
        if (res.ordDeliveryOrder !== null) {
          this.deliveryPostalNo = res.ordDeliveryOrder.deliveryPostalNo
          this.deliveryAddr1 = res.ordDeliveryOrder.deliveryAddr1
          this.deliveryAddr2 = res.ordDeliveryOrder.deliveryAddr2
        }
      })
    this.actionFindOrderExceptionDetail(this.modalParamObj.orderNo) // 주문예외정보 조회
    this.actionFindOrderCounselList(this.modalParamObj.orderNo) // 주문서별 상담목록 조회
    this.actionFindUserList() // 상담처리자 목록
  },
  data: function () {
    return {
      deliveryPostalNo: '', // 배송지주소 우편번호
      deliveryAddr1: '', // 배송지주소 주소1
      deliveryAddr2: '', // 배송지주소 주소2
      counselNo: '', // 상담번호
      receiveName: '', // 접수자명
      chargeId: '', // 처리자ID
      adminMemo: '', // 상담원 처리내용
      counselContents: '', // 고객 상담내용
      // 모달
      modalOpenFlag: false, // 모달창 openFlag
      modalPopupId: '' // 오픈할 모달창 id
    }
  },
  computed: {
    ...mapGetters(store, [
      'getOrderDetail',
      'getOrderItemList',
      'getDeliveryOrder',
      'getDeliveryOrderItemList',
      'getOrderExceptionDetail',
      'getOrderCounselList',
      'getUserList'
    ])
  },
  methods: {
    ...mapActions(store, [
      'actionFindOrderDetail',
      'actionFindOrderDeliveryDetail',
      'actionFindOrderExceptionDetail',
      'actionSaveAddrDelivery',
      'actionFindOrderCounselList',
      'actionFindUserList',
      'actionSaveOrderCounsel',
      'actionFindOrderCancelList'
    ]),
    // 배송지정보 변경
    onClickSaveAddrDelivery () {
      if (this.getDeliveryOrder.deliveryNo === undefined) {
        alert('배송지정보가 없습니다.')
        return
      }
      this.actionSaveAddrDelivery({
        deliveryNo: this.getDeliveryOrder.deliveryNo,
        deliveryPostalNo: this.deliveryPostalNo,
        deliveryAddr1: this.deliveryAddr1,
        deliveryAddr2: this.deliveryAddr2
      }).then(res => {
        alert(res.message)
        this.actionFindOrderDeliveryDetail(this.modalParamObj.orderNo) // 배송정보 조회
          .then(res => {
            this.deliveryPostalNo = res.ordDeliveryOrder.deliveryPostalNo
            this.deliveryAddr1 = res.ordDeliveryOrder.deliveryAddr1
            this.deliveryAddr2 = res.ordDeliveryOrder.deliveryAddr2
          })
      })
    },
    // 상담정보저장
    onClickSaveCounsel () {
      if (this.counselNo === '') {
        alert('상담유형을 선택하세요.')
        return
      }
      if (this.chargeId === '') {
        alert('처리자를 선택하세요.')
        return
      }
      if (!confirm('상담원 처리내용을 저장 하시겠습니까?')) {
        return
      }
      this.actionSaveOrderCounsel({
        counselNo: this.counselNo,
        adminMemo: this.adminMemo,
        chargeId: this.chargeId,
        chargeName: this.getUserList.find(x => x.loginId === this.chargeId).userName
      }).then(res => {
        alert(res.message)
        // 주문서별 상담목록 조회
        this.actionFindOrderCounselList(this.modalParamObj.orderNo)
      })
    },
    // 상담유형 change
    onChangeCounsel () {
      let counselObj = this.getOrderCounselList.find(x => x.counselNo === this.counselNo)
      if (counselObj === undefined) {
        this.receiveName = ''
        this.chargeId = ''
        this.adminMemo = ''
        this.counselContents = ''
        return
      }
      this.receiveName = counselObj.receiveName + ' (' + counselObj.receiveId + ')'
      this.chargeId = counselObj.chargeId
      this.adminMemo = counselObj.adminMemo
      this.counselContents = counselObj.counselContents
    },
    // 모달팝업 open
    openModalPopup (id, o) {
      if (id === 'DaumPostPopup') {
        // 주소검색
        this.modalPopupId = 'DaumPostPopup'
      }
      if (id === 'OrderCancelApplyPopup') {
        // 취소/반품접수
        this.modalPopupId = 'OrderCancelApplyPopup'
      }
      this.modalOpenFlag = true
    },
    // 모달창 close
    closeModalPopup (data) {
      if (this.modalPopupId === 'DaumPostPopup' && data !== undefined) {
        this.deliveryPostalNo = data.zonecode.trim()
        this.deliveryAddr1 = data.address.trim()
        this.deliveryAddr2 = ''
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
    },
    // date
    convertDate (data, format) {
      if (data === null || data === '') {
        return ''
      }
      return this.$moment(data).format(format)
    }
  }
}
</script>

<style>

</style>
