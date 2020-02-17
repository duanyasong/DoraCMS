const _ = require('lodash');
const customergroupAdminController = require('../controller/manage/customergroup')
const customergroupApiController = require('../controller/api/customergroup')

module.exports = (options, app) => {

    return async function customergroupRouter(ctx, next) {

        let pluginConfig = app.config.commerceCustomergroups;
        await app.initPluginRouter(ctx, pluginConfig, customergroupAdminController, customergroupApiController);
        await next();

    }

}