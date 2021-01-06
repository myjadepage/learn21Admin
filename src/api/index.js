import axios from 'axios'
import * as codeApi from './base/CodeApi'
import * as itemGroupApi from './base/ItemGroupApi'
import * as itemApi from './base/ItemApi'
import * as productGroupApi from './product/ProductGroupApi'
import * as productManageApi from './product/ProductManageApi'
import * as shopApi from './base/ShopApi'
import * as vendorApi from './base/VendorApi'
import * as manToManApi from './cs/MantoManApi'
import * as customerCounselApi from './cs/CustomerCounselApi'
import * as orderApi from './order/OrderApi'
import * as orderCancelApi from './order/OrderCancelApi'
import * as orderRefundApi from './order/OrderRefundApi'
import * as salesApi from './sales/SalesApi'

export {
  codeApi,
  itemGroupApi,
  itemApi,
  productGroupApi,
  productManageApi,
  shopApi,
  vendorApi,
  orderApi,
  orderCancelApi,
  orderRefundApi,
  manToManApi,
  customerCounselApi,
  salesApi
}

// sidebar menu item
export function getMenuItemList () {
  return axios.get(`${process.env.BASE_URL}/basic/menu/find`)
}

// 파일등록
export function saveFile (param) {
  return axios.post(`${process.env.BASE_URL}/utility/file/save`, param, {
    headers: { 'Content-Type': 'multipart/form-data' }
  })
}

// ********************************************************
// #region  구매관리
// ********************************************************

// 구매발주서
export function getPurchaseList (param) {
  if (param) {
    return axios.get(`${process.env.BASE_URL}/Purchase/find/PurchaseInvoice`, {
      params: {
        pcuName: param.pcuName,
        // pdpoCode: param.pdpoCode,
        pstartDate: param.pstartDate,
        pendDate: param.pendDate,
        poState: param.poState
      }
    })
  }
  return axios.get(`${process.env.BASE_URL}/Purchase/find/PurchaseInvoice`)
}
// 구매 발주서 상세보기
export function getPurchaseDetail (param) {
  return axios.get(
    `${process.env.BASE_URL}/Purchase/find/PurchaseInvoiceDetail`,
    {
      params: {
        // pcuName: param.pcuName,
        pdpoCode: param.pdpoCode
        // pstartDate: param.pstartDate,
        // pendDate: param.pendDate,
        // poState: param.poState
      }
    }
  )
}

// 구매발주서 추가(등록)
export function inputPurchaseInvoice (params) {
  return axios.post(
    `${process.env.BASE_URL}/Purchase/save/PurchaseInvoice`,
    params
  )
}

// 매입확정1
export function getPurchaseConfirm (params) {
  if (params) {
    return axios.get(
      `${process.env.BASE_URL}/Purchase/find/PurchaseConfirm`,
      params
    )
  } else {
    return axios.get(`${process.env.BASE_URL}/Purchase/find/PurchaseConfirm`)
  }
}
// 매입확정2 입고추가하기
// export function savePurcahseAdd (params) {
//   return axios.post(
//     `${process.env.BASE_URL}/Purchase/save/PurchaseConfirm`,
//     params
//   )
// }
// 매입확정3 매입확정버튼
export function savePurcahseConfirm (params) {
  return axios.post(
    `${process.env.BASE_URL}/Purchase/Confirm/PurchaseConfirm`,
    params
  )
}

// 거래처별 매입 조회
export function getPurchaseAccount () {
  return axios.get(
    `${process.env.BASE_URL}/Purchase/find/PurchaseLookupAccount`
  )
}

// 품목별 매입조회
export function getPurchaseItem () {
  return axios.get(`${process.env.BASE_URL}/Purchase/find/PurchaseLookupItem`)
}

// 기간별 매입조회
export function getPurchasePeriod () {
  return axios.get(`${process.env.BASE_URL}/Purchase/find/PurchaseLookupPeriod`)
}

// 매입명세서
export function getPurchaseStatement () {
  return axios.get(`${process.env.BASE_URL}/Purchase/find/PurchaseStatement`)
}

// 매입처원장
export function getPurchaseLedger () {
  return axios.get(`${process.env.BASE_URL}/Purchase/find/PurchaseLedger`)
}

// 미입고현황
export function getPurchaseNot () {
  return axios.get(
    `${process.env.BASE_URL}/Purchase/find/PurchaseNotReceivedStatus`
  )
}

// ********************************************************
// #region 운영관리
// ********************************************************

// 공지관리
export function getNoticeList (param) {
  if (param == null) {
    return axios.get(`${process.env.BASE_URL}/operation/notice/find/list`)
  } else {
    return axios.get(`${process.env.BASE_URL}/operation/notice/find/list`, {
      params: {
        psearchStartDate: param.searchStartDate,
        psearchEndDate: param.searchEndDate,
        psearchType: param.searchType,
        psearchKeyword: param.searchKeyword,
        pnoticeNo: param.pnoticeNo
      }
    })
  }
}

// 공지등록
export function inputNotice (param) {
  return axios.post(`${process.env.BASE_URL}/operation/notice/save`, param, {
    headers: { 'Content-Type': 'multipart/form-data' }
  })
}

// faq
export function getFaqList (param) {
  if (param == null) {
    return axios.get(`${process.env.BASE_URL}/operation/faq/find/list`)
  } else {
    return axios.get(`${process.env.BASE_URL}/operation/faq/find/list`, {
      params: {
        psearchStartDate: param.searchStartDate,
        psearchEndDate: param.searchEndDate,
        psearchType: param.searchType,
        psearchKeyword: param.searchKeyword,
        pfaqNo: param.pfaqNo
      }
    })
  }
}

// faq등록
export function inputFaq (param) {
  return axios.post(`${process.env.BASE_URL}/operation/faq/save`, param)
}

/*************************
 ******* 상담관리**********
 ***************************/
// 고객상담관리
export function customCounsel (param) {
  return axios.get(`${process.env.BASE_URL}/counsel/customer/find/all`, {
    params: {}
  })
}
// 고객상담상세
export function customCounselDetail (param) {
  return axios.get(`${process.env.BASE_URL}/counsel/customer/view`, {
    params: {
      porderNo: param.porderNo,
      pcounselNo: param.pcounselNo
    }
  })
}

// #endregion
// ********************************************************

// ********************************************************
// #region 공통
// ********************************************************

// 직원관리
export function userList (param) {
  return axios.get(`${process.env.BASE_URL}/common/user/find/all`, {
    params: param
  })
}

// login
export function sigin (info) {
  return axios.post(`${process.env.BASE_URL}/common/signin`, info)
}
// export function sigin (param) {
//   return axios({
//     method: 'post',
//     url: `${process.env.BASE_URL}/common/signin`,
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     data: param
//   })
// }

// #endregion
// ********************************************************