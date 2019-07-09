import Vue from 'vue'
import Vuex from 'vuex'

import constant from './constant'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    controlIsShow: false,
    category: constant.TODO_LIST,
    todoList: [
      {
        text: 'the First thing to do today',
        id: 0,
        isDone: false,
        costTime: 0
      },
      {
        text: 'the second thing to do today',
        id: 1,
        isDone: false,
        costTime: 0
      },
      {
        text: 'the third thing to do today',
        id: 2,
        isDone: false,
        costTime: 0
      },
      {
        text: 'the Forth thing to do today',
        id: 3,
        isDone: false,
        costTime: 0
      },
      {
        text: 'complete the keynote',
        id: 4,
        isDone: false,
        costTime: 0
      },
      {
        text: 'prepare presentation',
        id: 5,
        isDone: false,
        costTime: 0
      },
      {
        text: 'mockup of the new case',
        id: 6,
        isDone: true,
        costTime: 4
      },
      {
        text: 'product prototype',
        id: 7,
        isDone: true,
        costTime: 2
      },
      {
        text: 'draw a wireframe',
        id: 8,
        isDone: true,
        costTime: 7
      },
      {
        text: 'website detail refine',
        id: 9,
        isDone: true,
        costTime: 5
      }
    ]
  },
  getters: {
    todoList: state => state.todoList.filter(list => !list.isDone),
    doneList: state => state.todoList.filter(list => list.isDone),
    controlIsShow: state => state.controlIsShow
  },
  mutations: {
    isFinish (state, i) {
      state.todoList[i].isDone = true
    },
    showControl (state, { isShow, category }) {
      state.controlIsShow = isShow
      state.category = category
    }
  },
  actions: {
    moveToDone ({ commit }, i) {
      commit('isFinish', i)
    },
    showControl ({ commit }, v) {
      commit('showControl', v)
    }
  }
})
