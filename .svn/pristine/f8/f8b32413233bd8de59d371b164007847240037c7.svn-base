<template>
 <div class="container-fluid">
    <div class="row">
      <PageHeader :pageCurrentInfo="pageCurrentInfo" />

      <div class="col-sm-12">

            <!-- 검색영역 시작-->
            <div class="widget has-shadow">
                <div class="widget-body">
                    <div class="row">
                        <div class="col col-sm-4">
                           <UserFind></UserFind>
                        </div>

                        <div class="col col-sm-8">
                            <UserDetail></UserDetail>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </div>

</template>

<script>
import UserFind from '@/components/member/UserFind'
import UserDetail from '@/components/member/UserDetail.vue'
import pageHeader from '@/mixin/pageHeader'

export default {
  mixins: [
    pageHeader({title: '직원관리', groupName: '직원관리'})
  ],
  components: {
    UserFind, // 왼쪽 검색영억
    UserDetail // 오른쪽 상세영역
  },
  data () {
    return {
    }
  }
}
</script>

<style>

</style>
