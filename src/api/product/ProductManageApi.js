import axios from 'axios'

// 상품관리 화면의 메인그리드 조회
export function findProductList (paramObj) {
  return axios.post(`${process.env.BASE_URL}/product/find`, paramObj)
    .then(res => res.data)
    .catch(err => console.error(err))
}

// 상품관리 대/중/소 코드 조회 (대:1, 중/소: parent코드)
export function findCategoryCodeList (params) {
  return axios.get(`${process.env.BASE_URL}/product/category/find/code`, params)
    .then(res => res.data)
    .catch(err => console.error(err))
}

// 공급처 조회
export function findProvider () {
  return axios.get(`${process.env.BASE_URL}/utility/provider/find`)
    .then(res => res.data)
    .catch(err => console.error(err))
}

// 상품관리 화면의 Detail 조회
export function findProductDetail (paramObj) {
  return axios.get(`${process.env.BASE_URL}/product/find/` + paramObj)
    .then(res => res.data)
    .catch(err => console.error(err))
}

// 상품관리 화면의 Detail 저장
export function saveProductByItem (paramObj) {
  return axios.post(`${process.env.BASE_URL}/product/save`, paramObj)
    .then(res => res.data)
    .catch(err => console.error(err))
}

// 상품관리 화면의 상품정보 일괄변경
export function saveBatch (paramObj) {
  return axios.post(`${process.env.BASE_URL}/product/save/batch`, paramObj)
    .then(res => res.data)
    .catch(err => console.error(err))
}
