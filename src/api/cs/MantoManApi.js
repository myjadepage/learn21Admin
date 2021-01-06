import axios from 'axios'

// 1:1상담 리스트
export function getManToManList (params) {
  return axios.get(`${process.env.BASE_URL}/counsel/manToMan/find/all`, {
    params: {
      pwriterType: params.pwriterType,
      pwriterKeyword: params.pwriterKeyword,
      pchargType: params.pchargType,
      pchargKeyword: params.pchargKeyword,
      pcounselCategory: params.pcounselCategory,
      pcounselType: params.pcounselType,
      pchildCounselType: params.pchildCounselType,
      psearchStartDate: params.psearchStartDate,
      psearchEndDate: params.psearchEndDate,
      pcounselStatus: params.pcounselStatus
    }
  })
}

// 1:1상담 상세보기
export function getManToManDetail (params) {
  return axios.get(`${process.env.BASE_URL}/counsel/manToMan/view`, {
    params: {
      pcounselNo: params.pcounselNo,
      pordererId: params.pordererId
    }
  }).then(res => {
    return res.data
  })
    .catch(err => console.error(err))
}

// 상담유형 코드
export function getManToManCode () {
  return axios.get(`${process.env.BASE_URL}/counsel/manToMan/find/ManToManCounseCode`)
    .then(res => res.data)
    .catch(err => console.error(err))
}

// 1:1상담 답글
export function inertManToManReply (params) {
  return axios.post(`${process.env.BASE_URL}/counsel/manToMan/Reply`, params)
}
