<template>
  <div class="widget no-margin">
       <div class="widget-body no-padding">
          <table class="table table-bordered" summary="매입명세서 관리">
              <colgroup>
                <col width="5%">
                <col width="7%">
                <col width="15%">
                <col width="7%">
                <col width=*>
                <col width="7%">
                <col width="15%">
                <col width="7%">
                <col width="15%">
              </colgroup>
              <tbody>
                <tr>
                    <th rowspan="3" class="bg-primary"> 발주 </th>
                        <th scope="row">발주일자</th>
                        <td>
                            <div class="row">
                                <div class="col col-sm-10">
                                    <!-- 달력1개일때는 바로 datepicker 사용-->
                                    <datepicker v-model="buyInfo.dpoRegdate" :format="getFormatDate" :language="ko" placeholder="날짜선택" input-class="form-control"></datepicker>
                                </div>
                                <div class="input-group col col-sm-2">
                                    <span class="input-group-addon"><i class="la la-calendar"></i></span>
                                </div>
                            </div>
                        </td>
                        <th scope="row">거래처</th>
                        <td>
                            <div class="row">
                                <div class="col-sm-12">
                                      <div class="input-group">
                                        <input type="text" class="form-control" placeholder="거래처검색" v-model="buyInfo.dcuName">
                                        <button type="button" class="btn btn-sm btn-secondary" @click="openModalPopup('vendorList')"><i class="la la-search"></i></button>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <th scope="row">입고요청</th>
                        <td>
                            <div class="row">
                                <div class="col col-sm-10">
                                    <datepicker v-model="buyInfo.dpoWarehousingRegdate" :format="getFormatDate" :language="ko" placeholder="날짜선택" input-class="form-control"></datepicker>
                                </div>
                                <div class="input-group col col-sm-2">
                                    <span class="input-group-addon"><i class="la la-calendar"></i></span>
                                </div>
                            </div>
                        </td>
                        <th scope="row">공급가</th>
                        <td class="text-right">
                           <input type="text" class="form-control-plaintext" placeholder="0" :value="totalSupplyPrice | formatNumber" readonly></td>
                </tr>
                <tr>
                    <th scope="row">담당자</th>
                    <td colspan="5">
                        <div class="row">
                            <div class="col-sm-3">
                                <select class="form-control" v-model="buyInfo.dpoOrderName">
                                    <option value="">선택</option>
                                    <option value="홍길동">홍길동</option>
                                    <option value="김길동">김길동</option>
                                </select>
                            </div>
                        </div>
                    </td>
                    <th scope="row">부가세</th>
                    <td class="text-right">
                      <input type="text" class="form-control-plaintext" placeholder="0" :value="totalTax | formatNumber" readonly></td>
                </tr>
                <tr>
                    <th scope="row">메모</th>
                    <td colspan="3">
                      <input type="text" class="form-control" placeholder="" v-model="buyInfo.dpoMemo">
                     </td>
                     <th scope="row">합계수량</th>
                     <td class="text-right">
                       <input type="text" class="form-control-plaintext" placeholder="0" :value="totalCount | formatNumber" readonly></td>
                     <th scope="row">합계금액</th>
                     <td class="text-right">
                       <input type="text" class="form-control-plaintext" placeholder="0" :value="totalPrice  | formatNumber" readonly></td>
                 </tr>
              </tbody>
          </table>
       </div>
       <vendor-list-popup v-if="modalOpenFlag && modalPopupId === 'vendorList'" @close="closeModalPopup"></vendor-list-popup>
    </div>
</template>

<script>
import VendorListPopup from './../popup/common/VendorListPopup.vue'
import datepicker from 'vuejs-datepicker'
import { ko } from 'vuejs-datepicker/dist/locale'
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  components: { VendorListPopup, datepicker },
  filters: {
    formatNumber (value) {
      if (!value) return '0'
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  },
  data () {
    return {
      modalOpenFlag: false, // 모달창 openFlag
      modalPopupId: '',
      ko: ko
    }
  },
  computed: {
    ...mapState('itemInvoiceAddStore', ['buyInfo']),
    ...mapGetters('itemInvoiceAddStore', [
      'totalSupplyPrice', 'totalTax', 'totalCount', 'totalPrice'
    ])
  },
  methods: {
    ...mapActions('itemInvoiceAddStore', ['setVendorName', 'setVendorCode', 'setVendorOrderDate']),
    // 모달팝업 open
    openModalPopup (id) {
      switch (id) {
        case 'vendorList': // 거래처검색
          this.modalPopupId = 'vendorList'
          break
      }
      this.modalOpenFlag = true
    },
    // 모달창 close
    closeModalPopup (data) {
      if (data) {
        this.setVendorName(data.row.cuName)
        this.setVendorCode(data.row.dcuCode)
      }
      this.modalPopupId = ''
      this.modalOpenFlag = false
    },
    getFormatDate (date) {
      return this.$moment(date).format('YYYY-MM-DD')
    },
    zeroNumberFormat (num) {
      let zeroDel = /(^0+)/
      return num.toString().replace(zeroDel, '')
    }
  }

}
</script>

<style>

</style>
