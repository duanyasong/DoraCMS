'use strict'

/**
 * egg-commerce-customergroups default config
 * @member Config#eggCommerceCustomergroup
 * @property {String} SOME_KEY - some description
 */

const pkgInfo = require('../package.json');
exports.commerceCustomergroups = {
    alias: 'customergroups', // 插件目录，必须为英文
    pkgName: 'egg-commerce-customergroups', // 插件包名
    enName: 'commerceCustomergroups', // 插件名
    name: '用户组', // 插件名称
    description: '用户组', // 插件描述
    isadm: 1, // 是否有后台管理，1：有，0：没有，入口地址:'/ext/devteam/admin/index'
    isindex: 0, // 是否需要前台访问，1：需要，0：不需要,入口地址:'/ext/devteam/index/index'
    version: pkgInfo.version, // 版本号
    iconName: 'icon_tags', // 主菜单图标名称
    adminUrl: '/customergroups/js/app.js',
    adminApi: [{
        url: 'customergroup/getList',
        method: 'get',
        controllerName: 'list',
        details: '获取标签列表',
    }, {
        url: 'customergroup/getOne',
        method: 'get',
        controllerName: 'getOne',
        details: '获取单条标签信息',
    }, {
        url: 'customergroup/addOne',
        method: 'post',
        controllerName: 'create',
        details: '添加单个标签',
    }, {
        url: 'customergroup/updateOne',
        method: 'post',
        controllerName: 'update',
        details: '更新标签信息',
    }, {
        url: 'customergroup/deleteGroup',
        method: 'get',
        controllerName: 'removes',
        details: '删除标签',
    }],
    fontApi: [{
        url: 'customergroup/getList',
        method: 'get',
        controllerName: 'list',
        details: '获取标签列表',
    }],

    initData: '', // 初始化数据脚本
    pluginsConfig: ` 
    exports.commerceCustomergroups = {\n
        enable: true,\n        package: 'egg-commerce-customergroups',
    };\n
    `, // 插入到 plugins.js 中的配置
    defaultConfig: `
    customergroupRouter:{\n
        match: [ctx => ctx.path.startsWith('/manage/customergroup'), ctx => ctx.path.startsWith('/api/customergroup')],\n
    },\n
    `, // 插入到 config.default.js 中的配置
}