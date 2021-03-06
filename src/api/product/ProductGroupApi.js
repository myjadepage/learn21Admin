import axios from 'axios'

// 상품분류 메인그리드 조회
export function findCategoryCodeMainList (params) {
  return axios.post(`${process.env.BASE_URL}/product/category/find`, params)
    .then(res => res.data)
    .catch(err => console.error(err))
}

// 상품관리 대/중/소 코드 조회 (대:1, 중/소: parent코드)
export function findCategoryCodeList (params) {
  return axios.get(`${process.env.BASE_URL}/product/category/find/code`, params)
    .then(res => res.data)
    .catch(err => console.error(err))
}

// 상품분류별 상품목록 조회
export function findCategoryByProductList (params) {
  return axios.get(`${process.env.BASE_URL}/product/category/find/` + params)
    .then(res => res.data)
    .catch(err => console.error(err))
}

// 상품분류 상세 조회
export function findProductCategoryDetail (params) {
  return axios.get(`${process.env.BASE_URL}/product/category/find/detail/` + params)
    .then(res => res.data)
    .catch(err => console.error(err))
}

// 상품분류코드 저장/삭제
export function saveCategoryCodeList (params) {
  return axios.post(`${process.env.BASE_URL}/product/category/save`, params)
    .then(res => res.data)
    .catch(err => console.error(err))
}
