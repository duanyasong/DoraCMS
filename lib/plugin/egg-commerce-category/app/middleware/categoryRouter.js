const _ = require('lodash');
const categoryAdminController = require('../controller/manage/category')
const categoryApiController = require('../controller/api/category')

module.exports = (options, app) => {

    return async function categoryRouter(ctx, next) {

        let pluginConfig = app.config.commerceCategory;
        await app.initPluginRouter(ctx, pluginConfig, categoryAdminController, categoryApiController);
        await next();

    }

}