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
                <div class="widget">
                    <div class="widget-body">
                        <table class="table table-bordered" summary="상품분류">
                            <colgroup>
                                <col width="10%">
                                <col width="40%">
                                <col width="10%">
                                <col width="40%">
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th scope="row"><span class="text-primary">상품분류</span></th>
                                    <td class="text-left">{{modalParamObj.depthFullname}}</td>
                                    <th><span class="text-primary">등록 상품수</span></th>
                                    <td class="text-left">총 {{getProductByCategoryRowData.length}}건</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <DataTableVue4
                    :columnDef="getProductByCategoryColumnDef"
                    :rowData="getProductByCategoryRowData"
                    :isPaging="true"
                />
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import DataTableVue4 from '@/components/DataTableVue4'

const productGroupStore = 'productGroupStore'
export default {
  name: 'groupingProductViewPopup',
  props: ['modalParamObj'],
  components: {
    DataTableVue4
  },
  created () {
    // 상품분류별 상품목록 조회
    this.actionFindCategoryByProductList(this.modalParamObj.pcategoryNo)
  },
  data () {
    return {
      param: {}
    }
  },
  computed: {
    ...mapGetters(productGroupStore, [
      'getProductByCategoryColumnDef',
      'getProductByCategoryRowData' /* 상품분류별 상품목록 */
    ])
  },
  methods: {
    ...mapActions(productGroupStore, [
      'actionFindCategoryByProductList'
    ])
  }
}
</script>

<style>

</style>
