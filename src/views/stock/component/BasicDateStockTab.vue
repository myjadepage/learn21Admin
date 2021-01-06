<template>
  <div class="tab-pane show active">
                    <div class="widget has-shadow">
                        <div class="widget-body">
                            <table class="table table-bordered" summary="기준일자재고 검색하기">
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
                                        <th><span class="text-primary">품목</span></th>
                                        <td>
                                            <div class="row">
                                                <div class="col-sm-5">
                                                    <div class="input-group">
                                                        <input type="text" class="form-control" placeholder="품목검색">
                                                        <button type="button" class="btn btn-sm btn-secondary" @click="openModalPopup('itemSelectSingle')"><i class="la la-search"></i></button>
                                                        <item-select-single-popup v-if="modalOpenFlag && modalPopupId === 'itemSelectSingle'" @close="closeModalPopup"></item-select-single-popup>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><span class="text-primary">조회기간</span></th>
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
                                <button class="btn btn-primary">검색</button>
                            </div>

                        </div>
                    </div>

                    <!-- 1. 상세재고 리스트영역 시작 -->
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
                                    <button class="btn btn-outline-primary" @click="openModalPopup('stockDatePrint')" >인쇄</button>
                                </div>
                                <stock-date-print-popup v-if="modalOpenFlag && modalPopupId === 'stockDatePrint'" @close="closeModalPopup"></stock-date-print-popup>
                            </div>
                        </div>
                        <div class="widget-body">
                            <table id="stock-date-table" class="table table-bordered" summary="상세재고 리스트">
                                <colgroup>
                                    <col width="10%">
                                    <col width="20%">
                                    <col width="10%">
                                    <col width="10%">
                                    <col width="10%">
                                    <col width=*>
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>코드</th>
                                        <th>품목</th>
                                        <th>재고량</th>
                                        <th>단가</th>
                                        <th>금액</th>
                                        <th>비고</th>
                                    </tr>

                                </thead>
                                <tbody>
                                    <tr>
                                        <td>00000</td>
                                        <td class="text-left">PB TOEFL JUNIOR SET</td>
                                        <td class="text-right">2,500</td>
                                        <td class="text-right">10,000</td>
                                        <td class="text-right">1,984,000</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>00000</td>
                                        <td class="text-left">PB TOEFL JUNIOR SET</td>
                                        <td class="text-right">2,500</td>
                                        <td class="text-right">10,000</td>
                                        <td class="text-right">1,984,000</td>
                                        <td></td>
                                    </tr>

                                    <tr>
                                        <td>00000</td>
                                        <td class="text-left">PB TOEFL JUNIOR SET</td>
                                        <td class="text-right">2,500</td>
                                        <td class="text-right">10,000</td>
                                        <td class="text-right">1,984,000</td>
                                        <td></td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- 상세재고 리스트영역 끝 -->
                </div>

</template>

<script>
import dateSelect from '@/mixin/dateSelect'
import ItemSelectSinglePopup from '@/components/popup/common/ItemSelectSinglePopup'
import StockDatePrintPopup from '@/components/popup/print/StockDatePrintPopup.vue'

export default {
  mixins: [dateSelect],
  components: {
    ItemSelectSinglePopup,
    StockDatePrintPopup
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
        case 'itemSelectSingle': // 품목단일 선택
          this.modalPopupId = 'itemSelectSingle'
          break
        case 'stockDatePrint': // 기준일자 인쇄
          this.modalPopupId = 'stockDatePrint'
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
