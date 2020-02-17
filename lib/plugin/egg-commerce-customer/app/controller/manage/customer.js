const xss = require("xss");
const _ = require('lodash');

const customerRule = (ctx) => {
    return {
        name: {
            type: "string",
            required: true,
            min: 2,
            max: 15,
            message: ctx.__("validate_error_field", [ctx.__("label_customer_name")])
        },
        comments: {
            type: "string",
            required: true,
            min: 5,
            max: 30,
            message: ctx.__("validate_inputCorrect", [ctx.__("label_comments")])
        }
    }
}



let CustomerController = {

    async list(ctx, app) {

        try {

            let payload = ctx.query;
            let customerList = await ctx.service.customer.find(payload, {
                populate: [{
                    path: 'items'
                }]
            });

            ctx.helper.renderSuccess(ctx, {
                data: customerList
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
                state: fields.state,
                height: fields.height,
                carousel: fields.carousel,
                type: fields.type,
                comments: fields.comments
            }


            ctx.validate(customerRule(ctx), formObj);



            let itemIdArr = [],
                addrsses = fields.items;
            if (addresses.length > 0) {
                for (let i = 0; i < addresses.length; i++) {
                    let newItem = await ctx.service.address.create(addresses[i]);
                    itemIdArr.push(newItem._id);
                }
            }
            formObj.items = itemIdArr;
            await ctx.service.customer.create(formObj);

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

            let targetItem = await ctx.service.customer.item(ctx, {
                query: {
                    _id: _id
                },
                populate: [{
                    path: 'items'
                }]
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
                state: fields.state,
                height: fields.height,
                carousel: fields.carousel,
                type: fields.type,
                comments: fields.comments
            }


            ctx.validate(customerRule(ctx), formObj);




            let itemIdArr = [],
                addresses = fields.items;
            if (addresses.length > 0) {
                for (let i = 0; i < addresses.length; i++) {
                    let targetItem = addresses[i],
                        currentId = '';
                    if (targetItem._id) {
                        currentId = targetItem._id;
                        await ctx.service.address.update(ctx, targetItem._id, targetItem);
                    } else {
                        let newItem = await ctx.service.address.create(targetItem);
                        currentId = newItem._id;
                    }
                    itemIdArr.push(currentId);
                }
            }
            formObj.items = itemIdArr;

            await ctx.service.customer.update(ctx, fields._id, formObj);

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

            if (!checkCurrentId(targetIds)) {
                throw new Error(ctx.__("validate_error_params"));
            } else {
                let ids = targetIds.split(',');

                for (let i = 0; i < ids.length; i++) {
                    let currentId = ids[i];

                    let targetAd = await ctx.service.customer.item(ctx, {
                        query: {
                            _id: currentId
                        }
                    })
                    if (!_.isEmpty(targetAd)) {
                        await ctx.service.address.removes(ctx, (targetAd.items).join(','))
                    }

                }

            }

            await ctx.service.customer.removes(ctx, targetIds);
            ctx.helper.renderSuccess(ctx);

        } catch (err) {

            ctx.helper.renderFail(ctx, {
                message: err
            });
        }
    }
}

module.exports = CustomerController;