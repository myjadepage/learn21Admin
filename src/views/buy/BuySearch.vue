<template>
  <div class="container-fluid">
    <div class="row">
      <PageHeader :pageCurrentInfo="pageCurrentInfo" />
          <div class="col-sm-12">
            <ul class="nav nav-tabs nav-fill">
                <li class="nav-item" v-for="(item, index) in ['거래처별 매입', '품목별 매입', '기간별 매입']" :key="index">
                    <a href="#" class="nav-link" @click="tabCon(index)" :class="type === index ? 'active': ''">{{ item }}</a>
                </li>
            </ul>

            <div class="tab-content">
                <!-- tab1-->
                <buy-search-tab-vendor v-show="type === 0"></buy-search-tab-vendor>
                <!-- tab2-->
                <buy-search-tab-item v-show="type === 1"></buy-search-tab-item>
                <!-- tab3-->
                <buy-search-tab-period  v-show="type === 2"></buy-search-tab-period>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import pageHeader from '@/mixin/pageHeader'
import BuySearchTabVendor from './component/BuySearchTabVendor.vue'
import BuySearchTabItem from './component/BuySearchTabItem.vue'
import BuySearchTabPeriod from './component/BuySearchTabPeriod.vue'

export default {
  name: 'buySearch',
  mixins: [pageHeader({title: '매입조회', groupName: '구매관리'})],
  components: { BuySearchTabVendor, BuySearchTabPeriod, BuySearchTabItem },
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
      }
    }
  }
}
</script>

<style>

</style>
