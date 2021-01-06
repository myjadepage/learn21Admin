<template>
  <div class="container-fluid">
    <div class="row">
      <PageHeader :pageCurrentInfo="pageCurrentInfo" />

       <div class="col-xl-12">

            <!-- 검색영역 시작-->
            <div class="widget has-shadow">
                <div class="widget-body">
                    <table class="table table-bordered" summary="미입고 현황 검색하기">
                        <colgroup>
                            <col width="10%">
                            <col width="40%">
                            <col width="10%">
                            <col width="40%">
                        </colgroup>
                        <tbody>
                            <tr>

                                <th scope="row"><span class="text-primary">가맹점</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col col-sm-4">
                                            <select class="form-control">
                                                        <option>그룹</option>
                                                        <option>Ketchup</option>
                                                        <option>Relish</option>
                                                    </select>
                                        </div>
                                        <div class="col col-sm-4">
                                            <select class="form-control">
                                                        <option>가맹점</option>
                                                        <option>Ketchup</option>
                                                        <option>Relish</option>
                                                    </select>
                                        </div>
                                    </div>
                                </td>
                                <th scope="row"><span class="text-primary">거래처</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="거래처검색" v-model="searchParam.pcuName">
                                                <button type="button" class="btn btn-sm btn-secondary" @click="openModalPopup('vendorList')"><i class="la la-search"></i></button>

                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
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
                                <th><span class="text-primary">비고</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-12 d-flex justify-content-start">
                                            <div class="styled-checkbox">
                                                <input type="checkbox" name="checkbox" id="check-1" checked>
                                                <label for="check-1">전표건별 확인</label>
                                            </div>
                                            <div class="styled-checkbox">
                                                <input type="checkbox" name="checkbox" id="check-1" checked>
                                                <label for="check-1">잔량 0이하 제외</label>
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
                        <div class="col-sm-12 d-flex justify-content-end">
                            <button type="button" class="btn btn-outline-primary"  @click="openModalPopup('buyNotInPrint')">인쇄</button>

                        </div>

                    </div>
                </div>
                <div class="widget-body">
                    <table class="table table-bordered mb-0" summary="미입고현황 리스트">
                        <colgroup>
                            <col width="10%">
                            <col width="10%">
                            <col width="15%">
                            <col width=*>
                            <col width="7%">
                            <col width="7%">
                            <col width="7%">
                            <col width="10%">
                            <col width="10%">
                            <col width="10%">
                        </colgroup>
                        <thead>
                            <tr>
                                <th>전표번호</th>
                                <th>발주일자</th>
                                <th>거래처</th>
                                <th>품목</th>
                                <th>발주수량</th>
                                <th>입고수량</th>
                                <th>미입고수량</th>
                                <th>공급가</th>
                                <th>합계금액</th>
                                <th>잔량합계금액</th>
                            </tr>
                        </thead>
                        <!-- <tfoot class="table-primary">
                            <tr>
                                <th class="text-center">[합계]</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td class="text-right">5,960</td>
                                <td class="text-right">5,960</td>
                                <td class="text-right">5,960</td>
                                <td class="text-right">5,960,000</td>
                                <td class="text-right">5,960,000</td>
                                <td class="text-right">5,960,000</td>
                            </tr>
                        </tfoot> -->
                        <tbody>
                            <tr v-for="(item, index) in row" :key="index">
                                <td></td>
                                <td>{{ item.dpoOrderRegdate }}</td>
                                <td class="text-left">{{ item.cuName | formatNumber }}</td>
                                <td class="text-left">{{ item.itemName | formatNumber }}</td>
                                <td class="text-right">{{ item.dpiCount | formatNumber }}</td>
                                <td class="text-right">{{ item.diiCount | formatNumber }}</td>
                                <td class="text-right">{{ item.balance | formatNumber }}</td>
                                <td class="text-right">{{ item.dpiSupplyPrice | formatNumber }}</td>
                                <td class="text-right">{{ item.dpiTotalPrice | formatNumber }}</td>
                                <td class="text-right">{{ item.balanceTot | formatNumber }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <!-- 리스트영역 끝 -->
        </div>
    </div>
    <vendor-list-popup title="거래처검색" v-if="modalOpenFlag && modalPopupId === 'vendorList'" @close="closeModalPopup"></vendor-list-popup>
    <buy-not-in-print-popup  v-if="modalOpenFlag && modalPopupId === 'buyNotInPrint'" @close="closeModalPopup"></buy-not-in-print-popup>
  </div>
</template>

<script>
import pageHeader from '@/mixin/pageHeader'
import dateSelect from '@/mixin/dateSelect'
import VendorListPopup from '@/components/popup/common/VendorListPopup.vue'
import BuyNotInPrintPopup from '@/components/popup/print/BuyNotInPrintPopup.vue'
import { getPurchaseNot } from './../../api'

export default {
  name: 'buyNotin',
  mixins: [pageHeader({title: '미입고현황', groupName: '구매관리'}), dateSelect],
  components: { VendorListPopup, BuyNotInPrintPopup },
  filters: {
    formatNumber (value) {
      if (!value) return '0'
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  },
  data () {
    return {
      modalOpenFlag: false,
      modalPopupId: '',
      row: [],
      searchParam: {
        pdpoCode: '', // 가맹점
        pstartDate: new Date(), // 시작기간
        pendDate: new Date(), // 기간
        pcuName: '', // 거래처 이름
        poState: ''
      }
    }
  },
  mounted (I) {
    this.init()
  },
  methods: {
    init () {
      getPurchaseNot()
        .then(res => {
          console.log(res.data)
          this.row = res.data.map((el, index) => {
            const container = {}
            container.balance = el.balance
            container.balanceTot = el.balanceTot // 잔량합계금액
            container.cuName = el.cuName // 거래처
            container.diiCount = el.diiCount // 입고수량
            container.dpiCount = el.dpiCount // 발주수량
            container.dpiSupplyPrice = el.dpiSupplyPrice // 공급가
            container.dpiTotalPrice = el.dpiTotalPrice // 합계금액
            container.dpoCode = el.dpoCode
            // 발주일자 없을경우
            if (el.dpoOrderRegdate === '') {
              container.dpoOrderRegdate = ''
            } else {
              container.dpoOrderRegdate = this.$moment(el.dpoOrderRegdate).format('YYYY-MM-DD')
            }
            container.itemName = el.itemName
          })
        })
        .catch(err => {
          console.log(err)
        })
    },
    openModalPopup (id) {
      switch (id) {
        case 'vendorList': // 거래처검색
          this.modalPopupId = 'vendorList'
          break
        case 'buyNotInPrint': // 매입명세서 인쇄
          this.modalPopupId = 'buyNotInPrint'
          break
      }
      this.modalOpenFlag = true
    },
    // 모달창 close
    closeModalPopup (data) {
      if (data) {
        // 거래처검색경우
        this.searchParam.pcuName = data.row.cuName
      }
      this.modalPopupId = ''
      this.modalOpenFlag = false
    }
  }
}
</script>

<style>

</style>
