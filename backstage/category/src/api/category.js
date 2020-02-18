import request from '@root/publicMethods/request'

export function categoryList(params) {
  return request({
    url: '/manage/category/getList',
    params,
    method: 'get'
  })
}

export function getOneCategory(params) {
  return request({
    url: '/manage/category/getOne',
    params,
    method: 'get'
  })
}

export function addCategory(data) {
  return request({
    url: '/manage/category/addOne',
    data,
    method: 'post'
  })
}

export function updateCategory(data) {
  return request({
    url: '/manage/category/updateOne',
    data,
    method: 'post'
  })
}

export function deleteCategory(params) {
  return request({
    url: '/manage/category/deleteCategory',
    params,
    method: 'get'
  })
}