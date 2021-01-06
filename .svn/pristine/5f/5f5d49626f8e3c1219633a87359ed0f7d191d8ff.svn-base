<template>
  <div class="tab-pane show active">
                    <div class="widget has-shadow">
                        <div class="widget-body">
                            <table class="table table-bordered" summary="기간별 매출 검색하기">
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
                                    </tr>
                                    <tr>
                                        <th><span class="text-primary">품목 / 담당자</span></th>
                                        <td>
                                            <div class="row">
                                                <div class="col col-sm-5">
                                                    <div class="input-group">
                                                        <input type="text" class="form-control" placeholder="품목검색">
                                                        <button type="button" class="btn btn-sm btn-secondary" @click="openModalPopup('itemSelectSingle')"><i class="la la-search"></i></button>
                                                        <item-select-single-popup v-if="modalOpenFlag && modalPopupId === 'itemSelectSingle'" @close="closeModalPopup"></item-select-single-popup>
                                                    </div>
                                                </div>
                                                <div class="col col-sm-3">
                                                    <select class="form-control">
                                                        <option>담당자</option>
                                                        <option>Ketchup</option>
                                                        <option>Relish</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </td>

                                        <th scope="row"><span class="text-primary">거래처</span></th>
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

                    <!-- 3. 기간별 매출 리스트영역 시작 -->
                    <div class="widget has-shadow">
                        <div class="widget-header bordered">
                            <div class="row">
                                <div
                                    class="col-sm-6 d-flex align-items-center justify-content-md-start justify-content-center">
                                    <select class="form-control col-sm-2">
                                        <option>표시갯수</option>
                                        <option>10개</option>
                                        <option>20개</option>
                                        <option>30개</option>
                                    </select>
                                    <label class="col-sm-4">조회건수 : 20개</label>
                                </div>
                                <div
                                    class="col-sm-6 d-flex align-items-center justify-content-md-end justify-content-center">
                                    <button class="btn btn-outline-primary btn_excel">엑셀다운로드</button>
                                    <button class="btn btn-outline-secondary" @click="openModalPopup('salesSearchPeriodPrint')">인쇄</button>
                                </div>
                                <sales-search-peiod-print-popup v-if="modalOpenFlag && modalPopupId === 'salesSearchPeriodPrint'" @close="closeModalPopup"></sales-search-peiod-print-popup>
                            </div>
                        </div>
                        <div class="widget-body">
                            <table class="table table-bordered" summary="기간별 매출 리스트">
                                <colgroup>
                                    <col width="10%">
                                    <col width="20%">
                                    <col width="7%">
                                    <col width="7%">
                                    <col width="7%">
                                    <col width="7%">
                                    <col width="10%">
                                    <col width=*>
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>일자</th>
                                        <th>거래처</th>
                                        <th>수량</th>
                                        <th>단가</th>
                                        <th>공급가</th>
                                        <th>부가세</th>
                                        <th>합계</th>
                                        <th>메모</th>
                                    </tr>
                                </thead>
                                <tfoot class="table-primary">
                                    <tr>
                                        <th>합계</th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th class="text-right">2,500,000</th>
                                        <th class="text-right">0</th>
                                        <th class="text-right">2,500,000</th>
                                        <th></th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    <tr>
                                        <th rowspan="4" class="text-center">2020-09-15</th>
                                        <th class="text-center">[소계]</th>
                                        <td class="text-right">500</td>
                                        <td class="text-right"></td>
                                        <td class="text-right">984,000</td>
                                        <td class="text-right">0</td>
                                        <td class="text-right">100,100</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>거래처1</th>
                                        <td class="text-right">500</td>
                                        <td class="text-right">12,000</td>
                                        <td class="text-right">984,000</td>
                                        <td class="text-right">0</td>
                                        <td class="text-right">100,100</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>거래처2</th>
                                        <td class="text-right">500</td>
                                        <td class="text-right">12,000</td>
                                        <td class="text-right">984,000</td>
                                        <td class="text-right">0</td>
                                        <td class="text-right">100,100</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>거래처3</th>
                                        <td class="text-right">500</td>
                                        <td class="text-right">12,000</td>
                                        <td class="text-right">984,000</td>
                                        <td class="text-right">0</td>
                                        <td class="text-right">100,100</td>
                                        <td></td>
                                    </tr>

                                    <tr>
                                        <th rowspan="2" class="text-center">2020-09-15</th>
                                        <th class="text-center">[소계]</th>
                                        <td class="text-right">500</td>
                                        <td class="text-right"></td>
                                        <td class="text-right">984,000</td>
                                        <td class="text-right">0</td>
                                        <td class="text-right">100,100</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>거래처4</th>
                                        <td class="text-right">500</td>
                                        <td class="text-right">12,000</td>
                                        <td class="text-right">984,000</td>
                                        <td class="text-right">0</td>
                                        <td class="text-right">100,100</td>
                                        <td></td>
                                    </tr>

                                    <tr>
                                        <th rowspan="2" class="text-center">2020-09-15</th>
                                        <th class="text-center">[소계]</th>
                                        <td class="text-right">500</td>
                                        <td class="text-right"></td>
                                        <td class="text-right">984,000</td>
                                        <td class="text-right">0</td>
                                        <td class="text-right">100,100</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>거래처5</th>
                                        <td class="text-right">500</td>
                                        <td class="text-right">12,000</td>
                                        <td class="text-right">984,000</td>
                                        <td class="text-right">0</td>
                                        <td class="text-right">100,100</td>
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
import VendorListPopup from '@/components/popup/common/VendorListPopup.vue'
import ItemSelectSinglePopup from '@/components/popup/common/ItemSelectSinglePopup.vue'
import SalesSearchPeiodPrintPopup from '../../../components/popup/print/SalesSearchPeiodPrintPopup.vue'

export default {
  mixins: [
    dateSelect
  ],
  components: {
    VendorListPopup,
    ItemSelectSinglePopup,
    SalesSearchPeiodPrintPopup
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
        case 'itemSelectSingle': // 품목단일 선택
          this.modalPopupId = 'itemSelectSingle'
          break
        case 'salesSearchPeriodPrint': // 기간별매출 인쇄
          this.modalPopupId = 'salesSearchPeriodPrint'
          break
      }
      this.modalOpenFlag = true
      document.body.classList.add('modal-open')
    },
    // 모달창 close
    closeModalPopup () {
      this.modalPopupId = ''
      this.modalOpenFlag = false
      document.body.classList.remove('modal-open')
    }
  }
}
</script>

<style>

</style>
