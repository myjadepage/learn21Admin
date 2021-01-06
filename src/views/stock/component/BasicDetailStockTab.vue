<template>
  <div class="tab-pane show active">
                    <div class="widget has-shadow">
                        <div class="widget-body">
                            <table class="table table-bordered" summary="주문 검색하기">
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
                                        <th scope="row"><span class="text-primary">조회옵션</span></th>
                                        <td>
                                            <div class="row">
                                                <div class="col-sm-8">
                                                    <div class="styled-checkbox">
                                                        <input type="checkbox" name="checkbox" id="chkStock">
                                                        <label for="chkStock">재고 관리 안함 포함</label>
                                                    </div>
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
                                    <button class="btn btn-outline-primary" @click="openModalPopup('stockDetailStockPrint')">인쇄</button>
                                </div>
                                <stock-detail-stock-print-popup v-if="modalOpenFlag && modalPopupId === 'stockDetailStockPrint'" @close="closeModalPopup"></stock-detail-stock-print-popup>
                            </div>
                        </div>
                        <div class="widget-body">
                            <table id="stock-list-table" class="table table-bordered mb-0" summary="상세재고 리스트">
                                <colgroup>
                                    <col width="15%">
                                    <col width="7%">
                                    <col width="20%">
                                    <col width="7%">
                                    <col width="7%">
                                    <col width="7%">
                                    <col width=*>
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>대분류</th>
                                        <th>코드</th>
                                        <th>품목</th>
                                        <th>재고량</th>
                                        <th>단가</th>
                                        <th>금액</th>
                                        <th>비고</th>
                                    </tr>
                                </thead>
                                <tfoot style="display: table-row-group">
                                    <tr>
                                        <th class="text-center">합계</th>
                                        <th></th>
                                        <th></th>
                                        <th class="text-right">1,344</th>
                                        <th></th>
                                        <th class="text-right">2,500,000</th>
                                        <th></th>
                                    </tr>
                                </tfoot>
                                <tbody>

                                    <!--3개씩 tr 한묶음-->
                                    <tr>
                                        <td rowspan="3">청담러닝(A)</td>
                                        <td>[소계]</td>
                                        <td></td>
                                        <td class="text-right">200</td>
                                        <td class="text-right">2,500</td>
                                        <td class="text-right">10,000</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>000000</td>
                                        <td class="text-left">PB TOEFL JUNIOR SET</td>
                                        <td class="text-right">200</td>
                                        <td class="text-right">2,500</td>
                                        <td class="text-right">10,000</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>000000</td>
                                        <td class="text-left">PB TOEFL JUNIOR SET</td>
                                        <td class="text-right">200</td>
                                        <td class="text-right">2,500</td>
                                        <td class="text-right">10,000</td>
                                        <td></td>
                                    </tr>

                                    <!--3개씩 tr 한묶음-->
                                    <tr>
                                        <td rowspan="3">청담러닝(A)</td>
                                        <td>[소계]</td>
                                        <td></td>
                                        <td class="text-right">200</td>
                                        <td class="text-right">2,500</td>
                                        <td class="text-right">10,000</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>000000</td>
                                        <td class="text-left">PB TOEFL JUNIOR SET</td>
                                        <td class="text-right">200</td>
                                        <td class="text-right">2,500</td>
                                        <td class="text-right">10,000</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>000000</td>
                                        <td>PB TOEFL JUNIOR SET</td>
                                        <td class="text-right">200</td>
                                        <td class="text-right">2,500</td>
                                        <td class="text-right">10,000</td>
                                        <td></td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
</template>

<script>
import ItemSelectSinglePopup from '@/components/popup/common/ItemSelectSinglePopup'
import StockDetailStockPrintPopup from '@/components/popup/print/StockDetailStockPrintPopup.vue'

export default {
  components: {
    ItemSelectSinglePopup,
    StockDetailStockPrintPopup
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
        case 'stockDetailStockPrint': // 상세재고 인쇄
          this.modalPopupId = 'stockDetailStockPrint'
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
