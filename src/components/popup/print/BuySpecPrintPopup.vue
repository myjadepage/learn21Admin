<template>
      <div id="specPrintModal" class="modal-mask">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">매입 명세서 인쇄</h4>
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
                                        <div class="col-sm-2">
                                            <button type="button" class="btn btn-primary" @click="print">인쇄</button>
                                        </div>
                                        <div class="col-sm-4 d-flex align-items-center justify-content-end">
                                            <div class="styled-checkbox">
                                                <input type="checkbox" name="checkbox" id="chkPrint-1" checked />
                                                <label for="chkPrint-1">공급자용</label>
                                            </div>
                                            <div class="styled-checkbox">
                                                <input type="checkbox" name="checkbox" id="chkPrint-2" checked />
                                                <label for="chkPrint-2">공급받는자용</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="widget-body supply-print">
                                    <p class="d-flex justify-content-end margin-top-5">NO : 2000339493939-조민선</p>
                                    <table class="table table-bordered" summary="매입명세서 인쇄">
                                        <colgroup>
                                            <col width="8%" />
                                            <col width="*" />
                                            <col width="20%" />
                                            <col width="5%" />
                                            <col width="10%" />
                                            <col width="15%" />
                                            <col width="10%" />
                                            <col width="13%" />
                                        </colgroup>
                                        <tbody>
                                            <tr>
                                                <td colspan="2" rowspan="2" class="title">거래명세서</td>
                                                <td rowspan="2" class="text-center">[공급자용]</td>
                                                <td rowspan="5">공급자</td>
                                                <td>등록번호</td>
                                                <td colspan="3">123-333-3333</td>
                                            </tr>
                                            <tr>
                                                <td>상호<br />(법인명)</td>
                                                <td>(주)런이십일</td>
                                                <td>성명<br />(대표자)</td>
                                                <td>김신현</td>
                                            </tr>
                                            <tr>
                                                <td>거래일</td>
                                                <td>2020-09-15</td>
                                                <td>청담러닝/청송 귀하</td>
                                                <td>사업장<br />주소</td>
                                                <td colspan="3">성수일로 77, 5층 (성수동1가,서울숲IT밸리)</td>
                                            </tr>
                                            <tr>
                                                <td rowspan="2">합계<br />금액</td>
                                                <td colspan="2" rowspan="2" class="text-right">
                                                    <b class="price">삼백이십육만육천원정(W3,260.000)</b><br />(V.A.T포함)</td>
                                                <td>업태</td>
                                                <td>서비스</td>
                                                <td>종목</td>
                                                <td>도소매</td>
                                            </tr>
                                            <tr>
                                                <td>TEL</td>
                                                <td>02-568-5555</td>
                                                <td>FAX</td>
                                                <td>02-568-5555</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <table class="table table-bordered print-item" summary="품목명프린트 리스트">
                                        <colgroup>
                                            <col width="5%" />
                                            <col width="*" />
                                            <col width="7%" />
                                            <col width="10%" />
                                            <col width="10%" />
                                            <col width="10%" />
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th>NO</th>
                                                <th>품목명</th>
                                                <th>수량</th>
                                                <th>단가</th>
                                                <th>공급가</th>
                                                <th>부가세</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="text-center">1</td>
                                                <td>품목명1</td>
                                                <td class="text-center">3</td>
                                                <td class="text-right">13,000</td>
                                                <td class="text-right">39,000</td>
                                                <td class="text-right">10</td>
                                            </tr>
                                            <tr>
                                                <td class="text-center">1</td>
                                                <td>품목명1</td>
                                                <td class="text-center">3</td>
                                                <td class="text-right">13,000</td>
                                                <td class="text-right">39,000</td>
                                                <td class="text-right">10</td>
                                            </tr>
                                            <tr>
                                                <td class="text-center">1</td>
                                                <td>품목명1</td>
                                                <td class="text-center">3</td>
                                                <td class="text-right">13,000</td>
                                                <td class="text-right">39,000</td>
                                                <td class="text-right">10</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <table class="table table-bordered print-item" summary="품목명프린트 리스트">
                                        <colgroup>
                                            <col width="10%" />
                                            <col width="*" />
                                            <col width="7%" />
                                            <col width="10%" />
                                            <col width="10%" />
                                            <col width="10%" />
                                        </colgroup>
                                        <tbody>
                                            <tr>
                                                <td class="text-center">인수자</td>
                                                <td class="text-right"><span>(인)</span></td>
                                                <td class="text-right">10</td>
                                                <td class="text-center">소계</td>
                                                <td class="text-right">114,222</td>
                                                <td class="text-right">0</td>
                                            </tr>
                                            <tr>
                                                <td class="text-center">메모</td>
                                                <td colspan="5">8.25주문서</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="widget-body demand-print" id="demand-print">
                                    <p class="d-flex justify-content-end margin-top-5">NO : 2000339493939-조민선</p>
                                    <table class="table table-bordered" summary="매입명세서 인쇄">
                                        <colgroup>
                                            <col width="8%" />
                                            <col width="*" />
                                            <col width="20%" />
                                            <col width="5%" />
                                            <col width="10%" />
                                            <col width="15%" />
                                            <col width="10%" />
                                            <col width="13%" />
                                        </colgroup>
                                        <tbody>
                                            <tr>
                                                <td colspan="2" rowspan="2" class="title">거래명세서</td>
                                                <td rowspan="2" class="text-center">[공급자용]</td>
                                                <td rowspan="5">공급자</td>
                                                <td>등록번호</td>
                                                <td colspan="3">123-333-3333</td>
                                            </tr>
                                            <tr>
                                                <td>상호<br />(법인명)</td>
                                                <td>(주)런이십일</td>
                                                <td>성명<br />(대표자)</td>
                                                <td>김신현</td>
                                            </tr>
                                            <tr>
                                                <td>거래일</td>
                                                <td>2020-09-15</td>
                                                <td>청담러닝/청송 귀하</td>
                                                <td>사업장<br />주소</td>
                                                <td colspan="3">성수일로 77, 5층 (성수동1가,서울숲IT밸리)</td>
                                            </tr>
                                            <tr>
                                                <td rowspan="2">합계<br />금액</td>
                                                <td colspan="2" rowspan="2" class="text-right">
                                                    <b class="price">삼백이십육만육천원정(W3,260.000)</b><br />(V.A.T포함)</td>
                                                <td>업태</td>
                                                <td>서비스</td>
                                                <td>종목</td>
                                                <td>도소매</td>
                                            </tr>
                                            <tr>
                                                <td>TEL</td>
                                                <td>02-568-5555</td>
                                                <td>FAX</td>
                                                <td>02-568-5555</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <table class="table table-bordered print-item" summary="품목명프린트 리스트">
                                        <colgroup>
                                            <col width="5%" />
                                            <col width="*" />
                                            <col width="7%" />
                                            <col width="10%" />
                                            <col width="10%" />
                                            <col width="10%" />
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th>NO</th>
                                                <th>품목명</th>
                                                <th>수량</th>
                                                <th>단가</th>
                                                <th>공급가</th>
                                                <th>부가세</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="text-center">1</td>
                                                <td>품목명1</td>
                                                <td class="text-center">3</td>
                                                <td class="text-right">13,000</td>
                                                <td class="text-right">39,000</td>
                                                <td class="text-right">10</td>
                                            </tr>
                                            <tr>
                                                <td class="text-center">1</td>
                                                <td>품목명1</td>
                                                <td class="text-center">3</td>
                                                <td class="text-right">13,000</td>
                                                <td class="text-right">39,000</td>
                                                <td class="text-right">10</td>
                                            </tr>
                                            <tr>
                                                <td class="text-center">1</td>
                                                <td>품목명1</td>
                                                <td class="text-center">3</td>
                                                <td class="text-right">13,000</td>
                                                <td class="text-right">39,000</td>
                                                <td class="text-right">10</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <table class="table table-bordered print-item" summary="품목명프린트 리스트">
                                        <colgroup>
                                            <col width="10%" />
                                            <col width="*" />
                                            <col width="7%" />
                                            <col width="10%" />
                                            <col width="10%" />
                                            <col width="10%" />
                                        </colgroup>
                                        <tbody>
                                            <tr>
                                                <td class="text-center">인수자</td>
                                                <td class="text-right"><span>(인)</span></td>
                                                <td class="text-right">10</td>
                                                <td class="text-center">소계</td>
                                                <td class="text-right">114,222</td>
                                                <td class="text-right">0</td>
                                            </tr>
                                            <tr>
                                                <td class="text-center">메모</td>
                                                <td colspan="5">8.25주문서</td>
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
