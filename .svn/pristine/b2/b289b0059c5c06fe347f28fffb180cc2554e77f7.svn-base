<template>
  <div id="itemOrderPrintModal" class="modal-mask">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">품목별 집품내역</h4>
                <button type="button" class="close" @click="$emit('close')">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">close</span>
                    </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="widget no-margin" id="print">
                            <div class="widget-header bordered">
                                <div class="row d-flex justify-content-between">
                                    <div class="col-sm-5">
                                        <button type="button" @click="print" class="btn btn-primary">인쇄</button>
                                    </div>
                                    <h2 class="col-sm-7">품목별 집품내역</h2>
                                </div>
                            </div>
                            <div class="widget-body">
                                <table class="table table-bordered print-item" summary="품목별 집품내역 리스트">
                                    <colgroup>
                                        <col width="15%">
                                        <col width=*>
                                        <col width="20%">
                                        <col width="10%">
                                        <col width="10%">
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th>관리코드</th>
                                            <th>품목명</th>
                                            <th>규격</th>
                                            <th>재고수량</th>
                                            <th>출고수량</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>LN12345678</td>
                                            <td class="text-left">품목명1</td>
                                            <td>L105</td>
                                            <td class="text-right">12</td>
                                            <td class="text-right">3</td>
                                        </tr>
                                        <tr>
                                            <td>LN12345678</td>
                                            <td class="text-left">품목명1</td>
                                            <td>L105</td>
                                            <td class="text-right">23</td>
                                            <td class="text-right">3</td>
                                        </tr>
                                        <tr>
                                            <td>LN12345678</td>
                                            <td class="text-left">품목명1</td>
                                            <td>L105</td>
                                            <td class="text-right">23</td>
                                            <td class="text-right">3</td>
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
