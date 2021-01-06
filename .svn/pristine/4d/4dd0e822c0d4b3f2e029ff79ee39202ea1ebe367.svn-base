<template>
   <div class="container-fluid">
     <div class="row">
     <PageHeader :pageCurrentInfo="pageCurrentInfo" />
     <!-- modalPopup -->
    <ProductSelectPopup v-if="modalOpenFlag && modalPopupId === 'ProductSelectPopup'"
                        :modalParamObj="modalParamObj"
                        @close="closeModalPopup" />
        <div class="col-sm-12">
            <DataTableVue4
                :columnDef="getColumnDef"
                :rowData="getRowData"
                :isPaging="false"
            />

            <!-- 검색영역 시작-->
            <div class="widget has-shadow">
                <div class="widget-body">
                    <table class="table table-bordered" summary="상품일괄 등록하기">
                        <colgroup>
                            <col width="10%">
                            <col width="40%">
                            <col width="10%">
                            <col width="40%">
                        </colgroup>
                        <tbody>
                            <tr>
                                <th scope="row"> 상품분류</th>
                                <td colspan="4">
                                    <div class="row">
                                        <div class="col col-sm-3">
                                            <select class="form-control" v-model="productAllUpdate.bigCode" @change="changeCboBigCode">
                                                <option value=''>전체</option>
                                                <option v-for="x in getBigCodeList" :key="x.categoryNo" :value="x.categoryNo">{{x.categoryName}}</option>
                                            </select>
                                        </div>
                                        <div class="col col-sm-3">
                                            <select class="form-control" v-model="productAllUpdate.midCode" @change="changeCboMidCode">
                                              <option value=''>전체</option>
                                              <option v-for="x in getMidCodeList" :key="x.categoryNo" :value="x.categoryNo">{{x.categoryName}}</option>
                                            </select>
                                        </div>
                                        <div class="col col-sm-3">
                                            <select class="form-control" v-model="productAllUpdate.smallCode">
                                              <option value=''>전체</option>
                                              <option v-for="x in getSmallCodeList" :key="x.categoryNo" :value="x.categoryNo">{{x.categoryName}}</option>
                                            </select>
                                        </div>
                                    </div>
                                </td>

                            </tr>
                            <tr>
                                <th scope="row"> 물류정보</th>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <select class="form-control" v-model="productAllUpdate.deliveryUnitNo">
                                                <option value=''>전체</option>
                                                <option value='23'>어학원용(1,500)</option>
                                                <option value='24'>무료</option>
                                            </select>
                                        </div>
                                    </div>
                                </td>
                                <th> 판매여부</th>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-12 d-flex align-items-center">
                                            <div class="styled-radio">
                                                <input type="radio" name="rdoStatusCd" id="rdoStatusCd-1" value="판매중" v-model="productAllUpdate.statusCd">
                                                <label for="rdoStatusCd-1">판매중</label>
                                            </div>
                                            <div class="styled-radio">
                                                <input type="radio" name="rdoStatusCd" id="rdoStatusCd-2" value="삭제" v-model="productAllUpdate.statusCd">
                                                <label for="rdoStatusCd-2">삭제</label>
                                            </div>
                                            <div class="styled-radio">
                                                <input type="radio" name="rdoStatusCd" id="rdoStatusCd-3" value="승인대기" v-model="productAllUpdate.statusCd">
                                                <label for="rdoStatusCd-3">승인대기</label>
                                            </div>
                                            <div class="styled-radio">
                                                <input type="radio" name="rdoStatusCd" id="rdoStatusCd-4" value="판매중지" v-model="productAllUpdate.statusCd">
                                                <label for="rdoStatusCd-4">판매중지</label>
                                            </div>
                                            <div class="styled-radio">
                                                <input type="radio" name="rdoStatusCd" id="rdoStatusCd-5" value="품절" v-model="productAllUpdate.statusCd">
                                                <label for="rdoStatusCd-5">품절</label>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th> 반품유형</th>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-12 d-flex align-items-center">
                                            <div class="styled-radio">
                                                <input type="radio" name="rdoReturnTypeCd" id="rdoReturnTypeCd-1" value="반품가능" v-model="productAllUpdate.returnTypeCd">
                                                <label for="rdoReturnTypeCd-1">반품가능</label>
                                            </div>
                                            <div class="styled-radio">
                                                <input type="radio" name="rdoReturnTypeCd" id="rdoReturnTypeCd-2" value="반품불가" v-model="productAllUpdate.returnTypeCd">
                                                <label for="rdoReturnTypeCd-2">반품불가</label>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <th scope="row"> 정상가</th>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <div class="input-group">
                                                <input type="text" class="form-control text-right" v-model="productAllUpdate.originPrice">
                                                <span class="input-group-addon">원</span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th > 판매가</th>
                                <td>
                                   <div class="row">
                                        <div class="col-sm-4">
                                            <div class="input-group">
                                                <input type="text" class="form-control text-right" v-model="productAllUpdate.listPrice">
                                                <span class="input-group-addon">원</span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <th > 할인율</th>
                                <td>
                                   <div class="row">
                                        <div class="col-sm-4">
                                            <div class="input-group">
                                                <input type="text" class="form-control text-right" v-model="productAllUpdate.discountRate">
                                                <span class="input-group-addon">%</span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row"> 검색어 키워드</th>
                                <td>
                                    <input type="text" class="form-control" v-model="productAllUpdate.searchkeyword">
                                </td>
                                <th scope="row"> 메모</th>
                                <td>
                                    <input type="text" class="form-control" v-model="productAllUpdate.adminMemo">
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="widget-footer">
                    <div class="row">
                        <div class="col-sm-6 d-flex align-items-center justify-content-md-start">
                            <button type="button" class="btn btn-outline-primary" @click="openModalPopup('ProductSelectPopup')">상품선택</button>
                        </div>
                        <div class="col-sm-6 d-flex align-items-center justify-content-md-end">
                            <button type="button" class="btn btn-primary" @click="onClickSave">일괄변경</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>
   </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import pageHeader from '@/mixin/pageHeader'
