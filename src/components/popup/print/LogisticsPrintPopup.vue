<template>
  <div id="stockShopPrintModal" class="modal-mask">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">가맹점물류이동</h4>
                <button type="button" class="close" @click="$emit('close')">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">close</span>
                    </button>
            </div>
            <div class="modal-body">
                        <div class="widget no-margin" id="print">
                            <div class="widget-header bordered">
                                <div class="row d-flex justify-content-between">
                                    <div class="col-sm-4">
                                        <button type="button" @click="print" class="btn btn-primary">인쇄</button>
                                    </div>
                                    <h2 class="col-sm-8">가맹점물류이동</h2>
                                </div>
                            </div>
                            <div class="widget-body supply-print no-padding">
                                <table class="table table-bordered" summary="가맹점물류이동 인쇄">
                                    <colgroup>
                                        <col width="15%">
                                        <col width="35%">
                                        <col width="15%">
                                        <col width="35%">
                                    </colgroup>

                                    <tbody>
                                        <tr>
                                            <th>처리일자</th>
                                            <td class="text-left">2020-07-02</td>
                                            <th>전표번호</th>
                                            <td class="text-left">2020202020</td>
                                        </tr>
                                        <tr>
                                            <th>이후 가맹점</th>
                                            <td class="text-left">화정 청담어학원</td>
                                            <th>이전/이후 창고</th>
                                            <td class="text-left">기본물류창고/매장창고</td>
                                        </tr>
                                        <tr>
                                            <th>처리자</th>
                                            <td class="text-left">홍길동</td>
                                            <th>담당자</th>
                                            <td class="text-left">이성길</td>
                                        </tr>
                                        <tr>
                                            <th>메모</th>
                                            <td colspan="3"  class="text-left">SB 재고 이동</td>
                                        </tr>
                                    </tbody>

                                </table>

                                <div class="row">
                                    <div class="col-sm-12 d-flex justify-content-end">
                                        <p>합계금액:159,000원</p>
                                    </div>
                                </div>

                                <table class="table table-bordered print-item" summary="가맹점물류이동 리스트">
                                    <colgroup>
                                        <col width="5%">
                                        <col width="20%">
                                        <col width=*>
                                        <col width="10%">
                                        <col width="10%">
                                        <col width="10%">
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th>NO</th>
                                            <th>관리코드</th>
                                            <th>품목명</th>
                                            <th>수량</th>
                                            <th>단가</th>
                                            <th>합계금액</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>ECN-0199-2015-74</td>
                                            <td class="text-left">품목명1</td>
                                            <td>2</td>
                                            <td class="text-right">15,000</td>
                                            <td class="text-right">39,000</td>
                                        </tr>
                                       <tr>
                                            <td>1</td>
                                            <td>ECN-0199-2015-74</td>
                                            <td class="text-left">품목명1</td>
                                            <td>2</td>
                                            <td class="text-right">15,000</td>
                                            <td class="text-right">39,000</td>
                                        </tr>
                                       <tr>
                                            <td>1</td>
                                            <td>ECN-0199-2015-74</td>
                                            <td class="text-left">품목명1</td>
                                            <td>2</td>
                                            <td class="text-right">15,000</td>
                                            <td class="text-right">39,000</td>
                                        </tr>
                                    </tbody>
                                </table>
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
