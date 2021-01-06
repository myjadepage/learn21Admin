<template>
  <div class="container-fluid">
    <div class="row">
      <PageHeader :pageCurrentInfo="pageCurrentInfo" />

        <div class="col-sm-12">
            <!--tab menu-->
            <ul class="nav nav-tabs nav-fill">
                <li class="nav-item" v-for="(item, index) in ['거래처별 매출', '품목별 매출', '기간별 매출']" :key="index">
                    <a href="#" class="nav-link" @click="TabCon(index)" :class="type === index ?'active' : ''">{{ item }}</a>
                </li>
            </ul>
            <div class="tab-content">
                <!-- tab1-->
                <sales-search-tab-vendor v-show="type === 0"></sales-search-tab-vendor>
                <!-- tab2-->
                <sales-search-tab-item  v-show="type === 1"></sales-search-tab-item>
                <!-- tab-stock-3-->
                <sales-search-tab-period  v-show="type === 2"></sales-search-tab-period>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import pageHeader from '@/mixin/pageHeader'
import SalesSearchTabVendor from './component/SalesSearchTabVendor.vue'
import SalesSearchTabItem from './component/SalesSearchTabItem.vue'
import SalesSearchTabPeriod from './component/SalesSearchTabPeriod.vue'

export default {
  mixins: [
    pageHeader({title: '매출조회', groupName: '영업관리'})
  ],
  components: {
    SalesSearchTabVendor,
    SalesSearchTabItem,
    SalesSearchTabPeriod
  },
  data () {
    return {
      type: 0
    }
  },
  methods: {
    TabCon (index) {
      switch (index) {
        case 0 : this.type = 0
          break
        case 1 : this.type = 1
          break
        case 2 : this.type = 2
          break
      }
    }
  }

}
</script>

<style>

</style>
