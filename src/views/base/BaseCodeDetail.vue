<template>
  <div class="container-fluid">
    <div class="row">
      <PageHeader :pageCurrentInfo="pageCurrentInfo" />
       <div class="col-sm-12">
            <div class="widget has-shadow">
                <div class="widget-body">
                    <div class="row">
                       <!--대분류-->
                       <div class="col-sm-4">
                            <div class="widget item-classify">
                                <div class="widget-body no-padding scroll-area">
                                    <table id="table" class="table no-margin" summary="코드상세 대분류">
                                        <thead>
                                            <tr><th>{{bigCodeName}}</th></tr>
                                        </thead>
                                        <tbody>
                                            <tr draggable="true" @dragover.prevent @dragenter.prevent @dragleav.prevent @dragend.prevent
                                            @dragstart='dragStart($event, index)' @drop="dragFinish($event, index, 'big')"
                                            v-for="(o, index) in bigCodeList" :key="o.cdCode"
                                             :class="o.cdUseyn === 'N' ? 'table-danger' : ''">
                                                <td>
                                                    <div class="row">
                                                        <div class="col-sm-8">
                                                           <div class="input-group">
                                                             <div class="styled-radio">
                                                                <input type="radio"
                                                                       name="rdoBigCode"
                                                                       :id="'rdo_' + o.cdCode"
                                                                       :value="o.cdCode"
                                                                       @change="onChangeBigCode"
                                                                       >
                                                                       <label :for="'rdo_' + o.cdCode"></label>
                                                             </div>
                                                                <input type="text"  v-model="o.cdName" class="form-control">
                                                           </div>

                                                        </div>
                                                        <div class="col-sm-4 d-flex justify-content-end">
                                                            <button type="button" class="btn btn-sm btn-secondary"><i class="la la-arrows-alt"></i></button>
                                                            <button type="button" class="btn btn-sm btn-secondary" @click="() => onClickDeleteBigCode(o.cdCode)"><i class="la la-times"></i></button>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="widget-footer item-classify">
                                    <div class="row">
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" v-model="addBigCodeName">
                                        </div>
                                        <div class="col-sm-4 d-flex justify-content-end">
                                            <button type="button" class="btn btn-block btn-sm btn-outline-primary" @click="onClickAddBigCode">추가</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!--중분류-->
                        <div class="col-sm-4">
                            <div class="widget item-classify">
                                <div class="widget-body no-padding scroll-area">
                                    <table id="table" class="table no-margin" summary="코드상세 대분류">
                                        <thead>
                                            <tr><th>{{midCodeName}}</th></tr>
                                        </thead>
                                        <tbody>
                                            <tr draggable="true" @dragover.prevent @dragenter.prevent @dragleav.prevent @dragend.prevent
                                            @dragstart='dragStart($event, index)' @drop="dragFinish($event, index, 'mid')"
                                            v-for="(o, index) in midCodeList" :key="o.cdCode"
                                            :class="o.cdUseyn === 'N' ? 'table-danger' : ''">
                                                <td>
                                                    <div class="row">
                                                        <div class="col-sm-8">
                                                            <div class="input-group">
                                                             <div class="styled-radio">
                                                                <input type="radio"
                                                                       name="rdoMidCode"
                                                                       :id="'rdo_' + o.cdCode"
                                                                       :value="o.cdCode"
                                                                       @change="onChangeMidCode"
                                                                       >
                                                                       <label :for="'rdo_' + o.cdCode"></label>
                                                             </div>
                                                                <input type="text" class="form-control" v-model="o.cdName">
                                                             </div>
                                                        </div>
                                                        <div class="col-sm-4 d-flex justify-content-end">
                                                            <button type="button" class="btn btn-sm btn-secondary"><i class="la la-arrows-alt"></i></button>
                                                            <button type="button" class="btn btn-sm btn-secondary" @click="() => onClickDeleteMidCode(o.cdCode)"><i class="la la-times"></i></button>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="widget-footer item-classify">
                                    <div class="row" v-if="midCodeName !== ''">
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" v-model="addMidCodeName">
                                        </div>
                                        <div class="col-sm-4 d-flex justify-content-end">
                                            <button type="button" class="btn btn-block btn-sm btn-outline-primary" @click="onClickAddMidCode">추가</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!--소분류-->
                        <div class="col-sm-4">
                            <div class="widget item-classify">
                                <div class="widget-body no-padding scroll-area">
                                    <table id="table" class="table no-margin" summary="품목상세 대분류">
                                        <thead>
                                            <tr><th>{{smallCodeName}}</th></tr>
                                        </thead>
                                        <tbody>
                                            <tr draggable="true" @dragover.prevent @dragenter.prevent @dragleav.prevent @dragend.prevent
                                            @dragstart='dragStart($event, index)' @drop="dragFinish($event, index, 'small')"
                                            v-for="(o, index) in smallCodeList" :key="o.cdCode"
                                            :class="o.cdUseyn === 'N' ? 'table-danger' : ''">
                                                <td>
                                                    <div class="row">
                                                        <div class="col-sm-8">
                                                           <div class="input-group">
                                                             <div class="styled-radio">
                                                                <input type="radio"
                                                                       name="rdoSmallCode"
                                                                       :id="'rdo_' + o.cdCode"
                                                                       :value="o.cdCode"
                                                                       >
                                                                        <label :for="'rdo_' + o.cdCode"></label>
                                                             </div>
                                                                <input type="text" class="form-control" v-model="o.cdName">
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-4 d-flex justify-content-end">
                                                            <button type="button" class="btn btn-sm btn-secondary"><i class="la la-arrows-alt"></i></button>
                                                            <button type="button" class="btn btn-sm btn-secondary" @click="() => onClickDeleteSmallCode(o.cdCode)"><i class="la la-times"></i></button>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="widget-footer item-classify">
                                    <div class="row" v-if="smallCodeName !== ''">
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" v-model="addSmallCodeName">
                                        </div>
                                        <div class="col-sm-4 d-flex justify-content-end">
                                            <button type="button" class="btn btn-block btn-sm btn-outline-primary" @click="onClickAddSmallCode">추가</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="widget-footer">
                    <div class="row">
                        <div class="col-sm-6 d-flex align-items-center justify-content-md-start">
                            <button type="button" class="btn btn-outline-primary" @click ="$router.push({name: 'baseCode'})">목록</button>
                        </div>
                        <div class="col-sm-6 d-flex align-items-center justify-content-md-end">
                            <button type="button" class="btn btn-primary" @click="onClickSave">저장</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import pageHeader from '@/mixin/pageHeader'

