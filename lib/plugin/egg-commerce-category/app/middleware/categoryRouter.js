const _ = require('lodash');
const contentCategoryAdminController = require('../controller/manage/contentCategory')
const contentCategoryApiController = require('../controller/api/contentCategory')

module.exports = (options, app) => {

    return async function contentCategoryRouter(ctx, next) {

        let pluginConfig = app.config.commerceContentCategory;
        await app.initPluginRouter(ctx, pluginConfig, contentCategoryAdminController, contentCategoryApiController);
        await next();

    }

}