<template>
  <div class="modal-mask">
    <div class="modal-dialog modal-item">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">매입확정 인쇄</h4>
                <button type="button" class="close"  @click="$emit('close')">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">close</span>
                    </button>
            </div>
            <div class="modal-body">
                <div class="widget no-margin"  id="print">
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
                            <div class="widget-body">
                                <table id="buy-confirm-list" class="table table-bordered" summary="매입확정 리스트">
                                    <colgroup>
                                        <col width="10%">
                                        <col width="10%">
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
                                            <th>발주일자</th>
                                            <th>거래처</th>
                                            <th>품목</th>
                                            <th>발주수량</th>
                                            <th>입고수량</th>
                                            <th>잔량</th>
                                            <th>공급가</th>
                                            <th>합계금액</th>
                                            <th>잔량합계금액</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td class="text-right">500</td>
                                            <td class="text-right">18</td>
                                            <td class="text-right">20</td>
                                            <td class="text-right">2,000,000</td>
                                            <td class="text-right">2,000,000</td>
                                            <td class="text-right">2,000,000</td>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        <tr>
                                            <td>2020-09-15</td>
                                            <td>청담러닝</td>
                                            <td class="text-left">PB TOEFL JUNIOR SET (A)</td>
                                            <td class="text-right">500</td>
                                            <td class="text-right">18</td>
                                            <td class="text-right">20</td>
                                            <td class="text-right">2,000,000</td>
                                            <td class="text-right">2,000,000</td>
                                            <td class="text-right">2,000,000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'buyConfirmPrintPopup',
  props: {
    title: {
      type: String,
      require: true
    }
  },
  data () {
    return {
    }
  },
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
