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
                        <table class="table table-bordered item-select" summary="거래처 검색하기">
                            <colgroup>
                                <col width="20%" />
                                <col width="*" />
                                <col width="90px" />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th scope="row" class="text-left">거래처명</th>
                                    <td>
                                        <input type="text" class="form-control" placeholder="검색할 거래처명 입력"  v-model="searchParam.puserCustomerName"/>
                                    </td>
                                    <td rowspan="3">
                                        <button class="btn btn-primary btn-item" @click="searchBtn">검색</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" class="text-left">거래처구분</th>
                                    <td>
                                        <div class="row">
                                            <div class="col-sm-12 d-flex align-items-center">
                                                <div class="styled-radio">
                                                    <input type="radio" name="puserCustomerType" id="puserCustomerType-1" value=""  v-model="searchParam.puserCustomerType"/>
                                                    <label for="puserCustomerType-1">전체</label>
                                                </div>
                                                <div class="styled-radio">
                                                    <input type="radio" name="puserCustomerType" id="puserCustomerType-2"  value="매입처"   v-model="searchParam.puserCustomerType"/>
                                                    <label for="puserCustomerType-2">매입처</label>
                                                </div>
                                                <div class="styled-radio">
                                                    <input type="radio" name="puserCustomerType" id="puserCustomerType-3"  value="매출처"   v-model="searchParam.puserCustomerType"/>
                                                    <label for="puserCustomerType-3">매출처</label>
                                                </div>
                                                <div class="styled-radio">
                                                    <input type="radio" name="puserCustomerType" id="puserCustomerType-4"  value="회원거래처"  v-model="searchParam.puserCustomerType" />
                                                    <label for="puserCustomerType-4">회원거래처</label>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <!-- 검색영역 끝-->

                <data-table-vue-4
                :columnDef="getcolumnDefPopup"
                :rowData="rows"
                :isPaging="true" class="vendor-list"
                :rowEditorList="[{
                      type: 'BUTTON',
                      editColumn: 'buttons',
                      label: '선택',
                      onClick: (data) => { this.$emit('close', data) }
                    }]" />

            </div>
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import DataTableVue4 from '@/components/DataTableVue4.vue'

const vendorStore = 'vendorStore'

export default {
  name: 'vendorListPopup',
  components: {DataTableVue4},
  props: {
    title: {
      type: String,
      require: true
    }
  },
  data () {
    return {
      searchParam: {
        puserCustomerName: '',
        puserCustomerType: ''
      },
      rows: [],
      selectData: {}
    }
  },
  computed: {
    ...mapGetters(vendorStore, [
      'getcolumnDefPopup',
      'getVendorInfo'
    ])
  },
  mounted () {
    this.init()
  },
  methods: {
    ...mapActions(vendorStore, [
      'actionFindVendorList'
    ]),
    init () {
      this.actionFindVendorList(this.searchParam)
        .then(res => {
          console.log(res)
          this.rows = res
        })
        .catch(err => {
          console.log(err)
        })
    },
    searchBtn () {
      let params = {puserCustomerName: this.searchParam.puserCustomerName, puserCustomerType: this.searchParam.puserCustomerType}
      this.actionFindVendorList(params)
        .then(res => {
          this.rows = res
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
.vendor-list .dropdown.vbt-per-page-dropdown {
    display: none;
}

</style>
