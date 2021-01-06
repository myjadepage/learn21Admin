let popup = ({
  data () {
    return {
      modal: false,
      modalOpenFlag: false,
      modalPopupId: ''
    }
  },
  methods: {
    closeModal () {
      this.modal = false
    },
    closeModalPopup () {
      this.modalPopupId = ''
      this.modalOpenFlag = false
      document.body.classList.remove('modal-open')
    },
    openModalPopup (o, id) {
      switch (id) {
        case 'vendorList':// 거래처검색 팝업
          this.modalPopupId = 'vendorList'
          break
        case 'buyInvoice':// 구매발주서 팝업
          this.modalPopupId = 'buyInvoice'
          break
        case 'buyInvoicePrint':// 구매발주서 인쇄
          this.modalPopupId = 'buyInvoicePrint'
          break
      }
      this.modalOpenFlag = true
      document.body.classList.add('modal-open')
    }
  }
})

export default popup
