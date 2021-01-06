<template>
  <div id="buyNotPrintModal" class="modal-mask">
    <div class="modal-dialog modal-item">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">미입고 현황</h4>
                <button type="button" class="close"  @click="$emit('close')">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">close</span>
                    </button>
            </div>
            <div class="modal-body">
                <div class="widget no-margin">
                            <div class="widget-header">
                                <div class="row d-flex justify-content-between">
                                    <div class="col-sm-2">
                                        <button type="button" class="btn btn-primary" @click="print">인쇄</button>
                                    </div>
                                </div>
                                <div class="row">
                                    <h2 class="col-sm-12 d-flex justify-content-center print_title">미입고 현황</h2>
                                    <div class="col-sm-12 d-flex justify-content-center print_title_period">(조회기간 : 2020-09-01 ~ 2020-09-17)</div>
                                </div>
                            </div>

                            <!----테이블 내용-->
                            <div class="widget" id="print">
                                <div class="widget-body">
                                    <table class="table table-bordered mb-0" summary="미입고현황 리스트">
                                        <colgroup>
                                            <col width="10%">
                                            <col width="10%">
                                            <col width="15%">
                                            <col width=*>
                                            <col width="7%">
                                            <col width="7%">
                                            <col width="7%">
                                            <col width="10%">
                                            <col width="10%">
                                            <col width="10%">
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th>전표번호</th>
                                                <th>발주일자</th>
                                                <th>거래처</th>
                                                <th>품목</th>
                                                <th>발주수량</th>
                                                <th>입고수량</th>
                                                <th>미입고수량</th>
                                                <th>공급가</th>
                                                <th>합계금액</th>
                                                <th>잔량합계금액</th>
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                                <th class="text-center">[합계]</th>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td class="text-right">5,960</td>
                                                <td class="text-right">5,960</td>
                                                <td class="text-right">5,960</td>
                                                <td class="text-right">5,960,000</td>
                                                <td class="text-right">5,960,000</td>
                                                <td class="text-right">5,960,000</td>
                                            </tr>
                                        </tfoot>

                                        <tbody>
                                            <tr>
                                                <td>1234567</td>
                                                <td>2020-12-10</td>
                                                <td>(주)다래출판</td>
                                                <td>PB TOEFL JUNIOR SET(A)</td>
                                                <td class="text-right">200</td>
                                                <td class="text-right">180</td>
                                                <td class="text-right">20</td>
                                                <td class="text-right">250,000,000</td>
                                                <td class="text-right">250,000,000</td>
                                                <td class="text-right">250,000,000</td>
                                            </tr>
                                            <tr>
                                                <td>1234567</td>
                                                <td>2020-12-10</td>
                                                <td>(주)다래출판</td>
                                                <td>PB TOEFL JUNIOR SET(A)</td>
                                                <td class="text-right">200</td>
                                                <td class="text-right">180</td>
                                                <td class="text-right">20</td>
                                                <td class="text-right">250,000,000</td>
                                                <td class="text-right">250,000,000</td>
                                                <td class="text-right">250,000,000</td>
                                            </tr>
                                            <tr>
                                                <td>1234567</td>
                                                <td>2020-12-10</td>
                                                <td>(주)다래출판</td>
                                                <td>PB TOEFL JUNIOR SET(A)</td>
                                                <td class="text-right">200</td>
                                                <td class="text-right">180</td>
                                                <td class="text-right">20</td>
                                                <td class="text-right">250,000,000</td>
                                                <td class="text-right">250,000,000</td>
                                                <td class="text-right">250,000,000</td>
                                            </tr>
                                        </tbody>
                                        <tbody>
                                            <tr>
                                                <td>1234567</td>
                                                <td>2020-12-10</td>
                                                <td>(주)다래출판</td>
                                                <td>PB TOEFL JUNIOR SET(A)</td>
                                                <td class="text-right">200</td>
                                                <td class="text-right">180</td>
                                                <td class="text-right">20</td>
                                                <td class="text-right">250,000,000</td>
                                                <td class="text-right">250,000,000</td>
                                                <td class="text-right">250,000,000</td>
                                            </tr>
                                            <tr>
                                                <td>1234567</td>
                                                <td>2020-12-10</td>
                                                <td>(주)다래출판</td>
                                                <td>PB TOEFL JUNIOR SET(A)</td>
                                                <td class="text-right">200</td>
                                                <td class="text-right">180</td>
                                                <td class="text-right">20</td>
                                                <td class="text-right">250,000,000</td>
                                                <td class="text-right">250,000,000</td>
                                                <td class="text-right">250,000,000</td>
                                            </tr>
                                            <tr>
                                                <td>1234567</td>
                                                <td>2020-12-10</td>
                                                <td>(주)다래출판</td>
                                                <td>PB TOEFL JUNIOR SET(A)</td>
                                                <td class="text-right">200</td>
                                                <td class="text-right">180</td>
                                                <td class="text-right">20</td>
                                                <td class="text-right">250,000,000</td>
                                                <td class="text-right">250,000,000</td>
                                                <td class="text-right">250,000,000</td>
                                            </tr>
                                        </tbody>
                                    </table>
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
