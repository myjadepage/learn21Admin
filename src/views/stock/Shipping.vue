<template>
  <div class="container-fluid">
    <div class="row">
      <PageHeader :pageCurrentInfo="pageCurrentInfo" />

       <div class="col-xl-12">

            <!-- 검색영역 시작-->
            <div class="widget has-shadow">
                <div class="widget-body">
                    <table class="table table-bordered" summary="택배출고 현황 검색하기">
                        <colgroup>
                            <col width="10%">
                            <col width="40%">
                            <col width="10%">
                            <col width="40%">
                        </colgroup>
                        <tbody>
                            <tr>
                                <th><span class="text-primary">조회기간</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-8">
                                            <DateSelect @state-start-date="startDate" @state-end-date="endDate"
                                            :defStartDate="pfromDate"
                                            :defEndDate="ptoDate"></DateSelect>
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
                                            <label for="radDelivery-2">출고</label>
                                        </div>
                                        <div class="styled-radio">
                                            <input type="radio" name="radDelivery" id="radDelivery-3">
                                            <label for="radDelivery-3">미출고</label>
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            <tr>

                                <th scope="row"><span class="text-primary">주문번호</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col col-sm-4">
                                            <input type="text" class="form-control" placeholder="주문번호 입력">
                                        </div>
                                    </div>
                                </td>

                                <th scope="row"><span class="text-primary">검색구분</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col col-sm-5">
                                            <select class="form-control">
                                                        <option>주문자</option>
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
                            <button type="button" class="btn btn-outline-primary"  @click="openModalPopup('shippingPrint')">인쇄</button>
                        </div>
                        <shipping-print-popup v-if="modalOpenFlag && modalPopupId === 'shippingPrint'" @close="closeModalPopup"></shipping-print-popup>
                    </div>
                </div>
                <div class="widget-body">
                    <table id="stock-delivery-table" class="table table-bordered mb-0" summary="택배출고현황 리스트">
                        <colgroup>
                            <col width="10%">
                            <col width="7%">
                            <col width="10%">
                            <col width="10%">
                            <col width="7%">
                            <col width="10%">
                            <col width="7%">
                            <col width="7%">
                            <col width=*>
                        </colgroup>
                        <thead>
                            <tr>
                                <th>송장번호</th>
                                <th>상태</th>
                                <th>일자</th>
                                <th>주문번호</th>
                                <th>주문자</th>
                                <th>전화번호</th>
                                <th>수취인</th>
                                <th>우편번호</th>
                                <th>주소</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>123456789</td>
                                <td>출고</td>
                                <td>2020-09-15</td>
                                <td>123456789</td>
                                <td>홍길동</td>
                                <td>010-2234-1235</td>
                                <td>홍길동</td>
                                <td>14770</td>
                                <td class="text-left">서울시 강남구 대치동</td>
                            </tr>
                        </tbody>

                    </table>
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
import ShippingPrintPopup from '@/components/popup/print/ShippingPrintPopup.vue'

export default {
  components: { ShippingPrintPopup },
  mixins: [
    pageHeader({title: '택배출고', groupName: '물류관리'}),
    dateSelect
  ],
  data () {
    return {
      modalOpenFlag: false
    }
  },
  methods: {
    // 모달팝업 open
    openModalPopup (id) {
      switch (id) {
        case 'shippingPrint': // 택배출고 인쇄
          this.modalPopupId = 'shippingPrint'
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
