<template>
  <div>
    <AddNewMission></AddNewMission>
    <div class="todo">
      <div class="todo-header" @click="todoIsShow = !todoIsShow">
        TO-DO
        <ArrowDropUp class="arrow-up" v-if="todoIsShow"></ArrowDropUp>
        <ArrowDropDown class="arrow-down" v-else></ArrowDropDown>
      </div>
      <ul class="todo-list-wrap" ref="todoList">
        <li v-for="(ele) in todoList"
          :key="ele.id">
          <UncheckedRadio></UncheckedRadio>
          {{ele.text}}
          <PlayerButton class="player-btn"></PlayerButton>
        </li>
      </ul>
    </div>
    <div class="done">
      <div class="done-header" @click="doneIsShow = !doneIsShow">
        DONE
        <ArrowDropUp class="arrow-up" v-if="doneIsShow"></ArrowDropUp>
        <ArrowDropDown class="arrow-down" v-else></ArrowDropDown>
      </div>
      <ul class="done-list" ref="doneList">
        <li v-for="(ele) in doneList" :key="ele.id">
          <CheckedCircle></CheckedCircle>
          {{ele.text}}
          <div class="ball-wrapper">
            <span class="ball" v-for="n in ele.costTime" :key="n"></span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import PlayerButton from './svg/player-button'
import ArrowDropUp from './svg/arrow-drop-up'
import ArrowDropDown from './svg/arrow-drop-down'
import UncheckedRadio from './svg/radio-button-unchecked'
import CheckedCircle from './svg/check-circle-outline'
import { mapGetters } from 'vuex'
import AddNewMission from './AddNewMission'
export default {
  mounted () {
    this.todoIsShow = true
    this.doneIsShow = true
  },
  components: {
    PlayerButton,
    ArrowDropUp,
    ArrowDropDown,
    UncheckedRadio,
    CheckedCircle,
    AddNewMission
  },
  computed: {
    ...mapGetters(['todoList', 'doneList'])
  },
  data () {
    return {
      todoIsShow: false,
      doneIsShow: false
    }
  },
  watch: {
    todoIsShow (value) {
      return this.isShow('todoList', value)
    },
    doneIsShow (value) {
      return this.isShow('doneList', value)
    }
  },
  methods: {
    isShow (eleName, option) {
      const target = this.$refs[eleName]
      target.style.height = option ? target.scrollHeight + 'px' : 0
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/main.styl'
.done
  .done-list
    text-decoration-line line-through
.add-new-mission
  left 560px
.todo, .done
  display inline-block
.todo-list-wrap, .done-list
  position absolute
  top 196px
  width 445px
  left 560px
  list-style none
  overflow hidden
  transition 0.5s
  padding 0
  li
    display flex
    justify-content flex-start
    align-items center
    color white
    width 100%
    font-size 16px
    line-height 24px
    height 32px
    box-sizing border-box
    border-bottom solid 1px rgba(#FFFFFF, 0.2)
    margin-bottom 9px
    svg
      fill white
      &:first-of-type
        margin-right 4px
      &:last-of-type
        margin-left auto
        margin-right 0
.done-header
  top 498px
.done .done-list
  top 542px
  & svg:last-of-type
    margin initial
    margin-right 4px
  .ball
    display inline-block
    size 12px
    border-radius 50%
    background-color white
    margin 4px
  .ball-wrapper
    line-height 12px
    height 12px
    display inline-block
    vertical-align middle
    white-space nowrap
    margin-left auto
    margin-right 0
</style>
