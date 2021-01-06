<template>
    <transition name="modal" appear>
        <div id="itemExcelExportModal" class="modal-mask modal">
             <div class="modal-wrapper">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">{{ title }}</h4>
                        <button type="button" class="close" @click="$emit('close')">
                            <span aria-hidden="true">×</span>
                            <span class="sr-only">close</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="widget  has-shadow">
                            <div class="widget-header bordered">
                                <table class="table table-bordered totla-info" summary="품목일괄등록 관리">
                                    <colgroup>
                                        <col width="20%">
                                        <col width=*>
                                        <col width="10%">
                                    </colgroup>
                                    <tbody>
                                        <tr>
                                            <th>피일선택</th>
                                            <td colspan="2">
                                                <div class="filebox">
                                                    <input type="file" id="excelUpload"  @change="readFile" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet">
                                                    <input class="upload-name" v-model="fileName">
                                                    <label for="excelUpload" class="btn btn-outline-primary">파일찾기</label>
                                                    <button type="button" class="btn btn-primary">파일등록</button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p class="text-info "><i class="la la-star"></i>품목 일괄 등록 양식 파일을 다운로드 받아 작성 후 첨부하여 등록 하시기 바랍니다.</p>
                            </div>

                            <div class="widget-body">
                                <h5><i class="la la-search"></i>등록결과</h5>
                                <table class="table table-bordered" summary="품목일괄등록 결과">
                                    <colgroup>
                                        <col width="33%">
                                        <col width=*>
                                        <col width="33%">
                                    </colgroup>
                                    <thead>
                                        <th>품목건수</th>
                                        <th>정상등록</th>
                                        <th>실패건수</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="text-center">{{ result.items }}</td>
                                            <td class="text-center">{{ result.success }}</td>
                                            <td class="text-center">{{ result.failure }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div class="widget-footer">
                                <div class="row">
                                    <div class="col-sm-12 d-flex align-items-center justify-content-end">
                                        <button type="button" class="btn btn-outline-primary">품목 일괄 등록 양식 파일 다운로드</button>
                                    </div>
                                </div>
                            </div>
                        </div>
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
import XLSX from 'xlsx'

export default {
  name: 'itemsExcelAllPopup',
  props: {
    title: {
      type: String,
      require: false
    }
  },
  data () {
    return {
      file: '',
      fileName: '',
      result: {
        items: '0',
        success: '0',
        failure: '0'
      },
      excelResult: {}
    }
  },
  methods: {
    readFile (event) {
      this.file = event.target.files[0]
      this.fileName = this.file.name
      const reader = new FileReader()
      let tmpResult = {}
      reader.onload = (e) => {
        let data = e.target.result
        data = new Uint8Array(data)
        let excelFile = XLSX.read(data, { type: 'array' })
        excelFile.SheetNames.forEach(function (sheetName) {
          const roa = XLSX.utils.sheet_to_json(excelFile.Sheets[sheetName], { header: 1 })
          if (roa.length) tmpResult[sheetName] = roa
        })
        console.log('엑셀파일내용', tmpResult)
        this.excelResult = tmpResult
        this.result.items = tmpResult.Sheet.length
        this.result.success = this.result.items - this.result.failure
      }
      reader.readAsArrayBuffer(this.file)
    }
    // onFileChange (e) {
    //   this.file = e.currentTarget.files[0]
    //   this.fileName = e.currentTarget.files[0].name
    // }
  }
}
</script>

<style>

</style>
