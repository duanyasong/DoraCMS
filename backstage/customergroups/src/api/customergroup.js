import request from '@root/publicMethods/request'

export function customergroupList(params) {
  return request({
    url: '/manage/customergroup/getList',
    params,
    method: 'get'
  })
}

export function getOneCustomergroup(params) {
  return request({
    url: '/manage/customergroup/getOne',
    params,
    method: 'get'
  })
}

export function addCustomergroup(data) {
  return request({
    url: '/manage/customergroup/addOne',
    data,
    method: 'post'
  })
}

export function updateCustomergroup(data) {
  return request({
    url: '/manage/customergroup/updateOne',
    data,
    method: 'post'
  })
}

export function deleteCustomergroup(params) {
  return request({
    url: '/manage/customergroup/deleteGroup',
    params,
    method: 'get'
  })
}