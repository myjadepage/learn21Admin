<template>
  <div id="stockPrintModal" class="modal-mask">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">재고자산 조정</h4>
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
                                <div class="row d-flex justify-content-between align-items-center">
                                    <div class="col-sm-5">
                                        <button type="button" class="btn btn-primary" @click="print">인쇄</button>
                                    </div>
                                    <h2 class="col">재고자산 조정</h2>
                                </div>

                            </div>
                            <div class="widget-body">
                                <table class="table table-bordered totla-info" summary="재고자산조정 인쇄">
                                    <colgroup>
                                        <col width="15%">
                                        <col width="35%">
                                        <col width="15%">
                                        <col width="35%">
                                    </colgroup>

                                    <tbody>
                                        <tr>
                                            <th>발주일자</th>
                                            <td>2020-07-02</td>
                                            <th>전표번호</th>
                                            <td>2020202020</td>
                                        </tr>
                                        <tr>
                                            <th>처리자</th>
                                            <td>이성길</td>
                                            <th>계정과목</th>
                                            <td>잡손실</td>
                                        </tr>
                                        <tr>
                                            <th>처리유형</th>
                                            <td>감소(-)</td>
                                            <th>담당자</th>
                                            <td>이성길</td>
                                        </tr>
                                        <tr>
                                            <th>메모</th>
                                            <td colspan="3">가을학기 도서 주문서_다가치_2077552</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div class="row">
                                    <div class="col-sm-12 d-flex justify-content-end">
                                        <p>합계금액:159,000원</p>
                                    </div>
                                </div>

                                <table class="table table-bordered print-item" summary="재고자산조정 리스트">
                                    <colgroup>
                                        <col width="5%">
                                        <col width=*>
                                        <col width="10%">
                                        <col width="10%">
                                        <col width="10%">
                                        <col width="10%">
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th>NO</th>
                                            <th>품목명</th>
                                            <th>전산재고</th>
                                            <th>조사량</th>
                                            <th>조정량</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td class="text-left">품목명1</td>
                                            <td>-3</td>
                                            <td class="text-right">-1</td>
                                            <td class="text-right">3</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td class="text-left">품목명1</td>
                                            <td>-3</td>
                                            <td class="text-right">-1</td>
                                            <td class="text-right">3</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td class="text-left">품목명1</td>
                                            <td>-3</td>
                                            <td class="text-right">-1</td>
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
