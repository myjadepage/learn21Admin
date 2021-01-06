import axios from 'axios'

// 품목분류 코드 조회 (대/중소)
export function findCategoryCode () {
  return axios.get(`${process.env.BASE_URL}/basic/item/category/find`)
    .then(res => res.data)
    .catch(err => console.error(err))
}

// 브랜드 조회
export function findBrand () {
  return axios.get(`${process.env.BASE_URL}/utility/brand/find`)
    .then(res => res.data)
    .catch(err => console.error(err))
}

// 공급처 조회
export function findProvider () {
  return axios.get(`${process.env.BASE_URL}/utility/provider/find`)
    .then(res => res.data)
    .catch(err => console.error(err))
}

// 품목관리목록 조회
export function findItemList (paramObj) {
  return axios.post(`${process.env.BASE_URL}/basic/item/find`, paramObj)
    .then(res => res.data)
    .catch(err => console.error(err))
}
// 품목관리상세 조회
export function findItemDetail (paramObj) {
  return axios.get(`${process.env.BASE_URL}/basic/item/find/` + paramObj)
    .then(res => res.data)
    .catch(err => console.error(err))
}
// 품목 저장
export function saveItem (paramObj) {
  return axios.post(`${process.env.BASE_URL}/basic/item/save`, paramObj)
    .then(res => res.data)
    .catch(err => console.error(err))
}
