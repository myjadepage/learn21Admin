import axios from 'axios'

export function getBusinessInvoice () {
  return axios.get(`${process.env.BASE_URL}/business/find/businessInvoice`)
}

export function saveBusinessInvoice (params) {
  return axios.post(`${process.env.BASE_URL}/business/save/businessInvoice`, params)
}
