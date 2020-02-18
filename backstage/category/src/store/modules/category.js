import * as types from '../types.js';
import {
  categoryList,
} from '@/api/category';
import _ from 'lodash';
import {
  renderTreeData
} from '@/utils';

const state = {
  formState: {
    type: 'root',
    show: false,
    edit: false,
    formData: {
      label: '',
      enable: false,
      defaultUrl: '',
      parentId: '',
      contentTemp: '',
      parentObj: '',
      sortId: 0,
      comments: '',
      type: '1',
      sImg: '',
    }
  },
  categoryList: {
    pageInfo: {},
    docs: []
  },
}

const mutations = {
  [types.CATEGORYS_FORMSTATE](state, formState) {
    state.formState.show = formState.show;
    state.formState.edit = formState.edit;
    state.formState.type = formState.type;
    state.formState.formData = Object.assign({
      name: '',
      enable: false,
      defaultUrl: '',
      parentId: '',
      parentObj: {},
      contentTemp: '',
      sortId: 0,
      comments: '',
      type: '1',
      sImg: ''
    }, formState.formData);

  },
  [types.CATEGORYS_LIST](state, categoryList) {
    state.categoryList = categoryList
  },
}

const actions = {

  showCategoryForm: ({
    commit
  }, params = {
    type: 'root',
    edit: false,
    formData: {}
  }) => {
    commit(types.CATEGORYS_FORMSTATE, {
      show: true,
      type: params.type,
      edit: params.edit,
      formData: params.formData
    })
  },
  hideCategoryForm: ({
    commit
  }) => {
    commit(types.CATEGORYS_FORMSTATE, {
      show: false
    })
  },
  getCategoryList({
    commit
  }, params = {}) {
    categoryList(params).then((result) => {
      let treeData = renderTreeData({
        docs: result.data
      });
      commit(types.CATEGORYS_LIST, treeData)
    })
  },

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}