import axios from 'axios'

// 코드 관리 > 코드그룹 select option
export function findCodeGroup () {
  return axios.get(`${process.env.BASE_URL}/basic/code/find/groupCode`)
    .then(res => res.data)
    .catch(err => console.error(err))
}

// 코드 관리 > 코드그룹 상세
export function findCodeGroupDetail (cgCode) {
  return axios.get(`${process.env.BASE_URL}/basic/code/find/groupCode/detail`, {
    params: {
      cgCode: cgCode
    }
  })
}

// 코드 저장
export function saveCodeDetail (param) {
  return axios.post(`${process.env.BASE_URL}/basic/code/save`, param)
    .then(res => res.data)
    .catch(err => console.error(err))
}
