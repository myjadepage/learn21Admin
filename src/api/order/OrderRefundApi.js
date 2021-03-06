import axios from 'axios'

// 환불관리 조회
export function findOrderRefundList (param) {
  return axios.post(`${process.env.BASE_URL}/order/refund/find`, param)
    .then(res => res.data)
    .catch(err => console.error(err))
}

// 환불관리 Summary조회
export function findOrderRefundSummary (param) {
  return axios.post(`${process.env.BASE_URL}/order/refund/find/summary`, param)
    .then(res => res.data)
    .catch(err => console.error(err))
}

// 환불관리 Detail조회
export function findOrderRefundDetail (param) {
  return axios.get(`${process.env.BASE_URL}/order/refund/find/detail/${param}`)
    .then(res => res.data)
    .catch(err => console.error(err))
}
