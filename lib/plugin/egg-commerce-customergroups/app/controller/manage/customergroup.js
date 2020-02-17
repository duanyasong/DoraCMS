const xss = require("xss");
const _ = require('lodash');

const customergroupRule = (ctx) => {
    return {
        name: {
            type: "string",
            required: true,
            min: 1,
            max: 12,
            message: ctx.__("validate_error_field", [ctx.__("label_group_name")])
        },
        comments: {
            type: "string",
            required: true,
            min: 2,
            max: 30,
            message: ctx.__("validate_inputCorrect", [ctx.__("label_comments")])
        }
    }
}



let CustomergroupController = {

    async list(ctx, app) {

        try {

            let payload = ctx.query;
            let customergroupList = await ctx.service.customergroup.find(payload, {
                searchKeys: ['name']
            });

            ctx.helper.renderSuccess(ctx, {
                data: customergroupList
            });

        } catch (err) {

            ctx.helper.renderFail(ctx, {
                message: err
            });

        }
    },

    async create(ctx, app) {


        try {

            let fields = ctx.request.body || {};
            const formObj = {
                name: fields.name,
                alias: fields.alias,
                comments: fields.comments
            }


            ctx.validate(customergroupRule(ctx), formObj);



            await ctx.service.customergroup.create(formObj);

            ctx.helper.renderSuccess(ctx);

        } catch (err) {
            ctx.helper.renderFail(ctx, {
                message: err
            });
        }
    },



    async getOne(ctx, app) {

        try {
            let _id = ctx.query.id;

            let targetItem = await ctx.service.customergroup.item(ctx, {
                query: {
                    _id: _id
                }
            });

            ctx.helper.renderSuccess(ctx, {
                data: targetItem
            });

        } catch (err) {
            ctx.helper.renderFail(ctx, {
                message: err
            });
        }

    },


    async update(ctx, app) {


        try {

            let fields = ctx.request.body || {};
            const formObj = {
                name: fields.name,
                alias: fields.alias,
                comments: fields.comments
            }


            ctx.validate(customergroupRule(ctx), formObj);



            await ctx.service.customergroup.update(ctx, fields._id, formObj);

            ctx.helper.renderSuccess(ctx);

        } catch (err) {

            ctx.helper.renderFail(ctx, {
                message: err
            });

        }

    },


    async removes(ctx, app) {

        try {
            let targetIds = ctx.query.ids;
            await ctx.service.customergroup.removes(ctx, targetIds);
            ctx.helper.renderSuccess(ctx);

        } catch (err) {

            ctx.helper.renderFail(ctx, {
                message: err
            });
        }
    }
}

module.exports = CustomergroupController;