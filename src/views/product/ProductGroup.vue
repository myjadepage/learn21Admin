<template>
 <div class="container-fluid">
    <div class="row">
      <PageHeader :pageCurrentInfo="pageCurrentInfo" />
      <!-- modalPopup -->
      <GroupingProductViewPopup v-if="modalOpenFlag && modalPopupId === 'GroupingProductViewPopup'"
                      :modalParamObj="modalParamObj"
                      @close="closeModalPopup" />
      <GroupingDetailViewPopup v-if="modalOpenFlag && modalPopupId === 'GroupingDetailViewPopup'"
                      :modalParamObj="modalParamObj"
                      @close="closeModalPopup" />
        <div class="col-sm-12">
        <!-- 검색영역 시작-->
        <div class="widget has-shadow">
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
                            <th scope="row"><span class="text-primary">상품분류선택</span></th>
                            <td>
                                <div class="row">
                                    <div class="col-sm-4">
                                        <select class="form-control" v-model="pbigCategoryCode">
                                            <option value=''>전체</option>
                                            <option v-for="o in getCategoryCodeList.filter(x => x.parentCategoryNo === '1')"
                                                    :key="o.categoryNo"
                                                    :value="o.categoryNo">{{o.categoryName}}</option>
                                        </select>
                                    </div>
                                </div>
                            </td>
                            <th><span class="text-primary">상품분류명</span></th>
                            <td>
                                    <div class="row">
                                    <div class="col-sm-4">
                                        <input type="text" class="form-control" v-model="pcategoryName">
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
            :btnList="[{btnName: '상품분류관리',onClick: () => { return this.$router.push({name: 'productGroupManage'}) }}]"
            :rowEditorList="
            [
                {
                    type: 'BUTTON',
                    editColumn: 'productCnt',
                    label: '상품수',
                    onClick: (data) => {
                        this.openModalPopup('GroupingProductViewPopup',
                                            {
                                              title: '상품 분류별 상품 조회',
                                              pcategoryNo: data.row.categoryNo,
                                              depthFullname: data.row.depthFullname
                                            })
                    }
                },
                {
                    type: 'BUTTON',
                    editColumn: 'edit',
                    label: '수정',
                    onClick: (data) => {
                      this.openModalPopup('GroupingDetailViewPopup',
                                          {
                                            title: '상품 분류 상세',
                                            pcategoryNo: data.row.categoryNo
                                          })
                    }
                }
            ]"
        />
    </div>
    </div>
 </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import DataTableVue4 from '@/components/DataTableVue4'
import pageHeader from '@/mixin/pageHeader'
import GroupingProductViewPopup from '@/components/popup/GroupingProductViewPopup.vue'
import GroupingDetailViewPopup from '@/components/popup/GroupingDetailViewPopup.vue'

const productGroupStore = 'productGroupStore'
export default {
  name: 'grouping',
  mixins: [
    pageHeader({title: '상품분류 관리', groupName: '상품관리'})
  ],
  components: {
    DataTableVue4,
    GroupingProductViewPopup,
    GroupingDetailViewPopup
  },
  created () {
    // 상품코드목록 조회
    this.actionFindCategoryCodeList()
  },
  data () {
    return {
      pbigCategoryCode: '',
      pcategoryName: '',

      modalOpenFlag: false, // 모달창 openFlag
      modalPopupId: '', // 오픈할 모달창 id
      modalParamObj: {} // 모달창 호출시 params
    }
  },
  computed: {
    ...mapGetters(productGroupStore, [
      'getColumnDef',
      'getRowData',
      'getCategoryCodeList' /* 상품코드목록 */
    ])
  },
  methods: {
    ...mapActions(productGroupStore, [
      'actionFindCategoryCodeList',
      'actionFindCategoryCodeMainList'
    ]),

    // 조회
    onClickSearch () {
      let params = {
        pbigCategoryCode: this.pbigCategoryCode,
        pcategoryName: this.pcategoryName
      }
      this.actionFindCategoryCodeMainList(params)
    },
    openModalPopup (id, obj) {
      if (id === 'GroupingProductViewPopup') {
        // 상품 분류별 상품
        this.modalPopupId = 'GroupingProductViewPopup'
        this.modalParamObj = obj
      } else if (id === 'GroupingDetailViewPopup') {
        // 상품분류 상세
        this.modalPopupId = 'GroupingDetailViewPopup'
        this.modalParamObj = obj
      }
      this.modalOpenFlag = true
    },
    // 모달창 close
    closeModalPopup () {
      if (this.modalPopupId === 'GroupingDetailViewPopup') {
        this.onClickSearch()
      }
      this.modalPopupId = ''
      this.modalOpenFlag = false
    }
  }
}
</script>

<style>

</style>
