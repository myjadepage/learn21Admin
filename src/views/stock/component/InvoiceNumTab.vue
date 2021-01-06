<template>
  <div class="tab-pane show active">
                    <div class="col-sm-5 d-flex justify-content-end tab-right-menu">
                        <file-upload id="file1" @file1="clickFile1" title="엑셀올리기" style="margin-top:-5px"></file-upload>
                        <button type="button" class="btn btn-outline-danger margin-left-5" style="height:40px">송장번호 올리기</button>
                    </div>

                    <!-- 리스트영역 시작 -->
                    <div class="widget">
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
                                <div class="col-sm-6 d-flex align-items-center justify-content-md-end justify-content-center">
                                    <button class="btn btn-primary"  @click="openModalPopup('shipOrderPrint')">출고지시서</button>
                                    <button class="btn btn-primary"  @click="openModalPopup('itemOrderPrint')">품목별집품</button>
                                    <button class="btn btn-primary"  @click="openModalPopup('buyItemPrint')">출고처리</button>
                                    <button class="btn btn-dark">저장</button>
                                </div>
                                <!--출고지시서-->
                                <ship-order-print v-if="modalOpenFlag && modalPopupId === 'shipOrderPrint'" @close="closeModalPopup"></ship-order-print>
                                <!--품목별집품-->
                                <item-order-print v-if="modalOpenFlag && modalPopupId === 'itemOrderPrint'" @close="closeModalPopup"></item-order-print>
                                <!--출고처리-->
                            </div>
                        </div>
                        <div class="widget-body">
                            <table id="invoice-all-table" class="table table-bordered" summary="송장번호일괄처리 리스트">
                                <colgroup>
                                    <col width="5%">
                                    <col width="7%">
                                    <col width="7%">
                                    <col width="10%">
                                    <col width="10%">
                                    <col width="10%">
                                    <col width=*>
                                    <col width="7%">
                                    <col width="7%">
                                    <col width="7%">
                                    <col width="10%">
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>
                                            <div class="styled-checkbox  margin-bottom-5">
                                                <input type="checkbox" name="checkbox" id="chkStock">
                                                <label for="chkStock"></label>
                                            </div>
                                        </th>
                                        <th>출고 요청일</th>
                                        <th>그룹</th>
                                        <th>업체명(주문자)</th>
                                        <th>주문번호</th>
                                        <th>송장번호</th>
                                        <th>품목</th>
                                        <th>발주품목수</th>
                                        <th>금액</th>
                                        <th>수취인</th>
                                        <th>수취인전화</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div class="styled-checkbox  margin-bottom-5">
                                                <input type="checkbox" name="checkbox" id="chkStock">
                                                <label for="chkStock"></label>
                                            </div>
                                        </td>
                                        <td>2020-09-01</td>
                                        <td>그룹먕</td>
                                        <td>가맹점명</td>
                                        <td>202012345678</td>
                                        <td>202012345678</td>
                                        <td class="text-left">PB TOEFL JUNIOR SET (1)</td>
                                        <td class="text-right">20</td>
                                        <td class="text-right">1,200</td>
                                        <td>홍길동</td>
                                        <td>010-1123-1452</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                    <!-- 상세재고 리스트영역 끝 -->
                </div>
</template>

<script>
import FileUpload from '@/components/parts/FileUpload.vue'
import ShipOrderPrint from '@/components/popup/print/ShipOrderPrint.vue'
import ItemOrderPrint from '@/components/popup/print/ItemOrderPrint.vue'

export default {
  components: {
    FileUpload,
    ShipOrderPrint,
    ItemOrderPrint
  },
  data: function () {
    return {
      file1: '',
      modalOpenFlag: false
    }
  },
  methods: {
    clickFile1 (e) {
      this.file1 = e
    },
    // 모달팝업 open
    openModalPopup (id) {
      switch (id) {
        case 'shipOrderPrint': // 출고지시서
          this.modalPopupId = 'shipOrderPrint'
          break
        case 'itemOrderPrint': // 품목별집품
          this.modalPopupId = 'itemOrderPrint'
          break
        case 'buyItemPrint': // 품목별 매입 인쇄
          this.modalPopupId = 'buyItemPrint'
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
