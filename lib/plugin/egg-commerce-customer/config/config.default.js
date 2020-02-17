'use strict'

/**
 * egg-commerce-customer default config
 * @member Config#eggCommerceCustomer
 * @property {String} SOME_KEY - some description
 */

const pkgInfo = require('../package.json');
exports.commerceCustomer = {
    alias: 'customer', // 插件目录，必须为英文
    pkgName: 'egg-commerce-customer', // 插件包名
    enName: 'commerceCustomer', // 插件名
    name: '用户管理', // 插件名称
    description: '用户管理', // 插件描述
    isadm: 1, // 是否有后台管理，1：有，0：没有，入口地址:'/ext/devteam/admin/index'
    isindex: 0, // 是否需要前台访问，1：需要，0：不需要,入口地址:'/ext/devteam/index/index'
    version: pkgInfo.version, // 版本号
    iconName: 'icon_shakehands_fill', // 主菜单图标名称
    adminUrl: '/customer/js/app.js',
    adminApi: [{
        url: 'customer/getList',
        method: 'get',
        controllerName: 'list',
        details: '获取广告列表',
    }, {
        url: 'customer/getOne',
        method: 'get',
        controllerName: 'getOne',
        details: '获取单条广告信息',
    }, {
        url: 'customer/addOne',
        method: 'post',
        controllerName: 'create',
        details: '添加单个广告',
    }, {
        url: 'customer/updateOne',
        method: 'post',
        controllerName: 'update',
        details: '更新广告信息',
    }, {
        url: 'customer/delete',
        method: 'get',
        controllerName: 'removes',
        details: '删除广告',
    }],
    fontApi: [{
        url: 'customer/getOne',
        method: 'get',
        controllerName: 'getOne',
        details: '获取单条广告',
    }],
    initData: '', // 初始化数据脚本
    pluginsConfig: ` 
    exports.commerceCustomer = {\n
        enable: true,\n        package: 'egg-commerce-customer',    
    };\n
    `, // 插入到 plugins.js 中的配置
    defaultConfig: `
    customerRouter:{\n
        match: [ctx => ctx.path.startsWith('/manage/customer'), ctx => ctx.path.startsWith('/api/customer')],\n
    },\n
    `, // 插入到 config.default.js 中的配置
}