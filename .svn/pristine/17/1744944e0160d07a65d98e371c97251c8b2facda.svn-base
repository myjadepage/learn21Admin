<template>
  <div id="salesVendorPrintModal" class="modal-mask">
    <div class="modal-dialog modal-item">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">거래처별 매출현황</h4>
                <button type="button" class="close" @click="$emit('close')">
                    <span aria-hidden="true">×</span>
                    <span class="sr-only">close</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="widget no-margin" id="print">
                            <div class="widget-header">
                                <div class="row d-flex justify-content-between">
                                    <div class="col-sm-2">
                                        <button type="button" @click="print" class="btn btn-primary">인쇄</button>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12 d-flex justify-content-center buy_title">거래처별 매출현황</div>
                                    <div class="col-sm-12 d-flex justify-content-center buy_title_period">(조회기간 :
                                        2020-09-01 ~ 2020-09-17)</div>
                                </div>
                            </div>

                            <!----테이블 내용-->
                            <div class="widget-body">
                                <table id="stock-list-table" class="table table-bordered mb-0" summary="거래처별 매출조회 리스트">
                                    <colgroup>
                                        <col width="13%">
                                        <col width="10%">
                                        <col width="20%">
                                        <col width="7%">
                                        <col width="7%">
                                        <col width="7%">
                                        <col width="7%">
                                        <col width="7%">
                                        <col width=*>
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th>거래처</th>
                                            <th>일자</th>
                                            <th>품목</th>
                                            <th>수량</th>
                                            <th>단가</th>
                                            <th>공급가</th>
                                            <th>부가세</th>
                                            <th>합계금액</th>
                                            <th>메모</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th rowspan="6">청담러닝</th>
                                            <th class="text-center">[소계]</th>
                                            <td></td>
                                            <td>80</td>
                                            <td></td>
                                            <td>100,000</td>
                                            <td>0</td>
                                            <td>100,000</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>2020-09-15</td>
                                            <td>[소계]</td>
                                            <td>80</td>
                                            <td></td>
                                            <td>1,980,000</td>
                                            <td>0</td>
                                            <td>1,980,000</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td class="text-right">002</td>
                                            <td>PB TOEFL JUNIOR SET</td>
                                            <td>40</td>
                                            <td>24,452</td>
                                            <td>1,458,000</td>
                                            <td>0</td>
                                            <td>450,111</td>
                                            <td>세트도서</td>
                                        </tr>
                                        <tr>
                                            <td class="text-right">002</td>
                                            <td>PB TOEFL JUNIOR SET</td>
                                            <td>40</td>
                                            <td>24,452</td>
                                            <td>1,458,000</td>
                                            <td>0</td>
                                            <td>450,111</td>
                                            <td>세트도서</td>
                                        </tr>
                                        <tr>
                                            <td class="text-right">002</td>
                                            <td>PB TOEFL JUNIOR SET</td>
                                            <td>40</td>
                                            <td>24,452</td>
                                            <td>1,458,000</td>
                                            <td>0</td>
                                            <td>450,111</td>
                                            <td>세트도서</td>
                                        </tr>
                                        <tr>
                                            <td class="text-right">002</td>
                                            <td>PB TOEFL JUNIOR SET</td>
                                            <td>40</td>
                                            <td>24,452</td>
                                            <td>1,458,000</td>
                                            <td>0</td>
                                            <td>450,111</td>
                                            <td>세트도서</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal-footer">
                <div class="col d-flex justify-content-between">
                    <div class="col-sm-6 d-flex justify-content-between">
                        PRINT DATE : 2020-09-16
                        <b>-2/2-</b>
                    </div>

                    <div class="col-sm-6 d-flex justify-content-end">
                        (주)런이십일
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  methods: {
    print () {
      this.$htmlToPaper('print', null, () => {
        console.log('프린트')
      })
    }
  }
}
</script>

<style>

</style>
