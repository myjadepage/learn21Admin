<template>
  <div class="container-fluid">
    <div class="row">
      <PageHeader :pageCurrentInfo="pageCurrentInfo" />

      <div class="col-sm-12">
            <ul class="nav nav-tabs nav-fill">
                <li class="nav-item" v-for="(item, index) in ['상세재고', '기간입출재고', '기준일자재고', '기간입출현황']" :key="index">
                    <a href="#" class="nav-link" @click="tabCon(index)" :class="type === index ? 'active' : ''">{{ item }}</a>
                </li>
            </ul>

            <div class="tab-content">
              <basic-detail-stock-tab v-show="type === 0"></basic-detail-stock-tab> <!--상세재고-->
              <basic-period-stock-tab v-show="type === 1"></basic-period-stock-tab> <!--기간입출재고-->
              <basic-date-stock-tab v-show="type === 2"></basic-date-stock-tab> <!--기준일자재고-->
              <basic-in-out-tab v-show="type === 3"></basic-in-out-tab> <!--기간입출현황-->
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import pageHeader from '@/mixin/pageHeader'
import BasicDetailStockTab from './component/BasicDetailStockTab.vue'
import BasicPeriodStockTab from './component/BasicPeriodStockTab.vue'
import BasicDateStockTab from './component/BasicDateStockTab.vue'
import BasicInOutTab from './component/BasicInOutTab.vue'

export default {
  components: { BasicDetailStockTab, BasicPeriodStockTab, BasicDateStockTab, BasicInOutTab },
  mixins: [
    pageHeader({title: '재고현황', groupName: '물류관리'})
  ],
  data () {
    return {
      type: 0
    }
  },
  methods: {
    tabCon (index) {
      switch (index) {
        case 0: this.type = 0
          break
        case 1: this.type = 1
          break
        case 2: this.type = 2
          break
        case 3: this.type = 3
          break
      }
    }
  }
}
</script>

<style>

</style>
