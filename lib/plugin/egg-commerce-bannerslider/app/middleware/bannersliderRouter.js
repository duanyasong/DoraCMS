const _ = require('lodash');
const bannersilderAdminController = require('../controller/manage/bannersilder')
const bannersilderApiController = require('../controller/api/bannersilder')

module.exports = (options, app) => {

    return async function bannersilderRouter(ctx, next) {

        let pluginConfig = app.config.commerceBannersilder;
        await app.initPluginRouter(ctx, pluginConfig, bannersilderAdminController, bannersilderApiController);
        await next();

    }

}