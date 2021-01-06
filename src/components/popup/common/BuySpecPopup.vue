<template>
      <div id="purchasedSpecModal" class="modal-mask">
        <div class="modal-dialog modal-item">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">매입 명세서</h4>
                    <button type="button" class="close"  @click="$emit('close')">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">close</span>
                    </button>
                </div>
                <div class="modal-body">
                    <item-info-spec />
                    <item-add-spec />
                </div>
                <div class="modal-footer" style="justify-content: center">
                    <div class="row col">
                        <div class="col-sm-6">
                            <button type="button" class="btn btn-outline-primary">신규전표</button>
                            <button type="button" class="btn btn-outline-primary">전표복사</button>
                        </div>
                        <div class="col-sm-6 d-flex justify-content-end">
                            <button type="button" class="btn btn-primary margin-right-5">저장</button>
                            <button type="button" class="btn btn-info margin-right-5"  @click="openModalPopup('buySpecPrint')">인쇄</button>
                            <button type="button" class="btn btn-secondary" @click="$emit('close')">닫기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <buy-spec-print-popup v-if="modalOpenFlag && modalPopupId === 'buySpecPrint'" @close="closeModalPopup"></buy-spec-print-popup>
    </div>
</template>

<script>

import BuySpecPrintPopup from '../print/BuySpecPrintPopup.vue'
import ItemInfoSpec from '../../buy/ItemInfoSpec.vue'
import ItemAddSpec from '../../buy/ItemAddSpec.vue'

export default {
  components: { BuySpecPrintPopup, ItemAddSpec, ItemInfoSpec },
  data () {
    return {
      modalPopupId: '',
      modalOpenFlag: false
    }
  },
  methods: {
    openModalPopup (id) {
      switch (id) {
        case 'buySpecPrint': // 매입명세서 인쇄
          this.modalPopupId = 'buySpecPrint'
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
