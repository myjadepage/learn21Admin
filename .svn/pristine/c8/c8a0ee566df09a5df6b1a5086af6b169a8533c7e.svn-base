import axios from 'axios'

// 거래처 검색
export function getAcList (params) {
  return axios
    .get(`${process.env.BASE_URL}/basic/userCustomer/find/userCustomer`, {
      params: {
        puserCustomerName: params.puserCustomerName,
        puserCustomerType: params.puserCustomerType,
        pcuCode: params.pcuCode
      }
    })
    .then(res => res.data)
    .catch(err => console.error(err))
}

// 거래처 업데이트
export function updateAc (params) {
  console.log(params)
  return axios.post(
    `${process.env.BASE_URL}/basic/userCustomer/sava/userCustomer`,
    params
  )
}
