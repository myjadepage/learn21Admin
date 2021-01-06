import PageHeader from '@/components/PageHeader'

let pageHeader = pageTitle => ({
  components: {
    PageHeader
  },
  data: function () {
    return {
      pageCurrentInfo: {
        title: pageTitle.title,
        groupName: pageTitle.groupName
      }
    }
  }
})

export default pageHeader
