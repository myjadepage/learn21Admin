<template>
  <div class="container-fluid">
    <div class="row">
      <PageHeader :pageCurrentInfo="pageCurrentInfo" />
      <div class="col-sm-12">
        <div class="widget has-shadow">
            <div class="widget-body">
                <table class="table table-bordered" summary="공지사항관리 검색하기">
                    <colgroup>
                        <col width="10%">
                        <col width="30%">
                        <col width="10%">
                        <col width=*>
                    </colgroup>
                    <tbody>
                        <tr>
                            <th scope="row"><span class="text-primary">검색어</span></th>
                            <td>
                                <div class="row">
                                    <div class="col col-sm-3">
                                        <select class="form-control" v-model="selected">
                                            <option value="">검색구분</option>
                                            <option value="title">제목</option>
                                            <option value="contents">내용</option>
                                        </select>
                                    </div>
                                    <div class="col col-sm-89">
                                          <input type="text" class="form-control" placeholder="" v-model="searchKeyword">
                                    </div>
                                </div>
                            </td>
                            <th><span class="text-primary">게시일자</span></th>
                            <td>
                                <div class="row">
                                    <div class="col">
                                          <!-- date select component -->
                                          <DateSelect @state-start-date="startDate" @state-end-date="endDate" :defStartDate="pfromDate"
                                                        :defEndDate="ptoDate"></DateSelect>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="text-center">
                    <button class="btn btn-primary" @click="searchBtn()">검색</button>
                </div>
            </div>
        </div>
        <!-- 검색영역 끝-->

        <!-- 리스트영역 시작 -->
        <div class="widget has-shadow">
            <div class="widget-header bordered">
                <div class="row">
                    <div class="col-sm-6 d-flex align-items-center justify-content-md-start justify-content-center">
                      <!--table pageper-->
                      <div class="dropdown show vbt-per-page-dropdown col-sm-2">
                          <a class="btn btn-block dropdown-toggle form-control" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              {{config.per_page}}
                          </a>
                          <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                              <a v-for="(option, key, index) in config.per_page_options" :key="index" class="dropdown-item" href="" @click.prevent="perPageHandler(option)" v-bind:class="{ active:  (option == config.per_page)}">
                                  {{option}}
                              </a>
                          </div>
                      </div>
                      <label class="col-sm-4">조회건수 : {{ rows.length }} 건</label>
                    </div>
                    <div class="col-sm-6 d-flex align-items-center justify-content-md-end justify-content-center">
                        <button class="btn btn-outline-danger" @click="$router.push({name: 'noticeInput'})">+ 신규</button>
                    </div>
                </div>
            </div>
            <div class="widget-body">
               <v-table :rows="rows" :columns="columns" :config="config" :classes="classes" :show-loader="showLoader">
                 <template slot="empty-results">
                    조회된 공지사항이 없습니다.
                </template>
                <template slot="title" slot-scope="props">
                      <a href="#" @click.prevent="$router.push({name: 'noticeDetail', params: {id: props.row.noticeId}})">{{ props.cell_value }}</a>
                    </template>
               </v-table>
            </div>
            <!-- 리스트영역 끝 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueBootstrap4Table from 'vue-bootstrap4-table'
import pageHeader from '@/mixin/pageHeader'
import dateSelect from '@/mixin/dateSelect'
import { getNoticeList } from '@/api'

export default {
  name: 'noticeList',
  mixins: [
    pageHeader({title: '공지사항 관리', groupName: '운영관리'}),
    dateSelect
  ],
  components: {
    VTable: VueBootstrap4Table // table 이름변경 <v-table></v-table>
  },
  data: function () {
    return {
      modal: false,
      noticeListInfo: [],
      selected: '',
      searchKeyword: '',
      searchStartDate: null,
      searchEndDate: null,
      // table 정의
      rows: [],
      columns: [
        {label: 'No', name: 'noticeId', sort: true},
        {label: '제목', name: 'title', sort: true, row_classes: 'table-text-left notice-ellipsis'},
        {label: '게시기간', name: 'viewDate', sort: true},
        {label: '상태', name: 'statusCd', sort: true},
        {label: '등록자', name: 'userNameCreatedBy', sort: true},
        {label: '조회수', name: 'viewCount', sort: true},
        {label: '등록일자', name: 'dateCreated', sort: true}],
      config: {
        pagination: true,
        pagination_info: false,
        num_of_visibile_pagination_buttons: 10,
        checkbox_rows: false,
        highlight_row_hover: true,
        rows_selectable: false,
        multi_column_sort: false,
        card_mode: false,
        selected_rows_info: false,
        per_page: 20,
        per_page_options: [20, 50, 100],
        show_reset_button: false,
        show_refresh_button: false,
        global_search: {
          placeholder: '',
          visibility: false,
          case_sensitive: false
        }
      },
      classes: {
        table: 'table table-bordered'
      },
      showLoader: false
    }
  },
  mounted () {
    this.showLoader = true
    this.getNotice()
  },
  watch: {
    '$route' () {
      this.showLoader = true
      setTimeout(this.getNotice(), 500)
    }
  },
  methods: {
    // api
    getNotice (param) {
      getNoticeList(param)
        .then(res => {
          this.rows = res.data.map(el => {
            const container = {}
            container.dateCreated = this.$moment(el.dateCreated).format('YYYY-MM-DD')
            container.startDate = el.startDate
            container.endDate = el.endDate
            container.contents = el.contents
            container.fileName1 = el.fileName1
            container.fileName2 = el.fileName2
            container.viewCount = el.viewCount
            container.title = el.title
            container.userNameCreatedBy = el.userNameCreatedBy
            container.userIdCreatedBy = el.userIdCreatedBy
            container.statusCd = el.statusCd
            container.noticeId = el.noticeId
            container.viewDate = el.startDate + ' ~ ' + el.endDate
            return container
          })
          this.rows = this.rows.slice().sort((a, b) => a.noticeId < b.noticeId ? 1 : -1)
          this.showLoader = false
        })
        .catch(err => {
          this.showLoader = false
          console.log(err)
        })
    },
    // table perpage
    perPageHandler (option) {
      console.log('option', option)
      this.config.per_page = option
    },
    searchBtn () {
      let param = {
        searchStartDate: this.state.startdate,
        searchEndDate: this.state.enddate,
        searchType: this.selected,
        searchKeyword: this.searchKeyword
      }
      if (param.searchType === 'title' && param.searchKeyword === '') {
        alert('내용을 입력하세요')
        return
      }
      if (param.searchType === 'contents' && param.searchKeyword === '') {
        alert('제목을 입력하세요')
        return
      }
      if (param.searchStartDate === '') {
        param.searchStartDate = this.pfromDate
      } else {
        param.searchStartDate = this.state.startdate
      }
      if (param.searchEndDate === '') {
        param.searchEndDate = this.ptoDate
      } else {
        param.searchEndDate = this.state.enddate
      }
      this.getNotice(param)
    }
  }
}
</script>

<style>

</style>
