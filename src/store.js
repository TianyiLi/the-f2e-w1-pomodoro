import Vue from 'vue'
import Vuex from 'vuex'

import constant from './constant'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    controlIsShow: false,
    category: constant.TODO_LIST,
    isCountDown: false,
    currentCountDownTime: 25 * 60,
    initCountDownTime: 25 * 60,
    todoList: [
      {
        text: 'THE FIRST THING TO DO TODAY',
        id: 0,
        isDone: false,
        costTime: 3
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
    ],
    currentTarget: 0,
    isRest: false,
    timerID: -1
  },
  getters: {
    todoList: state => state.todoList.filter(list => !list.isDone),
    doneList: state => state.todoList.filter(list => list.isDone),
    controlIsShow: state => state.controlIsShow,
    isRest: state => state.isRest,
    currentCountDownTime: state => state.currentCountDownTime,
    currentTODO: state => state.todoList.find(ele => ele.id === state.currentTarget),
    isCountDown: state => state.isCountDown,
    category: state => state.category
  },
  mutations: {
    isFinish (state, i) {
      state.todoList[i].isDone = true
    },
    showControl (state, { isShow, category }) {
      state.controlIsShow = isShow
      state.category = category
    },
    currentTargetTimeAdded (state) {
      state.todoList.find(tl => tl.id === state.currentTarget).costTime += 1
    },
    setCurrentTarget (state, id) {
      state.currentTarget = id
    },
    setRest (state, v) {
      state.isRest = v
    },
    countDownTime (state) {
      if (state.currentCountDownTime - 1 === 0) {
        !state.isRest && (state.todoList.find(tl => tl.id === state.currentTarget).costTime += 1)
        state.isRest = !state.isRest
        state.currentCountDownTime = state.isRest ? 5 * 60 : 25 * 60
        state.initCountDownTime = state.isRest ? 5 * 60 : 25 * 60
      } else {
        state.currentCountDownTime -= 1
      }
    },
    countDownToggle (state, v = !state.isCountDown) {
      state.isCountDown = v
    },
    setTimerID (state, id) {
      state.timerID = id
    }
  },
  actions: {
    moveToDone ({ commit }, i) {
      commit('isFinish', i)
    },
    showControl ({ commit }, v) {
      commit('showControl', v)
    },
    currentTargetCostTimeAdded ({ commit }) {
      commit('currentTargetTimeAdded')
    },
    setCurrentTarget ({ commit }, id) {
      commit('setCurrentTarget', id)
    },
    resetToggle ({ commit, state }, v) {
      commit('setRest', v instanceof Boolean ? v : !state.isRest)
    },
    playerOnClick ({ commit, state }) {
      state.isCountDown = !state.isCountDown
      if (state.isCountDown) {
        const id = setInterval(() => {
          if (state.isCountDown) commit('countDownTime')
          else clearInterval(state.timerID)
        }, 1000)
        commit('setTimerID', id)
      } else {
        clearInterval(state.timerID)
      }
    }
  }
})
