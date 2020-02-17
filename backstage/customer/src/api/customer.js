import request from '@root/publicMethods/request'

export function getCustomerList(params) {
  return request({
    url: '/manage/customer/getList',
    method: 'get',
    params
  })
}

export function getOneAd(params) {
  return request({
    url: '/manage/customer/getOne',
    method: 'get',
    params
  })
}

export function addOneAd(data) {
  return request({
    url: '/manage/customer/addOne',
    method: 'post',
    data
  })
}

export function updateCustomer(data) {
  return request({
    url: '/manage/customer/updateOne',
    method: 'post',
    data
  })
}

export function delCustomer(params) {
  return request({
    url: '/manage/customer/delete',
    method: 'get',
    params
  })
}