import * as types from '../types.js';
import {
  getCustomerList,
} from '@/api/customer';
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
  [types.CUSTOMER_LIST](state, list) {
    state.list = list
  },
  [types.CUSTOMER_INFO_FORMSTATE](state, formState) {
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
  [types.CUSTOMER_ITEM_FORMSTATE](state, formState) {
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

  getCustomerList({
    commit
  }, params = {}) {
    getCustomerList(params).then((result) => {
      commit(types.CUSTOMER_LIST, result.data)
    })
  },
  customerInfoForm: ({
    commit
  }, params = {}) => {
    commit(types.CUSTOMER_INFO_FORMSTATE, {
      edit: params.edit,
      formData: params.formData
    })
  },
  showAddressForm: ({
    commit
  }, params = {
    edit: false,
    formData: {}
  }) => {
    commit(types.CUSTOMER_ITEM_FORMSTATE, {
      show: true,
      edit: params.edit,
      formData: params.formData
    })
  },
  hideAddressForm: ({
    commit
  }) => {
    commit(types.CUSTOMER_ITEM_FORMSTATE, {
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