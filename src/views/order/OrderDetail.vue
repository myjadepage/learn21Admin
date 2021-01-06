<template>
  <div class="container-fluid">
    <div class="row">
      <PageHeader :pageCurrentInfo="pageCurrentInfo" />
    </div>
  </div>
</template>

<script>
import pageHeader from '@/mixin/pageHeader'

export default {
  mixins: [
    pageHeader({title: '가맹점 물류이동', groupName: '물류관리'})
  ]
}
</script>

<style>

</style>
