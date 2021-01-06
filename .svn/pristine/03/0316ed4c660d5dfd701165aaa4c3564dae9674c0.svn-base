<template>
  <div id="buyVendorPrintModal" class="modal-mask">
    <div class="modal-dialog modal-item">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">재고 현황</h4>
                <button type="button" class="close"  @click="$emit('close')">
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
                                        <button type="button" class="btn btn-primary" @click="print">인쇄</button>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12 d-flex justify-content-center buy_title">재고 현황(기준 입출 현황)</div>
                                    <div class="col-sm-12 d-flex justify-content-center buy_title_period">(조회기간 : 2020-09-01 ~ 2020-09-17)</div>
                                </div>
                            </div>

                            <!----테이블 내용-->
                             <table id="stock-state-table" class="table table-bordered" summary="가간입출 리스트">
                                <colgroup>
                                    <col width="10%">
                                    <col width="7%">
                                    <col width="7%">
                                    <col width=*>
                                    <col width="7%">
                                    <col width="8%">
                                    <col width="8%">
                                    <col width="7%">
                                    <col width="8%">
                                    <col width="8%">
                                    <col width="13%">
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>일자</th>
                                        <th>구분</th>
                                        <th>코드</th>
                                        <th>품목</th>
                                        <th>입고수량</th>
                                        <th>입고단가</th>
                                        <th>입고금액</th>
                                        <th>출고수량</th>
                                        <th>출고단가</th>
                                        <th>출고금액</th>
                                        <th>거래처</th>
                                    </tr>
                                </thead>
                                <tfoot style="display: table-row-group">
                                    <tr>
                                        <th class="text-center">합계</th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th class="text-right">3,020</th>
                                        <th></th>
                                        <th class="text-right">233,020</th>
                                        <th class="text-right">2,020</th>
                                        <th></th>
                                        <th class="text-right">212,020</th>
                                        <th></th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    <tr>
                                        <td>2020-02-02</td>
                                        <td>매입</td>
                                        <td>000000</td>
                                        <td class="text-left">PB TOEFL JUNIOR SET</td>
                                        <td class="text-right">1,500</td>
                                        <td class="text-right">200</td>
                                        <td class="text-right">100,000</td>
                                        <td class="text-right">300</td>
                                        <td class="text-right">10,000</td>
                                        <td class="text-right">1,984,000</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>2020-02-02</td>
                                        <td>매출</td>
                                        <td>000000</td>
                                        <td class="text-left">PB TOEFL JUNIOR SET</td>
                                        <td class="text-right">1,500</td>
                                        <td class="text-right">200</td>
                                        <td class="text-right">100,000</td>
                                        <td class="text-right">300</td>
                                        <td class="text-right">10,000</td>
                                        <td class="text-right">1,984,000</td>
                                        <td></td>
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
