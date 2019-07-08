<template>
  <div class="countdownContainer"
    :class="{pause: pause}">
    <div class="inner-circle">
      <PlayerButtonFill class="p-btn"></PlayerButtonFill>
    </div>
    <svg id="svg"
      width="540"
      height="540"
      viewPort="0 0 100 100"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg">
      <circle :r="baseRadius"
        :cx="arcX"
        :cy="arcY"
        fill="transparent"
        :stroke-width="baseStrokeWidth"></circle>
      <circle class="arc"
        :r="arcRadius"
        :style="{'stroke-dashoffset':strokeDashOffSet}"
        :cx="arcX"
        :cy="arcY"
        fill="transparent"
        :stroke-width="arcStrokeWidth"
        :stroke-dasharray="arcStrokeDasharray"></circle>
    </svg>
  </div>
</template>

<script>
import PlayerButtonFill from './svg/player-button-fill'
export default {
  components: {
    PlayerButtonFill
  },
  created () {
    let data = { width: 540, height: 540 }
    this.arcX = data.width / 2
    this.arcY = data.height / 2
    this.baseRadius = this.arcX - 2
    this.baseStrokeWidth = 4
    this.arcRadius = this.baseRadius - 7
    this.arcStrokeWidth = 12
    this.arcStrokeDasharray = Math.PI * this.arcRadius * 2
  },
  data () {
    return {
      arcX: 0,
      arcY: 0,
      baseRadius: 0,
      baseStrokeWidth: 0,
      arcRadius: 0,
      arcStrokeWidth: 0,
      arcStrokeDashway: 0,
      second: this.initSec,
      counterTimer: -1
    }
  },
  props: ['pause', 'initSec'],
  computed: {
    strokeDashOffSet () {
      return Math.PI * (this.arcRadius * 2) * (1 - (this.second / this.initSec))
    }
  }
}
</script>
<style lang="stylus" scoped>
$lightPink = #FFEDF7
$deepBlue = #003164
$lightBlue = #E5F3FF
$deepPink = #FF4384
.countdownContainer
  display flex
  justify-content center
  align-items center
  border-radius: 50%;
  height 540px
  width 540px
.countdownContainer svg circle
  stroke-dashoffset 0
  transition stroke-dashoffset 0.2s linear
  stroke $deepPink
  opacity 0.75
.countdownContainer svg .arc
  stroke none
.inner-circle
  position absolute
  width 510px
  height 510px
  border-radius 50%
  background $deepPink
  .p-btn
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)
    fill white
    width 96px
    height 96px
</style>
