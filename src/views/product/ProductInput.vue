<template>
    <div class="container-fluid">
        <div class="row">
        <PageHeader :pageCurrentInfo="pageCurrentInfo" />
        <!-- modalPopup -->
        <ItemSelectSinglePopup v-if="modalOpenFlag && modalPopupId === 'ItemSelectSinglePopup'"
                        :modalParamObj="modalParamObj"
                        @close="closeModalPopup" />
            <div class="col-sm-12">
                <div class="widget has-shadow">
                    <div class="widget-body">
                        <div class="row">
                            <div class="col-sm-12">
                                <!-- 검색영역 끝-->
                                <div class="widget">
                                    <div class="widget-body no-padding">
                                        <table class="table table-bordered no-margin totla-info" summary="상품등록">
                                            <colgroup>
                                                <col width="10%">
                                                <col width="40%">
                                                <col width="10%">
                                                <col width="40%">
                                            </colgroup>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">품목명</th>
                                                    <td>
                                                        <div class="row">
                                                            <div class="col-sm-4">
                                                                {{itemDetail.itemName}}
                                                                <button type="button"
                                                                        class="btn btn-outline-primary"
                                                                        v-show="itemDetail.itemId === ''"
                                                                        @click="openModalPopup('ItemSelectSinglePopup')">+ 품목추가</button>
                                                            </div>
                                                        </div>

                                                    </td>
                                                    <th>품목ID</th>
                                                    <td>{{itemDetail.itemId}}</td>
                                                </tr>
                                                <tr>
                                                    <th>품목단가</th>
                                                    <td>
                                                        <div class="row">
                                                            <div class="col-sm-4">
                                                                <strong>입고단가: </strong> {{itemDetail.itemImportPrice}}원
                                                            </div>
                                                            <div class="col-sm-4">
                                                                <strong>소비자가: </strong> {{itemDetail.itemSalePrice}}원
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <th>관리번호</th>
                                                    <td>
                                                        {{itemDetail.itemManageNo}}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>저자/출판사</th>
                                                    <td>
                                                        <div class="row">
                                                            <div class="col-sm-4">
                                                                <strong>저자: </strong> {{itemDetail.itemAuthor}}
                                                            </div>
                                                            <div class="col-sm-4">
                                                                <strong>출판사: </strong> {{itemDetail.itemManufacture}}
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <th>브랜드</th>
                                                    <td>
                                                        {{itemDetail.itemBrandName}}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Year/Pages</th>
                                                    <td>
                                                        <div class="row">
                                                            <div class="col-sm-4">
                                                                <strong>Year: </strong> {{itemDetail.itemYear}}
                                                            </div>
                                                            <div class="col-sm-4">
                                                                <strong>Pages: </strong> {{itemDetail.itemPage}}
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <th>옵션정보</th>
                                                    <td>
                                                         <div class="row">
                                                             <div class="col-sm-4">
                                                                 <strong>CD: </strong> {{itemDetail.itemCdYn === 'Y' ? '있음' : '없음'}}
                                                            </div>
                                                            <div class="col-sm-4">
                                                                <strong>Ebook: </strong> {{itemDetail.itemEbookYn === 'Y' ? '있음' : '없음'}}
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th ope="row">상품구분</th>
                                                    <td>
                                                        <div class="row">
                                                            <div class="col-sm-4">
                                                                 {{itemDetail.itemStbYn === 'Y' ? 'STB' : '일반'}}
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <th ope="row">선택상품</th>
                                                    <td>
                                                        <div class="row">
                                                            <div class="col-sm-4">
                                                                 {{itemDetail.itemSelectedYn === 'Y' ? '선택상품' : '일반'}}
                                                            </div>
                                                            <div class="col-sm-4" v-if="itemDetail.itemSelectedYn === 'Y'">
                                                                 {{itemDetail.itemSelectedTxt}}
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">반품유형</th>
                                                    <td>
                                                        <div class="row">
                                                            <div class="col-sm-4">
                                                                 {{itemDetail.itemRefundType === 'Y' ? '가능' : '불가능'}}
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <th scope="row">이전내역 중복체크</th>
                                                    <td>
                                                        <div class="row">
                                                            <div class="col-sm-4">
                                                                 {{itemDetail.itemDuplicateYn === 'Y' ? '체크' : '제외'}}
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">과세구분(매출)</th>
                                                    <td>
                                                        <div class="row">
                                                            <div class="col-sm-4">
                                                                 {{itemDetail.itemTaxationSales === '0' ? '과세'
                                                                 : itemDetail.itemTaxationSales === '1' ? '비과세': '포함'}}
                                                            </div>
                                                        </div>
                                                    </td>
                                                     <th scope="row">판매여부</th>
                                                    <td>
                                                        <div class="row">
                                                            <div class="col-sm-4">
                                                                 {{itemDetail.itemUseYn === 'Y' ? '판매' : '미판매'}}
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>품목부가정보</th>
                                                    <td colspan="3">
                                                        {{itemDetail.itemMemo}}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="col-sm-6 d-flex align-items-center justify-content-md-start justify-content-center">
                                    <h5>상품-등록정보</h5>
                                </div>
                                <DataTableVue4
                                        :columnDef="getColumnDef"
                                        :rowData="getRowData"
                                        :isPaging="false"
                                        :isCheckbox="false"
                                        @selectedRowData="selectedRowData"
                                        :btnList="[
                                            {
                                                btnName: '+추가',
                                                onClick: () => {this.onClickAddItem()}
                                            }
                                        ]"
                                        :rowEditorList="
                                        [
                                            {
                                                type: 'INPUT',
                                                editColumn: 'productCode',
                                                disabled: true
                                            },
                                            {
                                                type: 'INPUT',
                                                editColumn: 'productName',
                                                onChange: (e, props)=>{
                                                    this.rowData[props.row.vbt_id-1].productName = e.target.value
                                                }
                                            },
                                            {
                                                type: 'SELECT',
                                                editColumn: 'categoryNo',
                                                onChange: (e, props)=>{
                                                    this.rowData[props.row.vbt_id-1].categoryNo = e.target.value
                                                },
                                                option: getCategoryCodeList.map(x => {
                                                    return {value: x.categoryNo, text: x.depthFullname}
                                                })
                                            },
                                            {
                                                type: 'SELECT',
                                                editColumn: 'deliveryUnitNo',
                                                onChange: (e, props)=>{
                                                    this.rowData[props.row.vbt_id-1].deliveryUnitNo = e.target.value
                                                },
                                                option: [{value: '23', text: '어학원용(1,500)'},
                                                         {value: '24', text: '무료'}]
                                            },
                                            {
                                                type: 'INPUT',
                                                editColumn: 'originPrice',
                                                onChange: (e, props)=>{
                                                    this.rowData[props.row.vbt_id-1].originPrice = e.target.value
                                                }
                                            },
                                            {
                                                type: 'INPUT',
                                                editColumn: 'discountRate',
                                                onChange: (e, props)=>{
                                                    this.rowData[props.row.vbt_id-1].discountRate = e.target.value
                                                }
                                            },
                                            {
                                                type: 'INPUT',
                                                editColumn: 'listPrice',
                                                onChange: (e, props)=>{
                                                    this.rowData[props.row.vbt_id-1].listPrice = e.target.value
                                                }
                                            },
                                            {
                                                type: 'SELECT',
                                                editColumn: 'statusCd',
                                                onChange: (e, props)=>{
                                                    this.rowData[props.row.vbt_id-1].statusCd = e.target.value
                                                },
                                                option:
                                                [
                                                    {value: '삭제', text: '삭제'},
                                                    {value: '승인대기', text: '승인대기'},
                                                    {value: '판매중', text: '판매중'},
                                                    {value: '판매중지', text: '판매중지'},
                                                    {value: '품절', text: '품절'},
                                                ]
                                            },
                                        ]
                                        "
                                    />
                            </div>
                        </div>
                    </div>

                    <div class="widget-footer">
                        <div class="row">
                            <div class="col-sm-6 d-flex align-items-center justify-content-md-start">
                                <button type="button" class="btn btn-outline-primary" @click="$router.push({name: 'productManage'})">목록</button>
                            </div>
                            <div class="col-sm-6 d-flex align-items-center justify-content-md-end">
                                <button type="button" class="btn btn-primary" @click="onClickSave">저장</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import DataTableVue4 from '@/components/DataTableVue4'
