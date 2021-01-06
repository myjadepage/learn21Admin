<template>
  <div class="container-fluid">
    <div class="row">
      <PageHeader :pageCurrentInfo="pageCurrentInfo" />

      <div class="col-xl-12">

            <!-- 검색영역 시작-->
            <div class="widget has-shadow">
                <div class="widget-body">
                    <table class="table table-bordered" summary="매출처 원장 검색하기">
                        <colgroup>
                            <col width="10%">
                            <col width="40%">
                            <col width="10%">
                            <col width="40%">
                        </colgroup>
                        <tbody>
                            <tr>
                                <th><span class="text-primary">조회기간</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-8">
                                            <DateSelect @state-start-date="startDate" @state-end-date="endDate"
                                            :defStartDate="pfromDate"
                                            :defEndDate="ptoDate"></DateSelect>
                                        </div>
                                    </div>
                                </td>
                                <th scope="row"><span class="text-primary">가맹점</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col col-sm-5">
                                            <select class="form-control">
                                                        <option>그룹</option>
                                                        <option>Ketchup</option>
                                                        <option>Relish</option>
                                                    </select>
                                        </div>
                                        <div class="col col-sm-5">
                                            <select class="form-control">
                                                        <option>가맹점</option>
                                                        <option>Ketchup</option>
                                                        <option>Relish</option>
                                                    </select>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th><span class="text-primary">비고</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-5">
                                            <div class="styled-checkbox">
                                                <input type="checkbox" name="checkbox" id="check-1">
                                                <label for="check-1">인쇄포함</label>
                                            </div>

                                        </div>
                                    </div>
                                </td>

                                <th scope="row"><span class="text-primary">거래처</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-5">
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="거래처검색">
                                                 <button type="button" class="btn btn-sm btn-secondary" @click="openModalPopup('vendorList')"><i class="la la-search"></i></button>
                                                  <vendor-list-popup v-if="modalOpenFlag && modalPopupId === 'vendorList'" @close="closeModalPopup"></vendor-list-popup>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="text-center">
                        <button class="btn btn-primary">조회</button>
                    </div>

                </div>
            </div>
            <!-- 검색영역 끝-->

            <!-- 리스트영역 시작 -->
            <div class="widget has-shadow">
                <div class="widget-header bordered">
                    <div class="row">
                        <div class="col-sm-12">
                            <table class="table table-bordered" summary="매출처 원장 검색하기">
                                <colgroup>
                                    <col width="7%">
                                    <col width="30%">
                                    <col width="7%">
                                    <col width="20%">
                                    <col width="7%">
                                    <col width=*>
                                    <col width="10%">
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <th>거래처명</th>
                                        <td class="text-left">k0011-키다리영어샵(광주)</td>
                                        <th>사업자NO</th>
                                        <td class="text-left">410-23-74203</td>
                                        <th>대표이사</th>
                                        <td class="text-left">오성일</td>
                                        <td rowspan="2">
                                            <button type="button" class="btn btn-danger" @click="openModalPopup('salesNotePrint')">매출처<br>원장 인쇄</button>
                                        </td>
                                        <sales-note-print-popup v-if="modalOpenFlag && modalPopupId === 'salesNotePrint'" @close="closeModalPopup"></sales-note-print-popup>
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
                    <table class="table table-bordered" summary="매출처원장 리스트">
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
                                <th>잔액</th>
                                <th>비고</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="table-active">
                                <td>[이월]</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>

                        <tbody>
                            <tr>
                                <td>2020-09-15</td>
                                <td>매출</td>
                                <td class="text-left">PB TOEFL JUNIOR SET</td>
                                <td>5</td>
                                <td class="text-right">200,500</td>
                                <td></td>
                                <td class="text-right">50,000</td>
                                <td class="text-right">1,500,000</td>
                                <td class="text-right">1,500,000</td>
                                <td class="text-right">1,500,000</td>
                                <td class="text-left">안양평촌</td>
                            </tr>
                            <tr>
                                <td>2020-09-15</td>
                                <td>매출</td>
                                <td class="text-left">PB TOEFL JUNIOR SET</td>
                                <td>5</td>
                                <td class="text-right">200,500</td>
                                <td></td>
                                <td class="text-right">50,000</td>
                                <td class="text-right">1,500,000</td>
                                <td class="text-right">1,500,000</td>
                                <td class="text-right">1,500,000</td>
                                <td class="text-left">안양평촌</td>
                            </tr>
                            <tr>
                                <td>2020-09-15</td>
                                <td>매출</td>
                                <td class="text-left">PB TOEFL JUNIOR SET</td>
                                <td>5</td>
                                <td class="text-right">200,500</td>
                                <td></td>
                                <td class="text-right">50,000</td>
                                <td class="text-right">1,500,000</td>
                                <td class="text-right">1,500,000</td>
                                <td class="text-right">1,500,000</td>
                                <td class="text-left">안양평촌</td>
                            </tr>

                            <!---- 총합    -->
                            <tr class="table-active sum_month">
                                <th class="text-center">[월계]</th>
                                <td></td>
                                <td></td>
                                <td>11</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr class="table-active sum_total">
                                <th class="text-center">[누계]</th>
                                <td></td>
                                <td></td>
                                <td>11</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>

                        <tbody>
                            <tr>
                                <td>2020-09-15</td>
                                <td>매출</td>
                                <td class="text-left">PB TOEFL JUNIOR SET</td>
                                <td>5</td>
                                <td class="text-right">200,500</td>
                                <td></td>
                                <td class="text-right">50,000</td>
                                <td class="text-right">1,500,000</td>
                                <td class="text-right">1,500,000</td>
                                <td class="text-right">1,500,000</td>
                                <td class="text-left">안양평촌</td>
                            </tr>
                            <tr>
                                <td>2020-09-15</td>
                                <td>매출</td>
                                <td class="text-left">PB TOEFL JUNIOR SET</td>
                                <td>5</td>
                                <td class="text-right">200,500</td>
                                <td></td>
                                <td class="text-right">50,000</td>
                                <td class="text-right">1,500,000</td>
                                <td class="text-right">1,500,000</td>
                                <td class="text-right">1,500,000</td>
                                <td class="text-left">안양평촌</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
            <!-- 리스트영역 끝 -->
        </div>
    </div>
  </div>
</template>

<script>
import pageHeader from '@/mixin/pageHeader'
import dateSelect from '@/mixin/dateSelect'
import VendorListPopup from '@/components/popup/common/VendorListPopup.vue'
import SalesNotePrintPopup from '@/components/popup/print/SalesNotePrintPopup.vue'

export default {
  mixins: [
    pageHeader({title: '매출처원장', groupName: '영업관리'}),
    dateSelect
  ],
  components: { VendorListPopup, SalesNotePrintPopup },
  data () {
    return {
      modalOpenFlag: false
    }
  },
  methods: {
    // 모달팝업 open
    openModalPopup (id) {
      switch (id) {
        case 'vendorList': // 거래처검색
          this.modalPopupId = 'vendorList'
          break
        case 'salesNotePrint': // 매출처원장 인쇄
          this.modalPopupId = 'salesNotePrint'
          break
      }
      this.modalOpenFlag = true
    },
    // 모달창 close
    closeModalPopup () {
      this.modalPopupId = ''
      this.modalOpenFlag = false
    }
  }
}
</script>

<style>

</style>
