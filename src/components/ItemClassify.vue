<template>
   <div class="col-sm-4">
       <div class="widget item-classify">
           <div class="widget-body no-padding scroll-area">
               <table id="table" class="table no-margin" summary="코드상세 대분류">
                   <thead>
                       <tr>
                           <th>{{ bigText }}</th>
                       </tr>
                   </thead>
                   <tbody>
                       <tr v-if="cgroup.length == 0">
                           <td class="default-state-table">
                               중분류를 먼저 선택해 주세요
                           </td>
                       </tr>
                       <tr v-for="(item, index) in cgroup" :key="index"
                       :class="{'table-secondary':selected.includes(item.cdCode)}" @click="cgSelect(item.cdCode)"
                       draggable="true" @dragover.prevent @dragenter.prevent @dragleav.prevent @dragend.prevent
                       @dragstart='dragStart($event, index)' @drop="dragFinish($event, index)">
                           <td>
                               <div class="row">
                                   <div class="col-sm-8">
                                       <span class="form-control text-left">{{ item.cdName }}</span>
                                   </div>
                                   <div class="col-sm-4 d-flex justify-content-end">
                                       <button type="button" class="btn btn-sm btn-secondary"><i class="la la-arrows-alt"></i></button>
                                       <button type="button" class="btn btn-sm btn-secondary" @click="deleteItem"><i class="la la-times"></i></button>
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
                       <input type="text" class="form-control" :placeholder="bigText" v-model="itemName">
                   </div>
                   <div class="col-sm-4 d-flex justify-content-end">
                       <button type="button" class="btn btn-block btn-sm btn-outline-primary" @click="addItem">추가</button>
                   </div>
               </div>
           </div>
       </div>
   </div>
</template>

<script>
export default {
  name: 'itemClassify',
  props: {
    bigText: {
      type: String,
      required: true
    },
    codegroup: {
      type: Array,
      required: true
    }
  },
  data: function () {
    return {
      selected: [],
      itemName: ''
    }
  },
  computed: {
    cgroup: function () {
      return this.codegroup
    }
  },
  methods: {
    cgSelect (cdCode) {
      this.selected.splice(0)
      if (this.selected.includes(cdCode)) {
        this.selected = this.selected.filter(item => item !== cdCode)
      } else {
        this.selected.push(cdCode)
      }
    },
    dragStart (e, which) {
      e.dataTransfer.setData('Text', this.id)
      e.dataTransfer.dropAllowed = 'move'
      e.dataTransfer.dropEffect = 'move'
      this.dragging = which
    },
    dragFinish (e, to) {
      this.moveItem(this.dragging, to)
      e.target.style.marginTop = '2px'
      e.target.style.marginBottom = '2px'
    },
    moveItem (from, to) {
      this.cgroup.splice(to, 0, this.cgroup.splice(from, 1)[0])
    },
    addItem () {
      this.cgroup.push(this.itemName)
    },
    deleteItem () {
      console.log('삭제')
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
