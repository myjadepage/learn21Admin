<template>
  <div class="container-fluid">
    <div class="row">
      <PageHeader :pageCurrentInfo="pageCurrentInfo" />

       <div class="col-sm-12">
            <div class="widget has-shadow">
                <div class="widget-body">

                    <div class="row">
                       <product-grouping bigText="대분류" :codegroup="codegroupBig"></product-grouping>
                       <product-grouping bigText="중분류" :codegroup="codegroupMid"></product-grouping>
                       <product-grouping bigText="소분류" :codegroup="codegroupSmall"></product-grouping>
                    </div>
                </div>

                <div class="widget-footer">
                    <div class="row">
                        <div class="col-sm-6 d-flex align-items-center justify-content-md-start">
                            <button type="button" class="btn btn-outline-primary" @click ="$router.push({name: 'grouping'})">목록</button>
                        </div>
                        <div class="col-sm-6 d-flex align-items-center justify-content-md-end">
                            <button type="button" class="btn btn-primary">저장</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import pageHeader from '@/mixin/pageHeader'
import ProductGrouping from '@/components/product/ProductGrouping.vue'

export default {
  mixins: [pageHeader({title: '상품분류등록/수정', groupName: '상품관리'})],
  components: {
    ProductGrouping
  },
  props: ['cgCode'],
  data () {
    return {
      codegroupBig: [],
      codegroupMid: [],
      codegroupSmall: []
    }
  },
  mounted () {
  },
  methods: {
    // api
  }
}
</script>
