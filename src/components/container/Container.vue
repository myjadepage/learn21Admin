<template>
  <div class="page">
    <Header />
    <div class="page-content d-flex align-items-stretch">
      <SideBar />
      <div class="content-inner" :class="{ active: isSideActive }">
        <transition name="fade" mode="out-in">
          <router-tab></router-tab>
        </transition>
        <Footer />
        <a href="#" class="go-top"><i class="la la-arrow-up"></i></a>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from './SideBar'
import Header from './Header'
import Footer from './Footer'
import { mapState } from 'vuex'

export default {
  name: 'Container',
  components: {
    SideBar,
    Header,
    Footer
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState('navToggle', {
      isSideActive: ({isSideOpen}) => isSideOpen
    })
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
