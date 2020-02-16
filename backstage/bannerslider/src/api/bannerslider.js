import request from '@root/publicMethods/request'

export function getBannersilderList(params) {
  return request({
    url: '/manage/bannersilder/getList',
    method: 'get',
    params
  })
}

export function getOneAd(params) {
  return request({
    url: '/manage/bannersilder/getOne',
    method: 'get',
    params
  })
}

export function addOneAd(data) {
  return request({
    url: '/manage/bannersilder/addOne',
    method: 'post',
    data
  })
}

export function updateBannersilder(data) {
  return request({
    url: '/manage/bannersilder/updateOne',
    method: 'post',
    data
  })
}

export function delBannersilder(params) {
  return request({
    url: '/manage/bannersilder/delete',
    method: 'get',
    params
  })
}