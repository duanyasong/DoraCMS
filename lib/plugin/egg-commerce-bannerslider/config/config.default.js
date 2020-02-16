'use strict'

/**
 * egg-commerce-bannersilder default config
 * @member Config#eggCommerceBannersilder
 * @property {String} SOME_KEY - some description
 */

const pkgInfo = require('../package.json');
exports.commerceBannersilder = {
    alias: 'bannersilder', // 插件目录，必须为英文
    pkgName: 'egg-commerce-bannersilder', // 插件包名
    enName: 'commerceBannersilder', // 插件名
    name: 'BannerSilder管理', // 插件名称
    description: 'BannerSilder管理', // 插件描述
    isadm: 1, // 是否有后台管理，1：有，0：没有，入口地址:'/ext/devteam/admin/index'
    isindex: 0, // 是否需要前台访问，1：需要，0：不需要,入口地址:'/ext/devteam/index/index'
    version: pkgInfo.version, // 版本号
    iconName: 'icon_shakehands_fill', // 主菜单图标名称
    adminUrl: '/bannersilder/js/app.js',
    adminApi: [{
        url: 'bannersilder/getList',
        method: 'get',
        controllerName: 'list',
        details: '获取BannerSilder列表',
    }, {
        url: 'bannersilder/getOne',
        method: 'get',
        controllerName: 'getOne',
        details: '获取单条BannerSilder信息',
    }, {
        url: 'bannersilder/addOne',
        method: 'post',
        controllerName: 'create',
        details: '添加单个BannerSilder',
    }, {
        url: 'bannersilder/updateOne',
        method: 'post',
        controllerName: 'update',
        details: '更新BannerSilder信息',
    }, {
        url: 'bannersilder/delete',
        method: 'get',
        controllerName: 'removes',
        details: '删除BannerSilder',
    }],
    fontApi: [{
        url: 'bannersilder/getOne',
        method: 'get',
        controllerName: 'getOne',
        details: '获取单条BannerSilder',
    }],
    initData: '', // 初始化数据脚本
    pluginsConfig: ` 
    exports.commerceBannersilder = {\n
        enable: true,\n        package: 'egg-commerce-bannersilder',    
    };\n
    `, // 插入到 plugins.js 中的配置
    defaultConfig: `
    bannersilderRouter:{\n
        match: [ctx => ctx.path.startsWith('/manage/bannersilder'), ctx => ctx.path.startsWith('/api/bannersilder')],\n
    },\n
    `, // 插入到 config.default.js 中的配置
}
