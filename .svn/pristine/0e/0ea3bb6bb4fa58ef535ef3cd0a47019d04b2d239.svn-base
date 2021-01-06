<template>
  <div class="widget has-shadow">
                        <div class="widget-body">
                            <table class="table table-bordered" summary="거래처별 매입 검색하기">
                                <colgroup>
                                    <col width="10%">
                                    <col width="40%">
                                    <col width="10%">
                                    <col width="40%">
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <th>조회기간</th>
                                        <td>
                                            <div class="row">
                                                <div class="col-sm-8">
                                                  <DateSelect @state-start-date="startDate" @state-end-date="endDate" :defStartDate="pfromDate" :defEndDate="ptoDate"></DateSelect>
                                                </div>
                                            </div>
                                        </td>
                                        <th scope="row">가맹점</th>
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
                                        <th>품목 / 담당자</th>
                                        <td>
                                            <div class="row">
                                                <div class="col col-sm-5">
                                                    <div class="input-group">
                                                        <input type="text" class="form-control" placeholder="품목검색">
                                                         <button type="button" class="btn btn-sm btn-secondary" @click="openModalPopup('itemSelectSingle')"><i class="la la-search"></i></button>
                                                    </div>
                                                </div>
                                                <div class="col col-sm-3">
                                                    <select class="form-control">
                                                        <option>담당자</option>
                                                        <option>Ketchup</option>
                                                        <option>Relish</option>
                                                    </select>
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

                         <item-select-single-popup v-if="modalOpenFlag && modalPopupId === 'itemSelectSingle'" @close="closeModalPopup"></item-select-single-popup>
                    <vendor-list-popup title="거래처검색" v-if="modalOpenFlag && modalPopupId === 'vendorList'" @close="closeModalPopup"></vendor-list-popup>
                    <buy-vendor-print-popup v-if="modalOpenFlag && modalPopupId === 'buyVendorPrint'" @close="closeModalPopup"></buy-vendor-print-popup>
                    </div>
</template>

<script>
import dateSelect from '@/mixin/dateSelect'
import ItemSelectSinglePopup from '@/components/popup/common/ItemSelectSinglePopup'
import VendorListPopup from '@/components/popup/common/VendorListPopup.vue'
import BuyVendorPrintPopup from '@/components/popup/print/BuyVendorPrintPopup.vue'

export default {
  mixins: [dateSelect],
  components: { ItemSelectSinglePopup, VendorListPopup, BuyVendorPrintPopup },
  props: ['type'],
  data () {
    return {
      modalOpenFlag: false,
      modalPopupId: ''
    }
  },
  methods: {
    // 모달팝업 open
    openModalPopup (id) {
      switch (id) {
        case 'itemSelectSingle': // 품목단일 선택
          this.modalPopupId = 'itemSelectSingle'
          break
        case 'vendorList': // 거래처검색
          this.modalPopupId = 'vendorList'
          break
        case 'buyVendorPrint': // 거래처별 매입 인쇄
          this.modalPopupId = 'buyVendorPrint'
          break
      }
      this.modalOpenFlag = true
      document.body.classList.add('modal-open')
    },
    // 모달창 close
    closeModalPopup () {
      this.modalPopupId = ''
      this.modalOpenFlag = false
      document.body.classList.remove('modal-open')
    }
  }
}
</script>

<style>

</style>
