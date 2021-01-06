<template>
  <div class="container-fluid">
    <div class="row">
      <PageHeader :pageCurrentInfo="pageCurrentInfo" />

      <div class="col-sm-12">
        <DataTableVue4
          :columnDef="getColumnDef"
          :rowData="getCodeGroupList"
          :isPaging="true"
          :rowEditorList="[{
                            type: 'LINK',
                            editColumn: 'cgName',
                            onClick: (data) => {
                              this.$router.push(`code_detail/${data.row.sort}`)
                            }
                          }]"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import pageHeader from '@/mixin/pageHeader'
import DataTableVue4 from '@/components/DataTableVue4'

const store = 'codeStore'
export default {
  name: 'baseCode',
  mixins: [pageHeader({title: '코드관리', groupName: '기초관리'})],
  components: { DataTableVue4 },
  created () {
    this.actionFindCodeGroup()
  },
  data () {
    return {
      columnDef: [
        { label: '코드그룹', name: 'cgCode' },
        { label: '코드그룹명', name: 'cgName', row_classes: 'table-text-left' },
        { label: '상위 참조코드', name: 'cgParentCode' },
        { label: '코드 패키지', name: 'depthFullname', row_classes: 'table-text-left' },
        { label: '코드길이', name: 'cgLength' },
        { label: '업체', name: 'cpCode' },
        { label: '사용', name: 'cgUseyn' }
      ]
    }
  },
  computed: {
    ...mapGetters(store, [
      'getCodeGroupList'
    ]),
    getColumnDef: function () { return this.columnDef }
  },
  methods: {
    ...mapActions(store, [
      'actionFindCodeGroup'
    ])
  }
}
</script>