import pageHeader from '@/mixin/pageHeader'
import ItemSelectSinglePopup from '@/components/popup/common/ItemSelectSinglePopup'

const store = 'productManageStore'
export default {
  mixins: [pageHeader({title: '상품등록/수정', groupName: '상품관리'})],
  components: {
    DataTableVue4,
    ItemSelectSinglePopup
  },
  created () {
    this.itemDetail.itemId = this.$route.params.itemId
    if (this.itemDetail.itemId !== '') {
      // 품목정보 및 품목별 상품정보 조회
      this.actionFindProductDetail(this.itemDetail.itemId)
        .then(res => {
          this.itemDetail = res.itemDetail
          this.rowData = res.productByItemList
        })
    }
  },
  data () {
    return {
      columnDef: [
        { label: '상품코드', name: 'productCode', sort: false, row_classes: 'w100' },
        { label: '상품명', name: 'productName', sort: false, row_classes: 'w200' },
        { label: '상품분류', name: 'categoryNo', sort: false, row_classes: 'w250' },
        { label: '물류정보', name: 'deliveryUnitNo', sort: false },
        { label: '정가', name: 'originPrice', sort: false, row_classes: 'table-text-right', type: 'Number' },
        { label: '할인율', name: 'discountRate', sort: false, row_classes: 'table-text-right', type: 'Number' },
        { label: '판매가', name: 'listPrice', sort: false, row_classes: 'table-text-right', type: 'Number' },
        { label: '판매여부', name: 'statusCd', sort: false }
      ],
      rowData: [], // 품목별 상품목록
      itemDetail: {
        idNum: '', /* 품목상세 코드 */
        itemId: '', /* 품목 코드 */
        itemName: '', /* 품목명 */
        bigCode: '', /* 대분류 */
        midCode: '', /* 중분류 */
        smallCode: '', /* 소분류 */
        icCodeNo: '', /* 품목 분류 코드 */
        itemManageNo: '', /* 관리번호 */
        itemStandard: '', /* 규격 */
        itemProviderNo: '', /* 공급처 */
        providerName: '', /* 공급처명 */
        itemRethinkCheck: '', /* 재고관리여부 */
        itemHandling: '', /* 취급여부 */
        itemRethinType: '', /* 재고구분 */
        itemTaxationSales: '', /* 과세구분(매출) */
        itemTaxationPurchase: '', /* 과세구분(매입) */
        itemImportPrice: '', /* 입고 단가 */
        itemSalePrice: '', /* 소비자가 */
        itemMemo: '', /* 메모 */
        itemRegdate: '', /* 생성 날짜 */
        itemLastdate: '', /* 수정 날짜 */
        itemUseYn: '', /* 사용여부 */
        itemAuthor: '', /* 저자 */
        itemManufacture: '', /* 제조사(출판사) */
        itemBrandNo: '', /* 브랜드번호 */
        itemBrandName: '',
        itemYear: '', /* year */
        itemPage: '', /* page */
        itemCdYn: '', /* cd */
        itemEbookYn: '', /* ebook */
        itemStbYn: '', /* STB */
        itemSelectedYn: '', /* 선택 */
        itemSelectedTxt: '', /* 선택TEXT */
        itemRefundType: '', /* 반품유형 */
        itemDuplicateYn: '' /* 이전내역 중복체크 */
      },
      selectedRows: [], // 선택한 row

      modalOpenFlag: false, // 모달창 openFlag
      modalPopupId: '', // 오픈할 모달창 id
      modalParamObj: {} // 모달창 호출시 params
    }
  },
  computed: {
    ...mapGetters(store, [
      'getCategoryCodeList' /* 품목코드목록 */
    ]),
    getColumnDef: function () { return this.columnDef },
    getRowData: function () { return this.rowData }
  },
  methods: {
    ...mapActions(store, [
      'actionFindProductDetail',
      'actionSaveProductByItem'
    ]),
    // 선택한 row
    selectedRowData (selectedRows) {
      this.selectedRows = selectedRows
    },
    // 상품추가
    onClickAddItem () {
      let keyIdx = 0
      if (this.rowData.filter(x => x.newKey !== undefined).length > 0) {
        keyIdx = Math.max(...this.rowData.filter(x => x.newKey !== undefined).map(x => x.newKey)) + 1
      }
      this.rowData.push({
        newKey: keyIdx,
        categoryNo: null,
        deliveryUnitNo: null,
        discountRate: '',
        listPrice: '',
        originPrice: '',
        productCode: '',
        productName: '',
        productNo: '',
        statusCd: '승인대기'})
    },
    // 상품삭제  ----------------------------------------------판매여부로 대체가능
    // onClickDelItem () {
    //   if (this.selectedRows.length === 0) {
    //     alert('삭제할 상품을 선택하세요.')
    //     return
    //   }
    //   // 새로 추가한 row 삭제
    //   let addRows = this.selectedRows.filter(x => x.newKey !== undefined).map(y => {
    //     delete y.vbt_id
    //     return y
    //   })
    //   this.rowData = this.lodash.differenceWith(this.rowData, addRows, this.lodash.isEqual)

    //   // 저장된 상품을 삭제시
    //   if (this.selectedRows.filter(x => x.newKey === undefined).length) {
    //     if (!confirm('선택한 상품을 삭제 하시겠습니까?')) {
    //       return
    //     }
    //   }
    // },
    // 저장
    onClickSave () {
      if (this.rowData.filter(x => x.productName === '' || x.productName === null).length > 0) {
        alert('상품명을 입력하세요.')
        return
      }
      const paramObj = {
        itemDetail: this.itemDetail,
        productByItemList: this.rowData
      }
      this.actionSaveProductByItem(paramObj)
        .then(res => {
          alert(res.message)
          // 품목정보 및 품목별 상품정보 조회
          this.actionFindProductDetail(this.itemDetail.itemId)
            .then(res => {
              this.itemDetail = res.itemDetail
              this.rowData = res.productByItemList
            })
        })
    },
    // 모달팝업 open
    openModalPopup (id, o) {
      if (id === 'ItemSelectSinglePopup') { // 품목
        this.modalPopupId = 'ItemSelectSinglePopup'
        this.modalParamObj = {}
      }
      this.modalOpenFlag = true
    },
    // 모달창 close
    closeModalPopup (data) {
      if (this.modalPopupId === 'ItemSelectSinglePopup') { // 품목
        if (data !== undefined) {
          this.itemDetail.itemId = data.itemId
          // 품목별 상품정보 조회
          this.actionFindProductDetail(this.itemDetail.itemId)
            .then(res => {
              this.itemDetail = res.itemDetail
              this.rowData = res.productByItemList
            })
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
