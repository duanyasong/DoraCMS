import request from '@root/publicMethods/request'

export function getBannersliderList(params) {
  return request({
    url: '/manage/bannerslider/getList',
    method: 'get',
    params
  })
}

export function getOneAd(params) {
  return request({
    url: '/manage/bannerslider/getOne',
    method: 'get',
    params
  })
}

export function addOneAd(data) {
  return request({
    url: '/manage/bannerslider/addOne',
    method: 'post',
    data
  })
}

export function updateBannerslider(data) {
  return request({
    url: '/manage/bannerslider/updateOne',
    method: 'post',
    data
  })
}

export function delBannerslider(params) {
  return request({
    url: '/manage/bannerslider/delete',
    method: 'get',
    params
  })
}