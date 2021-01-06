<template>
  <div class="tab-pane show active">
            <div class="widget">
                <div class="widget-body no-padding-top">
                    <table class="table table-bordered" summary="직원정보">
                        <colgroup>
                            <col width="10%">
                            <col width="40%">
                            <col width="10%">
                            <col width="40%">
                        </colgroup>
                        <tbody>
                            <tr>
                                <th scope="row"><span class="text-primary">직원명</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <input type="text" class="form-control" :value="selectMember.userName">
                                        </div>
                                    </div>
                                </td>
                                <th><span class="text-primary">사원코드</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <input type="text" class="form-control" :value="selectMember.empCode" disabled>
                                        </div>
                                        <div class="col-sm-6 d-flex justify-content-end align-items-center">
                                            <span>(자동생성)</span>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row"><span class="text-primary">직원 ID</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <input type="text" class="form-control" :value="selectMember.loginId" disabled>
                                        </div>
                                    </div>
                                </td>
                                <th><span class="text-primary">비밀번호</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col col-sm-6">
                                            <input type="password" class="form-control" placeholder="" :value="selectMember.password2">
                                        </div>
                                        <div class="col col-sm-4">
                                            <button type="button" class="btn btn-sm btn-secondary input-btn-util">초기화</button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row"><span class="text-primary">입사일</span></th>
                                <td>
                                     <div class="input-group">
                                        <datepicker :value="selectMember.dateCreated" :format="getFormatDate" :language="ko" input-class="form-control"></datepicker>
                                        <span class="input-group-addon"><i class="la la-calendar"></i></span>
                                     </div>
                                </td>
                                <th scope="row"><span class="text-primary">퇴사일</span></th>
                                <td>
                                    <div class="row d-flex justify-content-between">
                                        <div class="col-sm-9">
                                            <div class="input-group">
                                                <datepicker :value="saveMember.resignDate" :format="getFormatDate" :language="ko" :disabled="!resignChecked"
                                                placeholder="날짜선택" input-class="form-control" class="input-color"></datepicker>
                                                <span class="input-group-addon"><i class="la la-calendar"></i></span>
                                            </div>
                                        </div>
                                        <div class="col-sm-3 d-flex justify-content-end">
                                            <div class="styled-checkbox">
                                                <input type="checkbox" id="resign-1" v-model="resignChecked">
                                                <label for="resign-1">퇴사</label>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row"><span class="text-primary">부서/팀</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <select class="form-control">
                                                <option value="">관리팀</option>
                                                <option value="">중분류 1</option>
                                                <option value="">중분류 2</option>
                                        </select>
                                        </div>
                                    </div>
                                </td>
                                <th><span class="text-primary">직급</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <select class="form-control" >
                                                <option value="">{{ selectMember.userPosition }}</option>
                                                <option value="">중분류 1</option>
                                                <option value="">중분류 2</option>
                                        </select>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row"><span class="text-primary">휴대폰</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col col-sm-4">
                                            <select class="form-control" :value="getCellNum.first" @change="saveCellNum1">
                                                <option>선택</option>
                                                <option>010</option>
                                                <option>016</option>
                                                <option>017</option>
                                                <option>011</option>
                                                <option>019</option>
                                            </select>
                                        </div>
                                        <div class="col col-sm-4">
                                            <input type="text" class="form-control" :value="getCellNum.sec" @input="saveCellNum2">
                                        </div>
                                        <div class="col col-sm-4">
                                            <input type="text" class="form-control"  :value="getCellNum.third" @input="saveCellNum3">
                                        </div>
                                    </div>
                                </td>
                                <th scope="row"><span class="text-primary">전화</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col col-sm-4">
                                            <select class="form-control">
                                                                <option>선택</option>
                                                                <option>02</option>
                                                                <option>031</option>
                                                                <option>032</option>
                                                                <option>042</option>
                                                                <option>051</option>
                                                            </select>
                                        </div>
                                        <div class="col col-sm-4">
                                            <input type="text" class="form-control">
                                        </div>
                                        <div class="col col-sm-4">
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row"><span class="text-primary">이메일</span></th>
                                <td colspan="3">
                                    <div class="row">
                                        <div class="col-sm-9 d-flex justify-content-between">
                                            <div class="input-group">
                                                <input type="text" class="form-control" :value="selectMember.email">
                                                <span class="input-group-addon">@</span>
                                                <input type="text" class="form-control" >
                                                <select class="form-control" :value="selectMember.email" @change="selectEmail">
                                                    <option vlaue="naver.com">네이버</option>
                                                    <option>02</option>
                                                    <option>031</option>
                                                    <option>032</option>
                                                    <option>042</option>
                                                    <option>051</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row"><span class="text-primary">메모</span></th>
                                <td colspan="3">
                                    <textarea class="form-control" :value ="selectMember.description" ></textarea>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
</template>

<script>
import datepicker from 'vuejs-datepicker'
import { ko } from 'vuejs-datepicker/dist/locale'
import { EventBus } from './eventBus'
import { phoneNum } from '@/assets/script'

export default {
  components: {
    datepicker
  },
  data () {
    return {
      selectMember: {},
      saveMember: {},
      getCellNum: {},
      cellNum1: '',
      cellNum2: '',
      cellNum3: '',
      resignChecked: false,
      ko: ko,
      visualInfo: false
    }
  },
  methods: {
    // 넘어온 직원정보 가공
    getUserData (data) {
      data.dateCreated = this.$moment(data.dateCreated).format('YYYY-MM-DD')
      this.getCellNum = phoneNum(data.cellNum)
      if (data.email === null) return false
      return data
    },
    saveCellNum1 (e) {
      this.cellNum1 = e.target.value
    },
    saveCellNum2 (e) {
      this.cellNum2 = e.target.value
    },
    saveCellNum3 (e) {
      this.cellNum3 = e.target.value
    },
    selectEmail (e) {
      console.log(e.target.value)
      this.saveMember.email = e.target.value
    }
  },
  beforeDestroy () {
    EventBus.$off()
  }
}
</script>

<style>

</style>
