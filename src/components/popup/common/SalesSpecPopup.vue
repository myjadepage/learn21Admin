<template>
      <div id="purchasedSpecModal" class="modal-mask">
        <div class="modal-dialog modal-item">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">매출 명세서</h4>
                    <button type="button" class="close"  @click="$emit('close')">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">close</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="widget no-margin">
                                <div class="widget-body no-padding">
                                    <table class="table table-bordered" summary="매출명세서 관리">
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
                                                <th scope="row"><span class="text-primary">매출일자</span></th>
                                                <td>
                                                   <div class="row">
                                                        <div class="col col-sm-10">
                                                            <datepicker :value="state.startdate" :format="getFormatDate" :language="ko" placeholder="날짜선택" input-class="form-control" v-model="salesSpecs.date"></datepicker>
                                                        </div>
                                                        <div class="input-group col col-sm-2">
                                                            <span class="input-group-addon"><i class="la la-calendar"></i></span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <th scope="row"><span class="text-primary">거래처</span></th>
                                                <td colspan="3">
                                                    <div class="input-group row col-sm-7">
                                                        <input type="text" class="form-control" placeholder="거래처검색" v-model="salesSpecs.cuName"/>
                                                        <button type="button" class="btn btn-sm btn-secondary" @click="openModalPopup('vendorList')"><i class="la la-search"></i></button>
                                                        <vendor-list-popup title="거래처검색" v-if="modalOpenFlag && modalPopupId === 'vendorList'" @close="closeModalPopup"></vendor-list-popup>
                                                    </div>
                                                </td>
                                                <th scope="row"><span class="text-primary">공급가</span></th>
                                                <td class="text-right">
                                                    {{tot.totSupplyPrice}}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row"><span class="text-primary">담당자</span></th>
                                                <td>
                                                    <select class="form-control" v-model="salesSpecs.ddsName">
                                                        <option>선택</option>
                                                        <option>홍길동</option>
                                                        <option>Relish</option>
                                                    </select>
                                                </td>
                                                <th scope="row"><span class="text-primary">수주전표</span></th>
                                                <td colspan="3">
                                                    <div class="input-group row col-sm-7">
                                                        <input type="text" class="form-control" placeholder="발주전표검색" />
                                                        <button type="button" class="btn btn-sm btn-secondary"  @click="openModalPopup('buyInvoiceList')"><i class="la la-search"></i></button>
                                                        <buy-invoice-list-popup title="발주서 검색" v-if="modalOpenFlag && modalPopupId === 'buyInvoiceList'" @close="closeModalPopup"></buy-invoice-list-popup>
                                                    </div>
                                                </td>
                                                <th scope="row"><span class="text-primary">부가세</span></th>
                                                <td class="text-right">{{tot.totTax}}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"><span class="text-primary">메모</span></th>
                                                <td colspan="3">
                                                    <input type="text" class="form-control" v-model="salesSpecs.ddsMemo" placeholder="" />
                                                </td>
                                                <th scope="row"><span class="text-primary">합계수량</span></th>
                                                <td>{{tot.totCount}}</td>
                                                <th scope="row"><span class="text-primary">합계금액</span></th>
                                                <td class="text-right">{{tot.totPrice}}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <!-- 매입명세서리스트 -->
                            <div class="widget">
                                <div class="widget-body no-padding">
                                    <table id="spec-table" class="table table-bordered" summary="품목명 리스트">
                                        <colgroup>
                                            <col width="5%" />
                                            <col width="*" />
                                            <col width="7%" />
                                            <col width="8%" />
                                            <col width="7%" />
                                            <col width="8%" />
                                            <col width="7%" />
                                            <col width="7%" />
                                            <col width="25%" />
                                            <col width="5%" />
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th>NO</th>
                                                <th>품목명</th>
                                                <th>수량</th>
                                                <th>단가</th>
                                                <th>공급가</th>
                                                <th>부가세</th>
                                                <th>합계금액</th>
                                                <th>재고</th>
                                                <th>비고</th>
                                                <th>관리</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(item, index) in salesItems" :key="index">
                                                <td>{{ index+1 }}</td>
                                                <td>
                                                    <div class="input-group">
                                                        <input type="text" class="form-control" placeholder="품목검색" v-model="item.itemName">
                                                      <button type="button" class="btn btn-sm btn-secondary" @click="openModalPopup('itemSelectSingle', index)"><i class="la la-search"></i></button>
                                                      <item-select-single-popup title="품목선택" v-if="modalOpenFlag && modalPopupId === 'itemSelectSingle'" @close="closeModalPopup" :modalParamObj="modalParamObj"></item-select-single-popup>
                                                    </div>
                                                </td>
                                                <td>
                                                    <input type="text" class="form-control text-right" @keyup="onChange"  v-model.number="item.dsiCount" @input="(e) => { item.dsiCount = onlyNumberFormat(e.target.value) } " /> <!-- 수량 -->
                                                </td>
                                                <td>
                                                    <input type="text" class="form-control text-right" @keyup="onChange" v-model="item.dsiUnitPrice" @input="(e) => { item.dsiUnitPrice = onlyNumberFormat(e.target.value) } " /> <!-- 단가 -->
                                                </td>
                                                <td>
                                                    <input  type="text" class="form-control text-right"  :value="item.dsiSupplyPrice=item.dsiUnitPrice*item.dsiCount" />
                                                    <!-- <span v-if="item.count != undefined && item.price != undefined">{{item.count*item.price}}</span> -->
                                                </td> <!--공급가 -->
                                                <td>
                                                    <input type="text" class="form-control text-right"  v-model.number="item.dsiTax" @keyup="onChange"/> <!--부가세 -->
                                                </td>
                                                <td class="text-right">
                                                     <input type="text" class="form-control text-right"  :value="item.dsiTotalPrice=item.dsiCount*item.dsiUnitPrice+item.dsiTax" />
                                                    <!-- <span v-if="item.count != undefined && item.price != undefined">{{(item.count*item.price)+item.tax}}</span> -->
                                                    <!--합계금액-->
                                                </td>
                                                <td class="text-right">500</td> <!--재고-->
                                                <td>
                                                    <div class="row">
                                                        <div class="col-sm-12">
                                                            <input type="text" class="form-control"
                                                                placeholder="비고 내용 표기" v-model="item.dsiMemo"/>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div
                                                        class="col-sm-12 d-flex align-items-center justify-content-center">
                                                        <button class="btn btn-sm btn-outline-danger" @click="removeItem(index)">-</button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="widget-footer">
                                    <div class="d-flex align-items-stretch justify-content-between">
                                        <button class="btn btn-sm btn-outline-primary" @click="openModalPopup('itemSelect')">품목선택</button>
                                        <item-select-popup title="품목선택" v-if="modalOpenFlag && modalPopupId === 'itemSelect'" @close="closeModalPopup"></item-select-popup>
                                        <button id="btnAddRow" class="btn btn-sm btn-primary" @click="addItem">항목 추가</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer" style="justify-content: center">
                    <div class="row col">
                        <div class="col-sm-6">
                            <button type="button" class="btn btn-outline-primary">신규전표</button>
                        </div>
                        <div class="col-sm-6 d-flex justify-content-end">
                            <button type="button" class="btn btn-primary margin-right-5" @click="save">저장</button>
                            <button type="button" class="btn btn-info margin-right-5"  @click="openModalPopup('salesSpecPrint')">인쇄</button>
                            <sales-spec-print-popup v-if="modalOpenFlag && modalPopupId === 'salesSpecPrint'" @close="closeModalPopup"></sales-spec-print-popup>
                            <button type="button" class="btn btn-secondary" @click="$emit('close')">닫기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import datepicker from 'vuejs-datepicker'
