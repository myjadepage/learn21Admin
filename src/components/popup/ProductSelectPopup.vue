<template>
  <div class="modal-mask">
    <div class="modal-dialog modal-item">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">{{ title }}</h4>
                <button type="button" class="close"  @click="$emit('close')">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">close</span>
                    </button>
            </div>
            <div class="modal-body">
                <!-- 검색영역 시작-->
                <div class="widget has-shadow">
                    <div class="widget-body">
                        <table class="table table-bordered" summary="상품 검색하기">
                            <colgroup>
                                <col width="10%">
                                <col width="40%">
                                <col width="10%">
                                <col width="40%">
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th scope="row">검색구분</th>
                                    <td>
                                        <div class="row">
                                            <div class="col col-sm-5">
                                                <select class="form-control" v-model="searchParam.ptype">
                                                    <option value='NAME'>상품명</option>
                                                    <option value='CODE'>상품코드</option>
                                                </select>
                                            </div>
                                            <div class="col col-sm-7">
                                                <input type="text" class="form-control" v-model="searchParam.ptypeNm">
                                            </div>
                                        </div>
                                    </td>
                                    <th>상품분류</th>
                                    <td>
                                        <div class="row">
                                            <div class="col col-sm-3">
                                                <select class="form-control" v-model="searchParam.pbigCode" @change="changeCboBigCode">
                                                    <option value=''>전체</option>
                                                    <option v-for="x in getBigCodeList" :key="x.categoryNo" :value="x.categoryNo">{{x.categoryName}}</option>
                                                </select>
                                            </div>
                                            <div class="col col-sm-3">
                                                <select class="form-control" v-model="searchParam.pmidCode">
                                                <option value=''>전체</option>
                                                <option v-for="x in getMidCodeList" :key="x.categoryNo" :value="x.categoryNo">{{x.categoryName}}</option>
                                                </select>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">공급처</th>
                                    <td>
                                        <div class="row">
                                            <div class="col-sm-5">
                                                <div class="input-group">
                                                    <select class="form-control" v-model="searchParam.pproviderNo">
                                                        <option value=''>전체</option>
                                                        <option v-for="x in getVenProviderList" :key="x.providerNo" :value="x.providerNo">{{x.providerName}}</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <th>물류정보</th>
                                    <td>
                                        <div class="row">
                                            <div class="col col-sm-3">
                                                <select class="form-control" v-model="searchParam.pdeliveryUnitNo">
                                                    <option value=''>전체</option>
                                                    <option value='23'>어학원용(1,500)</option>
                                                    <option value='24'>무료</option>
                                                </select>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">판매여부/상품구분</th>
                                    <td>
                                        <div class="row">
                                            <div class="col col-sm-3">
                                                <select class="form-control" v-model="searchParam.pstatusCd">
                                                    <option value=''>전체</option>
                                                    <option value='삭제'>삭제</option>
                                                    <option value='승인대기'>승인대기</option>
                                                    <option value='판매중'>판매중</option>
                                                    <option value='판매중지'>판매중지</option>
                                                    <option value='품절'>품절</option>
                                                </select>
                                            </div>
                                            <div class="col col-sm-3">
                                                <select class="form-control" v-model="searchParam.pproductTypeCd">
                                                    <option value=''>전체</option>
                                                    <option value='일반'>일반</option>
                                                    <option value='STB'>STB</option>
                                                </select>
                                            </div>
                                        </div>
                                    </td>
                                    <th>등록일자</th>
                                    <td>
                                        <div class="row">
                                            <div class="col col-sm-8">
                                                <DateSelect @state-start-date="(date) => this.searchParam.pfromDate = date"
                                                            @state-end-date="(date) => this.searchParam.ptoDate = date"
                                                            :defStartDate="searchParam.pfromDate"
                                                            :defEndDate="searchParam.ptoDate" />
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                            </tbody>
                        </table>

                        <div class="text-center">
                            <button class="btn btn-primary" @click="onClickSearch">검색</button>
                        </div>
                    </div>
                </div>
                <!-- 검색영역 끝-->
                <DataTableVue4
                    :columnDef="getColumnDef"
                    :rowData="getRowData"
                    :isPaging="true"
                    :isCheckbox="true"
                    @selectedRowData="selectedRowData"
                    :isRowsSelectable="true"
                />
            </div>
            <div class="modal-footer">
                <div class="row">
                    <div class="col-sm-12 d-flex justify-content-end">
                        <button type="button" class="btn btn-primary margin-right-5" @click="onClickSelected">선택완료</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import dateSelect from '@/mixin/dateSelect'
