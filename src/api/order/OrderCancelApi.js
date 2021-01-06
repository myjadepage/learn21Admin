import axios from 'axios'

// 주문취소/반품정보 조회
export function findOrderCancelList (param) {
  return axios.post(`${process.env.BASE_URL}/order/cancel/find`, param)
    .then(res => res.data)
    .catch(err => console.error(err))
}

// 주문취소/반품정보 Summary조회
export function findOrderCancelSummary (param) {
  return axios.post(`${process.env.BASE_URL}/order/cancel/find/summary`, param)
    .then(res => res.data)
    .catch(err => console.error(err))
}

// 주문취소/반품정보 화면의 주문취소/반품접수 정보
export function findOrderCancelDetail (param) {
  return axios.get(`${process.env.BASE_URL}/order/cancel/find/detail/info?pexceptionNo=` + param)
    .then(res => res.data)
    .catch(err => console.error(err))
}

// 주문취소/반품정보 화면의 주문취소/반품접수 정보
export function findOrderCancelDetailOrder (param) {
  return axios.get(`${process.env.BASE_URL}/order/cancel/find/detail/order?orderNo=` + param)
    .then(res => res.data)
    .catch(err => console.error(err))
}

// 주문취소/반품정보 화면의 주문취소/반품접수 정보 등록
export function saveOrderCancelDetailOrder (param) {
  return axios.post(`${process.env.BASE_URL}/order/cancel/save/detail/order`, param)
    .then(res => res.data)
    .catch(err => console.error(err))
}

// 주문취소/반품정보 화면의 접수취소
export function deleteExceptionOrderCancel (param) {
  return axios.post(`${process.env.BASE_URL}/order/cancel/delete/detail/order`, param)
    .then(res => res.data)
    .catch(err => console.error(err))
}

// 주문취소/반품정보 화면의 접수취소
export function saveRecovery (param) {
  return axios.post(`${process.env.BASE_URL}/order/cancel/save/detail/recovery`, param)
    .then(res => res.data)
    .catch(err => console.error(err))
}

// 주문취소/반품정보 관리메모 저장
export function saveRefundAdminMemo (param) {
  return axios.post(`${process.env.BASE_URL}/order/cancel/save/detail/refund/memo`, param)
    .then(res => res.data)
    .catch(err => console.error(err))
}
