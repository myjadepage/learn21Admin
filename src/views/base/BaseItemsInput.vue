<template>
  <div class="container-fluid">
    <div class="row">
      <PageHeader :pageCurrentInfo="pageCurrentInfo" />
              <div class="col-sm-12">

            <!-- 작성영역 시작-->
            <div class="widget has-shadow">
                <div class="widget-body">
                    <table class="table table-bordered" summary="품목 등록">
                        <colgroup>
                            <col width="10%">
                            <col width="40%">
                            <col width="10%">
                            <col width="40%">
                        </colgroup>
                        <tbody>
                            <tr>
                                <th scope="row"><span class="text-primary">분류</span></th>
                                <td colspan="7">
                                    <div class="row">
                                        <div class="col col-sm-2">
                                            <select class="form-control" v-model="itemDetail.bigCode" @change="changeCboBigCode">
                                              <option value=''>전체</option>
                                              <option v-for="x in getBigCodeList" :key="x.icCodeNo" :value="x.icCodeNo">{{x.icCodeName}}</option>
                                            </select>
                                        </div>
                                        <div class="col col-sm-2">
                                            <select class="form-control" v-model="itemDetail.midCode" @change="changeCboMidCode">
                                              <option value=''>전체</option>
                                              <option v-for="x in getMidCodeList" :key="x.icCodeNo" :value="x.icCodeNo">{{x.icCodeName}}</option>
                                            </select>
                                        </div>
                                        <div class="col col-sm-2">
                                            <select class="form-control" v-model="itemDetail.smallCode">
                                              <option value=''>전체</option>
                                              <option v-for="x in getSmallCodeList" :key="x.icCodeNo" :value="x.icCodeNo">{{x.icCodeName}}</option>
                                            </select>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row"><span class="text-primary">품목명</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col col-sm-4">
                                            <input type="text" class="form-control" v-model="itemDetail.itemName" placeholder="">
                                        </div>
                                    </div>
                                </td>
                                <th><span class="text-primary">품목코드</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col col-sm-4">
                                            <input type="text" class="form-control" v-model="itemDetail.itemId" readonly placeholder="자동 생성입니다.">
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row"><span class="text-primary">관리 번호</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <input type="text" class="form-control" v-model="itemDetail.itemManageNo" placeholder="">
                                        </div>
                                    </div>
                                </td>
                                <th><span class="text-primary">규격</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <input type="text" class="form-control" v-model="itemDetail.itemStandard" placeholder="">
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row"><span class="text-primary">저자/출판사</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col col-sm-4">
                                            <div class="input-group">
                                                <span class="input-group-addon">저자</span>
                                                <input type="text" class="form-control" v-model="itemDetail.itemAuthor" placeholder="">
                                            </div>
                                        </div>
                                        <div class="col col-sm-4">
                                            <div class="input-group">
                                                    <span class="input-group-addon">출판사</span>
                                                    <input type="text" class="form-control" v-model="itemDetail.itemManufacture" placeholder="">
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <th><span class="text-primary">브랜드</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col col-sm-3">
                                            <select class="form-control" v-model="itemDetail.itemBrandNo">
                                                <option value=null>선택하세요</option>
                                                <option v-for="x in getVenBrandList" :key="x.brandNo" :value="x.brandNo">{{x.brandName}}</option>
                                            </select>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row"><span class="text-primary">Year/Pages</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col col-sm-4">
                                            <div class="input-group">
                                                <span class="input-group-addon">Year</span>
                                                <input type="text" class="form-control" v-model="itemDetail.itemYear" placeholder="">
                                            </div>
                                        </div>
                                        <div class="col col-sm-4">
                                            <div class="input-group">
                                                <span class="input-group-addon">Pages</span>
                                                <input type="text" class="form-control" v-model="itemDetail.itemPage" placeholder="">
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <th><span class="text-primary">옵션정보</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col col-sm-6">
                                            <div class="input-group">
                                                <span class="input-group-addon" style="font-weight:bold">CD</span>
                                                 <div class="styled-radio">
                                                    <input type="radio" name="rdoCd" id="rdoCd-1" value="Y" v-model="itemDetail.itemCdYn">
                                                    <label for="rdoCd-1">있음</label>
                                                 </div>
                                                 <div class="styled-radio">
                                                    <input type="radio" name="rdoCd" id="rdoCd-2" value="N" v-model="itemDetail.itemCdYn">
                                                    <label for="rdoCd-2">없음</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col col-sm-6">
                                            <div class="input-group">
                                                <span class="input-group-addon" style="font-weight:bold">EBOOK</span>
                                                <div class="styled-radio">
                                                    <input type="radio" name="rdoEbook" id="rdoEbook-1" value="Y" v-model="itemDetail.itemEbookYn">
                                                    <label for="rdoEbook-1">있음</label>
                                                </div>
                                                <div class="styled-radio">
                                                    <input type="radio" name="rdoEbook" id="rdoEbook-2" value="N" v-model="itemDetail.itemEbookYn">
                                                    <label for="rdoEbook-2">없음</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row"><span class="text-primary">품목구분</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-12 d-flex align-items-center">
                                            <div class="styled-radio">
                                                <input type="radio" name="rdoStb" id="rdoStb-1" value="N" v-model="itemDetail.itemStbYn">
                                                <label for="rdoStb-1">일반</label>
                                            </div>
                                            <div class="styled-radio">
                                                <input type="radio" name="rdoStb" id="rdoStb-2" value="Y" v-model="itemDetail.itemStbYn">
                                                <label for="rdoStb-2">STB</label>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <th><span class="text-primary">선택상품</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col col-sm-4 d-flex align-items-center">
                                            <div class="styled-radio">
                                                <input type="radio" name="rdoSelected" id="rdoSelected-1" value="N" v-model="itemDetail.itemSelectedYn">
                                                <label for="rdoSelected-1">일반</label>
                                            </div>
                                            <div class="styled-radio">
                                                <input type="radio" name="rdoSelected" id="rdoSelected-2" value="Y" v-model="itemDetail.itemSelectedYn">
                                                <label for="rdoSelected-2">선택</label>
                                            </div>
                                        </div>
                                        <div class="col col-sm-4">
                                            <input type="text" class="form-control" v-model="itemDetail.itemSelectedTxt">
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row"><span class="text-primary">반품유형</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-12 d-flex align-items-center">
                                            <div class="styled-radio">
                                                <input type="radio" name="rdoRefund" id="rdoRefund-1" value="Y" v-model="itemDetail.itemRefundType">
                                                <label for="rdoRefund-1">가능</label>
                                            </div>
                                            <div class="styled-radio">
                                                <input type="radio" name="rdoRefund" id="rdoRefund-2" value="N" v-model="itemDetail.itemRefundType">
                                                <label for="rdoRefund-2">불가능</label>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <th><span class="text-primary">이전내역 중복체크</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-12 d-flex align-items-center">
                                            <div class="styled-radio">
                                                <input type="radio" name="rdoDuplicate" id="rdoDuplicate-1" value="Y" v-model="itemDetail.itemDuplicateYn">
                                                <label for="rdoDuplicate-1">체크</label>
                                            </div>
                                            <div class="styled-radio">
                                                <input type="radio" name="rdoDuplicate" id="rdoDuplicate-2" value="N" v-model="itemDetail.itemDuplicateYn">
                                                <label for="rdoDuplicate-2">제외</label>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row"><span class="text-primary">판매여부</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-12 d-flex align-items-center">
                                            <div class="styled-radio">
                                                <input type="radio" name="rdoUseYn" id="rdoUseYn-1" value="Y" v-model="itemDetail.itemUseYn">
                                                <label for="rdoUseYn-1">판매</label>
                                            </div>
                                            <div class="styled-radio">
                                                <input type="radio" name="rdoUseYn" id="rdoUseYn-2" value="N" v-model="itemDetail.itemUseYn">
                                                <label for="rdoUseYn-2">미판매</label>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <th><span class="text-primary">품목이미지</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col col-sm-4">
                                            <file-upload id="file1" @file1="(e) =>{ this.uploadFile = e }"></file-upload>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row"><span class="text-primary">공급처</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col col-sm-3">
                                            <select class="form-control" v-model="itemDetail.itemProviderNo">
                                                <option value=null>선택하세요</option>
                                                <option v-for="x in getVenProviderList" :key="x.providerNo" :value="x.providerNo">{{x.providerName}}</option>
                                            </select>
                                        </div>

                                    </div>
                                </td>
                                <th><span class="text-primary">재고관리 여부</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-12 d-flex align-items-center">
                                            <div class="styled-radio">
                                                <input type="radio" name="rdoRethinkCheck" id="rdoRethinkCheck-1" value="Y" v-model="itemDetail.itemRethinkCheck">
                                                <label for="rdoRethinkCheck-1">관리</label>
                                            </div>
                                            <div class="styled-radio">
                                                <input type="radio" name="rdoRethinkCheck" id="rdoRethinkCheck-2" value="N" v-model="itemDetail.itemRethinkCheck">
                                                <label for="rdoRethinkCheck-2">미관리</label>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row"><span class="text-primary">취급여부</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-12 d-flex align-items-center">
                                            <div class="styled-radio">
                                                <input type="radio" name="rdoHandling" id="rdoHandling-1" value="취급" v-model="itemDetail.itemHandling">
                                                <label for="rdoHandling-1">취급</label>
                                            </div>
                                            <div class="styled-radio">
                                                <input type="radio" name="rdoHandling" id="rdoHandling-2" value="단종" v-model="itemDetail.itemHandling">
                                                <label for="rdoHandling-2">단종</label>
                                            </div>
                                            <div class="styled-radio">
                                                <input type="radio" name="rdoHandling" id="rdoHandling-3" value="품절" v-model="itemDetail.itemHandling">
                                                <label for="rdoHandling-3">품절</label>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <th scope="row"><span class="text-primary">재고구분</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col col-sm-3">
                                            <select class="form-control" v-model="itemDetail.itemRethinType">
                                                <option key="" value="">전체</option>
                                                <option key="STB" value="STB">S.T.B</option>
                                                <option key="제품" value="제품">제품</option>
                                                <option key="상품" value="상품">상품</option>
                                                <option key="반제품" value="반제품">반제품</option>
                                                <option key="사은품" value="사은품">사은품</option>
                                                <option key="선급리스자산" value="선급리스자산">선급리스자산</option>
                                                <option key="윤용리스자산" value="윤용리스자산">윤용리스자산</option>
                                            </select>
                                        </div>

                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row"><span class="text-primary">과세구분(매출)</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-12 d-flex align-items-center">
                                            <div class="styled-radio">
                                                <input type="radio" name="rdoTaxationSales" id="rdoTaxationSales-1" value="0" v-model="itemDetail.itemTaxationSales">
                                                <label for="rdoTaxationSales-1">과세</label>
                                            </div>
                                            <div class="styled-radio">
                                                <input type="radio" name="rdoTaxationSales" id="rdoTaxationSales-2" value="1" v-model="itemDetail.itemTaxationSales">
                                                <label for="rdoTaxationSales-2">면세</label>
                                            </div>
                                            <div class="styled-radio">
                                                <input type="radio" name="rdoㅍ" id="rdoTaxationSales-3" value="2" v-model="itemDetail.itemTaxationSales">
                                                <label for="rdoTaxationSales-3">포함</label>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <th><span class="text-primary">과세구분(매입)</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-12 d-flex align-items-center">
                                            <div class="styled-radio">
                                                <input type="radio" name="rdoTaxationPurchase" id="rdoTaxationPurchase-1" value="0" v-model="itemDetail.itemTaxationPurchase">
                                                <label for="rdoTaxationPurchase-1">과세</label>
                                            </div>
                                            <div class="styled-radio">
                                                <input type="radio" name="rdoTaxationPurchase" id="rdoTaxationPurchase-2" value="1" v-model="itemDetail.itemTaxationPurchase">
                                                <label for="rdoTaxationPurchase-2">면세</label>
                                            </div>
                                            <div class="styled-radio">
                                                <input type="radio" name="rdoTaxationPurchase" id="rdoTaxationPurchase-3" value="2" v-model="itemDetail.itemTaxationPurchase">
                                                <label for="rdoTaxationPurchase-3">포함</label>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row"><span class="text-primary">입고단가</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col col-sm-4">
                                            <input type="text" class="form-control" v-model="itemDetail.itemImportPrice">
                                        </div>

                                    </div>
                                </td>
                                <th><span class="text-primary">소비자가</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col col-sm-4">
                                            <input type="text" class="form-control" v-model="itemDetail.itemSalePrice">
                                        </div>

                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row"><span class="text-primary">메모</span></th>
                                <td colspan="3">
                                    <div class="row">
                                        <div class="col col-sm-12">
                                            <input type="text" class="form-control" v-model="itemDetail.itemMemo">
                                        </div>

                                    </div>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>

                <div class="widget-footer">
                    <div class="row col">
                        <div class="col-sm-6">
                            <button type="button" class="btn btn-outline-primary" @click="$router.push({name: 'baseItems'})">목록</button>
                            <button type="button" class="btn btn-outline-danger" v-show="itemDetail.idNum !== ''">삭제</button>
                            <button type="button" class="btn btn-outline-primary" @click="init">신규품목</button>
                        </div>
                        <div class="col-sm-6 d-flex justify-content-end">
                            <button type="button" class="btn btn-primary" @click="saveItem">저장</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 입력폼 끝-->

        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import pageHeader from '@/mixin/pageHeader'
