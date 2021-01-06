<template>
  <div class="container-fluid">
    <div class="row">
      <PageHeader :pageCurrentInfo="pageCurrentInfo" />

      <div class="col-xl-12">

            <!-- 검색영역 시작-->
            <div class="widget has-shadow">
                <div class="widget-body">
                    <table class="table table-bordered" summary="재고자산조정관리 검색하기">
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
                                <th scope="row"><span class="text-primary">담당자</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-5">
                                            <select class="form-control">
                                                        <option>그룹</option>
                                                        <option>Ketchup</option>
                                                        <option>Relish</option>
                                                    </select>
                                        </div>
                                    </div>
                                </td>

                            </tr>
                            <tr>
                                <th><span class="text-primary">조회기간</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-8">
                                            <DateSelect @state-start-date="startDate" @state-end-date="endDate" :defStartDate="pfromDate" :defEndDate="ptoDate"></DateSelect>
                                        </div>
                                    </div>
                                </td>

                                <th></th>
                                <td></td>
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
                        <div class="col-sm-6 d-flex align-items-center justify-content-start">
                            <select class="form-control col-sm-2">
                                        <option>표시갯수</option>
                                        <option>10개</option>
                                        <option>20개</option>
                                        <option>30개</option>
                                    </select>
                            <label class="col-sm-4">조회건수 : 20개</label>
                        </div>
                        <div class="col-sm-6 d-flex justify-content-end">
                            <button type="button" class="btn btn-outline-primary" @click="openModalPopup('stockManagePopup')">신규</button>
                            <button type="button" class="btn btn-outline-primary"  @click="openModalPopup('stockManagePrint')">인쇄</button>
                        </div>
                        <stock-manage-popup v-if="modalOpenFlag && modalPopupId === 'stockManagePopup'" @close="closeModalPopup"></stock-manage-popup>
                        <stock-manage-print-popup  v-if="modalOpenFlag && modalPopupId === 'stockManagePrint'" @close="closeModalPopup"></stock-manage-print-popup>
                    </div>
                </div>
                <div class="widget-body">
                    <table id="stock-manager-table" class="table table-bordered mb-0" summary="재고자산 조정관리 리스트">
                        <colgroup>
                            <col width="10%">
                            <col width="7%">
                            <col width="7%">
                            <col width="7%">
                            <col width="7%">
                            <col width="10%">
                            <col width=*>
                            <col width="10%">
                        </colgroup>
                        <thead>
                            <tr>
                                <th>일자</th>
                                <th>일련번호</th>
                                <th>상태구분</th>
                                <th>입출구분</th>
                                <th>담당자</th>
                                <th>합계금액</th>
                                <th>비고</th>
                                <th>관리</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2020-09-15</td>
                                <td>0001</td>
                                <td>확정</td>
                                <td>입고</td>
                                <td>안보슬</td>
                                <td class="text-right">200,500</td>
                                <td class="text-left">(주)청담러닝</td>
                                <td>
                                    <div class="col-sm-12 d-flex align-items-center justify-content-md-end justify-content-center">
                                        <button class="btn btn-sm btn-outline-dark" @click="openModalPopup('stockManagePopup')">수정</button>
                                        <button class="btn btn-sm btn-danger">삭제</button>
                                    </div>
                                    <stock-manage-popup v-if="modalOpenFlag && modalPopupId === 'stockManagePopup'" @close="closeModalPopup"></stock-manage-popup>
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
import StockManagePopup from '@/components/popup/StockManagePopup.vue'
import StockManagePrintPopup from '@/components/popup/print/StockManagePrintPopup.vue'

export default {
  mixins: [
    pageHeader({title: '재고자산 조정관리', groupName: '물류관리'}),
    dateSelect
  ],
  components: {
    StockManagePopup,
    StockManagePrintPopup
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
        case 'stockManagePopup': // 재고자산조정
          this.modalPopupId = 'stockManagePopup'
          break
        case 'stockManagePrint': // 재고자산조정인쇄
          this.modalPopupId = 'stockManagePrint'
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
