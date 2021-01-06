<template>
  <div class="container-fluid">
    <div class="row">
      <PageHeader :pageCurrentInfo="pageCurrentInfo" />

       <div class="col-xl-12">

            <!-- 검색영역 시작-->
            <div class="widget has-shadow">
                <div class="widget-body">
                    <table class="table table-bordered" summary="반품 관리검색하기">
                        <colgroup>
                            <col width="10%">
                            <col width="40%">
                            <col width="10%">
                            <col width="40%">
                        </colgroup>
                        <tbody>
                            <tr>
                                <th scope="row">가맹점</th>
                                <td>
                                    <div class="row">
                                        <div class="col col-sm-5">
                                            <select class="form-control">
                                                        <option>그룹</option>
                                                        <option>Ketchup</option>
                                                        <option>Relish</option>
                                                    </select>
                                        </div>
                                        <div class="col col-sm-5">
                                            <select class="form-control">
                                                        <option>가맹점</option>
                                                        <option>Ketchup</option>
                                                        <option>Relish</option>
                                                    </select>
                                        </div>
                                    </div>
                                </td>

                                <th>상태</th>
                                <td>
                                    <div class="col-sm-12 d-flex align-items-center">
                                        <div class="styled-radio">
                                            <input type="radio" name="radDelivery" id="radDelivery-1">
                                            <label for="radDelivery-1">전체</label>
                                        </div>
                                        <div class="styled-radio">
                                            <input type="radio" name="radDelivery" id="radDelivery-2">
                                            <label for="radDelivery-2">전체반품</label>
                                        </div>
                                        <div class="styled-radio">
                                            <input type="radio" name="radDelivery" id="radDelivery-3">
                                            <label for="radDelivery-3">부분반품</label>
                                        </div>
                                        <div class="styled-radio">
                                            <input type="radio" name="radDelivery" id="radDelivery-3">
                                            <label for="radDelivery-3">SB반품</label>
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <th>접수기간</th>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-8">
                                            <DateSelect @state-start-date="startDate" @state-end-date="endDate"
                                            :defStartDate="pfromDate"
                                            :defEndDate="ptoDate"></DateSelect>
                                        </div>
                                    </div>
                                </td>

                                <th scope="row">검색구분</th>
                                <td>
                                    <div class="row">
                                        <div class="col col-sm-5">
                                            <select class="form-control">
                                                        <option>선택</option>
                                                        <option>Ketchup</option>
                                                        <option>Relish</option>
                                                    </select>
                                        </div>
                                        <div class="col col-sm-4">
                                            <input type="text" class="form-control" placeholder="검색어 입력">
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
                            <select class="form-control col-sm-2">
                                        <option>표시갯수</option>
                                        <option>10개</option>
                                        <option>20개</option>
                                        <option>30개</option>
                                    </select>
                            <label class="col-sm-4">조회건수 : 20개</label>
                        </div>
                        <div class="col-sm-6 d-flex justify-content-end">
                            <button type="button" class="btn btn-outline-primary">엑셀 다운로드</button>
                            <button type="button" class="btn btn-outline-primary" @click="openModalPopup('returnPrint')">인쇄</button>
                        </div>
                        <return-print-popup v-if="modalOpenFlag && modalPopupId === 'returnPrint'" @close="closeModalPopup"></return-print-popup>
                    </div>
                </div>
                <div class="widget-body">
                    <table id="stock-return-table" class="table table-bordered" summary="반품관리 리스트">
                        <colgroup>
                            <col width="5%">
                            <col width="7%">
                            <col width="7%">
                            <col width="10%">
                            <col width="10%">
                            <col width="7%">
                            <col width="10%">
                            <col width="7%">
                            <col width=*>
                        </colgroup>
                        <thead>
                            <tr>
                                <th>
                                    <div class="styled-checkbox margin-bottom-5">
                                        <input type="checkbox" name="checkbox" id="chkStock">
                                        <label for="chkStock"></label>
                                    </div>
                                </th>
                                <th>출고요청일</th>
                                <th>주문자</th>
                                <th>주문번호</th>
                                <th>송장번호</th>
                                <th>수취인명</th>
                                <th>수취인 휴대폰</th>
                                <th>우편번호</th>
                                <th>주소</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr @click="viweDetail">
                                <td>
                                    <div class="styled-checkbox margin-bottom-5">
                                        <input type="checkbox" name="checkbox" id="chkStock">
                                        <label for="chkStock"></label>
                                    </div>
                                </td>
                                <td>2020-09-15</td>
                                <td>홍길동</td>
                                <td><a href="#" @click.prevent="openModalPopup('orderInfo')">123456789</a></td>
                                <td>123456789</td>
                                <td>홍길동</td>
                                <td>010-2234-1235</td>
                                <td>14770</td>
                                <td class="text-left">서울시 강남구 대치동</td>
                                <!-- <order-info-popup v-if="modalOpenFlag && modalPopupId === 'orderInfo'" @close="closeModalPopup"></order-info-popup> -->
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
            <!-- 리스트영역 끝 -->

            <!----선택된 반품목록영역-->
            <return-detail  v-show="viewDetail"></return-detail>
        </div>
    </div>
  </div>
</template>

<script>
import pageHeader from '@/mixin/pageHeader'
import dateSelect from '@/mixin/dateSelect'
import ReturnDetail from './component/ReturnDetail.vue'
import OrderInfoPopup from '@/components/popup/OrderInfoPopup.vue'
import ReturnPrintPopup from '@/components/popup/print/ReturnPrintPopup.vue'

export default {
  components: { ReturnDetail, OrderInfoPopup, ReturnPrintPopup },
  mixins: [
    pageHeader({title: '반품관리', groupName: '물류관리'}),
    dateSelect
  ],
  data () {
    return {
      viewDetail: false,
      modalOpenFlag: false
    }
  },
  methods: {
    viweDetail () {
      this.viewDetail = true
    },
    // 모달팝업 open
    openModalPopup (id) {
      switch (id) {
        case 'orderInfo': // 주문서상세 선택
          this.modalPopupId = 'orderInfo'
          break
        case 'returnPrint': // 반품인쇄
          this.modalPopupId = 'returnPrint'
          break
      }
      this.modalOpenFlag = true
    },
    // 모달창 close
    closeModalPopup () {
      this.modalPopupId = ''
      this.modalOpenFlag = false
    }
  }
}
</script>

<style>

</style>
