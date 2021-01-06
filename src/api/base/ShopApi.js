import axios from 'axios'

// 가맹점 검색
export function getFcList (param) {
  return axios
    .get(`${process.env.BASE_URL}/basic/franchisee/find/franchisee`, {
      params: {
        pfuCode: param.pfuCode,
        pfuType: param.pfuType,
        pfranchiseeName: param.pfranchiseeName,
        pfranchiseeGroup: param.pfranchiseeGroup
      }
    })
    .then(res => res.data)
    .catch(err => console.error(err))
}

// 가맹정 수정
export function updateFc (param) {
  return axios.post(`${process.env.BASE_URL}/basic/franchisee/save`, param)
}
