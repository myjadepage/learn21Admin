<template>
 <div class="container-fluid">
    <div class="row">
      <PageHeader :pageCurrentInfo="pageCurrentInfo" />
        <div class="col-sm-12">

            <!-- 검색영역 시작-->
            <div class="widget has-shadow">
                <div class="widget-body">
                    <table class="table table-bordered" summary="상품보기 검색하기">
                        <colgroup>
                            <col width="10%">
                            <col width="40%">
                            <col width="10%">
                            <col width="40%">
                        </colgroup>
                        <tbody>
                            <tr>
                                <th scope="row"><span class="text-primary">검색구분</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col col-sm-3">
                                            <select class="form-control" v-model="searchParam.ptype">
                                                <option value='NAME'>상품명</option>
                                                <option value='CODE'>상품코드</option>
                                            </select>
                                        </div>
                                        <div class="col col-sm-4">
                                            <input type="text" class="form-control" v-model="searchParam.ptypeNm">
                                        </div>
                                    </div>
                                </td>
                                <th><span class="text-primary">상품분류</span></th>
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
                                <th scope="row"><span class="text-primary">공급처</span></th>
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
                                <th><span class="text-primary">물류정보</span></th>
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
                                <th scope="row"><span class="text-primary">판매여부/상품구분</span></th>
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
                                <th><span class="text-primary">등록일자</span></th>
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
                :btnList="[
                            {btnName: '신규', onClick: () => { this.$router.push({name: 'productInput',
                                                                                params: {itemId: ''}}) }}
                          ]"
                :rowEditorList="[{
                                  type: 'LINK',
                                  editColumn: 'productName',
                                  onClick: (data) => {
                                    this.$router.push({name: 'productInput',
                                                      params: {itemId: data.row.itemId}})
                                    }
                                }]"
            />
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import DataTableVue4 from '@/components/DataTableVue4'
import pageHeader from '@/mixin/pageHeader'
import dateSelect from '@/mixin/dateSelect'

const store = 'productManageStore'
export default {
  mixins: [
    pageHeader({title: '상품관리', groupName: '상품관리'}),
    dateSelect
  ],
  components: {
    DataTableVue4
  },
  created () {
    this.actionFindCategoryCode()
      .then(res => {
        this.actionSetBigCodeList(res.filter(x => x.parentCategoryNo === '1')) // 대분류코드
      })
    this.actionFindProvider() // 공급처
  },
  data () {
    return {
      columnDef: [
        { label: '상품코드', name: 'productCode', sort: true },
        { label: '상품명', name: 'productName', sort: true, row_classes: 'table-text-left' },
        { label: '품목ID', name: 'itemId', sort: true },
        { label: '정상가', name: 'originPrice', sort: true, row_classes: 'table-text-right', type: 'Number' },
        { label: '판매가', name: 'listPrice', sort: true, row_classes: 'table-text-right', type: 'Number' },
        { label: '할인율', name: 'discountRate', sort: true, row_classes: 'table-text-right' },
        { label: '분류', name: 'depthFullname', sort: true, row_classes: 'table-text-left' },
        { label: '판매', name: 'statusCd', sort: true },
        { label: '공급처', name: 'providerName', sort: true },
        { label: '등록일자', name: 'dateSystemRegister', sort: true, type: 'Date' }
      ],
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
      modalOpenFlag: false, // 모달창 openFlag
      modalPopupId: '', // 오픈할 모달창 id
      modalParamObj: {} // 모달창 호출시 params
    }
  },
  computed: {
    ...mapGetters(store, [
      'getRowData',
      'getVenProviderList',
      'getCategoryCodeList', /* 품목코드목록 */
      'getBigCodeList',
      'getMidCodeList'
    ]),
    getColumnDef: function () { return this.columnDef }
  },
  methods: {
    ...mapActions(store, [
      'actionFindProductList',
      'actionFindProvider',
      'actionFindCategoryCode',
      'actionSetBigCodeList',
      'actionSetMidCodeList'
    ]),
    // 품목 대분류 selectBox Change
    changeCboBigCode () {
      this.searchParam.pmidCode = ''
      this.actionSetMidCodeList(this.getCategoryCodeList.filter(x => x.parentCategoryNo === this.searchParam.pbigCode))
    },
    // 조회
    onClickSearch () {
      this.actionFindProductList(this.searchParam)
    },
    openModalPopup (id) {
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
