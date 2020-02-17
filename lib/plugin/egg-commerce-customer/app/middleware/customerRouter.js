const _ = require('lodash');
const customerAdminController = require('../controller/manage/customer')
const customerApiController = require('../controller/api/customer')

module.exports = (options, app) => {

    return async function customerRouter(ctx, next) {

        let pluginConfig = app.config.commerceCustomer;
        await app.initPluginRouter(ctx, pluginConfig, customerAdminController, customerApiController);
        await next();

    }

}