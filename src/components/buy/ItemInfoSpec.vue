<template>
  <div class="widget no-margin">
        <div class="widget-body no-padding">
            <table class="table table-bordered" summary="매입명세서 관리">
                <colgroup>
                    <col width="5%" />
                    <col width="7%" />
                    <col width="20%" />
                    <col width="7%" />
                    <col width="15%" />
                    <col width="7%" />
                    <col width="*" />
                    <col width="7%" />
                    <col width="20%" />
                </colgroup>
                <tbody>
                    <tr>
                        <th rowspan="3" class="bg-primary">편집</th>
                        <th scope="row"><span class="text-primary">매입일자</span></th>
                        <td>
                           <div class="row">
                                <div class="col col-sm-10">
                                    <datepicker v-model="buySpecInfo.dpoRegdate" :format="getFormatDate" :language="ko" placeholder="날짜선택" input-class="form-control"></datepicker>
                                </div>
                                <div class="input-group col col-sm-2">
                                    <span class="input-group-addon"><i class="la la-calendar"></i></span>
                                </div>
                            </div>
                        </td>
                        <th scope="row"><span class="text-primary">거래처</span></th>
                        <td colspan="3">
                            <div class="input-group row col-sm-7">
                                <input type="text" class="form-control" placeholder="거래처검색" v-model="buySpecInfo.dcuName" />
                                <button type="button" class="btn btn-sm btn-secondary" @click="openModalPopup('vendorList')"><i class="la la-search"></i></button>
                            </div>
                        </td>
                        <th scope="row"><span class="text-primary">공급가</span></th>
                        <td class="text-right">
                            <input type="text" class="form-control-plaintext" placeholder="0" readonly>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row"><span class="text-primary">담당자</span></th>
                        <td>
                            <select class="form-control" v-model="buySpecInfo.dpoOrderName">
                                <option value="">선택</option>
                                <option value="홍길동">홍길동</option>
                                <option value="김길동">김길동</option>
                            </select>
                        </td>
                        <th scope="row"><span class="text-primary">발주전표</span></th>
                        <td colspan="3">
                            <div class="input-group row col-sm-7">
                                <input type="text" class="form-control" placeholder="발주전표검색"  v-model="buySpecInfo.dcuName" />
                                <button type="button" class="btn btn-sm btn-secondary"  @click="openModalPopup('buyInvoiceList')"><i class="la la-search"></i></button>
                            </div>
                        </td>
                        <th scope="row"><span class="text-primary">부가세</span></th>
                        <td class="text-right">
                            <input type="text" class="form-control-plaintext" placeholder="0" readonly>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row"><span class="text-primary">메모</span></th>
                        <td colspan="3">
                            <input type="text" class="form-control" placeholder="" v-model="buySpecInfo.dpoMemo"/>
                        </td>
                        <th scope="row"><span class="text-primary">합계수량</span></th>
                        <td>
                            <input type="text" class="form-control-plaintext" placeholder="0" readonly>
                        </td>
                        <th scope="row"><span class="text-primary">합계금액</span></th>
                        <td class="text-right">
                            <input type="text" class="form-control-plaintext" placeholder="0" readonly>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
         <vendor-list-popup title="거래처검색" v-if="modalOpenFlag && modalPopupId === 'vendorList'" @close="closeModalPopup"></vendor-list-popup>
         <buy-invoice-list-popup title="발주서 검색" v-if="modalOpenFlag && modalPopupId === 'buyInvoiceList'" @close="closeModalPopup"></buy-invoice-list-popup>
    </div>
</template>

<script>
import VendorListPopup from '@/components/popup/common/VendorListPopup.vue'
import BuyInvoiceListPopup from '@/components/popup/common/BuyInvoiceListPopup.vue'
import datepicker from 'vuejs-datepicker'
import { ko } from 'vuejs-datepicker/dist/locale'
import { mapState } from 'vuex'
export default {
  components: { datepicker, VendorListPopup, BuyInvoiceListPopup },
  filters: {
    formatNumber (value) {
      if (!value) return '0'
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  },
  data () {
    return {
      state: {
        startdate: new Date()
      },
      ko: ko,
      modalPopupId: '',
      modalOpenFlag: false
    }
  },
  computed: {
    ...mapState('itemSpecAddStore', ['buySpecInfo'])
  },
  methods: {
    openModalPopup (id) {
      switch (id) {
        case 'vendorList': // 거래처검색
          this.modalPopupId = 'vendorList'
          break
        case 'buyInvoiceList': // 발주서 선택
          this.modalPopupId = 'buyInvoiceList'
          break
      }
      this.modalOpenFlag = true
    },
    // 모달창 close
    closeModalPopup (data) {
      if (data) {
        // 거래처검색경우(거래처명, 거래처코드 가져오기)
        console.log(data)
        // this.setVendorName(data.row.cuName)
        // this.setVendorCode(data.row.dcuCode)
      }
      this.modalPopupId = ''
      this.modalOpenFlag = false
    },
    getFormatDate (date) {
      return this.$moment(date).format('YYYY-MM-DD')
    }
  }
}
</script>

<style>

</style>
