<template>
  <div class="input-group">
    <datepicker :value="getStartdate" @selected="selectStartDate($event)" :format="dateFormat" :language="ko" placeholder="날짜선택" input-class="form-control"></datepicker>
    <span class="input-group-addon"><i class="la la-calendar"></i></span>
    <span class="input-group-addon">~</span>
    <datepicker :value="getEnddate" @selected="selectEndtDate($event)" :format="dateFormat" :language="ko" placeholder="날짜선택" input-class="form-control"></datepicker>
    <span class="input-group-addon"><i class="la la-calendar"></i></span>
  </div>
</template>

<script>
import datepicker from 'vuejs-datepicker'
import { ko } from 'vuejs-datepicker/dist/locale'
export default {
  name: 'dateSelect',
  components: {
    datepicker
  },
  props: {
    defStartDate: {
      type: String,
      default: ''
    },
    defEndDate: {
      type: String,
      default: ''
    }
  },
  data: function () {
    return {
      startdate: new Date(),
      enddate: new Date(),
      ko: ko
    }
  },
  computed: {
    getStartdate: function () { return this.defStartDate === '' ? this.startdate : this.defStartDate },
    getEnddate: function () { return this.defEndDate === '' ? this.enddate : this.defEndDate }
  },
  methods: {
    dateFormat (date) {
      return this.$moment(date).format('YYYY-MM-DD')
    },
    selectStartDate (e) {
      let tempDate = this.dateFormat(e)
      this.$emit('state-start-date', tempDate)
    },
    selectEndtDate (e) {
      let tempDate = this.dateFormat(e)
      this.$emit('state-end-date', tempDate)
    }
  }
}
</script>

<style scoped>
.vdp-datepicker {
    width: 100px;
}
</style>
