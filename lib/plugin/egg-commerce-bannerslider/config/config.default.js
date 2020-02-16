'use strict'

/**
 * egg-commerce-bannerslider default config
 * @member Config#eggCommerceBannerslider
 * @property {String} SOME_KEY - some description
 */

const pkgInfo = require('../package.json');
exports.commerceBannerslider = {
    alias: 'bannerslider', // 插件目录，必须为英文
    pkgName: 'egg-commerce-bannerslider', // 插件包名
    enName: 'commerceBannerslider', // 插件名
    name: 'BannerSlider管理', // 插件名称
    description: 'BannerSlider管理', // 插件描述
    isadm: 1, // 是否有后台管理，1：有，0：没有，入口地址:'/ext/devteam/admin/index'
    isindex: 0, // 是否需要前台访问，1：需要，0：不需要,入口地址:'/ext/devteam/index/index'
    version: pkgInfo.version, // 版本号
    iconName: 'icon_shakehands_fill', // 主菜单图标名称
    adminUrl: '/bannerslider/js/app.js',
    adminApi: [{
        url: 'bannerslider/getList',
        method: 'get',
        controllerName: 'list',
        details: '获取BannerSlider列表',
    }, {
        url: 'bannerslider/getOne',
        method: 'get',
        controllerName: 'getOne',
        details: '获取单条BannerSlider信息',
    }, {
        url: 'bannerslider/addOne',
        method: 'post',
        controllerName: 'create',
        details: '添加单个BannerSlider',
    }, {
        url: 'bannerslider/updateOne',
        method: 'post',
        controllerName: 'update',
        details: '更新BannerSlider信息',
    }, {
        url: 'bannerslider/delete',
        method: 'get',
        controllerName: 'removes',
        details: '删除BannerSlider',
    }],
    fontApi: [{
        url: 'bannerslider/getOne',
        method: 'get',
        controllerName: 'getOne',
        details: '获取单条BannerSlider',
    }],
    initData: '', // 初始化数据脚本
    pluginsConfig: ` 
    exports.commerceBannerslider = {\n
        enable: true,\n        package: 'egg-commerce-bannerslider',    
    };\n
    `, // 插入到 plugins.js 中的配置
    defaultConfig: `
    bannersliderRouter:{\n
        match: [ctx => ctx.path.startsWith('/manage/bannerslider'), ctx => ctx.path.startsWith('/api/bannerslider')],\n
    },\n
    `, // 插入到 config.default.js 中的配置
}
