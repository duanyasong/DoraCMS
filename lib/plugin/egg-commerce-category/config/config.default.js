'use strict'

/**
 * egg-commerce-contentcategory default config
 * @member Config#eggCommerceCategory
 * @property {String} SOME_KEY - some description
 */

const pkgInfo = require('../package.json');
exports.commerceCategory = {
    alias: 'category', // 插件目录，必须为英文
    pkgName: 'egg-commerce-contentcategory', // 插件包名
    enName: 'commerceCategory', // 插件名
    name: '文档类别', // 插件名称
    description: '文档类别', // 插件描述
    isadm: 1, // 是否有后台管理，1：有，0：没有，入口地址:'/ext/devteam/admin/index'
    isindex: 0, // 是否需要前台访问，1：需要，0：不需要,入口地址:'/ext/devteam/index/index'
    version: pkgInfo.version, // 版本号
    iconName: 'icon_category', // 主菜单图标名称
    adminUrl: '/category/js/app.js',
    adminApi: [{
        url: 'category/getList',
        method: 'get',
        controllerName: 'list',
        details: '获取类别列表',
    }, {
        url: 'category/getOne',
        method: 'get',
        controllerName: 'getOne',
        details: '获取单条类别信息',
    }, {
        url: 'category/addOne',
        method: 'post',
        controllerName: 'create',
        details: '添加单个类别',
    }, {
        url: 'category/updateOne',
        method: 'post',
        controllerName: 'update',
        details: '更新类别信息',
    }, {
        url: 'category/deleteCategory',
        method: 'get',
        controllerName: 'removes',
        details: '删除类别',
    }],
    fontApi: [{
        url: 'category/getList',
        method: 'get',
        controllerName: 'list',
        details: '获取类别列表',
    }, {
        url: 'category/getTreelist',
        method: 'get',
        controllerName: 'treelist',
        details: '获取带树形结构的类别列表',
    }, {
        url: 'category/getCurrentCategoriesById',
        method: 'get',
        controllerName: 'getCurrentCategoriesById',
        details: '根据id获取分类',
    }, {
        url: 'category/getOne',
        method: 'get',
        controllerName: 'getOne',
        details: '获取单条类别信息',
    }],

    initData: '', // 初始化数据脚本
    pluginsConfig: ` 
    exports.commerceCategory = {\n
        enable: true,\n        package: 'egg-commerce-contentcategory', 
    };\n
    `, // 插入到 plugins.js 中的配置
    defaultConfig: `
    categoryRouter:{\n
        match: [ctx => ctx.path.startsWith('/manage/category'), ctx => ctx.path.startsWith('/api/category')],\n
    },\n
    `, // 插入到 config.default.js 中的配置
}