import { ko } from 'vuejs-datepicker/dist/locale'
import VendorListPopup from '@/components/popup/common/VendorListPopup.vue'
import BuyInvoiceListPopup from '@/components/popup/common/BuyInvoiceListPopup.vue'
import ItemSelectPopup from './ItemSelectPopup.vue'
import ItemSelectSinglePopup from './ItemSelectSinglePopup.vue'
import SalesSpecPrintPopup from '../print/SalesSpecPrintPopup.vue'

const salesStore = 'salesStore'

export default {
  components: { datepicker, VendorListPopup, BuyInvoiceListPopup, ItemSelectPopup, ItemSelectSinglePopup, SalesSpecPrintPopup },
  filters: {
    formatNumber (value) {
      if (!value) return '0'
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  },
  props: {
    title: {
      type: String,
      require: true
    },
    modalParamObj: {
      type: [Object, String]
    }
  },
  data () {
    return {
      state: {
        startdate: new Date()
      },
      ko: ko,
      modalOpenFlag: false,
      salesSpecs: {},
      salesItems: [],
      params: {},
      tot: {totCount: 0, totSupplyPrice: 0, totTax: 0, totPrice: 0}
    }
  },
  methods: {
    ...mapActions(salesStore, [
      'actionSaveBusinessInvoice'
    ]),
    getFormatDate (date) {
      return this.$moment(date).format('YYYY-MM-DD')
    },
    openModalPopup (id, o) {
      switch (id) {
        case 'vendorList': // 거래처검색
          this.modalPopupId = 'vendorList'
          break
        case 'buyInvoiceList': // 발주서 선택
          this.modalPopupId = 'buyInvoiceList'
          break
        case 'salesSpecPrint': // 매입명세서 인쇄
          this.modalPopupId = 'salesSpecPrint'
          break
        case 'itemSelect': // 품목 선택
          this.modalPopupId = 'itemSelect'
          break
        case 'itemSelectSingle': // 품목단일 선택
          this.modalPopupId = 'itemSelectSingle'
          this.modalParamObj = o
          console.log(this.modalParamObj)
          break
      }
      this.modalOpenFlag = true
    },
    // 모달창 close
    closeModalPopup (data, index) {
      if (data.itemName !== undefined) {
        // 품목검색경우
        this.salesItems[index].itemName = data.itemName
      }
      if (data.row !== undefined) {
        this.salesSpecs.cuName = data.row.cuName
        this.salesSpecs.dcuCode = data.row.dcuCode
      }
      this.modalPopupId = ''
      this.modalOpenFlag = false
    },
    onlyNumberFormat (num) {
      let onlynum = /^[0-9]\d*$|^$/
      let oldNum = ''
      if (onlynum.test(num)) {
        oldNum = num
      } else {
        event.target.value = oldNum
      }
      return event.target.value
    },
    addItem () {
      this.salesItems.push({dsiTax: 0, dsiCount: 0, dsiUnitPrice: 0, dsiSupplyPrice: 0, dsiTotalPrice: 0})
    },
    removeItem (index) {
      alert(index + 'and' + this.salesItems[index].count)
      this.salesItems.splice(index, 1)
    },
    onChange () {
      this.tot = { totCount: 0, totSupplyPrice: 0, totTax: 0, totPrice: 0 }
      for (var i = 0; i < this.salesItems.length; i++) {
        this.tot.totCount += Number(this.salesItems[i].dsiCount)
        this.tot.totSupplyPrice += Number(this.salesItems[i].dsiUnitPrice) * Number(this.salesItems[i].dsiCount)
        this.tot.totTax += Number(this.salesItems[i].dsiTax)
        this.tot.totPrice += Number(this.salesItems[i].dsiUnitPrice) * Number(this.salesItems[i].dsiCount) + Number(this.salesItems[i].dsiTax)
      }
      // alert(this.tot.totCount + ' ' + this.tot.totSupplyPrice + ' ' + this.tot.totTax + ' ' + this.tot.totPrice)
    },
    save () {
      this.params = {salesItems: this.salesItems, salesSpecs: this.salesSpecs}
      this.actionSaveBusinessInvoice(this.params)
      console.log(this.params)
    }
  }
}
</script>

<style>

</style>
