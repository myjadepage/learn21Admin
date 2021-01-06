<template>
  <div id="deliveryReturnStatusPrintModal" class="modal-mask">
    <div class="modal-dialog modal-item">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">반품처리 현황</h4>
                <button type="button" class="close" @click="$emit('close')">
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
                                    <div class="col-sm-12 d-flex justify-content-center buy_title">반품처리 현황 </div>
                                    <div class="col-sm-12 d-flex justify-content-center buy_title_period">(조회 기간 : 2020-09-01 ~ 2020-09-16)</div>
                                </div>
                            </div>

                            <!----테이블 내용-->
                            <div class="widget">
                                <div class="widget-body">
                                    <table class="table table-bordered mb-0" summary="반품처리현황 리스트">
                                        <colgroup>
                                            <col width="10%">
                                            <col width="10%">
                                            <col width="10%">
                                            <col width="10%">
                                            <col width="7%">
                                            <col width="7%">
                                            <col width="10%">
                                            <col width="10%">
                                            <col width="10%">
                                            <col width="5%">
                                            <col width=*>
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th>주문일</th>
                                                <th>결제일</th>
                                                <th>반품접수일</th>
                                                <th>주문번호</th>
                                                <th>주문자</th>
                                                <th>배송구분</th>
                                                <th>주문금액</th>
                                                <th>송장번호</th>
                                                <th>수취인번호</th>
                                                <th>우편번호</th>
                                                <th>주소</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="text-center">2020-09-15</td>
                                                <td class="text-center">2020-09-15</td>
                                                <td class="text-center">2020-09-15</td>
                                                <td class="text-center">123456789</td>
                                                <td class="text-center">홍길동</td>
                                                <td class="text-center">수령</td>
                                                <td class="text-center">250,000</td>
                                                <td class="text-center">123456789</td>
                                                <td class="text-center">010-2234-1235</td>
                                                <td class="text-center">14770</td>
                                                <td>서울시 강남구 대치동</td>
                                            </tr>
                                            <tr>

                                                <td class="text-center">2020-09-15</td>
                                                <td class="text-center">2020-09-15</td>
                                                <td class="text-center">2020-09-15</td>
                                                <td class="text-center">123456789</td>
                                                <td class="text-center">홍길동</td>
                                                <td class="text-center text-danger">미수령</td>
                                                <td class="text-center">250,000</td>
                                                <td class="text-center">123456789</td>
                                                <td class="text-center">010-2234-1235</td>
                                                <td class="text-center">14770</td>
                                                <td>서울시 강남구 대치동</td>
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
