'use strict';
const path = require('path')

module.exports = appInfo => {

    return {
        admin_root_path: 'http://122.112.250.70:9800',
        // DEV_CONFIG_MODULES_BEGIN
        dev_modules: [
            // 'navbar',
            // 'dashboard',
            // 'adminGroup',
            // 'adminUser',
            // 'adminResource',
            // 'systemConfig',
            // 'backUpData',
            // 'systemOptionLog',
            // 'announce',
            // 'systemNotify',
            // 'ads',
            // 'contentTemp',
            // 'templateConfig',
            // 'versionManage',
            // 'content',
            // 'contentTags',
            // 'contentCategory',
            // 'contentMessage',
            // 'regUser',
            // 'helpCenter',
            // 'renderCms',
            // 'cmsTemplate',
            // 'plugin',
            // 'uploadFile',
            // 'mailTemplate',
            // 'mailDelivery',
        ],
        // DEV_CONFIG_MODULES_END
        mongoose: {
            client: {
                url: 'mongodb://127.0.0.1:27017/doracms2',
                options: {
                    useCreateIndex: true,
                    useUnifiedTopology: true
                },
            },
        },
        static: {
            prefix: '/static',
            dir: [path.join(appInfo.baseDir, 'app/public'), path.join(appInfo.baseDir, 'backstage/dist')],
            maxAge: 31536000,
        },
        logger: {
            dir: path.join(appInfo.baseDir, 'logs'),
        },
        server_path: 'http://122.112.250.70:9800',
        server_api: 'http://122.112.250.70:9800/api',
        

    }
};