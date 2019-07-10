<template>
  <div class="wrap bg-deepBlue">
    <div class="option-todo"
      @click="active = 'TODO'"
      :class="active === 'TODO' && 'fc-deepPink' || 'in-active'">
      <List></List>
      TODO-LIST
    </div>
    <div class="option-analytics"
      @click="active = 'Analytics'"
      :class="active === 'Analytics' && 'fc-deepPink' || 'in-active'">
      <insert-chart></insert-chart>
      ANALYTICS
    </div>
    <div class="option-ringtones"
      @click="active = 'Ringtones'"
      :class="active === 'Ringtones' && 'fc-deepPink' || 'in-active'">
      <Music></Music>
      RINGTONES
    </div>
    <Close class="close" @click.native="showControl(false)"></Close>
    <div class="first-todo-wrap bg-lightPink">
      <div class="top-circle bg-deepPink">
        <div class="mid-trig-btn bg-deepPink">
          <PlayArrow></PlayArrow>
        </div>
      </div>
      <div class="time-font">25:00</div>
      <div class="first-todo-ele">THE FIRST THING TO DO TODAY</div>
    </div>
    <transition name="fade" mode="out-in">
      <components :is="'TODO'"></components>
    </transition>
  </div>
</template>
<script>
import List from '../components/svg/list'
import Music from '../components/svg/library-music'
import InsertChart from '../components/svg/insert-chart'
import TODO from '../components/Todo-list'
import Close from '../components/svg/close'
import PlayArrow from '../components/svg/play-arrow'
import { mapActions } from 'vuex'
export default {
  components: {
    List,
    Music,
    InsertChart,
    TODO,
    PlayArrow,
    Close
  },
  data () {
    return {
      active: 'TODO'
    }
  },
  methods: {
    ...mapActions(['showControl'])
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/main.styl'
.wrap
  position absolute
  size 1280px 800px
  top 0
  overflow hidden
  left 0
.in-active
  color rgba(white, 0.2)
  & svg
    fill rgba(white, 0.2)
[class^="option-"]
  position absolute
  left 48px
  font-size 36px
  text-align left
  font-weight bold
  transition 0.3s
  cursor pointer
  &.in-active:hover
    filter: drop-shadow(0px 0px 15px rgba(white, 0.7))
  svg
    size 36px
.option-todo
  top 48px
.option-analytics
  top 129px
.option-ringtones
  top 213px
.first-todo-wrap
  size 350px
  &, .top-circle, .mid-trig-btn
    border-radius 50%
    box-sizing border-box
    position absolute
  left 85px
  top 625px
.top-circle
  size 116px
  border solid 5px $deepBlue
  left 117px
  top -58px
.mid-trig-btn
  size 103px
  border solid 5px $deepBlue
  top 50%
  left 50%
  display flex
  justify-content center
  align-items center
  transform translate(-50%, -50%)
  svg
    fill white
    size 60px
.time-font
  position absolute
  top 57px
  left 90px
  color $deepPink
  font-weight bold
  font-size 64px
.first-todo-ele
  position absolute
  top 132px
  left 53px
  font-weight bold
  font-size 16px
  color $deepBlue
.close
  cursor pointer
  fill white
  size 48px
  top 48px
  left 1147px
  position absolute
</style>
