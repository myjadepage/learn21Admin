<template>
  <div id="specPrintModal" class="modal-mask">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">{{ title }}</h4>
                <button type="button" class="close"  @click="$emit('close')">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">close</span>
                    </button>
            </div>
            <div class="modal-body no-padding">
                <div class="widget no-margin">
                            <div class="widget-header">
                                <div class="d-flex justify-content-end">
                                    <button type="button" class="btn btn-primary" @click="print">인쇄</button>
                                </div>
                            </div>
                            <div class="widget-body"  id="print">
                                <h2 class="text-center">발주서</h2>
                                <table class="table table-bordered print-info" summary="발주서 인쇄">
                                    <colgroup>
                                        <col width="12%">
                                        <col width="35%">
                                        <col width="12%">
                                        <col width=*>
                                    </colgroup>

                                    <tbody>
                                        <tr>
                                            <th colspan="2" class=text-left>(주)런이십일</th>
                                            <th colspan="2" class=text-left>다가치출판</th>
                                        </tr>
                                        <tr>
                                            <th class="text-left">발주일자</th>
                                            <td>2020-07-02</td>
                                            <th class="text-left">대표이사</th>
                                            <td>김신현</td>
                                        </tr>
                                        <tr>
                                            <th class="text-left">입고요청</th>
                                            <td>2020-09-15</td>
                                            <th class="text-left">주소</th>
                                            <td>성수일로 77, 5층 (성수동1가,서울숲IT밸리)</td>
                                        </tr>
                                        <tr>
                                            <th class="text-left">담당자</th>
                                            <td>안보솔</td>
                                            <th class="text-left">전화</th>
                                            <td>02-568-5555</td>
                                        </tr>
                                        <tr>
                                            <th class="text-left"></th>
                                            <td></td>
                                            <th class="text-left">참조</th>
                                            <td>가을학기 도서 주문서_다가치_2077552</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div class="row">
                                    <div class="col-sm-12 d-flex justify-content-between">
                                        <p>아래와 같이 발주 합니다.</p>
                                        <p>일금:삼백이십만육천원정(W3,260,000) (V.A.T. 포함)</p>
                                    </div>
                                </div>
                                <table class="table table-bordered print-item" summary="품목명프린트 리스트">
                                    <colgroup>
                                        <col width="7%">
                                        <col width=*>
                                        <col width="10%">
                                        <col width="15%">
                                        <col width="15%">
                                        <col width="15%">
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th>NO</th>
                                            <th>품목명</th>
                                            <th>수량</th>
                                            <th>단가</th>
                                            <th>금액</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td class="text-left">품목명1</td>
                                            <td>3</td>
                                            <td class="text-right">13,000</td>
                                            <td class="text-right">39,000</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td class="text-left">품목명1</td>
                                            <td>3</td>
                                            <td class="text-right">13,000</td>
                                            <td class="text-right">39,000</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td class="text-left">품목명1</td>
                                            <td>3</td>
                                            <td class="text-right">13,000</td>
                                            <td class="text-right">39,000</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div class="d-flex justify-content-between mb-5">
                                    <span>PRINT DATE : {{ new Date | moment('YYYY-MM-YY') }}</span>
                                    <span class="d-flex justify-content-end">(주)런이십일</span>
                                </div>
                            </div>
                </div>
            </div>
<!--
            <div class="modal-footer no-padding-left">
                <div class="col d-flex justify-content-between">
                    <span>PRINT DATE : {{ new Date | moment('YYYY-MM-YY') }}</span>
                    <span class="d-flex justify-content-end">(주)런이십일</span>
                </div>
            </div> -->
        </div>
    </div>
</div>
</template>

<script>
export default {
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
