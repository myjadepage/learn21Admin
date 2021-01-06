<template>
    <transition name="modal" appear>
        <div id="postCodeModal" class="modal-mask modal">
            <div class="modal-wrapper">
                <div class="modal-dialog ">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">{{ title }}</h4>
                            <button type="button" class="close" @click="$emit('close')">
                                <span aria-hidden="true">×</span>
                                <span class="sr-only">close</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <vue-daum-postcode @complete="getPostCode($event)" style="height:760px;" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import { VueDaumPostcode } from 'vue-daum-postcode'

export default {
  name: 'postCodePopup',
  components: {
    VueDaumPostcode
  },
  props: {
    title: {
      type: String,
      require: false
    }
  },
  data () {
    return {
    }
  },
  methods: {
    getPostCode (res) {
      this.$emit('get-post-info', res)
      this.$emit('close')
    }
  }
}
</script>

<style>

</style>
