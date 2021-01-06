<template>
  <div id="stockManageInputModal" class="modal-mask">
    <div class="modal-dialog modal-item">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">재고자산 조정</h4>
                <button type="button" class="close" @click="$emit('close')">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">close</span>
                    </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-sm-12">

                        <div class="widget no-margin">
                            <div class="widget-body no-padding">
                                <table class="table table-bordered" summary="재고자산조정">
                                    <colgroup>
                                        <col width="5%">
                                        <col width="7%">
                                        <col width="20%">
                                        <col width="7%">
                                        <col width="20%">
                                        <col width="7%">
                                        <col width=*>
                                        <col width="7%">
                                        <col width="20%">
                                    </colgroup>
                                    <tbody>
                                        <tr>
                                            <th rowspan="3" class="bg-primary">확정</th>
                                            <th scope="row"><span class="text-primary">전표일자</span></th>
                                            <td>
                                                <div class="row">
                                                    <div class="col col-sm-10">
                                                        <datepicker :value="state.startdate" :format="getFormatDate" :language="ko" placeholder="날짜선택" input-class="form-control"></datepicker>
                                                    </div>
                                                    <div class="input-group col col-sm-2">
                                                        <span class="input-group-addon"><i class="la la-calendar"></i></span>
                                                    </div>
                                                </div>
                                            </td>
                                            <th scope="row"><span class="text-primary">처리유형</span></th>
                                            <td colspan="3">
                                                <div class="row">
                                                    <div class="col-sm-12 d-flex align-items-center">
                                                        <div class="styled-radio">
                                                            <input type="radio" name="radio" id="radStockPlus">
                                                            <label for="radStockPlus">증가(+)</label>
                                                        </div>
                                                        <div class="styled-radio">
                                                            <input type="radio" name="radio" id="radStockMinus">
                                                            <label for="radStockMinus">감소(-)</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><span class="text-primary">담당자</span></th>
                                            <td>

                                                <select class="form-control">
                                                            <option>선택</option>
                                                            <option>홍길동</option>
                                                            <option>Relish</option>
                                                        </select>

                                            </td>
                                            <th scope="row"><span class="text-primary">계정과목</span></th>
                                            <td colspan="3">
                                                <div class="row">
                                                    <div class="col-sm-6">
                                                        <select class="form-control">
                                                            <option>40409990 잡 이 익[잡이익]</option>
                                                            <option>홍길동</option>
                                                            <option>Relish</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><span class="text-primary">메모</span></th>
                                            <td colspan="3">
                                                <input type="text" class="form-control" placeholder="7.17일 주문서">
                                            </td>
                                            <th scope="row"><span class="text-primary">합계금액</span></th>
                                            <td class="text-right"><b class="text-info">15,200</b></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- 리스트 -->
                        <div class="widget">
                            <div class="widget-body no-padding">
                                <table id="spec-table" class="table table-bordered" summary="품목명 리스트">
                                    <colgroup>
                                        <col width="5%">
                                        <col width=*>
                                        <col width="7%">
                                        <col width="7%">
                                        <col width="7%">
                                        <col width="7%">
                                        <col width="7%">
                                        <col width="25%">
                                        <col width="5%">
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th>NO</th>
                                            <th>품목명</th>
                                            <th>전산재고</th>
                                            <th>조사량</th>
                                            <th>조정량</th>
                                            <th>단가</th>
                                            <th>합계금액</th>
                                            <th>비고</th>
                                            <th>삭제</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>
                                                <div class="input-group">
                                                    <input type="text" class="form-control" value="[ITEM ID] 품목명01">
                                                   <button type="button" class="btn btn-sm btn-secondary" @click="openModalPopup('itemSelectSingle')"><i class="la la-search"></i></button>
                                                   <item-select-single-popup v-if="modalOpenFlag && modalPopupId === 'itemSelectSingle'" @close="closeModalPopup"></item-select-single-popup>
                                            </div>
                                            </td>
                                            <td>1200</td>
                                            <td>1200</td>
                                            <td>
                                               <input type="number" class="form-control" placeholder="" v-model.number="num">
                                            </td>
                                            <td>1200</td>
                                            <td>1200</td>
                                            <td>
                                                <input type="text" class="form-control" value="비고 내용 표기">
                                            </td>
                                            <td>
                                                <button class="btn btn-sm btn-outline-danger">-</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="widget-footer">
                                <div class="d-flex align-items-stretch justify-content-between">
                                    <button class="btn btn-sm btn-outline-primary" @click="openModalPopup('itemSelect')">품목선택</button>
                                    <item-select-popup title="품목선택" v-if="modalOpenFlag && modalPopupId === 'itemSelect'" @close="closeModalPopup"></item-select-popup>
                                    <button class="btn btn-sm btn-primary">항목 추가</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="modal-footer" style="justify-content: center;">
                <div class="row col">
                    <div class="col-sm-6">
                        <button type="button" class="btn btn-outline-primary" @click="$emit('close')">닫기</button>
                        <button type="button" class="btn btn-outline-primary">신규전표</button>
                    </div>
                    <div class="col-sm-6 d-flex justify-content-end">
                        <button type="button" class="btn btn-primary margin-right-5">확정취소</button>
                        <button type="button" class="btn btn-info margin-right-5"  @click="openModalPopup('stockManagePrint')">인쇄</button>
                        <button type="button" class="btn btn-secondary">저장</button>
                    </div>
                    <stock-manage-print-popup v-if="modalOpenFlag && modalPopupId === 'stockManagePrint'" @close="closeModalPopup"></stock-manage-print-popup>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import datepicker from 'vuejs-datepicker'
import { ko } from 'vuejs-datepicker/dist/locale'
import ItemSelectSinglePopup from '@/components/popup/common/ItemSelectSinglePopup'
import ItemSelectPopup from './common/ItemSelectPopup.vue'
import StockManagePrintPopup from './print/StockManagePrintPopup.vue'

export default {
  components: { datepicker, ItemSelectSinglePopup, ItemSelectPopup, StockManagePrintPopup },
  data () {
    return {
      state: {
        startdate: new Date()
      },
      ko: ko,
      modalOpenFlag: false,
      num: 0
    }
  },
  methods: {
    getFormatDate (date) {
      return this.$moment(date).format('YYYY-MM-DD')
    },
    // 모달팝업 open
    openModalPopup (id) {
      switch (id) {
        case 'itemSelectSingle': // 품목단일 선택
          this.modalPopupId = 'itemSelectSingle'
          break
        case 'itemSelect': // 품목 선택
          this.modalPopupId = 'itemSelect'
          break
        case 'stockManagePrint': // 재고자산조정 인쇄
          this.modalPopupId = 'stockManagePrint'
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
