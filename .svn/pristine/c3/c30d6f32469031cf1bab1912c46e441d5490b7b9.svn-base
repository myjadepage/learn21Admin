<template>
  <div id="mamToManInfoModal" class="modal-mask">
    <div class="modal-dialog modal-item">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">{{ title }}</h4>
                <button type="button" class="close"  @click="$emit('close')">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">close</span>
                    </button>
            </div>
            <div class="modal-body">
                <div class="widget has-shadow">
                    <div class="widget-header bordered folding-switch">
                        <a href="#collapseQa" data-toggle="collapse">
                            <h5><i class="la la-minus"></i>상담내용</h5>
                        </a>
                    </div>
                    <div class="widget-body collapse show" id="collapseQa">
                        <table class="table table-bordered totla-info" summary="상담내용">
                            <colgroup>
                                <col width="10%">
                                <col width="23%">
                                <col width="10%">
                                <col width="23%">
                                <col width="10%">
                                <col width=*>
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th>작성자</th>
                                    <td>{{this.manToManDetail.viewManToManCounsel.userNameCreatedBy}}</td>
                                    <th>회원ID</th>
                                    <td>{{manToManDetail.viewManToManCounsel.userIdCreatedBy}}</td>
                                    <th>작성일자</th>
                                    <td>{{manToManDetail.viewManToManCounsel.dateCreated}}</td>
                                </tr>
                                <tr>
                                    <th>상담구분</th>
                                    <td>{{manToManDetail.viewManToManCounsel.counselCategoryCd}}</td>
                                    <th>상담유형1</th>
                                    <td>{{manToManDetail.viewManToManCounsel.counselTypeCd}}</td>
                                    <th>상담유형2</th>
                                    <td>{{manToManDetail.viewManToManCounsel.childCounselTypeCd}}</td>
                                </tr>
                                <tr>
                                    <th>주문번호</th>
                                    <td>{{manToManDetail.viewManToManCounsel.orderNo}}</td>
                                    <th>계좌번호</th>
                                    <td colspan="3">은행명 : <span>{{manToManDetail.viewManToManCounsel.bankName}}</span>
                                    , 계좌번호 : <span>{{manToManDetail.viewManToManCounsel.accountNum}}</span>
                                    , 예금주 : <span>{{manToManDetail.viewManToManCounsel.depositName}}</span></td>

                                </tr>
                                <tr>
                                    <th>제목</th>
                                    <td colspan="5">{{manToManDetail.viewManToManCounsel.title}}</td>
                                </tr>
                                <tr>
                                    <th>내용</th>
                                    <td colspan="5">
                                        {{manToManDetail.viewManToManCounsel.contents}}
                                    </td>
                                </tr>
                                <tr>
                                    <th>담당자</th>
                                    <td>{{manToManDetail.viewManToManCounsel.chargeName}}</td>
                                    <th>상태</th>
                                    <td><span class="text-danger">{{manToManDetail.viewManToManCounsel.statusCd}}</span></td>
                                    <th></th>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="widget has-shadow">
                    <div class="widget-header bordered folding-switch">
                        <a href="#collapseQaItem" data-toggle="collapse" aria-expanded="true">
                            <h5><i class="la la-minus"></i>주문 목록</h5>
                        </a>
                    </div>
                    <div class="widget-body collapse show" id="collapseQaItem">
                    <DataTableVue4
                         :columnDef="columnDef"
                         :rowData="manToManDetail.orderList"
                         :isPaging="true"
                />
                    </div>
                </div>

                <div class="widget has-shadow">
                    <div class="widget-header bordered folding-switch">
                        <a href="#collapseQaAnswer" data-toggle="collapse" aria-expanded="true">
                            <h5><i class="la la-minus"></i>답변 내용</h5>
                        </a>
                    </div>
                    <div class="widget-body collapse show" id="collapseQaAnswer">
                        <table id="qa-item-table" class="table table-bordered" summary="답변내용">
                            <colgroup>
                                <col width="10%">
                                <col width="90%">
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th>상담유형</th>
                                    <td>
                                        <div class="row">
                                            <div class="col col-sm-3">
                                                <select class="form-control" v-model="manToManDetail.viewManToManCounselRelpy.counselCategoryCd">
                                                                                <option value="">전체</option>
                                                                                <option>일반상담</option>
                                                                                <option>주문상담</option>
                                                                        </select>
                                            </div>
                                            <div class="col col-sm-3">
                                                <select class="form-control" v-model="manToManDetail.viewManToManCounselRelpy.counselTypeCd" @change="onCodeChange">
                                                    <option value="">상담유형1</option>
                                                    <option v-for="(item, index) in this.bigCodeList" :key="index"  :value="item.cdName">
                                                    {{item.cdName}}
                                                    </option>
                                                </select>
                                            </div>
                                            <div class="col col-sm-3">
                                                <select class="form-control" v-model="manToManDetail.viewManToManCounselRelpy.childCounselTypeCd">
                                                    <option value="">상담유형2</option>
                                                    <option v-for="(item, index) in this.midCodeList" :key="index"  :value="item.cdName">
                                                    {{item.cdName}}
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th>제목</th>
                                    <td>

                                        <input type="text" class="form-control" placeholder="" v-model="manToManDetail.viewManToManCounselRelpy.title">

                                    </td>
                                </tr>
                                <tr>
                                    <th>내용유형</th>
                                    <td>
                                        <div class="row">
                                            <div class="col col-sm-3">
                                                <select class="form-control">
                                                    <option>선택</option>
                                                    <option>Ketchup</option>
                                                    <option>Relish</option>
                                                </select>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th>내용</th>
                                    <td>
                                        <textarea class="form-control" style="height:200px; overflow-y:scroll;" v-model="manToManDetail.viewManToManCounselRelpy.contents"></textarea>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                </div>
            </div>

            <div class="modal-footer" style="justify-content: space-between;">
                <div class="row col">
                    <div class="col-sm-5">
                        <button type="button" class="btn btn-outline-dark" @click="$emit('close')">닫기</button>
                        <!--<button type="button" class="btn btn-outline-primary">고객상담 접수</button>-->
                    </div>
                    <div class="col-sm-5">
                        <div class="row d-flex justify-content-end margin-top-10 ">
                            <label class="col col-sm-5 d-flex justify-content-end form-control-label">저장 후 메시지 전송 :</label>
                            <div class="col col-sm-4 d-flex justify-content-between">
                                <div class="styled-checkbox">
                                    <input type="checkbox" name="checkbox" id="check-1">
                                    <label for="check-1">메일</label>
                                </div>
                                <div class="styled-checkbox">
                                    <input type="checkbox" name="checkbox" id="check-2">
                                    <label for="check-2">SMS</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-2 flex justify-content-end">
                        <button type="button" class="btn btn-primary"  @click="saveBtn">메모 저장</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import DataTableVue4 from '@/components/DataTableVue4'

