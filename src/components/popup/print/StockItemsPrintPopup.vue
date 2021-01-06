<template>
  <div id="buyVendorPrintModal" class="modal-mask">
    <div class="modal-dialog modal-item">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">재고 현황</h4>
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
                                        <button type="button" class="btn btn-primary" @click="print">인쇄</button>
                                    </div>
                                </div>
                                <div class="row">
                                    <h5 style="position: absolute;right: 10px;top: 51px;}">PB TOEFL JUNIOR SET</h5>
                                    <div class="col-sm-12 d-flex justify-content-center buy_title">품목별 상세 재고</div>
                                    <div class="col-sm-12 d-flex justify-content-center buy_title_period">(조회기간 : 2020-09-01 ~ 2020-09-17)</div>
                                </div>
                            </div>

                            <!----테이블 내용-->
                             <table class="table table-bordered mb-0" summary="품목별 상세 재고 리스트">
                        <colgroup>
                            <col width="7%">
                            <col width="5%">
                            <col width="15%">
                            <col width="7%">
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
                                <th>입고수량</th>
                                <th>출고수량</th>
                                <th>재고</th>
                                <th>거래처</th>
                                <th>증빙번호</th>
                                <th>비고</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="table-active">
                                <td class="text-center">[이월]</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td class="text-right">555</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>

                        <tbody>
                            <tr>
                                <td>2020-09-15</td>
                                <td class="text-center">매입</td>
                                <td class="text-right">5</td>
                                <td class="text-right">200,500</td>
                                <td class="text-right"></td>
                                <td>(주)청담러닝</td>
                                <td>123456789</td>
                                <td>[연동]쇼핑몰</td>
                            </tr>
                            <tr>
                                <td>2020-09-15</td>
                                <td class="text-center">매출</td>
                                <td class="text-right">5</td>
                                <td class="text-right">200,500</td>
                                <td class="text-right"></td>
                                <td>(주)청담러닝</td>
                                <td>123456789</td>
                                <td>[연동]쇼핑몰</td>
                            </tr>
                            <tr>
                                <td>2020-09-15</td>
                                <td class="text-center">자산조정</td>
                                <td class="text-right">5</td>
                                <td class="text-right">200,500</td>
                                <td class="text-right"></td>
                                <td>(주)청담러닝</td>
                                <td>123456789</td>
                                <td>[연동]쇼핑몰</td>
                            </tr>

                            <!---- 총합    -->
                            <tr class="table-active sum_month">
                                <th class="text-center">[월계]</th>
                                <td></td>
                                <td class="text-right">11</td>
                                <td class="text-right">12</td>
                                <td class="text-right">1,123</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr class="table-active sum_month">
                                <th class="text-center">[누계]</th>
                                <td></td>
                                <td class="text-right">11</td>
                                <td class="text-right">12</td>
                                <td class="text-right">1,123</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>

                        <tbody>
                            <tr>
                                <td>2020-09-15</td>
                                <td class="text-center">매출</td>
                                <td class="text-right">5</td>
                                <td class="text-right">200,500</td>
                                <td class="text-right"></td>
                                <td>(주)청담러닝</td>
                                <td>123456789</td>
                                <td>[연동]쇼핑몰</td>
                            </tr>
                            <tr>
                                <td>2020-09-15</td>
                                <td class="text-center">매장판매</td>
                                <td class="text-right">5</td>
                                <td class="text-right">200,500</td>
                                <td class="text-right"></td>
                                <td>(주)청담러닝</td>
                                <td>123456789</td>
                                <td>[연동]쇼핑몰</td>
                            </tr>

                            <!---- 총합    -->
                            <tr class="table-active sum_month">
                                <th class="text-center">[월계]</th>
                                <td></td>
                                <td class="text-right">11</td>
                                <td class="text-right">12</td>
                                <td class="text-right">1,123</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr class="table-active sum_month">
                                <th class="text-center">[누계]</th>
                                <td></td>
                                <td class="text-right">11</td>
                                <td class="text-right">12</td>
                                <td class="text-right">1,123</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>

                    </table>

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
