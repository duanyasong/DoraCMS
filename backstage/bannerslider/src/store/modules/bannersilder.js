import * as types from '../types.js';
import {
  getBannersliderList,
} from '@/api/bannerslider';
import _ from 'lodash';

const state = {
  list: {
    pageInfo: {},
    docs: []
  },
  infoFormState: {
    edit: false,
    formData: {
      name: '',
      type: '1',
      height: '',
      comments: '',
      items: [],
      state: true,
      carousel: true
    }
  },
  itemFormState: {
    show: false,
    edit: false,
    formData: {
      title: '',
      link: '',
      appLink: '',
      appLinkType: '',
      width: '',
      height: '',
      alt: '',
      sImg: ''
    }
  }
}

const mutations = {
  [types.BANNERSILDER_LIST](state, list) {
    state.list = list
  },
  [types.BANNERSILDER_INFO_FORMSTATE](state, formState) {
    state.infoFormState.edit = formState.edit;
    state.infoFormState.formData = Object.assign({
      name: '',
      type: '1',
      height: '',
      comments: '',
      items: [],
      state: true,
      carousel: true
    }, formState.formData);
  },
  [types.BANNERSILDER_ITEM_FORMSTATE](state, formState) {
    state.itemFormState.edit = formState.edit;
    state.itemFormState.show = formState.show;
    state.itemFormState.formData = Object.assign({
      title: '',
      link: '',
      width: '',
      height: '',
      alt: '',
      sImg: '',
    }, formState.formData);
  },
}

const actions = {

  getBannersliderList({
    commit
  }, params = {}) {
    getBannersliderList(params).then((result) => {
      commit(types.BANNERSILDER_LIST, result.data)
    })
  },
  bannersliderInfoForm: ({
    commit
  }, params = {}) => {
    commit(types.BANNERSILDER_INFO_FORMSTATE, {
      edit: params.edit,
      formData: params.formData
    })
  },
  showBannersliderItemForm: ({
    commit
  }, params = {
    edit: false,
    formData: {}
  }) => {
    commit(types.BANNERSILDER_ITEM_FORMSTATE, {
      show: true,
      edit: params.edit,
      formData: params.formData
    })
  },
  hideBannersliderItemForm: ({
    commit
  }) => {
    commit(types.BANNERSILDER_ITEM_FORMSTATE, {
      show: false
    })
  },

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}