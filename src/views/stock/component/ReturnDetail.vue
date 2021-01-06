<template>
  <div class="widget has-shadow">
                <div class="widget-header bordered">
                    <table class="table table-bordered" summary="선택된 반품품목">
                        <colgroup>
                            <col width="10%">
                            <col width=*>
                            <col width="10%">
                            <col width="15%">
                            <col width="15%">
                            <col width="15%">
                        </colgroup>
                        <thead>
                            <th>NO</th>
                            <th>품목</th>
                            <th>주문수량</th>
                            <th>단가</th>
                            <th>금액</th>
                            <th>재고수량</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td class="text-left">품목1</td>
                                <td>1</td>
                                <td>13,000</td>
                                <td>13,000</td>
                                <td>13</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div class="widget-body">
                    <h5><i class='la la-minus'></i>상담 접수</h5>
                    <table class="table table-bordered" summary="반품 상담접수">
                        <colgroup>
                            <col width="">
                            <col width="">
                            <col width="">
                            <col width="">
                            <col width="">
                            <col width="">
                            <col width="">
                        </colgroup>
                        <thead>
                            <tr>
                                <th>상담일자</th>
                                <th>상담유형1</th>
                                <th>상담유형2</th>
                                <th>접수자</th>
                                <th>처리자</th>
                                <th>관리메모</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2020-09-20</td>
                                <td>상담유형1</td>
                                <td>상담유형2</td>
                                <td>홍길동</td>
                                <td>홍길동</td>
                                <td class="text-left">관리메모 표기~~~~~</td>
                            </tr>

                            <tr>
                                <th colspan="3" class="text-center">고객상담 내용</th>
                                <th colspan="3" class="text-center">상담원 처리 내용</th>
                            </tr>

                            <tr>
                                <td colspan="3" class="text-left">고개상담 내용을 표기합니다.</td>
                                <td colspan="3" class="text-left">상담원 처리 내용을 표기합니다.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="widget-footer">
                    <div class="row  d-flex justify-content-end align-items-center">
                        <div class="col col-sm-1">
                            <datepicker :value="state.startdate" :format="getFormatDate" :language="ko" placeholder="날짜선택" input-class="form-control"></datepicker>
                        </div>
                        <div class="input-group col col-sm-1">
                            <span class="input-group-addon"><i class="la la-calendar"></i></span>
                        </div>
                        <div class="col col-sm-1">
                            <button type="button" class="btn btn-primary">수령 처리</button>
                        </div>
                    </div>
                </div>
            </div>
</template>

<script>
import datepicker from 'vuejs-datepicker'
import { ko } from 'vuejs-datepicker/dist/locale'

export default {
  components: { datepicker },
  data () {
    return {
      state: {
        startdate: new Date()
      },
      ko: ko
    }
  },
  methods: {
    getFormatDate (date) {
      return this.$moment(date).format('YYYY-MM-DD')
    }
  }
}
</script>

<style>

</style>
