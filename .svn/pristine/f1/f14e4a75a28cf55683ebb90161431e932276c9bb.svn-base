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
                                    <div class="col-sm-12 d-flex justify-content-center buy_title">재고 현황(기간 입출 재고)</div>
                                    <div class="col-sm-12 d-flex justify-content-center buy_title_period">(조회기간 : 2020-09-01 ~ 2020-09-17)</div>
                                </div>
                            </div>

                            <!----테이블 내용-->
                           <table id="stock-period-table" class="table table-bordered" summary="상세재고 리스트">
                                <colgroup>
                                    <col width="20%">
                                    <col width="7%">
                                    <col width="7%">
                                    <col width="7%">
                                    <col width="7%">
                                    <col width="7%">
                                    <col width="7%">
                                    <col width="7%">
                                    <col width="7%">
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th rowspan="2">품목</th>
                                        <th rowspan="2">이월</th>
                                        <th colspan="2">입고</th>
                                        <th colspan="2">출고</th>
                                        <th rowspan="2">재고량</th>
                                        <th rowspan="2">단가</th>
                                        <th rowspan="2">금액</th>
                                    </tr>
                                    <tr>
                                        <th>매입</th>
                                        <th>기타</th>
                                        <th>매출</th>
                                        <th>기타</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="text-left">PB TOEFL JUNIOR SET</td>
                                        <td class="text-right">1,500</td>
                                        <td class="text-right">200</td>
                                        <td class="text-right">10</td>
                                        <td class="text-right">300</td>
                                        <td class="text-right">20</td>
                                        <td class="text-right">2,500</td>
                                        <td class="text-right">10,000</td>
                                        <td class="text-right">1,984,000</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left">PB TOEFL JUNIOR SET (1)</td>
                                        <td class="text-right">1,500</td>
                                        <td class="text-right">200</td>
                                        <td class="text-right">10</td>
                                        <td class="text-right">300</td>
                                        <td class="text-right">20</td>
                                        <td class="text-right">2,500</td>
                                        <td class="text-right">10,000</td>
                                        <td class="text-right">1,984,000</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left">PB TOEFL JUNIOR SET</td>
                                        <td class="text-right">1,500</td>
                                        <td class="text-right">200</td>
                                        <td class="text-right">10</td>
                                        <td class="text-right">300</td>
                                        <td class="text-right">20</td>
                                        <td class="text-right">2,500</td>
                                        <td class="text-right">10,000</td>
                                        <td class="text-right">1,984,000</td>
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
