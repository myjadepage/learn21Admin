import axios from 'axios'

// 품목분류 코드 조회 (대/중소)
export function findCategoryCode () {
  return axios.get(`${process.env.BASE_URL}/basic/item/category/find`)
    .then(res => res.data)
    .catch(err => console.error(err))
}

// 품목분류 코드 저장
export function saveItemCategoryList (params) {
  return axios.post(`${process.env.BASE_URL}/basic/item/category/save`, params)
    .then(res => res.data)
    .catch(err => console.error(err))
}
