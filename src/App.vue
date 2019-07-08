<template>
  <div id="app">
    <div class="search">
      ADD A NEW MISSION...
      <svg class="add" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
    </div>

    <div class="current-todo">THE FIRST THING TO DO TODAY</div>

    <div class="count-down-display">25:00</div>

    <ul class="todo-list">
      <li>THE SECOND THING TO DO TODAY <PlayerButton class="player-btn"></PlayerButton></li>
      <li>THE THIRD THING TO DO TODAY <PlayerButton class="player-btn"></PlayerButton></li>
      <li>THE FORTH THING TO DO TODAY <PlayerButton class="player-btn"></PlayerButton></li>
      <div class="corner">MORE</div>
    </ul>

    <List class="menu"></List>
    <InsertChart class="chart"></InsertChart>
    <Music class="music"></Music>
    <div class="pomodoro">POMODORO</div>
    <PlayTrigger class="middle-player" :pause="true" :initSec="30"></PlayTrigger>
  </div>
</template>

<script>
import PlayTrigger from './components/Player-spinner'
import PlayerButton from './components/svg/player-button'
import Music from './components/svg/library-music'
import InsertChart from './components/svg/insert-chart'
import List from './components/svg/list'
export default {
  name: 'app',
  components: {
    PlayTrigger,
    PlayerButton,
    Music,
    InsertChart,
    List
  }
}
</script>
<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap')
$lightPink = #FFEDF7
$deepBlue = #003164
$lightBlue = #E5F3FF
$deepPink = #FF4384
html, body
  width 100%
  height 100%
  margin 0
  padding 0
  display flex
  align-items center
  justify-content center
  background rgba(black, 0.5)
#app
  position relative
  flex-shrink 0
  font-family 'Roboto', 'Avenir', Helvetica, Arial, sans-serif
  width 1280px
  height 800px
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  background linear-gradient(to right, $lightPink 64%, $deepBlue 64%)

.search
  position absolute
  top 48px
  left 85px
  width 445px
  height 56px
  background white
  border-radius 3px
  font-family 'Roboto', serif
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
  .add
    width 24px
    height 24px
    position absolute
    right 16px
    top 16px
    fill $deepPink

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
    height 48px
    width 48px
    border-radius 50%
    box-sizing border-box
    border solid 2px $deepBlue
  &:after
    position absolute
    content ''
    bottom 0px
    left 0
    height 12px
    width 12px
    border-radius 50%
    box-sizing border-box
    border solid 1px $deepPink
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
      height 1px
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
.menu, .chart, .music
  fill white
  width 36px
  height 36px
  position absolute
  left 1159px
.menu
  top 48px
.chart
  top 132px
.music
  top 216px
.pomodoro
  position absolute
  top 587px
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
</style>
