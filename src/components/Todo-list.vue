<template>
  <div>
    <div class="add-new-mission">
      ADD A NEW MISSION...
      <svg class="add"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        <path d="M0 0h24v24H0z"
          fill="none" /></svg>
    </div>
    <div class="todo">
      <div class="todo-header">
        TO-DO
        <ArrowDropUp class="arrow-up"></ArrowDropUp>
      </div>
      <ul class="todo-list" ref="todoList">
        <li v-for="(ele) in todoList"
          :key="ele.id">
          <UncheckedRadio></UncheckedRadio>
          {{ele.text}}
          <PlayerButton class="player-btn"></PlayerButton>
        </li>
      </ul>
    </div>
    <div class="done">
      <div class="done-header">
        DONE
        <ArrowDropDown class="arrow-down"></ArrowDropDown>
      </div>
      <ul class="done-list" ref="doneList">
        <li v-for="(ele) in doneList" :key="ele.id">
          <CheckedCircle></CheckedCircle>
          {{ele.text}}
          <span class="ball" v-for="n in ele.costTime" :key="n"></span>
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
export default {
  components: {
    PlayerButton,
    ArrowDropUp,
    ArrowDropDown,
    UncheckedRadio,
    CheckedCircle
  },
  computed: {
    ...mapGetters(['todoList', 'doneList'])
  },
  data () {
    return {
      todoIsShow: true,
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
.todo
  display inline-block
.todo-header
  text-align left
  size 445px 44px
  position absolute
  left 560px
  top 152px
  box-sizing border-box
  padding 8px 16px
  background rgba(white, 0.2)
  svg[class^="arrow"]
    float right
  color white
  font-size 24px
  font-weight bold

</style>
