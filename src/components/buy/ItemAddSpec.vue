<template>
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

                <tbody v-if="buySpecInfoItems.length === 0">
                    <tr>
                      <td colspan="10" style="height:150px">"품목을 선택 또는 추가하여 입력하시기 바랍니다."</td>
                  </tr>
                </tbody>
                <tbody else>
                    <tr v-for="(item, index) in buySpecInfoItems" :key="index">
                        <td>{{ index+1 }}</td>
                        <td>
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="품목검색" v-model="item.itemName"/>
                                <button type="button" class="btn btn-sm btn-secondary" @click="openModalPopup('itemSelectSingle', index)"><i class="la la-search"></i></button>
                            </div>
                        </td>
                        <td>
                            <input type="text" class="form-control text-right"  placeholder="0" v-model.number="item.dpiCount"
                              @input="(e) => { item.dpiCount = onlyNumberFormat(e.target.value) } " /> <!--수량-->
                        </td>
                        <td>
                            <input type="text" class="form-control text-right" placeholder="0"  v-model.number="item.dpiUnitPrice"
                              @input="(e) => { item.dpiUnitPrice = onlyNumberFormat(e.target.value) } " /> <!--단가-->
                        </td>
                        <td>
                             <input type="text" class="form-control-plaintext text-right" placeholder="0"
                                :value="item.dpiSupplyPrice = item.dpiCount * item.dpiUnitPrice | formatNumber" /> <!--공급가-->
                        </td>
                        <td>
                            <input type="text" class="form-control text-right" placeholder="0"
                               v-model.number="item.dpiTax"  @input="(e) => { item.dpiTax = onlyNumberFormat(e.target.value) } "/> <!--부가세-->
                        </td>
                        <td class="text-right">
                             <input type="text" class="form-control-plaintext text-right" placeholder="0"
                             :value="item.dpiTotalPrice= zeroNumberFormat(item.dpiSupplyPrice) + zeroNumberFormat(item.dpiTax) | formatNumber" /> <!--합계금액-->
                        </td>
                        <td class="text-right">
                            {{ item.dpiStock | formatNumber }} <!--재고-->
                        </td>
                        <td>
                            <input type="text" class="form-control" placeholder="비고 내용 표기" />
                        </td>
                        <td>
                            <button class="btn btn-sm btn-outline-danger"  @click="deleteRow(index)">-</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="widget-footer">
            <div class="d-flex align-items-stretch justify-content-between">
                <button class="btn btn-sm btn-outline-primary" @click="openModalPopup('itemSelect')">품목선택</button>
                <button id="btnAddRow" class="btn btn-sm btn-primary" @click="addRow">항목 추가</button>
            </div>
        </div>
         <item-select-single-popup v-if="modalOpenFlag && modalPopupId === 'itemSelectSingle'" @close="closeModalPopup" :modalParamObj="modalParamObj"></item-select-single-popup>
        <item-select-popup title="품목선택" v-if="modalOpenFlag && modalPopupId === 'itemSelect'" @close="closeModalPopup"></item-select-popup>
    </div>
</template>

<script>
import ItemSelectSinglePopup from './../popup/common/ItemSelectSinglePopup.vue'
import ItemSelectPopup from './../popup/common/ItemSelectPopup.vue'
import { mapMutations, mapState } from 'vuex'

export default {
  components: { ItemSelectSinglePopup, ItemSelectPopup },
  filters: {
    formatNumber (value) {
      if (!value) return '0'
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  },
  data () {
    return {
      modalPopupId: '',
      modalOpenFlag: false,
      modalParamObj: ''
    }
  },
  computed: {
    ...mapState('itemSpecAddStore', ['buySpecInfoItems'])
  },
  methods: {
    ...mapMutations('itemSpecAddStore', ['addBuyItem']),
    addRow (index) {
      this.addBuyItem({
        dpoCode: '',
        itemIsbnNum: '7',
        itemName: '',
        itemId: '',
        itemStandard: '',
        dpiCount: '',
        dpiEa: '',
        dpiUnitPrice: '',
        dpiSupplyPrice: '',
        dpiTax: '0',
        dpiTotalPrice: '',
        dpiStock: '500',
        dpiRegdate: '',
        dpiLastdate: ''
      })
    },
    deleteRow (index) {
      this.buySpecInfoItems.splice(index, 1)
    },
    onlyNumberFormat (num) {
      let onlynum = /^[0-9]\d*$|^$/
      let oldNum = ''
      if (onlynum.test(num)) {
        oldNum = num
      } else {
        event.target.value = oldNum
      }
      return this.zeroNumberFormat(event.target.value)
    },
    zeroNumberFormat (num) {
      let zeroDel = /(^0+)/
      return num.toString().replace(zeroDel, '')
    },
    openModalPopup (id, o) {
      switch (id) {
        case 'itemSelect': // 품목 선택
          this.modalPopupId = 'itemSelect'
          break
        case 'itemSelectSingle': // 품목단일 선택
          this.modalPopupId = 'itemSelectSingle'
          this.modalParamObj = o
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
