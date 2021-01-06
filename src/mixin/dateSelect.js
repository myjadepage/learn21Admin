import DateSelect from '@/components/parts/DateSelect'

let dateSelect = {
  components: {
    DateSelect
  },
  data: function () {
    return {
      state: {
        startdate: '',
        enddate: ''
      }
    }
  },
  computed: {
    pfromDate () {
      return this.$moment(new Date()).format('YYYY-MM-DD')
    },
    ptoDate () {
      return this.$moment(new Date()).format('YYYY-MM-DD')
    }
  },
  methods: {
    startDate (date) {
      this.state.startdate = date
    },
    endDate (date) {
      this.state.enddate = date
    }
  }
}

export default dateSelect