import { saveFile } from '@/api'
import FileUpload from '@/components/parts/FileUpload.vue'

const itemStore = 'itemStore'

export default {
  name: 'baseItemsInput',
  mixins: [pageHeader({title: '품목등록', groupName: '기초관리'})],
  components: {
    FileUpload
  },
  data () {
    return {
      itemDetail: {},
      uploadFile: null
    }
  },
  created () {
    // 대분류코드
    this.actionSetBigCodeList(this.getCategoryCodeList.filter(x => x.icParentNo === null))

    this.itemDetail.itemId = this.$route.params.itemId
    if (this.itemDetail.itemId !== null) {
      this.findItemDetail() // 품목코드목록 조회
    } else {
      this.init()
    }
    this.actionFindBrand() // 브랜드 조회
    this.actionFindProvider() // 공급처 조회
  },
  mounted () {

  },
  computed: {
    ...mapGetters(itemStore, [
      'getCategoryCodeList', /* 품목코드목록 */
      'getBigCodeList',
      'getMidCodeList',
      'getSmallCodeList',
      'getItemDetail',
      'getVenBrandList',
      'getVenProviderList'
    ])
  },
  methods: {
    ...mapActions(itemStore, [
      'actionSetBigCodeList',
      'actionSetMidCodeList',
      'actionSetSmallCodeList',
      'actionFindItemDetail',
      'actionFindBrand',
      'actionFindProvider',
      'actionSaveItem'
    ]),
    init: function () {
      this.actionSetMidCodeList([]) /* 중분류코드 Combo */
      this.actionSetSmallCodeList([]) /* 소분류코드 Combo */
      this.itemDetail = {
        idNum: '', /* 품목상세 코드 */
        itemId: null, /* 품목 코드 */
        itemName: '', /* 품목명 */
        bigCode: '', /* 대분류 */
        midCode: '', /* 중분류 */
        smallCode: '', /* 소분류 */
        icCodeNo: '', /* 품목 분류 코드 */
        itemManageNo: '', /* 관리번호 */
        itemStandard: '', /* 규격 */
        itemProviderNo: null, /* 공급처 */
        providerName: '', /* 공급처명 */
        itemRethinkCheck: 'Y', /* 재고관리여부 */
        itemHandling: '취급', /* 취급여부 */
        itemRethinType: '', /* 재고구분 */
        itemTaxationSales: '1', /* 과세구분(매출) */
        itemTaxationPurchase: '1', /* 과세구분(매입) */
        itemImportPrice: '', /* 입고 단가 */
        itemSalePrice: '', /* 소비자가 */
        itemMemo: '', /* 메모 */
        itemRegdate: '', /* 생성 날짜 */
        itemLastdate: '', /* 수정 날짜 */
        itemUseYn: 'Y', /* 사용여부 */
        itemAuthor: '', /* 저자 */
        itemManufacture: '', /* 제조사(출판사) */
        itemBrandNo: null, /* 브랜드번호 */
        itemYear: '', /* year */
        itemPage: '', /* page */
        itemCdYn: 'N', /* cd */
        itemEbookYn: 'N', /* ebook */
        itemStbYn: 'N', /* STB */
        itemSelectedYn: 'N', /* 선택 */
        itemSelectedTxt: '', /* 선택TEXT */
        itemRefundType: 'N', /* 반품유형 */
        itemDuplicateYn: 'N' /* 이전내역 중복체크 */
      }
    },
    // **********************************************
    // #region  store API
    // **********************************************
    // 품목코드목록 조회
    findItemDetail () {
      this.actionFindItemDetail(this.itemDetail.itemId)
        .then(res => {
          this.itemDetail = res
          // 품목분류코드 셋팅
          if (this.itemDetail.icCodeNo !== null && this.itemDetail.icCodeNo !== '') {
            let midCodeObj = this.getCategoryCodeList.find(x => x.icCodeNo === this.itemDetail.midCode)
            let smallCodeObj = this.getCategoryCodeList.find(x => x.icCodeNo === this.itemDetail.smallCode)
            this.actionSetMidCodeList(
              midCodeObj !== undefined ? this.getCategoryCodeList.filter(x => x.icParentNo === midCodeObj.icParentNo) : [])
            this.actionSetSmallCodeList(
              smallCodeObj !== undefined ? this.getCategoryCodeList.filter(x => x.icParentNo === smallCodeObj.icParentNo) : [])
          }
        })
    },
    // 품목 저장
    saveItem: function () {
      if (this.itemDetail.bigCode !== '' && this.itemDetail.bigCode !== null) {
        this.itemDetail.icCodeNo = this.itemDetail.bigCode
      }
      if (this.itemDetail.midCode !== '' && this.itemDetail.midCode !== null) {
        this.itemDetail.icCodeNo = this.itemDetail.midCode
      }
      if (this.itemDetail.smallCode !== '' && this.itemDetail.smallCode !== null) {
        this.itemDetail.icCodeNo = this.itemDetail.smallCode
      }

      if (this.itemDetail.icCodeNo === '' || this.itemDetail.icCodeNo === null) {
        alert('품목 분류를 선택하세요.')
        return
      }
      if (this.itemDetail.itemName === '' || this.itemDetail.itemName === null) {
        alert('품목명을 입력하세요.')
        return
      }
      if (this.itemDetail.itemBrandNo === '' || this.itemDetail.itemBrandNo === null) {
        alert('브랜드를 선택하세요.')
        return
      }
      if (this.itemDetail.itemProviderNo === '' || this.itemDetail.itemProviderNo === null) {
        alert('공급처를 선택하세요.')
        return
      }
      if (this.itemDetail.itemManageNo === '' || this.itemDetail.itemManageNo === null) {
        alert('관리번호를 입력하세요.')
        return
      }
      if (this.itemDetail.itemImportPrice === '' || this.itemDetail.itemImportPrice === null) {
        alert('입고단가를 입력하세요.')
        return
      }
      if (this.itemDetail.itemSalePrice === '' || this.itemDetail.itemSalePrice === null) {
        alert('소비자가를 입력하세요.')
        return
      }
      this.actionSaveItem(this.itemDetail)
        .then(res => {
          if (!res.success) {
            alert(res.message)
            return
          }
          this.itemDetail.itemId = res.itemId
          // 파일등록
          let formData = new FormData()
          formData.append('fileDir', 'item')
          formData.append('key', res.itemId)
          formData.append('file1', this.uploadFile)
          saveFile(formData)
            .then(response => {
              alert(res.message)
              this.findItemDetail()
            })
            .catch(err => {
              console.log(err)
            })
        })
    },
    // #endregion
    // **********************************************

    // **********************************************
    // #region  Event
    // **********************************************
    // 품목 대분류 selectBox Change
    changeCboBigCode () {
      this.itemDetail.midCode = ''
      this.itemDetail.smallCode = ''
      this.actionSetMidCodeList(this.getCategoryCodeList.filter(x => x.icParentNo === this.itemDetail.bigCode))
    },
    // 품목 중분류 selectBox Change
    changeCboMidCode () {
      this.itemDetail.smallCode = ''
      this.actionSetSmallCodeList(this.getCategoryCodeList.filter(x => x.icParentNo === this.itemDetail.midCode))
    }
    // #endregion
    // **********************************************
  }
}
</script>

<style>

</style>
