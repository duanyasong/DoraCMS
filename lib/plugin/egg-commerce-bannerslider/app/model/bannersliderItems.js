/**
 * Created by Administrator on 2015/4/15.
 * 广告管理,广告单元
 */
module.exports = app => {
    const mongoose = app.mongoose
    var shortid = require('shortid');
    var Schema = mongoose.Schema;

    var BannersliderItemsSchema = new Schema({
        _id: {
            type: String,

            'default': shortid.generate
        },

        title: String,
        title1: String,
        title2: String,
        linktext: String,
        link: String, // 广告链接
        appLink: String, // app广告链接
        appLinkType: String, // app跳转类别 0文章，
        width: Number,
        height: {
            type: Number,
            default: 1
        },
        target: {
            type: String,
            default: '_blank'
        },
        sImg: String, // 图片路径
        date: {
            type: Date,
            default: Date.now
        },
        alt: String // 广告alt标识
    });



    BannersliderItemsSchema.set('toJSON', {
        getters: true,
        virtuals: true
    });
    BannersliderItemsSchema.set('toObject', {
        getters: true,
        virtuals: true
    });

    return mongoose.model("BannersliderItems", BannersliderItemsSchema, 'bannerslideritems');

}