const store = 'codeStore'
export default {
  mixins: [pageHeader({title: '코드상세관리', groupName: '기초관리'})],
  props: ['sort'],
  created () {
    // 대/중/소 코드명
    let codeGroupList = this.getCodeGroupList.filter(x => x.sort.indexOf(this.sort.split('>')[0].trim()) > -1)
    let bigCodeObj = codeGroupList.find(x => x.cgParentCode === null)
    let midCodeObj = codeGroupList.find(x => x.cgParentCode === bigCodeObj.cgCode)
    let smallCodeObj = midCodeObj !== undefined ? codeGroupList.find(x => x.cgParentCode === midCodeObj.cgCode) : undefined
    this.bigCodeName = '[' + bigCodeObj.cgCode + '] ' + bigCodeObj.cgName
    this.midCodeName = midCodeObj !== undefined ? '[' + midCodeObj.cgCode + '] ' + midCodeObj.cgName : ''
    this.smallCodeName = smallCodeObj !== undefined ? '[' + smallCodeObj.cgCode + '] ' + smallCodeObj.cgName : ''
    // 대/중/소 상세코드
    this.actionFindCodeGroupDetail(bigCodeObj.cgCode)
      .then(res => {
        this.bigCodeList = this.lodash.cloneDeep(res.bigCodeDetail)
      })
  },
  data () {
    return {
      bigCodeName: '',
      midCodeName: '',
      smallCodeName: '',
      addBigCodeName: '',
      addMidCodeName: '',
      addSmallCodeName: '',
      bigCodeList: [],
      midCodeList: [],
      smallCodeList: []
    }
  },
  computed: {
    ...mapGetters(store, [
      'getCodeGroupList',
      'getBigCodeList',
      'getMidCodeList',
      'getSmallCodeList'
    ])
  },
  methods: {
    ...mapActions(store, [
      'actionFindCodeGroup',
      'actionFindCodeGroupDetail',
      'actionSaveCodeDetail'
    ]),
    // 대분류코드 change
    onChangeBigCode (e) {
      this.smallCodeList = []
      this.midCodeList = this.lodash.cloneDeep(this.getMidCodeList.filter(x => x.cdRefcode === e.target.value))
    },
    // 중분류코드 change
    onChangeMidCode (e) {
      this.smallCodeList = this.lodash.cloneDeep(this.getSmallCodeList.filter(x => x.cdRefcode === e.target.value))
    },
    // 대분류코드 삭제 버튼 click
    onClickDeleteBigCode (o) {
      this.bigCodeList = this.bigCodeList.map((x, i) => {
        x.cdUseyn = x.cdCode === o ? 'N' : x.cdUseyn
        return x
      })
    },
    // 중분류코드 삭제 버튼 click
    onClickDeleteMidCode (o) {
      this.midCodeList = this.midCodeList.map(x => {
        x.cdUseyn = x.cdCode === o ? 'N' : x.cdUseyn
        return x
      })
    },
    // 소분류코드 삭제 버튼 click
    onClickDeleteSmallCode (o) {
      this.smallCodeList = this.smallCodeList.map(x => {
        x.cdUseyn = x.cdCode === o ? 'N' : x.cdUseyn
        return x
      })
    },
    // 대분류 추가
    onClickAddBigCode () {
      if (this.addBigCodeName.trim() === '') {
        alert('품목명을 입력하세요.')
        return
      }
      let addList = this.bigCodeList
      addList.push({
        cgCode: this.bigCodeName.split(' ')[0].replace('[', '').replace(']', ''),
        cpCode: 'LN01',
        cdCode: 'add_' + this.bigCodeList.length,
        cdName: this.addBigCodeName,
        cdRefcode: null,
        cdOrder: this.bigCodeList.length + 1,
        cdUseyn: 'Y'
      })
      this.bigCodeList = addList
      this.addBigCodeName = ''
    },
    // 중분류 추가
    onClickAddMidCode () {
      if (document.querySelector("[name='rdoBigCode']:checked") === null) {
        alert('대분류 코드를 선택하세요.')
        return
      }
      if (document.querySelector("[name='rdoBigCode']:checked").value.indexOf('add') > -1) {
        alert('추가한 대분류코드는 등록 이후 중분류코드 추가 가능합니다. ')
        return
      }
      if (this.addMidCodeName.trim() === '') {
        alert('품목명을 입력하세요.')
        return
      }
      let addList = this.midCodeList
      addList.push({
        cgCode: this.midCodeName.split(' ')[0].replace('[', '').replace(']', ''),
        cpCode: 'LN01',
        cdCode: 'add_' + this.midCodeList.length,
        cdName: this.addMidCodeName,
        cdRefcode: document.querySelector("[name='rdoBigCode']:checked").value,
        cdOrder: this.midCodeList.length + 1,
        cdUseyn: 'Y'
      })
      this.midCodeList = addList
      this.addMidCodeName = ''
    },
    // 소분류 추가
    onClickAddSmallCode () {
      if (document.querySelector("[name='rdoMidCode']:checked") === null) {
        alert('중분류 코드를 선택하세요.')
        return
      }
      if (document.querySelector("[name='rdoMidCode']:checked").value.indexOf('add') > -1) {
        alert('추가한 중분류코드는 등록 이후 소분류코드 추가 가능합니다. ')
        return
      }
      if (this.addSmallCodeName.trim() === '') {
        alert('품목명을 입력하세요.')
        return
      }
      let addList = this.smallCodeList
      addList.push({
        cgCode: this.smallCodeName.split(' ')[0].replace('[', '').replace(']', ''),
        cpCode: 'LN01',
        cdCode: 'add_' + this.smallCodeList.length,
        cdName: this.addSmallCodeName,
        cdRefcode: document.querySelector("[name='rdoMidCode']:checked").value,
        cdOrder: this.smallCodeList.length + 1,
        cdUseyn: 'Y'
      })
      this.smallCodeList = addList
      this.addSmallCodeName = ''
    },
    // 저장
    onClickSave () {
      let originalList = [...this.getBigCodeList, ...this.getMidCodeList, ...this.getSmallCodeList]
      let sumList = [...this.bigCodeList, ...this.midCodeList, ...this.smallCodeList] // 합쳐서
      sumList = sumList.filter(x => !(x.cdCode.indexOf('add') > -1 && x.cdUseyn === 'N')) // 잘못추가한거 빼고
      let resultList = this.lodash.differenceWith(sumList, originalList, this.lodash.isEqual) // 원장이랑 비교
      resultList.map(x => {
        if (x.cdCode.indexOf('add') > -1) {
          x.cdCode = null
        }
        return x
      })
      this.actionSaveCodeDetail(resultList)
        .then(res => {
          alert(res.message)
          let codeGroupList = this.getCodeGroupList.filter(x => x.sort.indexOf(this.sort.split('>')[0].trim()) > -1)
          let bigCodeObj = codeGroupList.find(x => x.cgParentCode === null)
          // 대/중/소 상세코드
          this.actionFindCodeGroupDetail(bigCodeObj.cgCode)
            .then(res => {
              this.bigCodeList = this.lodash.cloneDeep(res.bigCodeDetail)
            })
          this.midCodeList = []
          this.smallCodeList = []
        })
    },
    dragStart (e, which) {
      e.dataTransfer.dropAllowed = 'move'
      e.dataTransfer.dropEffect = 'move'
      this.dragging = which
    },
    dragFinish (e, to, area) {
      this.moveItem(this.dragging, to, area)
      e.target.style.marginTop = '2px'
      e.target.style.marginBottom = '2px'
    },
    moveItem (from, to, area) {
      if (area === 'big') {
        this.bigCodeList.splice(to, 0, this.bigCodeList.splice(from, 1)[0])
        this.bigCodeList.map((o, i) => {
          o.cdOrder = i + 1
          return o
        })
      } else if (area === 'mid') {
        this.midCodeList.splice(to, 0, this.midCodeList.splice(from, 1)[0])
        this.midCodeList.map((o, i) => {
          o.cdOrder = i + 1
          return o
        })
      } else if (area === 'small') {
        this.smallCodeList.splice(to, 0, this.smallCodeList.splice(from, 1)[0])
        this.smallCodeList.map((o, i) => {
          o.cdOrder = i + 1
          return o
        })
      }
    }
  }
}
</script>

<style scoped>
.item-classify .scroll-area {
    border: 1px solid #dee2e6;
}
.item-classify .default-state-table {
  border-bottom: 0
}
.item-classify .table-bordered td, .item-classify .table-bordered th {
    border: 0;
    border-bottom: 1px solid #dee2e6;
}
.item-classify .widget-footer {
    border: 1px solid #dee2e6;
    border-top: 0;
}
.drop-zone {
    background-color: #eee;
    margin-bottom: 10px;
    padding: 10px;
  }
.drag-el {
    background-color: #fff;
    margin-bottom: 10px;
    padding: 5px;
}
</style>