import {productManageApi} from '@/api'
import DataTableVue4 from '@/components/DataTableVue4'

export default {
  components: { DataTableVue4 },
  name: 'productSelectPopup',
  mixins: [dateSelect],
  props: {
    title: {
      type: String,
      require: true
    }
  },
  created () {
    productManageApi.findCategoryCodeList()
      .then(res => {
        this.categoryCodeList = res
        this.bigCodeList = res.filter(x => x.parentCategoryNo === '1') // 대분류코드
      })
    productManageApi.findProvider().then(res => { this.venProviderList = res }) // 공급처
  },
  data () {
    return {
      columnDef: [
        { label: '분류', name: 'depthFullname', sort: true, row_classes: 'table-text-left' },
        { label: '상품코드', name: 'productCode', sort: true },
        { label: '상품명', name: 'productName', sort: true, row_classes: 'table-text-left' },
        { label: '공급처', name: 'providerName', sort: true },
        { label: '물류정보', name: 'deliveryUnitName', sort: true },
        { label: '정상가', name: 'originPrice', sort: true, row_classes: 'table-text-right', type: 'Number' },
        { label: '판매가', name: 'listPrice', sort: true, row_classes: 'table-text-right', type: 'Number' },
        { label: '할인율', name: 'discountRate', sort: true, row_classes: 'table-text-right' },
        { label: '판매', name: 'statusCd', sort: true }
      ],
      rowData: [],
      categoryCodeList: [], /* 품목코드목록 */
      bigCodeList: [], /* 대분류 */
      midCodeList: [], /* 중분류 */
      venProviderList: [], /* 공급처 */
      searchParam: {
        ptype: 'NAME', /* 검색구분(상품명: NAME | 상품코드: CODE) */
        ptypeNm: '', /* 검색명 */
        pbigCode: '', /* 대분류 */
        pmidCode: '', /* 중분류 */
        pproviderNo: '', /* 공급처번호 */
        pdeliveryUnitNo: '', /* 물류번호 (무료배송:23 | 1500원(어학원용):24)  -- 설계서에는 일반용도 있지만 코드에는 비어있음 */
        pstatusCd: '', /* 판매여부 (삭제|승인대기|판매중|판매중지|품절) */
        pproductTypeCd: '', /* 상품구분 (일반|STB) */
        pfromDate: this.$moment().add(-7, 'days').format('YYYY-MM-DD'), // 조회기간from
        ptoDate: this.$moment().format('YYYY-MM-DD') // 조회기간to
      },
      selectedRows: []
    }
  },
  computed: {
    getColumnDef: function () { return this.columnDef },
    getRowData: function () { return this.rowData },
    getCategoryCodeList: function () { return this.categoryCodeList },
    getBigCodeList: function () { return this.bigCodeList },
    getMidCodeList: function () { return this.midCodeList },
    getVenProviderList: function () { return this.venProviderList }
  },
  methods: {
    // 품목 대분류 selectBox Change
    changeCboBigCode () {
      this.searchParam.pmidCode = ''
      this.midCodeList = this.getCategoryCodeList.filter(x => x.parentCategoryNo === this.searchParam.pbigCode)
    },
    // 선택한 row
    selectedRowData (selectedRows) {
      this.selectedRows = selectedRows
    },
    // 조회
    onClickSearch () {
      productManageApi.findProductList(this.searchParam)
        .then(res => { this.rowData = res })
    },
    onClickSelected () {
      if (this.selectedRows.length === 0) {
        alert('상품을 선택하세요.')
        return
      }
      this.$emit('close', this.selectedRows)
    }
  }
}
</script>

<style>

</style>
