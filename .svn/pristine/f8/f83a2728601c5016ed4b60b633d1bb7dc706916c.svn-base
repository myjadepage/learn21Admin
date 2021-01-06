<template>
<div class="container-fluid">
    <div class="row">
      <PageHeader :pageCurrentInfo="pageCurrentInfo" />

      <div class="col-sm-12">

            <!-- 검색영역 시작-->
            <div class="widget has-shadow">
                <div class="widget-body">
                    <table class="table table-bordered" summary="상담 검색하기">
                        <colgroup>
                            <col width="10%">
                            <col width="40%">
                            <col width="10%">
                            <col width="40%">
                        </colgroup>
                        <tbody>
                            <tr>
                                <th scope="row"><span class="text-primary">작성자 검색</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col col-sm-3">
                                            <select class="form-control" v-model="searchParam.pwriterType">
                                                                <option value="customerId">고객ID</option>
                                                                <option value="customerName">고객명</option>
                                                            </select>
                                        </div>
                                        <div class="col col-sm-4">
                                            <input type="text" class="form-control" placeholder="검색어 입력" v-model="searchParam.pwriterKeyword">
                                        </div>
                                    </div>
                                </td>
                                <th><span class="text-primary">담당자 검색</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col col-sm-3">
                                            <select class="form-control" v-model="searchParam.pchargType">
                                                                <option value="">전체</option>
                                                                <option value="chargeId">담당자ID</option>
                                                                <option value="chargeName">담당자명</option>
                                                            </select>
                                        </div>
                                        <div class="col col-sm-4">
                                            <input type="text" class="form-control" placeholder="검색어 입력" v-model="searchParam.pchargKeyword">
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row"><span class="text-primary">상담구분</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col col-sm-3">
                                            <select class="form-control" v-model="searchParam.pcounselCategory">
                                                                <option value="">전체</option>
                                                                <option>일반상담</option>
                                                                <option>주문상담</option>
                                                            </select>
                                        </div>
                                    </div>
                                </td>
                                <th><span class="text-primary">상담유형</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col col-sm-3">
                                            <select class="form-control" @change="onChangeBigCode" v-model="searchParam.pcounselType">
                                                <option value=''>전체</option>
                                                <option v-for="(o,i) in bigCodeList" :key="i" :value="o.cdName">{{o.cdName}}</option>
                                            </select>
                                        </div>
                                        <div class="col col-sm-3">
                                            <select class="form-control" v-model="searchParam.pchildCounselType">
                                                <option value=''>전체</option>
                                                <option v-for="(o,i) in midCodeList" :key="i" :value="o.cdName">{{o.cdName}}</option>
                                            </select>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row"><span class="text-primary">작성일자</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col col-sm-8">
                                            <!-- date select component -->
                                             <DateSelect @state-start-date="(date) => this.searchParam.psearchStartDate = date"
                                                        @state-end-date="(date) => this.searchParam.psearchEndDate = date"
                                                        :defStartDate="searchParam.psearchStartDate"
                                                        :defEndDate="searchParam.psearchEndDate" />
                                        </div>
                                    </div>
                                </td>
                                <th>상태</th>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-12 d-flex align-items-center">
                                            <div class="styled-radio">
                                                <input type="radio" name="radQa" id="radQa-1" value="" v-model="searchParam.pcounselStatus">
                                                <label for="radQa-1">전체</label>
                                            </div>
                                            <div class="styled-radio">
                                                <input type="radio" name="radQa" id="radQa-2" value="접수" v-model="searchParam.pcounselStatus">
                                                <label for="radQa-2">접수</label>
                                            </div>
                                            <div class="styled-radio">
                                                <input type="radio" name="radQa" id="radQa-3" value="답변완료" v-model="searchParam.pcounselStatus">
                                                <label for="radQa-3">답변완료</label>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="text-center">
                        <button class="btn btn-primary" @click="searchBtn">검색</button>
                    </div>
                </div>
            </div>
            <!-- 검색영역 끝-->

            <!-- 리스트영역 시작 -->
                <DataTableVue4
                    :columnDef="getColumnDef"
                    :rowData="manToManListInfo"
                    :isPaging="true"
                     :rowEditorList="
                    [{
                        type: 'LINK',
                        editColumn: 'title',
                         onClick: (data) => { this.openModalPopup('MantoManInfoPopup', {index: data.row.counselNo, id: data.row.userIdCreatedBy}) }
                     }]"
                />
            <!-- 리스트영역 끝 -->
            <manto-man-info-popup v-if="modalOpenFlag && modalPopupId === 'MantoManInfoPopup'" title="1:1상담"
                      :modalParamObj="modalParamObj" @close="closeModalPopup" :key="componentKey"></manto-man-info-popup>
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import MantoManInfoPopup from '@/components/popup/MantoManInfoPopup.vue'
import popup from '@/mixin/popup.js'
import pageHeader from '@/mixin/pageHeader'
import dateSelect from '@/mixin/dateSelect'
import DataTableVue4 from '@/components/DataTableVue4'

