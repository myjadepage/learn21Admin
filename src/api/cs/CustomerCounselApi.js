import axios from 'axios'

// 고객상담 리스트
export function customCounsel (param) {
  return axios.get(`${process.env.BASE_URL}/counsel/customer/find/all`, {
    params: {
      pwriterType: param.pwriterType,
      pwriterKeyword: param.pwriterKeyword,
      preceiveName: param.preceiveName,
      pchargeName: param.pchargeName,
      porderNo: param.porderNo,
      pcounselType: param.pcounselType,
      pchildCounselType: param.pchildCounselType,
      psearchStartDate: param.psearchStartDate,
      psearchEndDate: param.psearchEndDate,
      pcounselStatus: param.pcounselStatus
    }
  })
}
// 고객상담상세
export function customCounselDetail (param) {
  return axios.get(`${process.env.BASE_URL}/counsel/customer/view`, {
    params: {
      porderNo: param.porderNo,
      pcounselNo: param.pcounselNo
    }
  })
}
// 고객상담상세
export function SaveCustomCounselDetail (param) {
  console.log(param)
  return axios.post(`${process.env.BASE_URL}/counsel/customer/save`, param)
}
