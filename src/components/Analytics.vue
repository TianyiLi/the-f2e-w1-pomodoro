<template>
  <div>
    <div class="focus-header">FOCUS TIME</div>
    <div class="focus-content">
      <div class="left-side">
        <div class="to-day">TODAY</div>
        <div class="cost-tomato">20</div>
      </div>
      <div class="right-side">
        <div class="week">WEEK</div>
        <div class="week-cost-tomato">108</div>
      </div>
    </div>
    <div class="chart-header">CHART
      <span class="chart-header-span">
        <KeyboardLeft></KeyboardLeft>
        2019.7.1 - 2019.7.7
        <KeyboardRight></KeyboardRight>
      </span>
    </div>
    <div class="chart-box">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
      <div class="line4"></div>
      <div class="line5"></div>
      <div class="line6"></div>
      <div class="line7"></div>
    </div>
    <div class="verticle-line">
      <span>24</span>
      <span>20</span>
      <span>16</span>
      <span>12</span>
      <span>8</span>
      <span>4</span>
    </div>
    <div class="horizontal-line">
      <span>7/1</span>
      <span>7/2</span>
      <span>7/3</span>
      <span>7/4</span>
      <span>7/5</span>
      <span>7/6</span>
      <span>7/7</span>
    </div>
  </div>
</template>
<script>
import KeyboardLeft from './svg/keyboard-left'
import KeyboardRight from './svg/keyboard-right'
export default {
  components: {
    KeyboardLeft,
    KeyboardRight
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/main.styl'
.focus-header
  top 45px
  left 560px
.chart-header
  top 245px
  left 560px
  .chart-header-span
    float right
    font-size 16px
    display flex
    justify-content center
    align-items center
    svg
      fill white
      size 24px
.to-day,
.week
  position absolute
  color white
  font-size 16px
  font-weight bold
.to-day
  top 105px
  left 560px
.week
  left 816px
  top 105px
.cost-tomato, .week-cost-tomato
  position absolute
  color $deepPink
  font-size 64px
  height 64px
  text-align left
  font-weight bold
  display inline-block
  &:after
    content '/TOMATO'
    color rgba(white, 0.2)
    position absolute
    left calc(100% + 8px)
    bottom 0
    font-size 16px
  top 124px
  left 560px
.week-cost-tomato
  left 816px
.chart-box
  position absolute
  size 420px 243px
  top 305.5px
  left 585px
  box-sizing border-box
  border-left 1px solid white
  border-bottom 1px solid white
  display flex
  justify-content space-between
  flex-wrap nowrap
  align-items flex-end
  padding 0 31px
  [class^="line"]
    width 26px
    background-color white
    &:last-of-type
      background-color $deepPink
.horizontal-line, .verticle-line
  color white
.horizontal-line
  position absolute
  top 565px
  left 585px
  display flex
  justify-content space-between
  padding 0 31px
  width 420px
  box-sizing border-box
  span
    width 26px
.verticle-line
  position absolute
  top 306px
  left 560px
  width 18px
  height 243px
  display flex
  flex-direction column
  span
    size 18px 19px
    font-size 16px
    margin-bottom 20px
    text-align left
random(min,max)
  return floor((math(0, 'random')*(max - min + 1) + min)*10.125)
for $num in (1..7)
  .line{$num}
    height unit(random(0, 24), 'px')
</style>
