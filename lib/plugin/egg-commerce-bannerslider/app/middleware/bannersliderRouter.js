const _ = require('lodash');
const bannersliderAdminController = require('../controller/manage/bannerslider')
const bannersliderApiController = require('../controller/api/bannerslider')

module.exports = (options, app) => {

    return async function bannersliderRouter(ctx, next) {

        let pluginConfig = app.config.commerceBannerslider;
        await app.initPluginRouter(ctx, pluginConfig, bannersliderAdminController, bannersliderApiController);
        await next();

    }

}