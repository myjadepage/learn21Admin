<template>
  <div class="default-sidebar">
    <nav
      class="side-navbar box-scroll sidebar-scroll" :class="{ shrinked: isShrinked }">
      <ul id="pageMove">
        <li> <!--기초관리 8-->
          <a href="#dropdown-base" aria-expanded="false" data-toggle="collapse">
            <i class="la la-leaf"></i><span>{{ getBigTitleFromStroe(8) }}</span></a>
          <SidebarMenu id="dropdown-base" :items="items.base"></SidebarMenu>
        </li>
        <li> <!--구매관리 0-->
          <a href="#dropdown-buy" aria-expanded="false" data-toggle="collapse">
            <i class="la la-shopping-cart"></i><span>{{ getBigTitleFromStroe(0) }}</span></a>
          <SidebarMenu id="dropdown-buy" :items="items.buy"></SidebarMenu>
        </li>
        <li> <!--영업관리 6-->
          <a href="#dropdown-sales" aria-expanded="false" data-toggle="collapse">
            <i class="la la-calculator"></i><span>{{  getBigTitleFromStroe(6) }}</span></a>
           <SidebarMenu id="dropdown-sales" :items="items.sales"></SidebarMenu>
        </li>
        <li> <!--주문배송관리 1-->
          <a href="#dropdown-order" aria-expanded="false" data-toggle="collapse">
            <i class="la la-bus"></i><span>{{  getBigTitleFromStroe(1) }}</span></a>
           <SidebarMenu id="dropdown-order" :items="items.order"></SidebarMenu>
        </li>
        <li> <!--물류관리 2-->
          <a href="#dropdown-stock" aria-expanded="false" data-toggle="collapse">
            <i class="la la-cubes"></i><span>{{  getBigTitleFromStroe(2) }}</span></a>
          <SidebarMenu id="dropdown-stock" :items="items.stock"></SidebarMenu>
        </li>
        <li> <!--상품관리 3-->
          <a href="#dropdown-goods" aria-expanded="false" data-toggle="collapse"
            ><i class="la la-book"></i><span>{{  getBigTitleFromStroe(3) }}</span></a>
          <SidebarMenu id="dropdown-goods" :items="items.goods"></SidebarMenu>
        </li>
        <li> <!--상담관리 4-->
          <a href="#dropdown-cs" aria-expanded="false" data-toggle="collapse"
            ><i class="la la-edit"></i><span>{{  getBigTitleFromStroe(4) }}</span></a>
           <SidebarMenu id="dropdown-cs" :items="items.cs"></SidebarMenu>
        </li>
        <li> <!--운영관리 5-->
          <a href="#dropdown-manage" aria-expanded="false" data-toggle="collapse">
            <i class="la la-file-text"></i><span>{{  getBigTitleFromStroe(5) }}</span></a>
          <SidebarMenu id="dropdown-manage" :items="items.manage"></SidebarMenu>
        </li>
        <li> <!--직원관리 7-->
          <a href="#dropdown-member" aria-expanded="false" data-toggle="collapse">
            <i class="la la-users"></i><span>{{  getBigTitleFromStroe(7) }}</span></a>
          <SidebarMenu id="dropdown-member" :items="items.member"></SidebarMenu>
        </li>
        <li> <!--통계관리 9-->
          <a href="#dropdown-statistics" aria-expanded="false" data-toggle="collapse">
            <i class="la la-signal"></i><span>{{  getBigTitleFromStroe(9) }}</span></a>
          <SidebarMenu id="dropdown-statistics" :items="items.statistics"></SidebarMenu>
        </li>
      </ul>
      <ul class="side-bottom-info">
        <li style="">
          <p>34</p>
          <span>결제 수</span>
        </li>
        <li style="">
          <p>34</p>
          <span>결제 수</span>
        </li>
        <li style="">
          <p>34</p>
          <span>결제 수</span>
        </li>
        <li style="">
          <p>34</p>
          <span>결제 수</span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import $ from 'jquery'
import SidebarMenu from './sidebar/SidebarMenu'
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  components: { SidebarMenu },
  name: 'SideBar',
  data: function () {
    return {}
  },
  mounted () {
    this.setMenuList()
    this.makeScroll()
    this.makeCollapse()
  },
  computed: {
    ...mapGetters('navToggle', ['isShrinked']),
    ...mapState('sideMenu', ['items']),
    ...mapGetters('sideMenu', ['getBigTitle']) // 메뉴큰제목
  },
  methods: {
    toggleMenu (id) {
      this.id = id
    },
    // 대메뉴 api
    ...mapActions('sideMenu', ['setMenuList']),
    // 메뉴큰제목 가져오기
    getBigTitleFromStroe (id) {
      return this.getBigTitle(id)
    },
    // scroll
    makeScroll () {
      $('.sidebar-scroll').niceScroll({
        cursorcolor: 'transparent',
        cursorborder: 'transparent',
        cursoropacitymax: 0,
        boxzoom: false,
        autohidemode: 'hidden',
        cursorfixedheight: 80
      })
    },
    // collapse
    makeCollapse () {
      $('.side-navbar li a').click(function () {
        $('.collapse').collapse('hide')
      })
    }
  }
}
</script>

<style>

</style>
