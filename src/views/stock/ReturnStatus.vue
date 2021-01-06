<template>
  <div class="container-fluid">
    <div class="row">
      <PageHeader :pageCurrentInfo="pageCurrentInfo" />

        <div class="col-xl-12">

            <!-- 검색영역 시작-->
            <div class="widget has-shadow">
                <div class="widget-body">
                    <table class="table table-bordered" summary="반품처리 현황 검색하기">
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
                                            <input type="radio" name="radDeliveryRetrun" id="radDeliveryRetrun-1">
                                            <label for="radDeliveryRetrun-1">전체</label>
                                        </div>
                                        <div class="styled-radio">
                                            <input type="radio" name="radDeliveryRetrun" id="radDeliveryRetrun-2">
                                            <label for="radDeliveryRetrun-2">전체반품</label>
                                        </div>
                                        <div class="styled-radio">
                                            <input type="radio" name="radDeliveryRetrun" id="radDeliveryRetrun-3">
                                            <label for="radDeliveryRetrun-3">부분반품</label>
                                        </div>
                                        <div class="styled-radio">
                                            <input type="radio" name="radDeliveryRetrun" id="radDeliveryRetrun-3">
                                            <label for="radDeliveryRetrun-3">SB반품</label>
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            <tr>

                                <th><span class="text-primary">접수기간</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-8">
                                            <DateSelect @state-start-date="startDate" @state-end-date="endDate"
                                            :defStartDate="pfromDate"
                                            :defEndDate="ptoDate"></DateSelect>
                                        </div>
                                    </div>
                                </td>

                                <th scope="row"><span class="text-primary">검색조건</span></th>
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
                            <button type="button" class="btn btn-outline-primary" @click="openModalPopup('returnStatusPrint')">인쇄</button>
                        </div>
                        <retrun-status-print-popup v-if="modalOpenFlag && modalPopupId === 'returnStatusPrint'" @close="closeModalPopup"></retrun-status-print-popup>
                    </div>
                </div>
                <div class="widget-body">
                    <table id="stock-return-list-table" class="table table-bordered mb-0" summary="반품현황 리스트">
                        <colgroup>
                            <col width="5%">
                            <col width="7%">
                            <col width="7%">
                            <col width="7%">
                            <col width="10%">
                            <col width="7%">
                            <col width="7%">
                            <col width="10%">
                            <col width="10%">
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
                                <th>주문일</th>
                                <th>결제일</th>
                                <th>반품접수일</th>
                                <th>주문번호</th>
                                <th>주문자</th>
                                <th>배송구분</th>
                                <th>주문금액</th>
                                <th>송장번호</th>
                                <th>수취인번호</th>
                                <th>우편번호</th>
                                <th>주소</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div class="styled-checkbox margin-bottom-5">
                                        <input type="checkbox" name="checkbox" id="chkStock">
                                        <label for="chkStock"></label>
                                    </div>
                                </td>
                                <td>2020-09-15</td>
                                <td>2020-09-15</td>
                                <td>2020-09-15</td>
                                <td>123456789</td>
                                <td>홍길동</td>
                                <td>수령</td>
                                <!--수령/미수령-->
                                <td class="text-right">250,000</td>
                                <td>123456789</td>
                                <td>010-2234-1235</td>
                                <td>14770</td>
                                <td class="text-left">서울시 강남구 대치동</td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="styled-checkbox margin-bottom-5">
                                        <input type="checkbox" name="checkbox" id="chkStock">
                                        <label for="chkStock"></label>
                                    </div>
                                </td>
                                <td>2020-09-15</td>
                                <td>2020-09-15</td>
                                <td>2020-09-15</td>
                                <td>123456789</td>
                                <td>홍길동</td>
                                <td class="text-danger">미수령</td>
                                <!--수령/미수령-->
                                <td class="text-right">250,000</td>
                                <td>123456789</td>
                                <td>010-2234-1235</td>
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
import RetrunStatusPrintPopup from '@/components/popup/print/RetrunStatusPrintPopup.vue'

export default {
  mixins: [
    pageHeader({title: '반품처리 현황', groupName: '물류관리'}),
    dateSelect
  ],
  components: {
    RetrunStatusPrintPopup
  },
  data () {
    return {
      modalOpenFlag: false
    }
  },
  methods: {
    // 모달팝업 open
    openModalPopup (id) {
      switch (id) {
        case 'returnStatusPrint': // 택배출고 인쇄
          this.modalPopupId = 'returnStatusPrint'
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
