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
        text: 'THE FIRST THING TO DO TODAY',
        id: 0,
        isDone: false,
        costTime: 0
      },
      {
        text: 'THE SECOND THING TO DO TODAY',
        id: 1,
        isDone: false,
        costTime: 0
      },
      {
        text: 'THE THIRD THING TO DO TODAY',
        id: 2,
        isDone: false,
        costTime: 0
      },
      {
        text: 'THE FORTH THING TO DO TODAY',
        id: 3,
        isDone: false,
        costTime: 0
      },
      {
        text: 'COMPLETE THE KEYNOTE',
        id: 4,
        isDone: false,
        costTime: 0
      },
      {
        text: 'PREPARE PRESENTATION',
        id: 5,
        isDone: false,
        costTime: 0
      },
      {
        text: 'MOCKUP OF THE NEW CASE',
        id: 6,
        isDone: true,
        costTime: 4
      },
      {
        text: 'PRODUCT PROTOTYPE',
        id: 7,
        isDone: true,
        costTime: 2
      },
      {
        text: 'DRAW A WIREFRAME',
        id: 8,
        isDone: true,
        costTime: 7
      },
      {
        text: 'WEBSITE DETAIL REFINE',
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
