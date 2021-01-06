<template>
  <div id="salesSettlePrintModal" class="modal-mask">
    <div class="modal-dialog modal-item">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">매출 정산</h4>
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
                                        <button type="button" @click="print" class="btn btn-primary">인쇄</button>
                                    </div>
                                </div>
                                <div class="row">
                                    <h2 class="col-sm-12 d-flex justify-content-center print_title">매출 정산</h2>
                                    <div class="col-sm-12 d-flex justify-content-center print_title_period">(조회기간 : 2020-09-01 ~ 2020-09-17)</div>
                                </div>
                            </div>

                            <!----테이블 내용-->
                            <div class="widget">
                                <div class="widget-body">
                                    <table class="table table-bordered mb-0" summary="매출정산 리스트">
                                        <colgroup>
                                            <col width="10%">
                                            <col width=*>
                                            <col width="20%">
                                            <col width="10%">
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th>일자</th>
                                                <th>적요</th>
                                                <th>거래처</th>
                                                <th>담당자</th>
                                                <th>금액</th>
                                            </tr>
                                        </thead>
                                        <tfoot class="table-primary">
                                            <tr>
                                                <th class="text-center">[합계]</th>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td class="text-right">5,960</td>
                                            </tr>
                                        </tfoot>

                                        <tbody>
                                            <tr>
                                                <td>2020-12-10</td>
                                                <td class="text-left"> PB TOEFL JUNIOR SET(A)</td>
                                                <td class="text-left"> (주)다래출판</td>
                                                <td>홍길동</td>
                                                <td class="text-right">200</td>
                                            </tr>
                                            <tr>
                                                <td>2020-12-10</td>
                                                <td class="text-left"> PB TOEFL JUNIOR SET(A)</td>
                                                <td class="text-left"> (주)다래출판</td>
                                                <td>홍길동</td>
                                                <td class="text-right">200</td>
                                            </tr>
                                            <tr>
                                                <td>2020-12-10</td>
                                                <td class="text-left"> PB TOEFL JUNIOR SET(A)</td>
                                                <td class="text-left"> (주)다래출판</td>
                                                <td>홍길동</td>
                                                <td class="text-right">200</td>
                                            </tr>
                                            <tr>
                                                <td>2020-12-10</td>
                                                <td class="text-left"> PB TOEFL JUNIOR SET(A)</td>
                                                <td class="text-left"> (주)다래출판</td>
                                                <td>홍길동</td>
                                                <td class="text-right">200</td>
                                            </tr>
                                            <tr>
                                                <td>2020-12-10</td>
                                                <td class="text-left"> PB TOEFL JUNIOR SET(A)</td>
                                                <td class="text-left"> (주)다래출판</td>
                                                <td>홍길동</td>
                                                <td class="text-right">200</td>
                                            </tr>
                                            <tr>
                                                <td>2020-12-10</td>
                                                <td class="text-left"> PB TOEFL JUNIOR SET(A)</td>
                                                <td class="text-left"> (주)다래출판</td>
                                                <td>홍길동</td>
                                                <td class="text-right">200</td>
                                            </tr>
                                            <tr>
                                                <td>2020-12-10</td>
                                                <td class="text-left"> PB TOEFL JUNIOR SET(A)</td>
                                                <td class="text-left"> (주)다래출판</td>
                                                <td>홍길동</td>
                                                <td class="text-right">200</td>
                                            </tr>
                                            <tr>
                                                <td>2020-12-10</td>
                                                <td class="text-left"> PB TOEFL JUNIOR SET(A)</td>
                                                <td class="text-left"> (주)다래출판</td>
                                                <td>홍길동</td>
                                                <td class="text-right">200</td>
                                            </tr>
                                            <tr>
                                                <td>2020-12-10</td>
                                                <td class="text-left"> PB TOEFL JUNIOR SET(A)</td>
                                                <td class="text-left"> (주)다래출판</td>
                                                <td>홍길동</td>
                                                <td class="text-right">200</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
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
