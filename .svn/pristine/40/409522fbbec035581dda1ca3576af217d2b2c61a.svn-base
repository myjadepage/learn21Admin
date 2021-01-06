<template>
  <div class="container-fluid">
    <div class="row">
      <PageHeader :pageCurrentInfo="pageCurrentInfo" />

       <div class="col-xl-12">
            <!-- 검색영역 시작-->
            <div class="widget has-shadow">
                <div class="widget-body">
                    <table class="table table-bordered" summary="가맹점 물류이동 검색하기">
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
                                <th scope="row"><span class="text-primary">상태구분/입출구분</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col col-sm-5">
                                            <select class="form-control">
                                                <option>편집</option>
                                                <option>확정</option>
                                                <option>완료</option>
                                            </select>
                                        </div>
                                        <div class="col col-sm-5">
                                            <select class="form-control">
                                                <option>입고</option>
                                                <option>출고</option>
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
                                            <DateSelect @state-start-date="startDate" @state-end-date="endDate"
                                            :defStartDate="pfromDate"
                                            :defEndDate="ptoDate"></DateSelect>
                                        </div>
                                    </div>
                                </td>

                                <th>메모</th>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-5">
                                            <select class="form-control">
                                                <option>반품</option>
                                                <option>출고</option>
                                            </select>
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
                            <button type="button" class="btn btn-outline-primary" @click="openModalPopup('logisticsInput')">신규</button>
                        </div>
                    </div>
                </div>
                <div class="widget-body">
                    <table id="stock-shop-table" class="table table-bordered mb-0" summary="가맹점 물류이동 리스트">
                        <colgroup>
                            <col width="5%">
                            <col width="10%">
                            <col width="7%">
                            <col width="7%">
                            <col width="7%">
                            <col width="7%">
                            <col width="10%">
                            <col width="7%">
                            <col width=*>
                            <col width="10%">
                        </colgroup>
                        <thead>
                            <tr>
                                <th>NO</th>
                                <th>가맹점</th>
                                <th>일자</th>
                                <th>상태구분</th>
                                <th>입출구분</th>
                                <th>이동품목수</th>
                                <th>이동후 가맹점</th>
                                <th>담당자</th>
                                <th>비고</th>
                                <th>관리</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>가맹점 1</td>
                                <td>2020-09-15</td>
                                <td class="text-info">확정</td>
                                <td>입고</td>
                                <td>2</td>
                                <td>가맹점 1</td>
                                <td>홍길동</td>
                                <td class="text-left">7/27 매장용 부곡리 센터</td>
                                <td>
                                    <div class="col-sm-12 d-flex align-items-center justify-content-md-end justify-content-center">
                                        <button class="btn btn-sm btn-outline-dark" @click="openModalPopup('logisticsInput')">수정</button>
                                        <button class="btn btn-sm btn-danger">삭제</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                        <!-- 가맹점 신규등록 및 수정 팝업-->
                         <logistics-input-popup v-if="modalOpenFlag && modalPopupId === 'logisticsInput'" @close="closeModalPopup"></logistics-input-popup>
                    </table>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import pageHeader from '@/mixin/pageHeader'
import dateSelect from '@/mixin/dateSelect'
import LogisticsInputPopup from '@/components/popup/LogisticsInputPopup.vue'

export default {
  components: { LogisticsInputPopup },
  mixins: [
    pageHeader({title: '가맹점 물류이동', groupName: '물류관리'}),
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
        case 'logisticsInput': // 가맹점물류 신규
          this.modalPopupId = 'logisticsInput'
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
