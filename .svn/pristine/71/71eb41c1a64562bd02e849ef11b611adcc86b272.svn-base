<template>
  <div class="modal-mask">
    <div class="modal-dialog modal-item">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">{{ modalParamObj.title }}</h4>
                <button type="button" class="close"  @click="$emit('close')">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">close</span>
                    </button>
            </div>
            <div class="modal-body">
                <div class="widget mb-0">
                    <div class="widget-body pb-0">
                        <table class="table table-bordered" summary="상품분류">
                            <colgroup>
                                <col width="10%">
                                <col width="40%">
                                <col width="10%">
                                <col width="40%">
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th scope="row">분류코드</th>
                                    <td class="text-left">
                                      <input type="text" class="form-control" v-model="productCategoryDetail.categoryCode">
                                    </td>
                                    <th>분류명</th>
                                    <td class="text-left">
                                      <input type="text" class="form-control" v-model="productCategoryDetail.categoryName">
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">상품수</th>
                                    <td class="text-left">{{productCategoryDetail.productCnt}}개</td>
                                    <th>매장번호</th>
                                    <td class="text-left"></td>
                                </tr>
                                <tr>
                                    <th scope="row">사용여부</th>
                                    <td class="text-left" colspan="3">
                                         <div class="row">
                                            <div class="col-sm-12 d-flex align-items-center">
                                                    <div class="styled-radio">
                                                        <input type="radio" id="rdoIsUsed-1" value="1" v-model="productCategoryDetail.isUsed">
                                                        <label for="rdoIsUsed-1">사용</label>
                                                    </div>
                                                    <div class="styled-radio">
                                                        <input type="radio" id="rdoIsUsed-2" value="0" v-model="productCategoryDetail.isUsed">
                                                        <label for="rdoIsUsed-2">미사용</label>
                                                    </div>
                                            </div>
                                         </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

              <div class="modal-footer" style="justify-content: center;">
                <div class="row col">
                    <div class="col-sm-6">
                        <button type="button" class="btn btn-outline-dark" @click="$emit('close')">닫기</button>
                    </div>
                    <div class="col-sm-6 d-flex justify-content-end">
                        <button type="button" class="btn btn-primary margin-right-5" @click="onClickSave">수정</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

const productGroupStore = 'productGroupStore'
export default {
  name: 'groupingDetailViewPopup',
  props: ['modalParamObj'],
  created () {
    // 상품분류 상세
    this.actionFindProductCategoryDetail(this.modalParamObj.pcategoryNo)
      .then(res => { this.productCategoryDetail = res })
  },
  data () {
    return {
      productCategoryDetail: {}
    }
  },
  computed: {
    ...mapGetters(productGroupStore, [
      'getProductCategoryDetail' // 상품분류 상세
    ])
  },
  methods: {
    ...mapActions(productGroupStore, [
      'actionFindProductCategoryDetail',
      'actionSaveCategoryCodeList'
    ]),
    onClickSave () {
      if (!confirm('입력한 내용으로 저장하시겠습니까?')) {
        return
      }
      // 상품분류코드 저장/삭제
      this.actionSaveCategoryCodeList([this.productCategoryDetail])
        .then(res => {
          alert(res.message)
          this.$emit('close')
        })
    }
  }
}
</script>

<style>

</style>
