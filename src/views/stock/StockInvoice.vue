<template>
  <div class="container-fluid">
    <div class="row">
      <PageHeader :pageCurrentInfo="pageCurrentInfo" />

       <div class="col-sm-12">
            <div class="widget has-shadow">
                <div class="widget-body">
                    <table class="table table-bordered" summary="송장 검색하기">
                        <colgroup>
                            <col width="10%">
                            <col width="40%">
                            <col width="10%">
                            <col width="40%">
                        </colgroup>
                        <tbody>
                            <tr>
                                <th scope="row"><span class="text-primary">출고 요청일</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-8">
                                            <DateSelect @state-start-date="startDate" @state-end-date="endDate"
                                            :defStartDate="pfromDate"
                                            :defEndDate="ptoDate"></DateSelect>
                                        </div>
                                    </div>
                                </td>
                                <th scope="row"><span class="text-primary">구분</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-8">
                                            <div class="styled-checkbox">
                                                <input type="checkbox" name="checkbox" id="chkStock">
                                                <label for="chkStock">송장번호 미등록건만</label>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="text-center">
                        <button class="btn btn-primary">검색</button>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-sm-6">
                    <ul class="nav nav-tabs nav-fill">
                        <li class="nav-item" v-for="(item, index) in ['주문내역', '송장번호 일괄처리']" :key="index">
                            <a href="#" class="nav-link" @click="tabCon(index)" :class="type === index ? 'active' : ''">{{ item }}</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="tab-content">
              <invoice-order-tab v-show="type === 0"></invoice-order-tab>
              <invoice-num-tab v-show="type === 1"></invoice-num-tab>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import pageHeader from '@/mixin/pageHeader'
import dateSelect from '@/mixin/dateSelect'
import InvoiceOrderTab from './component/InvoiceOrderTab.vue'
import InvoiceNumTab from './component/InvoiceNumTab.vue'

export default {
  components: { InvoiceOrderTab, InvoiceNumTab },
  mixins: [
    pageHeader({title: '송장관리', groupName: '물류관리'}),
    dateSelect
  ],
  data () {
    return {
      type: 0
    }
  },
  methods: {
    tabCon (index) {
      switch (index) {
        case 0: this.type = 0
          break
        case 1: this.type = 1
          break
      }
    }
  }
}
</script>

<style>

</style>
