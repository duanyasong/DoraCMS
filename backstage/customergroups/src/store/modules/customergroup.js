import * as types from '../types.js';
import {
  customergroupList,
} from '@/api/customergroup';
import _ from 'lodash';




const state = {
  formState: {
    show: false,
    edit: false,
    formData: {
      name: '',
      alias: '',
      comments: ''
    }
  },
  groupList: {
    pageInfo: {},
    docs: []
  },
}

const mutations = {
  [types.CUSTOMERGROUP_FORMSTATE](state, formState) {
    state.formState.show = formState.show;
    state.formState.edit = formState.edit;
    state.formState.type = formState.type;
    state.formState.formData = Object.assign({
      name: '',
      alias: '',
      comments: ''
    }, formState.formData);

  },
  [types.CUSTOMERGROUP_LIST](state, groupList) {
    state.groupList = groupList
  },
}

const actions = {

  showCustomergroupForm: ({
    commit
  }, params = {
    edit: false,
    formData: {}
  }) => {
    commit(types.CUSTOMERGROUP_FORMSTATE, {
      show: true,
      edit: params.edit,
      formData: params.formData
    })
  },
  hideCustomergroupForm: ({
    commit
  }) => {
    commit(types.CUSTOMERGROUP_FORMSTATE, {
      show: false
    })
  },
  getCustomergroupList({
    commit
  }, params = {}) {
    customergroupList(params).then((result) => {
      commit(types.CUSTOMERGROUP_LIST, result.data)
    })
  },

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}