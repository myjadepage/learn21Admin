import axios from 'axios'

// 주문관리
export function findOrderList (param) {
  return axios.post(`${process.env.BASE_URL}/order/find`, param)
    .then(res => res.data)
    .catch(err => console.error(err))
}

// 주문서 summary
export function findOrderSummary (param) {
  return axios.post(`${process.env.BASE_URL}/order/find/summary`, param)
    .then(res => res.data)
    .catch(err => console.error(err))
}

// 가맹점(학원) 목록 조회
export function findFranchiseeList (param) {
  return axios.get(`${process.env.BASE_URL}/basic/franchisee/find/franchisee?fuState=1`)
    .then(res => res.data)
    .catch(err => console.error(err))
}

// 주문서 기본정보 조회
export function findOrderDetail (param) {
  return axios.get(`${process.env.BASE_URL}/order/find/orderDetail?orderNo=` + param)
    .then(res => res.data)
    .catch(err => console.error(err))
}

// 배송정보 조회
export function findOrderDeliveryDetail (param) {
  return axios.get(`${process.env.BASE_URL}/order/find/deliveryDetail?orderNo=` + param)
    .then(res => res.data)
    .catch(err => console.error(err))
}

// 주문예외정보 조회
export function findOrderExceptionDetail (param) {
  return axios.get(`${process.env.BASE_URL}/order/find/exceptionDetail/${param}`)
    .then(res => res.data)
    .catch(err => console.error(err))
}

// 주문배송지 주소 저장
export function saveAddrDelivery (param) {
  return axios.post(`${process.env.BASE_URL}/order/save/addrDelivery`, param)
    .then(res => res.data)
    .catch(err => console.error(err))
}

// 주문서별 상담정보 조회
export function findOrderCounselList (param) {
  return axios.get(`${process.env.BASE_URL}/order/find/counsel?orderNo=` + param)
    .then(res => res.data)
    .catch(err => console.error(err))
}

// admin user 조회 - 상담처리자 목록
export function findUserList () {
  return axios.get(`${process.env.BASE_URL}/common/user/find/all?pworkStatus=정상`)
    .then(res => res.data)
    .catch(err => console.error(err))
}

// 주문서별 상담정보 저장
export function saveOrderCounsel (param) {
  return axios.post(`${process.env.BASE_URL}/order/save/counsel`, param)
    .then(res => res.data)
    .catch(err => console.error(err))
}
