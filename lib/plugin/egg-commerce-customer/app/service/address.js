/*
 * @Author: duanyasong
 * @Date: 2019-06-24 13:20:49 
 * @Last Modified by: duanyasong
 * @Last Modified time: 2019-11-13 21:39:01
 */

'use strict';
const Service = require('egg').Service;
const path = require('path')

// general是一个公共库，可用可不用
const {
    _list,
    _item,
    _count,
    _create,
    _update,
    _removes,
    _safeDelete
} = require(path.join(process.cwd(), 'app/service/general'));


class AddressService extends Service {

    async find(payload, {
        query = {},
        searchKeys = [],
        populate = [],
        files = null
    } = {}) {

        let listdata = _list(this.ctx.model.Address, payload, {
            query: query,
            searchKeys: searchKeys,
            populate: populate,
            files
        });
        return listdata;

    }


    async count(params = {}) {
        return _count(this.ctx.model.Address, params);
    }

    async create(payload) {
        return _create(this.ctx.model.Address, payload);
    }

    async removes(res, values, key = '_id') {
        return _removes(res, this.ctx.model.Address, values, key);
    }

    async safeDelete(res, values) {
        return _safeDelete(res, this.ctx.model.Address, values);
    }

    async update(res, _id, payload) {
        return _update(res, this.ctx.model.Address, _id, payload);
    }

    async item(res, params = {}) {
        return _item(res, this.ctx.model.Address, params)
    }


}

module.exports = AddressService;