import DataTableVue4 from '@/components/DataTableVue4'
import ProductSelectPopup from '@/components/popup/ProductSelectPopup.vue'

const store = 'productManageStore'
export default {
  components: { ProductSelectPopup, DataTableVue4 },
  mixins: [pageHeader({title: '상품정보일괄변경', groupName: '상품관리'})],
  created () {
    this.actionFindCategoryCode()
      .then(res => {
        this.actionSetBigCodeList(res.filter(x => x.parentCategoryNo === '1')) // 대분류코드
      })
  },
  data () {
    return {
      columnDef: [
        { label: '상품코드', name: 'productCode', sort: false, row_classes: 'w100' },
        { label: '상품명', name: 'productName', sort: false, row_classes: 'table-text-left w300' },
        { label: '상품분류', name: 'depthFullname', sort: false, row_classes: 'table-text-left' },
        { label: '물류정보', name: 'deliveryUnitName', sort: false, row_classes: 'w100' },
        { label: '정가', name: 'originPrice', sort: false, row_classes: 'table-text-right w80', type: 'Number' },
        { label: '할인율', name: 'discountRate', sort: false, row_classes: 'table-text-right w80', type: 'Number' },
        { label: '판매가', name: 'listPrice', sort: false, row_classes: 'table-text-right w80', type: 'Number' },
        { label: '판매여부', name: 'statusCd', sort: false }
      ],
      rowData: [], // 상품목록
      productAllUpdate: {
        bigCode: '',
        midCode: '',
        smallCode: '',
        productNo: '', // 상품번호
        categoryNo: '', // 상품분류번호
        deliveryUnitNo: '', // 물류단위
        statusCd: '판매중', // 판매여부
        returnTypeCd: '', // 반품유형
        originPrice: '', // 정상가
        listPrice: '', // 판매가
        discountRate: '', // 할인율
        searchkeyword: '', // 검색키워드 (상품명/브랜드명/아이템)
        adminMemo: '' // 메모
      },
      modalOpenFlag: false, // 모달창 openFlag
      modalPopupId: '', // 오픈할 모달창 id
      modalParamObj: {} // 모달창 호출시 params
    }
  },
  computed: {
    ...mapGetters(store, [
      'getCategoryCodeList', /* 품목코드목록 */
      'getBigCodeList',
      'getMidCodeList',
      'getSmallCodeList'
    ]),
    getColumnDef: function () { return this.columnDef },
    getRowData: function () { return this.rowData }
  },
  methods: {
    ...mapActions(store, [
      'actionFindCategoryCode',
      'actionSetBigCodeList',
      'actionSetMidCodeList',
      'actionSetSmallCodeList',
      'actionSaveBatch'
    ]),
    // 상품일괄 저장
    onClickSave () {
      if (this.rowData.length === 0) {
        alert('등록할 상품이 없습니다.')
        return
      }
      // 상품분류
      if (this.productAllUpdate.bigCode !== '' && this.productAllUpdate.bigCode !== null) {
        this.productAllUpdate.categoryNo = this.productAllUpdate.bigCode
      }
      if (this.productAllUpdate.midCode !== '' && this.productAllUpdate.midCode !== null) {
        this.productAllUpdate.categoryNo = this.productAllUpdate.midCode
      }
      if (this.productAllUpdate.smallCode !== '' && this.productAllUpdate.smallCode !== null) {
        this.productAllUpdate.categoryNo = this.productAllUpdate.smallCode
      }
      let paramList = []
      this.rowData.forEach(o => {
        this.productAllUpdate.productNo = o.productNo
        paramList.push(Object.assign({}, this.productAllUpdate))
      })
      // 저장
      this.actionSaveBatch(paramList)
        .then(res => {
          alert(res.message)
        })
    },
    // 품목 대분류 selectBox Change
    changeCboBigCode () {
      this.productAllUpdate.midCode = ''
      this.productAllUpdate.smallCode = ''
      this.actionSetMidCodeList(this.getCategoryCodeList.filter(x => x.parentCategoryNo === this.productAllUpdate.bigCode))
      this.actionSetSmallCodeList([])
    },
    // 품목 중분류 selectBox Change
    changeCboMidCode () {
      this.productAllUpdate.smallCode = ''
      this.actionSetSmallCodeList(this.getCategoryCodeList.filter(x => x.parentCategoryNo === this.productAllUpdate.midCode))
    },
    // 모달팝업 open
    openModalPopup (id, o) {
      if (id === 'ProductSelectPopup') { // 품목
        this.modalPopupId = 'ProductSelectPopup'
        this.modalParamObj = {}
      }
      this.modalOpenFlag = true
    },
    // 모달창 close
    closeModalPopup (data) {
      if (this.modalPopupId === 'ProductSelectPopup') { // 품목
        if (data !== undefined) {
          this.rowData = data
        }
      }
      this.modalPopupId = ''
      this.modalOpenFlag = false
    }
  }
}
</script>

<style>

</style>
