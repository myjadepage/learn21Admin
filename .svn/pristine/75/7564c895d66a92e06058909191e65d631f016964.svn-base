<template>
  <div id="buyVendorPrintModal" class="modal-mask">
    <div class="modal-dialog modal-item">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">품목별 매입현황</h4>
                <button type="button" class="close"  @click="$emit('close')">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">close</span>
                    </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="widget no-margin">
                            <div class="widget-header">
                                <div class="row d-flex justify-content-between">
                                    <div class="col-sm-2">
                                        <button type="button" class="btn btn-primary" @click="print">인쇄</button>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12 d-flex justify-content-center buy_title">품목별 매입현황</div>
                                    <div class="col-sm-12 d-flex justify-content-center buy_title_period">(조회기간 : 2020-09-01 ~ 2020-09-17)</div>
                                </div>
                            </div>

                            <!----테이블 내용-->
                            <div class="widget-body" id="print">
                                <table id="stock-list-table" class="table table-bordered mb-0" summary="품목별 매입조회 리스트">
                                <colgroup>
                                    <col width="20%">
                                    <col width="10%">
                                    <col width="15%">
                                    <col width="5%">
                                    <col width="7%">
                                    <col width="7%">
                                    <col width="7%">
                                    <col width="7%">
                                    <col width=*>
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>품목</th>
                                        <th>일자</th>
                                        <th>거래처</th>
                                        <th>수량</th>
                                        <th>단가</th>
                                        <th>공급가</th>
                                        <th>부가세</th>
                                        <th>합계금액</th>
                                        <th>메모</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>합계</th>
                                        <th></th>
                                        <th></th>
                                        <th class="text-right">1,344</th>
                                        <th></th>
                                        <th class="text-right">2,500,000</th>
                                        <th class="text-right">0</th>
                                        <th class="text-right">2,500,000</th>
                                        <th></th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    <tr>
                                        <th rowspan="4">PB TOEFL JNIOR SET(A)</th>
                                        <th class="text-center">[소계]</th>
                                        <td></td>
                                        <td>80</td>
                                        <td></td>
                                        <td class="text-right">100,000</td>
                                        <td class="text-right">0</td>
                                        <td class="text-right">100,000</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>2020-09-15</th>
                                        <th class="text-center">[소계]</th>
                                        <td>80</td>
                                        <td></td>
                                        <td class="text-right">1,980,000</td>
                                        <td class="text-right">0</td>
                                        <td class="text-right">1,980,000</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th colspan="2">거래처1</th>
                                        <td>40</td>
                                        <td class="text-right">24,452</td>
                                        <td class="text-right">1,458,000</td>
                                        <td class="text-right">0</td>
                                        <td class="text-right">450,111</td>
                                        <td class="text-left">세트도서</td>
                                    </tr>
                                    <tr>
                                        <th colspan="2">거래처1</th>
                                        <td>40</td>
                                        <td class="text-right">24,452</td>
                                        <td class="text-right">1,458,000</td>
                                        <td class="text-right">0</td>
                                        <td class="text-right">450,111</td>
                                        <td class="text-left">세트도서</td>
                                    </tr>

                                    <tr>
                                        <th rowspan="2">PB TOEFL JNIOR SET(A)</th>
                                        <th>2020-09-15</th>
                                        <th class="text-center">[소계]</th>
                                        <td>80</td>
                                        <td></td>
                                        <td class="text-right">100,000</td>
                                        <td class="text-right">0</td>
                                        <td class="text-right">100,000</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th colspan="2">거래처2</th>
                                        <td>65</td>
                                        <td class="text-right">1,980,000</td>
                                        <td class="text-right">30,000</td>
                                        <td class="text-right">0</td>
                                        <td class="text-right">1,980,000</td>
                                        <td class="text-left">세트도서</td>
                                    </tr>

                                    <tr>
                                        <th rowspan="2">PB TOEFL JNIOR SET(A)</th>
                                        <th>2020-09-15</th>
                                        <th class="text-center">[소계]</th>
                                        <td>80</td>
                                        <td></td>
                                        <td class="text-right">100,000</td>
                                        <td class="text-right">0</td>
                                        <td class="text-right">100,000</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th colspan="2">거래처3</th>
                                        <td>65</td>
                                        <td class="text-right">1,980,000</td>
                                        <td class="text-right">30,000</td>
                                        <td class="text-right">0</td>
                                        <td class="text-right">1,980,000</td>
                                        <td class="text-left">세트도서</td>
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
