<template>
   <transition name="modal" appear>
        <div id="preViewModal" class="modal-mask modal">
             <div class="modal-wrapper">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">미리보기</h4>
                        <button type="button" class="close" @click="$emit('close')">
                            <span aria-hidden="true">×</span>
                            <span class="sr-only">close</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div v-html="previewContent"></div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" @click="$emit('close')">닫기</button>
                    </div>
                </div>
            </div>
             </div>
        </div>
    </transition>
</template>

<script>
export default {
  props: {
    modalParamObj: {
      type: String,
      require: false,
      default: '내용이 없습니다.'
    }
  },
  data () {
    return {
      previewContent: this.modalParamObj
    }
  }

}
</script>

<style>

</style>
