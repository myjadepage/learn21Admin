<template>
  <div class="container-fluid">
    <div class="row">
      <PageHeader :pageCurrentInfo="pageCurrentInfo" />

       <div class="col-xl-12">

            <!-- 검색영역 시작-->
            <div class="widget has-shadow">
                <div class="widget-body">
                    <table class="table table-bordered" summary="매출정산 검색하기">
                        <colgroup>
                            <col width="10%">
                            <col width="40%">
                            <col width="10%">
                            <col width="40%">
                        </colgroup>
                        <tbody>
                            <tr>
                                <th scope="row"><span class="text-primary">조회기간</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-8">
                                           <DateSelect @state-start-date="startDate" @state-end-date="endDate"
                                            :defStartDate="pfromDate"
                                            :defEndDate="ptoDate"></DateSelect>
                                        </div>
                                    </div>
                                </td>
                                <th scope="row"><span class="text-primary">가맹점</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col col-sm-4">
                                            <select class="form-control">
                                                                <option>그룹</option>
                                                                <option>Ketchup</option>
                                                                <option>Relish</option>
                                                            </select>
                                        </div>
                                        <div class="col col-sm-4">
                                            <select class="form-control">
                                                                <option>가맹점</option>
                                                                <option>Ketchup</option>
                                                                <option>Relish</option>
                                                            </select>
                                        </div>
                                    </div>
                                </td>

                            </tr>
                            <tr>
                                <th scope="row"><span class="text-primary">담당자</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col col-sm-4">
                                            <select class="form-control">
                                                                <option>홍길동</option>
                                                                <option>Ketchup</option>
                                                                <option>Relish</option>
                                                            </select>
                                        </div>
                                    </div>
                                </td>
                                <th><span class="text-primary">거래처</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-5">
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="거래처검색">
                                               <button type="button" class="btn btn-sm btn-secondary" @click="openModalPopup('vendorList')"><i class="la la-search"></i></button>
                                               <vendor-list-popup title="거래처검색" v-if="modalOpenFlag && modalPopupId === 'vendorList'" @close="closeModalPopup"></vendor-list-popup>
                                            </div>
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
                        <div class="col-sm-6 d-flex align-items-center justify-content-md-end justify-content-center">
                            <button class="btn btn-outline-primary" @click="openModalPopup('salesSettlePrint')">인쇄</button>
                            <button class="btn btn-outline-danger" @click="openModalPopup('salesSettle')">+ 신규등록</button>
                        </div>
                        <sales-settle-popup v-if="modalOpenFlag && modalPopupId === 'salesSettle'" @close="closeModalPopup"></sales-settle-popup>
                        <sales-settle-print-popup v-if="modalOpenFlag && modalPopupId === 'salesSettlePrint'" @close="closeModalPopup"></sales-settle-print-popup>
                    </div>
                </div>
                <div class="widget-body">
                    <table id="sales-settle-table" class="table table-bordered" summary="매출정산 리스트">
                        <colgroup>
                            <col width="7%">
                            <col width="7%">
                            <col width="7%">
                            <col width="7%">
                            <col width="7%">
                            <col width="7%">
                            <col width="7%">
                            <col width="7%">
                            <col width="7%">
                            <col width=*>
                            <col width="10%">
                        </colgroup>
                        <thead>
                            <tr>
                                <th>매출일자</th>
                                <th>일련번호</th>
                                <th>거래처</th>
                                <th>상태구분</th>
                                <th>공급가</th>
                                <th>부가세</th>
                                <th>합계금액</th>
                                <th>작성자</th>
                                <th>변경자</th>
                                <th>메모</th>
                                <th>관리</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2020-09-15</td>
                                <td>0001</td>
                                <td class="text-left">청담러닝</td>
                                <td>입고</td>
                                <td class="text-right">2,500,000</td>
                                <td class="text-right">0</td>
                                <td class="text-right">2,500,000</td>
                                <td>강성육</td>
                                <td>강성육</td>
                                <td class="text-left">아이가르텐 추가 주문서_0701</td>
                                <td>
                                    <div class="col-sm-12 d-flex align-items-center justify-content-md-end justify-content-center">
                                        <button class="btn btn-sm btn-outline-dark"  @click="openModalPopup('salesSettle')">수정</button>
                                        <button class="btn btn-sm btn-danger">삭제</button>
                                    </div>
                                     <sales-settle-popup v-if="modalOpenFlag && modalPopupId === 'salesSettle'" @close="closeModalPopup"></sales-settle-popup>
                                </td>
                            </tr>

                            <tr class="text-red">
                                <td>2020-09-15</td>
                                <td>0001</td>
                                <td class="text-left">청담러닝</td>
                                <td>입고</td>
                                <td class="text-right">2,500,000</td>
                                <td class="text-right">0</td>
                                <td class="text-right">2,500,000</td>
                                <td>강성육</td>
                                <td>강성육</td>
                                <td class="text-left">아이가르텐 추가 주문서_0701</td>
                                <td>
                                    <div class="col-sm-12 d-flex align-items-center justify-content-md-end justify-content-center">
                                        <button class="btn btn-sm btn-outline-dark" >수정</button>
                                        <button class="btn btn-sm btn-danger">삭제</button>
                                    </div>
                                </td>
                            </tr>
                            <tr class="text-blue">
                                <td>2020-09-15</td>
                                <td>0001</td>
                                <td class="text-left">청담러닝</td>
                                <td>입고</td>
                                <td class="text-right">2,500,000</td>
                                <td class="text-right">0</td>
                                <td class="text-right">2,500,000</td>
                                <td>강성육</td>
                                <td>강성육</td>
                                <td class="text-left">아이가르텐 추가 주문서_0701</td>
                                <td>
                                    <div class="col-sm-12 d-flex align-items-center justify-content-md-end justify-content-center">
                                        <button class="btn btn-sm btn-outline-dark" >수정</button>
                                        <button class="btn btn-sm btn-danger">삭제</button>
                                    </div>
                                </td>
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
import VendorListPopup from '@/components/popup/common/VendorListPopup.vue'
import SalesSettlePopup from '@/components/popup/SalesSettlePopup.vue'
import SalesSettlePrintPopup from '@/components/popup/print/SalesSettlePrintPopup.vue'

export default {
  mixins: [
    pageHeader({title: '매출정산', groupName: '영업관리'}),
    dateSelect
  ],
  components: {
    VendorListPopup,
    SalesSettlePopup,
    SalesSettlePrintPopup
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
        case 'vendorList': // 거래처검색
          this.modalPopupId = 'vendorList'
          break
        case 'salesSettle': // 매출정산
          this.modalPopupId = 'salesSettle'
          break
        case 'salesSettlePrint': // 매출정산인쇄
          this.modalPopupId = 'salesSettlePrint'
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
