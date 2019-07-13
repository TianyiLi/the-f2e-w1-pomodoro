<template>
  <div id="app"
    :class="isRest && 'rest'">
    <Main></Main>
    <transition name="fade">
      <ControlPanel v-if="controlIsShow"></ControlPanel>
    </transition>
    <div class="pomodoro"
      @click="changeColor">POMODORO</div>
  </div>
</template>
<script>
import Main from './wrap/Main'
import ControlPanel from './wrap/Control-Panel'
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  components: {
    Main,
    ControlPanel
  },
  computed: {
    ...mapGetters([
      'controlIsShow',
      'isRest'
    ])
  },
  methods: {
    changeColor () {
      this.$store.dispatch('resetToggle')
    }
  }
}
</script>
<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap')
@import './main.styl'
html, body
  size 100%
  margin 0
  padding 0
  display flex
  align-items center
  justify-content center
  background rgba(black, 0.5)
.bg-deepBlue
  background $deepBlue
.bg-deepPink
  background $deepPink
.bg-lightPink
  background $lightPink
.bg-lighBlue
  background $lightBlue
.fc-deepBlue
  color $deepBlue
  & svg
    fill $deepBlue
.fc-deepPink
  color $deepPink
  & svg
    fill $deepPink
.fc-lightPink
  color $lightPink
  & svg
    fill $lightPink
.fc-lightBlue
  color $lightBlue
  & svg
    fill $lightBlue
#app
  position relative
  flex-shrink 0
  font-family 'Roboto', 'Avenir', Helvetica, Arial, sans-serif
  size 1280px 800px
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  background linear-gradient(to right, $lightPink 64%, $deepBlue 64%)
  &.rest
    background linear-gradient(to right, $lightBlue 64%, $deepBlue 64%)
  .wrap.rest
    .add-new-mission
      color $normalBlue
      .add
        fill $deepBlue
    .current-todo
      .cost-time .ball
        border-color $deepBlue
        &.working
          background-color $deepBlue
        &.fill
          background-color $deepBlue
    .count-down-display
      color $deepBlue
    .corner
      color $normalBlue
.add-new-mission
  position absolute
  top 48px
  left 85px
  size 445px 56px
  background white
  border-radius 3px
  font-style italic
  font-size 16px
  line-height 19px
  color $deepPink
  position relative
  justify-content flex-start
  align-items center
  display flex
  font-weight bold
  box-sizing border-box
  padding-left 16px
  .label
    transition 0.2s
  input[type='text']
    border none
    position absolute
    background-color transparent
    color inherit
    font-style inherit
    font-weight inherit
    width 70%
    box-shadow unset
  input[type='text']:focus ~ .label
    transform translate(0, -100%)
    font-size 0.7em
    transform-origin left top
    opacity 0.6
  input[type='text']:valid ~ .label
    display none
  .add
    size 24px
    position absolute
    right 16px
    top 16px
    fill $deepPink
    cursor pointer
    transition 0.2s
    &:hover
      filter drop-shadow(2px 2px 2px black)
    &:active
      filter none
.current-todo
  font-family 'Roboto', serif
  font-size 24px
  text-align left
  height 48px
  position absolute
  top 249px
  left 149px
  color $deepBlue
  line-height 28px
  &:before
    position absolute
    content ''
    left -64px
    top 0
    size 48px
    border-radius 50%
    box-sizing border-box
    border solid 2px $deepBlue
    transform-origin center
  &.on-count-down:before
    animation breath 1s infinite alternate
    @keyframes breath
      0%
        transform scale(1)
      100%
        transform scale(1.3)
  .cost-time
    position absolute
    content ''
    bottom 0px
    left 0
    display flex
    justify-content center
    align-items center
    .ball
      size 12px
      border-radius 50%
      box-sizing border-box
      border solid 1px $deepPink
      flex 0 0 auto
      margin-right 4px
      &.fill
        background-color $deepPink
.count-down-display
  position absolute
  left 80px
  top 297px
  font-family 'Roboto'
  font-size 176px
  color $deepPink
  font-weight bold
  text-align center
.todo-list
  position absolute
  width 445px
  box-sizing border-box
  left 85px
  top 610px
  list-style none
  margin 0
  padding-left 28px
  li
    text-align left
    width 100%
    height 32px
    font-size 16px
    font-weight bold
    line-height 24px
    color $deepBlue
    position relative
    margin-bottom 9px
    &:before
      content ''
      position absolute
      left -28px
      top 2px
      height 20px
      width 20px
      border-radius 50%
      box-sizing border-box
      border solid 2px $deepBlue
    &:after
      content ''
      position absolute
      left -28px
      bottom 0
      width 445px
      height 2px
      background rgba($deepBlue, 0.2)
    .player-btn
      float right
      fill $deepBlue
  .corner
    position absolute
    top 100%
    color $deepPink
    font-size 16px
    font-weight bold
    right 0
.menu-todo, .analytics, .ringtones
  fill white
  size 36px
  position absolute
  left 1159px
  cursor pointer
.menu-todo
  top 48px
.analytics
  top 132px
.ringtones
  top 216px
.pomodoro
  position absolute
  top 587px
  cursor pointer
  right 85px
  transform rotate(90deg)
  transform-origin right top
  color white
  font-size 24px
  font-weight bold
.middle-player
  position absolute
  top 130px
  left 560px
.fade-enter-active, .fade-leave-active
  transition opacity 0.3s
.fade-enter, .fade-leave-to
  opacity 0
[class$="-header"]
  cursor pointer
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
    fill white
  color white
  font-size 24px
  font-weight bold
</style>
