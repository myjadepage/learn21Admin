<template>
  <div class="modal-mask">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">매입확정</h4>
                <button type="button" class="close" @click="$emit('close')">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">close</span>
                </button>
            </div>
            <div class="modal-body">
              <div class="widget no-margin">
                  <div class="widget-body no-padding">
                      <table class="table table-bordered" summary="매입확정">
                          <colgroup>
                              <col width="20%">
                              <col width="80%">
                          </colgroup>
                          <tbody>
                              <tr>
                                  <th>매입일자</th>
                                  <td>
                                      <div class="row">
                                          <div class="col col-sm-4">
                                              <datepicker :value="state.startdate" :format="getFormatDate" :language="ko" placeholder="날짜선택" input-class="form-control"></datepicker>
                                          </div>
                                          <div class="input-group col col-sm-2">
                                              <span class="input-group-addon"><i class="la la-calendar"></i></span>
                                          </div>
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <th>메모</th>
                                  <td>
                                      <textarea class="form-control" placeholder="[일괄 매입 확정] 메모를 입력하세요"></textarea>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <div class="text-center separator-dotted">
                          <button class="btn btn-primary" @click="saveAdd">일괄매입확정</button>
                      </div>
                      <div class="em-separator separator-dotted"></div>

                      <table class="table table-bordered mt-3" summary="매입확정품목">
                          <colgroup>
                              <col width="10%">
                              <col width=*>
                              <col width="20%">
                              <col width="20%">
                          </colgroup>
                          <thead>
                              <tr><th colspan="4">매입확정 품목</th></tr>
                              <tr>
                                  <th>NO</th>
                                  <th>품목명</th>
                                  <th>입고수량</th>
                                  <th>잔량</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr v-for="(data, index) in getData" :key="index">
                                  <td>{{ index + 1}}</td>
                                  <td class="text-left">{{ data.itemName }}</td>
                                  <td><input type="text" class="form-control-plaintext text-center" :value="data.diiAdd" readonly /></td>
                                  <td><input type="text" class="form-control-plaintext text-center" :value="data.balance" readonly /></td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import datepicker from 'vuejs-datepicker'
import { ko } from 'vuejs-datepicker/dist/locale'
import { savePurcahseConfirm } from '@/api'

export default {
  components: { datepicker },
  props: ['saveData'],
  data () {
    return {
      state: {
        startdate: new Date()
      },
      ko: ko,
      importItems: []
    }
  },
  computed: {
    getData () {
      return this.saveData
    }
  },
  methods: {
    getFormatDate (date) {
      return this.$moment(date).format('YYYY-MM-DD')
    },
    // 매입일괄
    saveAdd () {
      console.log(this.getData)
      this.importItems = this.getData.map(el => {
        const container = {}
        // if (el.balance !== 0 || el.balance > 0) {
        container.dpiCode = el.dpiCode
        container.dpoCode = el.dpoCode
        container.itemName = el.itemName
        container.diiCount = el.diiAdd
        container.diiImportdate = this.$moment(el.diiImportdate).format('YYYY-MM-DD')
        container.diiSupplyprice = el.unitPrice * el.diiAdd
        container.diiTax = el.diiTax
        container.diiTotalPrice = container.diiSupplyprice
        container.diiName = ''
        container.itemIsbnNum = 0
        container.itemId = el.itemId
        container.diiRegdate = ''
        // container.balance = el.balance
        // }
        return container
      })
      let params = {}
      params.importItems = this.importItems
      console.log('params', params)
      // 매입확정 api
      savePurcahseConfirm(params)
        .then(res => {
          console.log(res)
          this.$emit('close')
          // let saveAddItem = {}
          // getPurchaseConfirm(saveAddItem)
          //   .then(res => {
          //     this.forceRerender()
          //     this.dataContainer(res.data)
          //   })
          //   .catch(err => {
          //     console.log(err)
          //   })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>
