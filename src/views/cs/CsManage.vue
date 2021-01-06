<template>
  <div class="container-fluid">
    <div class="row">
      <PageHeader :pageCurrentInfo="pageCurrentInfo" />

      <div class="col-sm-12">

            <!-- 검색영역 시작-->
            <div class="widget has-shadow">
                <div class="widget-body">
                    <table class="table table-bordered" summary="고객상담 검색하기">
                        <colgroup>
                            <col width="10%">
                            <col width="40%">
                            <col width="10%">
                            <col width="40%">
                        </colgroup>
                        <tbody>
                            <tr>
                                <th scope="row"><span class="text-primary">고객 검색</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col col-sm-3">
                                            <select class="form-control" v-model="searchParam.custom">
                                              <option key="customerId" value="customerId">고객ID</option>
                                              <option key="customerName" value="customerName">고객명</option>
                                            </select>
                                        </div>
                                        <div class="col col-sm-4">
                                            <input type="text" class="form-control" placeholder="검색어 입력" v-model="searchParam.customType">
                                        </div>
                                    </div>
                                </td>
                                <th><span class="text-primary">접수자/처리자</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col col-sm-4">
                                            <input type="text" class="form-control" placeholder="접수자명 입력" v-model="searchParam.ReceiveName">
                                        </div>
                                        <div class="col col-sm-4">
                                            <input type="text" class="form-control" placeholder="처리자명 입력" v-model="searchParam.ChargeName">
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row"><span class="text-primary">주문번호</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <input type="text" class="form-control" placeholder="주문번호 입력" v-model="searchParam.OrderNo">
                                        </div>
                                    </div>
                                </td>
                                <th><span class="text-primary">상담유형</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col col-sm-3">
                                            <select class="form-control" @change="onChangeBigCode" v-model="searchParam.CounselTypeCd">
                                                <option value="">상담유형1</option>
                                                <option v-for="(o,i) in bigCodeList" :key="i" :value="o.cdName">{{o.cdName}}</option>
                                            </select>
                                        </div>
                                        <div class="col col-sm-3">
                                            <select class="form-control" v-model="searchParam.ChildCounselTypeCd">
                                                <option value="">상담유형2</option>
                                                <option v-for="(o,i) in midCodeList" :key="i" :value="o.cdName">{{o.cdName}}</option>
                                            </select>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row"><span class="text-primary">접수일자</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-8">
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
                                                <input type="radio" name="StatusCd" id="StatusCd-1" value="" v-model="searchParam.statusCd" >
                                                <label for="StatusCd-1">전체</label>
                                            </div>
                                            <div class="styled-radio">
                                                <input type="radio" name="StatusCd" id="StatusCd-2" value="접수" v-model="searchParam.statusCd">
                                                <label for="StatusCd-2">접수</label>
                                            </div>
                                            <div class="styled-radio">
                                                <input type="radio" name="StatusCd" id="StatusCd-3" value="처리완료" v-model="searchParam.statusCd">
                                                <label for="StatusCd-3">처리완료</label>
                                            </div>
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
             <DataTableVue4
                    :columnDef="getColumnDef"
                    :rowData="counselList"
                    :isPaging="true"
                     :rowEditorList="
                    [{
                        type: 'LINK',
                        editColumn: 'counselContents',
                         onClick: (data) => { this.openModalPopup('QaManagePopup', {counselNo: data.row.counselNo, orderNo: data.row.orderNo}) }
                     }]"
                />
            <!-- 리스트영역 끝 -->
             <QaManagePopup v-if="modalOpenFlag && modalPopupId === 'QaManagePopup'" title="고객상담"
                      :modalParamObj="modalParamObj" @close="closeModalPopup" :key="componentKey"></QaManagePopup>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import QaManagePopup from '@/components/popup/QaManagePopup'
import popup from '@/mixin/popup.js'
import pageHeader from '@/mixin/pageHeader'
import dateSelect from '@/mixin/dateSelect'
import DataTableVue4 from '@/components/DataTableVue4'

const customerCounselStore = 'customerCounselStore'
const manToManStore = 'manToManStore'

export default {
  mixins: [
    pageHeader({title: '고객상담관리', groupName: '상담관리'}),
    dateSelect,
    popup
  ],
  components: {
    QaManagePopup,
    DataTableVue4
  },
  data: function () {
    return {
      modal: false,
      counselList: [],
      bigCodeList: [],
      midCodeList: [],
      searchParam: {
        custom: 'customerId',
        customType: '',
        ReceiveName: '',
        OrderNo: null,
        psearchStartDate: this.$moment().add(-30, 'days').format('YYYY-MM-DD'),
        psearchEndDate: this.$moment().format('YYYY-MM-DD'),
        CounselTypeCd: '',
        ChildCounselTypeCd: '',
        StatusCd: ''
      },
      componentKey: 0,
      modalOpenFlag: false, // 모달창 openFlag
      modalPopupId: '', // 오픈할 모달창 id
      modalParamObj: {} // 모달창 호출시 params
    }
  },
  computed: {
    ...mapGetters(customerCounselStore, [
      'getColumnDef'
    ]),
    ...mapGetters(manToManStore, [
      'getManToManCode'
    ])
  },
  created () {
    this.actionFindCustomerCounselList(this.searchParam)
      .then(res => {
        console.log(res.data)
        this.counselList = res.data
      })
      .catch(err => {
        console.log(err)
      })
    this.actionManToManCounseCode()
      .then(res => {
        this.bigCodeList = res.filter(x => x.cgCode === '301')
      })
  },
  methods: {
    ...mapActions(customerCounselStore, [
      'actionFindCustomerCounselList'
    ]),
    ...mapActions(manToManStore, [
      'actionManToManCounseCode'
    ]),
    qaManageClick (item, index) {
      this.selectedId = index
      this.selCon = item
      this.modal = true
    },
    closeModal () {
      this.modal = false
    },
    searchBtn () {
      let param = {
        pwriterType: this.searchParam.custom,
        pwriterKeyword: this.searchParam.customType,
        preceiveName: this.searchParam.ReceiveName,
        pchargeName: this.searchParam.ChargeName,
        porderNo: this.searchParam.OrderNo,
        pcounselType: this.searchParam.CounselTypeCd,
        pchildCounselType: this.searchParam.ChildCounselTypeCd,
        psearchStartDate: this.searchParam.psearchStartDate,
        psearchEndDate: this.searchParam.psearchEndDate,
        pcounselStatus: this.searchParam.statusCd
      }
      if (param.searchStartDate === '' || param.searchEndDate === '') {
        param.searchStartDate = null
        param.searchEndDate = null
      }
      this.actionFindCustomerCounselList(param)
        .then(res => {
          console.log(res.data)
          this.counselList = res.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    onChangeBigCode () {
      let bigCodeObj = this.getManToManCode.find(x => x.cgCode === '301' && x.cdName === this.searchParam.CounselTypeCd)
      this.midCodeList = this.getManToManCode.filter(x => x.cdRefcode === bigCodeObj.cdCode)
      this.searchParam.ChildCounselTypeCd = ''
    },
    // 모달팝업 open
    openModalPopup (id, o) {
      if (id === 'QaManagePopup') {
        // 주문서 상세팝업 오픈시
        this.modalPopupId = 'QaManagePopup'
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
