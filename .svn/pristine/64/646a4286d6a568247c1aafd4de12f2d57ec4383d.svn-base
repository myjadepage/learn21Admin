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
                        <div class="widget no-margin">
                            <div class="widget-header">
                                <div class="row d-flex justify-content-between">
                                    <div class="col-sm-2">
                                        <button type="button" class="btn btn-primary" @click="print">인쇄</button>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12 d-flex justify-content-center buy_title">재고 현황(상세 재고)</div>
                                    <div class="col-sm-12 d-flex justify-content-center buy_title_period">(조회기간 : 2020-09-01 ~ 2020-09-17)</div>
                                </div>
                            </div>

                            <!----테이블 내용-->
                            <table id="stock-list-table" class="table table-bordered mb-0" summary="상세재고 리스트">
                                <colgroup>
                                    <col width="15%">
                                    <col width="7%">
                                    <col width=*>
                                    <col width="7%">
                                    <col width="7%">
                                    <col width="10%">
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>대분류</th>
                                        <th>코드</th>
                                        <th>품목</th>
                                        <th>재고량</th>
                                        <th>단가</th>
                                        <th>금액</th>
                                    </tr>
                                </thead>
                                <tfoot style="display: table-row-group">
                                    <tr>
                                        <th colspan="3">합계</th>
                                        <th class="text-right">1,344</th>
                                        <th></th>
                                        <th class="text-right">2,500,000</th>
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
                                    </tr>
                                    <tr>
                                        <td>000000</td>
                                        <td class="text-left">PB TOEFL JUNIOR SET</td>
                                        <td class="text-right">200</td>
                                        <td class="text-right">2,500</td>
                                        <td class="text-right">10,000</td>
                                    </tr>
                                    <tr>
                                        <td>000000</td>
                                        <td class="text-left">PB TOEFL JUNIOR SET</td>
                                        <td class="text-right">200</td>
                                        <td class="text-right">2,500</td>
                                        <td class="text-right">10,000</td>
                                    </tr>

                                    <!--3개씩 tr 한묶음-->
                                    <tr>
                                        <td rowspan="3">청담러닝(A)</td>
                                        <td>[소계]</td>
                                        <td></td>
                                        <td class="text-right">200</td>
                                        <td class="text-right">2,500</td>
                                        <td class="text-right">10,000</td>
                                    </tr>
                                    <tr>
                                        <td>000000</td>
                                        <td class="text-left">PB TOEFL JUNIOR SET</td>
                                        <td class="text-right">200</td>
                                        <td class="text-right">2,500</td>
                                        <td class="text-right">10,000</td>
                                    </tr>
                                    <tr>
                                        <td>000000</td>
                                        <td>PB TOEFL JUNIOR SET</td>
                                        <td class="text-right">200</td>
                                        <td class="text-right">2,500</td>
                                        <td class="text-right">10,000</td>
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