const manToManStore = 'manToManStore'

export default {
  components: { MantoManInfoPopup, DataTableVue4 },
  mixins: [
    pageHeader({title: '1:1 상담관리', groupName: '상담관리'}),
    dateSelect,
    popup
  ],
  created () {
    this.getManToMan()
    this.actionManToManCounseCode()
      .then(res => {
        this.bigCodeList = res.filter(x => x.cgCode === '301')
      })
  },
  data: function () {
    return {
      manToManListInfo: [],
      searchParam: {
        pwriterType: 'customerId',
        pwriterKeyword: '',
        pchargType: 'chargeId',
        pchargKeyword: '',
        pcounselCategory: '',
        pcounselType: '',
        pchildCounselType: '',
        psearchStartDate: this.$moment().add(-30, 'days').format('YYYY-MM-DD'),
        // psearchStartDate: '2020-10-01',
        psearchEndDate: this.$moment().format('YYYY-MM-DD'),
        pcounselStatus: ''
      },
      columnDef: [],
      bigCodeList: [],
      midCodeList: [],
      bigCode: '',
      midCode: '',
      componentKey: 0,
      modalOpenFlag: false, // 모달창 openFlag
      modalPopupId: '', // 오픈할 모달창 id
      modalParamObj: {} // 모달창 호출시 params
    }
  },
  computed: {
    ...mapGetters(manToManStore, [
      'getColumnDef',
      'getManToManList',
      'getManToManCode'
    ])
  },
  methods: {
    ...mapActions(manToManStore, [
      'actionFindManToManList',
      'actionManToManCounseCode'
    ]),
    onChangeBigCode () {
      let bigCodeObj = this.getManToManCode.find(x => x.cgCode === '301' && x.cdName === this.searchParam.pcounselType)
      this.midCodeList = this.getManToManCode.filter(x => x.cdRefcode === bigCodeObj.cdCode)
      this.searchParam.pchildCounselType = ''
    },
    getManToMan () {
      this.actionFindManToManList(this.searchParam)
        .then(res => {
          console.log(res.data)
          this.manToManListInfo = res.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    searchBtn () {
      this.actionFindManToManList(this.searchParam)
        .then(res => {
          console.log(res.data)
          this.manToManListInfo = res.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 모달팝업 open
    openModalPopup (id, o) {
      if (id === 'MantoManInfoPopup') {
        // 주문서 상세팝업 오픈시
        this.modalPopupId = 'MantoManInfoPopup'
        this.modalParamObj = o
      }
      this.modalOpenFlag = true
      document.body.classList.add('modal-open')
    },
    // 모달창 close
    closeModalPopup () {
      this.modalPopupId = ''
      this.modalOpenFlag = false
      document.body.classList.remove('modal-open')
    },
    forceRerender () {
      this.componentKey += 1
    }

  }
}
</script>

<style>

</style>
