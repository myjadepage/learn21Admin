<template>
  <div id="salesSettleModal" class="modal-mask">
    <div class="modal-dialog modal-item">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">매출 정산</h4>
                <button type="button" class="close"  @click="$emit('close')">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">close</span>
                    </button>
            </div>
            <div class="modal-body">
                        <div class="widget no-margin">
                            <div class="widget-body no-padding">
                                <table class="table table-bordered" summary="매출정산 관리">
                                    <colgroup>
                                        <col width="5%">
                                        <col width="10%">
                                        <col width="20%">
                                        <col width="10%">
                                        <col width=*>
                                        <col width="10%">
                                        <col width="20%">
                                    </colgroup>
                                    <tbody>
                                        <tr>
                                            <th rowspan="3" class="bg-primary"> 정산</th>
                                                <th scope="row">전표일자</th>
                                                <td>
                                                   <div class="row">
                                                    <div class="col col-sm-10">
                                                        <datepicker :value="state.startdate" :format="getFormatDate" :language="ko" placeholder="날짜선택" input-class="form-control"></datepicker>
                                                    </div>
                                                    <div class="input-group col col-sm-2">
                                                        <span class="input-group-addon"><i class="la la-calendar"></i></span>
                                                    </div>
                                                   </div>
                                                </td>
                                                <th scope="row">거래처</th>
                                                <td>

                                                    <div class="input-group">
                                                        <input type="text" class="form-control" placeholder="거래처검색">
                                                       <button type="button" class="btn btn-sm btn-secondary" @click="openModalPopup('vendorList')"><i class="la la-search"></i></button>
                                                        <vendor-list-popup title="거래처검색" v-if="modalOpenFlag && modalPopupId === 'vendorList'" @close="closeModalPopup"></vendor-list-popup>
                                                    </div>
                                                </td>
                                                <th scope="row">담당자</th>
                                                <td>
                                                    <select class="form-control">
                                                        <option>선택</option>
                                                        <option>홍길동</option>
                                                        <option>Relish</option>
                                                    </select>
                                                </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">금액</th>
                                            <td>
                                                <input type="text" class="form-control text-right" value="5,900">
                                            </td>

                                            <th scope="row">적요</th>
                                            <td colspan="3">
                                                <input type="text" class="form-control" value="수금 hosdd(주)교보문고">
                                            </td>
                                        </tr>

                                        <tr>
                                            <th scope="row">전 잔액</th>
                                            <td>159,000</td>
                                            <th scope="row">정산액</th>
                                            <td>59,000</td>
                                            <th scope="row">잔액</th>
                                            <td>100,000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- 매출정산 리스트 -->
                        <div class="widget">
                            <div class="widget-body no-padding">
                                <table id="spec-table" class="table table-bordered mb-0" summary="매출정산리스트">
                                    <colgroup>
                                        <col width="7%">
                                        <col width="10%">
                                        <col width="15%">
                                        <col width="20%">
                                        <col width=*>
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th>NO</th>
                                            <th>일자</th>
                                            <th>금액</th>
                                            <th>거래처</th>
                                            <th>적요</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>2020-12-12</td>
                                            <td>
                                                <input type="text" class="form-control text-right" value="30,000">
                                            </td>
                                            <td>hoo1(주) 교보문고</td>
                                            <td>hoo1(주) 교보문고</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
            </div>
            <div class="modal-footer" style="justify-content: center;">
                <div class="row col">
                    <div class="col-sm-6">
                        <button type="button" class="btn btn-outline-primary">신규전표</button>
                        <button type="button" class="btn btn-outline-danger">삭제</button>
                    </div>
                    <div class="col-sm-6 d-flex justify-content-end">
                        <button type="button" class="btn btn-primary margin-right-5">저장</button>
                        <button type="button" class="btn btn-secondary"  @click="$emit('close')">닫기</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import datepicker from 'vuejs-datepicker'
import { ko } from 'vuejs-datepicker/dist/locale'
import VendorListPopup from '@/components/popup/common/VendorListPopup.vue'

export default {
  components: { datepicker, VendorListPopup },
  data () {
    return {
      modalOpenFlag: false,
      state: {
        startdate: new Date()
      },
      ko: ko
    }
  },
  methods: {
    getFormatDate (date) {
      return this.$moment(date).format('YYYY-MM-DD')
    },
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
    closeModalPopup () {
      this.modalPopupId = ''
      this.modalOpenFlag = false
    }
  }

}
</script>

<style>

</style>
