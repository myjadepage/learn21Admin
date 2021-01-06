<template>
   <vue-editor id="id"  v-model="content" :editorToolbar="customToolbar"
   @selection-change="onSelectionChange"></vue-editor>
</template>

<script>
import { VueEditor } from 'vue2-editor'
export default {
  components: {
    VueEditor
  },
  props: ['id', 'value'],
  data () {
    return {
      oldCon: '',
      customToolbar: [
        [{ header: [false, 1, 2, 3, 4, 5, 6] }],
        ['bold', 'italic', 'underline', 'strike'], // toggled buttons
        [
          { align: '' },
          { align: 'center' },
          { align: 'right' },
          { align: 'justify' }
        ],
        ['blockquote', 'code-block'],
        [{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],
        [{ indent: '-1' }, { indent: '+1' }],
        [{ color: [] }, { background: [] }]
      ]
    }
  },
  computed: {
    content: {
      get () {
        return this.value
      },
      set (val) {
        this.oldCon = val
      }
    }
  },
  methods: {
    onSelectionChange () {
      console.log('selection change!', this.oldCon)
      this.$emit('input', this.oldCon)
    }
  }
}
</script>

<style>
.ql-snow .ql-toolbar button svg, .quillWrapper .ql-snow.ql-toolbar button svg {
    width: 15px !important;
    height: 15px !important;
}
.quillWrapper .ql-snow.ql-toolbar .ql-formats {
    margin-bottom: 0px !important;
}
.ql-editor {
    max-height: 200px;
    overflow-y: scroll;
}

</style>
