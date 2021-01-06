<template>
  <div id="buyVendorPrintModal" class="modal-mask">
    <div class="modal-dialog modal-item">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">기간별 매입현황</h4>
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
                                    <div class="col-sm-12 d-flex justify-content-center buy_title">기간별 매입현황</div>
                                    <div class="col-sm-12 d-flex justify-content-center buy_title_period">(조회기간 : 2020-09-01 ~ 2020-09-17)</div>
                                </div>
                            </div>

                            <!----테이블 내용-->
                            <div class="widget-body" id="print">
                                <table class="table table-bordered" summary="상세재고 리스트">
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
                                <tfoot>
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