const manToManStore = 'manToManStore'

export default {
  name: 'manToManInfoPopup',
  components: { DataTableVue4 },
  props: {
    title: {
      type: String,
      require: true
    },
    modalParamObj: {
      type: Object,
      require: true
    }
  },
  data () {
    return {
      param: {},
      manToManDetail: {
        orderList: [],
        viewManToManCounsel: {},
        viewManToManCounselRelpy: {}
      },
      // manToManReplyInfo: {},
      bigCodeList: [],
      midCodeList: [],
      columnDef: [
        {label: '주문번호', name: 'orderNo', sort: true},
        {label: '주문자', name: 'customerName', sort: true},
        {label: '수취인명', name: 'receiver', sort: true, row_classes: 'table-text-left'},
        {label: '주문상품', name: 'productSummary', sort: true},
        {label: '주문총액', name: 'itemTotal', sort: true},
        {label: '배송비', name: 'deliveryCostTotal', sort: true},
        {label: '결제총액', name: 'paymentTotal', sort: true},
        {label: '결제수단', name: 'paymentTypeCd', sort: true},
        {label: '상태', name: 'orderStatusCd', sort: true},
        {label: '주무일자', name: 'dateOrdered', sort: true, type: 'Date'}]
    }
  },
  created () {
    let params = {pcounselNo: this.modalParamObj.index, pordererId: this.modalParamObj.id}
    this.actionManToManDetail(params)
      .then(res => {
        this.manToManDetail = res
        // this.manToManReplyInfo = res.data.viewManToManCounselRelpy
        if (res.viewManToManCounselRelpy === null) {
          this.manToManDetail.viewManToManCounselRelpy = {
            counselCategoryCd: '',
            counselTypeCd: '',
            childCounselTypeCd: '',
            title: '',
            contents: ''
          }
        }
      })
      .catch(err => {
        console.log(err)
      })
    this.bigCodeList = this.getManToManCode.filter(x => x.cgCode === '301')
    this.midCodeList = this.getManToManCode.filter(x => x.cgCode === '302')
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
      'actionManToManDetail',
      'actionManToManCounseCode',
      'actionInsertManToManReply'
    ]),
    onCodeChange () {
      let bigCodeObj = this.getManToManCode.find(x => x.cgCode === '301' && x.cdName === this.manToManDetail.viewManToManCounselRelpy.counselTypeCd)
      this.midCodeList = this.getManToManCode.filter(x => x.cdRefcode === bigCodeObj.cdCode)
      this.manToManDetail.viewManToManCounselRelpy.childCounselTypeCd = ''
    },
    saveBtn () {
      if (confirm('저장하시겠습니까?')) {
        this.manToManDetail.viewManToManCounselRelpy.pcounselNo = this.modalParamObj.index
        this.actionInsertManToManReply(this.manToManDetail.viewManToManCounselRelpy)
        console.log(this.manToManDetail.viewManToManCounselRelpy)
        alert('저장되었습니다.')
      }
    }
  }
}
</script>

<style>

</style>
