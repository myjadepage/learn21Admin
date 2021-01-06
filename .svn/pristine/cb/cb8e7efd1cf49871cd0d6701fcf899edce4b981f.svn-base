<template>
  <div>
       <!-- 검색영역 시작-->
    <div class="widget">
        <div class="widget-body no-padding">
            <table class="table table-bordered item-select" summary="직원 검색하기">
                <colgroup>
                    <col width="20%">
                    <col width=*>
                    <col width="15%">
                </colgroup>
                <tbody>
                    <tr>
                        <th scope="row"><span class="text-primary">직원</span></th>
                        <td>
                            <div class="row">
                                <div class="col col-sm-5">
                                    <select class="form-control" v-model="searchParam.psearchType">
                                        <option value="name" >직원명</option>
                                        <option value="id">직원ID</option>
                                    </select>
                                </div>
                                <div class="col col-sm-7">
                                    <input type="text" class="form-control" value="" v-model="searchParam.psearchKeyword">
                                </div>
                            </div>
                        </td>
                        <td rowspan="3">
                            <button class="btn btn-primary btn-item" @click="searchBtn">조회</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row"><span class="text-primary">재직여부</span></th>
                        <td>
                            <div class="row">
                                <div class="col-sm-12 d-flex align-items-center">
                                    <div class="styled-radio">
                                        <input type="radio" id="pworkStatus-1" v-model="searchParam.pworkStatus" value="">
                                        <label for="pworkStatus-1">전체</label>
                                    </div>
                                    <div class="styled-radio">
                                        <input type="radio" id="pworkStatus-2" v-model="searchParam.pworkStatus" value="정상">
                                        <label for="pworkStatus-2">재직</label>
                                    </div>
                                    <div class="styled-radio">
                                        <input type="radio" id="pworkStatus-3" v-model="searchParam.pworkStatus" value="삭제">
                                        <label for="pworkStatus-3">퇴사</label>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <!-- 검색영역 끝-->
    <div class="widget scroll-area">
        <div class="widget-body no-padding">
            <table id="member-list-table" class="table table-bordered" summary="직원 리스트">
                <colgroup>
                    <col width="15%">
                    <col width="25%">
                    <col width=*>
                    <col width="20%">
                </colgroup>
                <thead>
                    <tr>
                        <th>NO</th>
                        <th>이름</th>
                        <th>부서</th>
                        <th>상태</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in memberList" :key="index" :class="{'table-info': isSelected === index }" @click="selectInfoView(item, index)" style="cursor:pointer">
                        <td>{{ item.userNo }}</td>
                        <td>{{ item.userName }}</td>
                        <td>{{ item.userDept }}</td>
                        <td>{{ item.statusCd }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <ul class="pagination d-flex justify-content-center">
      <li class="paginate_button page-item previous disabled"><a href="#" class="page-link">&lt;</a></li>
      <li class="paginate_button page-item active"><a href="#" class="page-link">1</a></li>
      <li class="paginate_button page-item next disabled"><a href="#" class="page-link">&gt;</a></li>
    </ul>
  </div>
</template>

<script>
import { userList } from '@/api'
import { EventBus } from './eventBus'

export default {
  name: 'userFindArea',
  data () {
    return {
      memberList: [],
      isSelected: '',
      searchParam: {
        loginId: '',
        psearchKeyword: '',
        psearchType: 'name',
        pworkStatus: ''
      }
    }
  },
  created () {
    this.memberFindList(this.searchParam)
  },
  mounted () {
    EventBus.$on('selectClear', () => {
      this.isSelected = false
    })
  },
  methods: {
    // api
    memberFindList (param) {
      userList(param)
        .then(res => {
          console.log(res.data)
          this.memberList = res.data
          this.memberList = this.noSort(this.memberList)
          this.memberList.map(el => {
            if (el.statusCd === '정상') {
              el.statusCd = '재직'
            } else if (el.statusCd === '삭제') {
              el.statusCd = '퇴직'
            }
            return el
          })
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 검색버튼 클릭시 리스트 다시 조회 및 상세정보 reset
    searchBtn () {
      this.isSelected = false
      EventBus.$emit('clear')
      this.memberFindList(this.searchParam)
    },
    noSort (list) {
      return list.slice().sort((a, b) => a.userNo < b.userNo ? 1 : -1)
    },
    // 목록 선택시 상세내용 나오기
    selectInfoView (item, i) {
      this.isSelected = i
      EventBus.$emit('selecMemberInfo', item)
    }
  },
  beforeDestroy () {
    EventBus.$off()
  }
}
</script>

<style>

</style>
