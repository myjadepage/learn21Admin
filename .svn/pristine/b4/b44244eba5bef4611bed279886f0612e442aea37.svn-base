<template>
  <div id="shipOrderPrintModal" class="modal-mask">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">출고지시서</h4>
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
                                        <button type="button" @click="print" class="btn btn-primary">인쇄</button>
                                    </div>
                                </div>
                            </div>
                            <div class="widget-body">
                                <h5 class="d-flex justify-content-end ">NO : 2000339493939-조민선</h5>
                                <table class="table table-bordered" summary="출고지시서 인쇄">
                                    <colgroup>
                                        <col width="5%">
                                        <col width="10%">
                                        <col width="15%">
                                        <col width="7%">
                                        <col width="13%">
                                        <col width="5%">
                                        <col width="10%">
                                        <col width="15%">
                                        <col width="7%">
                                        <col width="13%">
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th colspan="12">
                                                <h2>출고지시서-(회원거래처) : 대한통운</h2>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td rowspan="5">공급자</td>
                                            <td>등록번호</td>
                                            <td colspan="3">123-333-3333</td>
                                            <td rowspan="5">공급받는자</td>
                                            <td>등록번호</td>
                                            <td colspan="3">123-333-3333</td>
                                        </tr>
                                        <tr>
                                            <td>상호<br>(법인명)</td>
                                            <td>(주)런이십일</td>
                                            <td>성명</td>
                                            <td>김신현</td>
                                            <td>상호<br>(법인명)</td>
                                            <td>(주)런이십일</td>
                                            <td>성명</td>
                                            <td>김신현</td>
                                        </tr>
                                        <tr>
                                            <td>사업장<br>주소</td>
                                            <td colspan="3">성수일로 77, 5층 (성수동1가,서울숲IT밸리)</td>
                                            <td>사업장<br>주소</td>
                                            <td colspan="3">성수일로 77, 5층 (성수동1가,서울숲IT밸리)</td>
                                        </tr>
                                        <tr>
                                            <td>업태</td>
                                            <td>서비스</td>
                                            <td>종목</td>
                                            <td>도소매</td>
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
                                            <td>TEL</td>
                                            <td>02-568-5555</td>
                                            <td>FAX</td>
                                            <td>02-568-5555</td>
                                        </tr>
                                    </tbody>

                                </table>

                                <table class="table table-bordered print-item" summary="품목명프린트 리스트">
                                    <colgroup>
                                        <col width="15%">
                                        <col width=*>
                                        <col width="10%">
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th>관리번호</th>
                                            <th>품목명</th>
                                            <th>수량</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="text-center">123456789</td>
                                            <td>품목명1</td>
                                            <td class="text-center">3</td>
                                        </tr>
                                        <tr>
                                            <td class="text-center">123456789</td>
                                            <td>품목명1</td>
                                            <td class="text-center">3</td>
                                        </tr>
                                        <tr>
                                            <td class="text-center">123456789</td>
                                            <td>품목명1</td>
                                            <td class="text-center">3</td>
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

<style scoped>
.print-item td {
  text-align: left;
}

</style>
