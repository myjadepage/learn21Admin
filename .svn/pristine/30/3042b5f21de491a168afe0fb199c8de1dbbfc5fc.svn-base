<template>
  <div class="modal-mask">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">{{ title }}</h4>
                <button type="button" class="close"  @click="$emit('close')">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">close</span>
                    </button>
            </div>
            <div class="modal-body">
                <div class="widget no-margin">
                            <div class="widget-body no-padding">
                                <table class="table table-bordered" summary="발주서 검색">
                                    <colgroup>
                                        <col width="20%">
                                        <col width=*>
                                        <col width="10%">
                                    </colgroup>
                                    <tbody>
                                        <tr>
                                            <th scope="row" class="text-left">조회기간</th>
                                            <td>
                                                <DateSelect @state-start-date="startDate" @state-end-date="endDate"
                                            :defStartDate="pfromDate"
                                            :defEndDate="ptoDate"></DateSelect>
                                            </td>
                                            <td rowspan="3">
                                                <button class="btn btn-primary btn-item">검색</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row" class="text-left">가맹점/거래처</th>
                                            <td>
                                                <div class="row">
                                                    <div class="col col-sm-6">
                                                        <select class="form-control">
                                                                            <option>가맹점</option>
                                                                            <option>Ketchup</option>
                                                                            <option>Relish</option>
                                                                        </select>

                                                    </div>
                                                    <div class="col col-sm-6">
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" placeholder="거래처검색">
                                                            <button type="button" class="btn btn-sm btn-secondary" @click="openModalPopup('vendorList')"><i class="la la-search"></i></button>
                                                            <vendor-list-popup title="거래처검색"  v-if="modalOpenFlag && modalPopupId === 'vendorList'" @close="closeModalPopup"></vendor-list-popup>
                                                        </div>
                                                    </div>
                                                </div>

                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row" class="text-left">담당자</th>
                                            <td>
                                                <div class="row">
                                                    <div class="col col-sm-6">
                                                        <select class="form-control">
                                                                            <option>홍길동</option>
                                                                            <option>Ketchup</option>
                                                                            <option>Relish</option>
                                                                        </select>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <table id="order-form-table" class="table table-bordered" summary="발주서품목">
                                    <colgroup>
                                        <col width="10%">
                                        <col width="15%">
                                        <col width=*>
                                        <col width="15%">
                                        <col width="15%">
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th>NO</th>
                                            <th>발주일자</th>
                                            <th>거래처</th>
                                            <th>작성자</th>
                                            <th>상태</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>2020-12-12</td>
                                            <td class="text-left">PB TOEFL JUNIOR SET (A</td>
                                            <td>홍길동</td>
                                            <td>입고</td>
                                        </tr>

                                        <tr>
                                            <td>1</td>
                                            <td>2020-12-12</td>
                                            <td class="text-left">PB TOEFL JUNIOR SET (A</td>
                                            <td>홍길동</td>
                                            <td><span class="text-danger">발주</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import dateSelect from '@/mixin/dateSelect'
import VendorListPopup from './../common/VendorListPopup'
export default {
  name: 'buyInvoiceListPopup',
  mixins: [dateSelect],
  components: {
    VendorListPopup
  },
  props: {
    title: {
      type: String,
      require: true
    }
  },
  data () {
    return {
      modalOpenFlag: false
    }
  },
  methods: {
    // 모달팝업 open
    openModalPopup (id) {
      switch (id) {
        case 'vendorList':// 거래처검색 팝업
          this.modalPopupId = 'vendorList'
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
