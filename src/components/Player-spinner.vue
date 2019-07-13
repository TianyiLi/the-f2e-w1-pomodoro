<template>
  <div class="countdownContainer"
    :class="{active: active, rest: isRest}">
    <svg id="svg"
      width="540"
      height="540"
      viewPort="0 0 100 100"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg">
      <circle :r="baseRadius"
        class="svg-outer-circle"
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
    <div class="inner-circle"
      @click="playerOnClick">
      <PlayerButtonFill v-if="!active"
        class="p-btn"></PlayerButtonFill>
      <PausedButtonFill v-else
        class="p-btn"></PausedButtonFill>
      <div class="block"></div>
    </div>
    <div class="sq-block"></div>
  </div>
</template>

<script>
import PlayerButtonFill from './svg/player-button-fill'
import PausedButtonFill from './svg/pause-button-filled'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    PlayerButtonFill,
    PausedButtonFill
  },
  created () {
    let data = { width: 540, height: 540 }
    this.arcX = data.width / 2
    this.arcY = data.height / 2
    this.baseRadius = this.arcX - 2
    this.baseStrokeWidth = 4
    this.arcRadius = this.baseRadius - 7
    this.arcStrokeWidth = 14
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
      counterTimer: -1,
      active: false,
      timerId: -1
    }
  },
  computed: {
    strokeDashOffSet () {
      return Math.PI * (this.arcRadius * 2) * (1 - (this.$store.state.currentCountDownTime / this.$store.state.initCountDownTime))
    },
    ...mapGetters([
      'isRest'
    ])
  },
  methods: {
    ...mapActions([
      'timeCountDown'
    ]),
    playerOnClick () {
      this.active = !this.active
      this.$store.commit('countDownToggle', this.active)
      if (this.active) {
        this.timerId = setInterval(() => {
          if (this.active) this.timeCountDown()
          else clearInterval(this.timerId)
        }, 1000)
      } else {
        clearInterval(this.timerId)
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
$lightPink = #FFEDF7
$deepBlue = #003164
$lightBlue = #E5F3FF
$deepPink = #FF4384
$normalBlue = #00A7FF
.countdownContainer
  display flex
  justify-content center
  align-items center
  border-radius 50%
  height 540px
  width 540px
  &.active
    .inner-circle
      background-color white
      border solid 5px $deepPink
      box-sizing border-box
      .p-btn
        fill $deepPink
      .block
        background-color $deepPink
    svg .arc
      stroke $deepPink
  &.rest.active
    .inner-circle
      background-color white
      border-color $normalBlue
    .p-btn
      fill $normalBlue
    .block
      background-color $normalBlue
    svg .arc
      stroke $normalBlue
  &.rest
    .inner-circle
      background-color $normalBlue
    .svg-outer-circle
      stroke $normalBlue
.countdownContainer svg
  transform rotate(-90deg)
  circle
    stroke-dashoffset 0
    transition stroke-dashoffset 0.2s linear
    stroke $deepPink
.countdownContainer svg .arc
  stroke none
.inner-circle
  position absolute
  width 510px
  height 510px
  border-radius 50%
  background-color $deepPink
  .p-btn
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)
    fill white
    width 96px
    height 96px
    cursor pointer
    transition all 0.3s
    &:hover
      width 110px
      height 110px
  .block
    width 14px
    height 14px
    background-color white
    position absolute
    left 300px
    top 276px
</style>
