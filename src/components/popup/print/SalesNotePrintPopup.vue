<template>
  <div id="salesInvoicePrintModal" class="modal-mask">
    <div class="modal-dialog modal-item">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">매입처 원장</h4>
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
                                    <div class="col-sm-12 d-flex justify-content-center buy_title">매출처 원장</div>
                                    <div class="col-sm-12 d-flex justify-content-center buy_title_period">(조회기간 : 2020-09-01 ~ 2020-09-17)</div>
                                </div>
                            </div>

                            <!----테이블 내용-->
                            <div class="widget">
                                <div class="widget-header">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <table class="table table-bordered" summary="매입처 원장 검색하기">
                                                <colgroup>
                                                    <col width="7%">
                                                    <col width="30%">
                                                    <col width="10%">
                                                    <col width="20%">
                                                    <col width="7%">
                                                    <col width=*>
                                                </colgroup>
                                                <tbody>
                                                    <tr>
                                                        <th>거래처명</th>
                                                        <td class="text-left">k0011-키다리영어샵(광주)</td>
                                                        <th>사업자NO</th>
                                                        <td class="text-left">410-23-74203</td>
                                                        <th>대표이사</th>
                                                        <td class="text-left">오성일</td>

                                                    </tr>
                                                    <tr>
                                                        <th>주소</th>
                                                        <td class="text-left">광주 서구 쌍촌동 969-56 삼성이노베이션빌딩 5층</td>
                                                        <th>전화</th>
                                                        <td class="text-left">062-236-5689</td>
                                                        <th>거래잔액</th>
                                                        <td class="text-right"><b class="text-info">1,503,600</b></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                    </div>
                                </div>
                                <div class="widget-body">
                                    <table class="table table-bordered" summary="매입처원장 리스트">
                                        <colgroup>
                                            <col width="10%">
                                            <col width="5%">
                                            <col width="15%">
                                            <col width="5%">
                                            <col width="10%">
                                            <col width="7%">
                                            <col width="10%">
                                            <col width="10%">
                                            <col width="10%">
                                            <col width=*>
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th>일자</th>
                                                <th>구분</th>
                                                <th>품목</th>
                                                <th>수량</th>
                                                <th>단가</th>
                                                <th>공급율</th>
                                                <th>공급단가</th>
                                                <th>합계금액</th>
                                                <th>결제금액</th>
                                                <th>비고</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="table-active">
                                                <td class="text-center">[이월]</td>
                                                <td></td>
                                                <td></td>
                                                <td>0</td>
                                                <td class="text-right"></td>
                                                <td class="text-right"></td>
                                                <td class="text-right">0</td>
                                                <td class="text-right">0</td>
                                                <td class="text-right">0</td>
                                                <td></td>
                                            </tr>
                                        </tbody>

                                        <tbody>
                                            <tr>
                                                <td>2020-09-15</td>
                                                <td class="text-center">매입</td>
                                                <td class="text-left">PB TOEFL JUNIOR SET</td>
                                                <td>0</td>
                                                <td class="text-right">200,500</td>
                                                <td>100%</td>
                                                <td class="text-right">50,000</td>
                                                <td class="text-right">1,500,000</td>
                                                <td class="text-right">1,500,000</td>
                                                <td>안양평촌</td>
                                            </tr>
                                            <tr>
                                                <td>2020-09-15</td>
                                                <td class="text-center">매입</td>
                                                <td class="text-left">PB TOEFL JUNIOR SET</td>
                                                <td>0</td>
                                                <td class="text-right">200,500</td>
                                                <td>100%</td>
                                                <td class="text-right">50,000</td>
                                                <td class="text-right">1,500,000</td>
                                                <td class="text-right">1,500,000</td>
                                                <td>안양평촌</td>
                                            </tr>
                                            <tr>
                                                <td>2020-09-15</td>
                                                <td class="text-center">매입</td>
                                                <td class="text-left">PB TOEFL JUNIOR SET</td>
                                                <td>0</td>
                                                <td class="text-right">200,500</td>
                                                <td>100%</td>
                                                <td class="text-right">50,000</td>
                                                <td class="text-right">1,500,000</td>
                                                <td class="text-right">1,500,000</td>
                                                <td>안양평촌</td>
                                            </tr>

                                            <!---- 총합    -->
                                            <tr class="table-active sum_month">
                                                <th class="text-center">[월계]</th>
                                                <td></td>
                                                <td></td>
                                                <td class="text-right">11</td>
                                                <td class="text-right"></td>
                                                <td class="text-right"></td>
                                                <td class="text-right">1,650,000</td>
                                                <td class="text-right">1,650,000</td>
                                                <td class="text-right">1,650,000</td>
                                                <td></td>
                                            </tr>
                                            <tr class="table-active sum_total">
                                                <th class="text-center">[누계]</th>
                                                <td></td>
                                                <td></td>
                                                <td class="text-right">11</td>
                                                <td class="text-right"></td>
                                                <td class="text-right"></td>
                                                <td class="text-right">1,650,000</td>
                                                <td class="text-right">1,650,000</td>
                                                <td class="text-right">1,650,000</td>
                                                <td></td>
                                            </tr>
                                        </tbody>

                                        <tbody>

                                            <tr>
                                                <td>2020-09-15</td>
                                                <td class="text-center">매입</td>
                                                <td class="text-left">PB TOEFL JUNIOR SET</td>
                                                <td>5</td>
                                                <td class="text-right">200,500</td>
                                                <td>100%</td>
                                                <td class="text-right">50,000</td>
                                                <td class="text-right">1,500,000</td>
                                                <td class="text-right">1,500,000</td>
                                                <td class="text-left">안양평촌</td>
                                            </tr>
                                            <tr>
                                                <td>2020-09-15</td>
                                                <td class="text-center">매입</td>
                                                <td class="text-left">PB TOEFL JUNIOR SET</td>
                                                <td>5</td>
                                                <td class="text-right">200,500</td>
                                                <td>100%</td>
                                                <td class="text-right">50,000</td>
                                                <td class="text-right">1,500,000</td>
                                                <td class="text-right">1,500,000</td>
                                                <td class="text-left">안양평촌</td>
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
