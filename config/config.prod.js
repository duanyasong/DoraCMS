'use strict';
const path = require('path')

module.exports = appInfo => {

    return {
        // 插件路径
        admin_root_path: 'http://122.112.250.70:9800/static',
        // 数据库连接
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
        // 服务地址配置
        server_path: 'http://122.112.250.70:9800',
        server_api: 'http://122.112.250.70:9800/api',

    }
};