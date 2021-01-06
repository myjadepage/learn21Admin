<template>
  <div class="container-fluid">
    <div class="row">
      <PageHeader :pageCurrentInfo="pageCurrentInfo" />

       <div class="col-sm-12">

            <!-- 검색영역 시작-->
            <div class="widget has-shadow">
                <div class="widget-body">
                    <table class="table table-bordered" summary="품목별 상세제고 검색하기">
                        <colgroup>
                            <col width="10%">
                            <col width="40%">
                            <col width="10%">
                            <col width="40%">
                        </colgroup>
                        <tbody>
                            <tr>
                                <th scope="row"><span class="text-primary">품목</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-5">
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="품목검색">
                                                <button type="button" class="btn btn-sm btn-secondary" @click="openModalPopup('itemSelectSingle')"><i class="la la-search"></i></button>
                                                <item-select-single-popup v-if="modalOpenFlag && modalPopupId === 'itemSelectSingle'" @close="closeModalPopup"></item-select-single-popup>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <th><span class="text-primary">조회기간</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-8">
                                             <DateSelect @state-start-date="startDate" @state-end-date="endDate" :defStartDate="pfromDate" :defEndDate="ptoDate"></DateSelect>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row"><span class="text-primary">가맹점</span></th>
                                <td>
                                    <div class="row">
                                        <div class="col col-sm-5">
                                            <select class="form-control">
                                                        <option>그룹</option>
                                                        <option>Ketchup</option>
                                                        <option>Relish</option>
                                                    </select>
                                        </div>
                                        <div class="col col-sm-5">
                                            <select class="form-control">
                                                        <option>가맹점</option>
                                                        <option>Ketchup</option>
                                                        <option>Relish</option>
                                                    </select>
                                        </div>
                                    </div>
                                </td>
                                <th></th>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="text-center">
                        <button class="btn btn-primary">조회</button>
                    </div>

                </div>
            </div>
            <!-- 검색영역 끝-->

            <!-- 리스트영역 시작 -->
            <div class="widget has-shadow">
                <div class="widget-header bordered">
                    <div class="row">
                        <div class="col-sm-6 d-flex align-items-center justify-content-md-start justify-content-center">
                            <select class="form-control col-sm-2">
                                        <option>표시갯수</option>
                                        <option>10개</option>
                                        <option>20개</option>
                                        <option>30개</option>
                                    </select>
                            <label class="col-sm-4">조회건수 : 20개</label>
                        </div>
                        <div class="col-sm-6 d-flex justify-content-end">
                            <button type="button" class="btn btn-outline-primary" @click="openModalPopup('stockItemPrint')">인쇄</button>
                        </div>
                        <stock-items-print-popup v-if="modalOpenFlag && modalPopupId === 'stockItemPrint'" @close="closeModalPopup"></stock-items-print-popup>
                    </div>
                </div>
                <div class="widget-body">
                    <table class="table table-bordered mb-0" summary="품목별 상세 재고 리스트">
                        <colgroup>
                            <col width="7%">
                            <col width="5%">
                            <col width="15%">
                            <col width="7%">
                            <col width="10%">
                            <col width="7%">
                            <col width="10%">
                            <col width="10%">
                            <col width="10%">
                            <col width=*>
                        </colgroup>
                        <thead>
                            <tr>
                                <th>일자</th>
                                <th>구분</th>
                                <th>입고수량</th>
                                <th>출고수량</th>
                                <th>재고</th>
                                <th>거래처</th>
                                <th>증빙번호</th>
                                <th>비고</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="table-active">
                                <td class="text-center">[이월]</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td class="text-right">555</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>

                        <tbody>
                            <tr>
                                <td>2020-09-15</td>
                                <td class="text-center">매입</td>
                                <td class="text-right">5</td>
                                <td class="text-right">200,500</td>
                                <td class="text-right"></td>
                                <td>(주)청담러닝</td>
                                <td>123456789</td>
                                <td>[연동]쇼핑몰</td>
                            </tr>
                            <tr>
                                <td>2020-09-15</td>
                                <td class="text-center">매출</td>
                                <td class="text-right">5</td>
                                <td class="text-right">200,500</td>
                                <td class="text-right"></td>
                                <td>(주)청담러닝</td>
                                <td>123456789</td>
                                <td>[연동]쇼핑몰</td>
                            </tr>
                            <tr>
                                <td>2020-09-15</td>
                                <td class="text-center">자산조정</td>
                                <td class="text-right">5</td>
                                <td class="text-right">200,500</td>
                                <td class="text-right"></td>
                                <td>(주)청담러닝</td>
                                <td>123456789</td>
                                <td>[연동]쇼핑몰</td>
                            </tr>

                            <!---- 총합    -->
                            <tr class="table-active sum_month">
                                <th class="text-center">[월계]</th>
                                <td></td>
                                <td class="text-right">11</td>
                                <td class="text-right">12</td>
                                <td class="text-right">1,123</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr class="table-active sum_month">
                                <th class="text-center">[누계]</th>
                                <td></td>
                                <td class="text-right">11</td>
                                <td class="text-right">12</td>
                                <td class="text-right">1,123</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>

                        <tbody>
                            <tr>
                                <td>2020-09-15</td>
                                <td class="text-center">매출</td>
                                <td class="text-right">5</td>
                                <td class="text-right">200,500</td>
                                <td class="text-right"></td>
                                <td>(주)청담러닝</td>
                                <td>123456789</td>
                                <td>[연동]쇼핑몰</td>
                            </tr>
                            <tr>
                                <td>2020-09-15</td>
                                <td class="text-center">매장판매</td>
                                <td class="text-right">5</td>
                                <td class="text-right">200,500</td>
                                <td class="text-right"></td>
                                <td>(주)청담러닝</td>
                                <td>123456789</td>
                                <td>[연동]쇼핑몰</td>
                            </tr>

                            <!---- 총합    -->
                            <tr class="table-active sum_month">
                                <th class="text-center">[월계]</th>
                                <td></td>
                                <td class="text-right">11</td>
                                <td class="text-right">12</td>
                                <td class="text-right">1,123</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr class="table-active sum_month">
                                <th class="text-center">[누계]</th>
                                <td></td>
                                <td class="text-right">11</td>
                                <td class="text-right">12</td>
                                <td class="text-right">1,123</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
            <!-- 리스트영역 끝 -->
        </div>
    </div>
  </div>
</template>

<script>
import pageHeader from '@/mixin/pageHeader'
import dateSelect from '@/mixin/dateSelect'
import ItemSelectSinglePopup from '@/components/popup/common/ItemSelectSinglePopup'
import StockItemsPrintPopup from '@/components/popup/print/StockItemsPrintPopup.vue'

export default {
  mixins: [
    pageHeader({title: '품목별 상세재고', groupName: '물류관리'}),
    dateSelect
  ],
  components: {
    ItemSelectSinglePopup,
    StockItemsPrintPopup
  },
  data () {
    return {
      modalOpenFlag: false
    }
  },
  methods: {
    // 모달팝업 open
    openModalPopup (id) {
      switch (id) {
        case 'itemSelectSingle': // 품목단일 선택
          this.modalPopupId = 'itemSelectSingle'
          break
        case 'stockItemPrint': // 품목별 상세재고 인쇄
          this.modalPopupId = 'stockItemPrint'
          break
      }
      this.modalOpenFlag = true
    },
    // 모달창 close
    closeModalPopup () {
      this.modalPopupId = ''
      this.modalOpenFlag = false
    }
  }
}
</script>

<style>

</style>
