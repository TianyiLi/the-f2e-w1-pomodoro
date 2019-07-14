<template>
  <div>
    <div class="work-header">WORK</div>
    <div class="break-header">BREAK</div>
    <div class="work-music-box">
      <div class="music-option"
        :key="i"
        v-for="(name, i) in options">
        <input type="radio"
          class="radio-btn"
          :id="'work-' + name"
          :value="name"
          v-model="workSelected">
        <label :for="'work-' + name">{{name}}</label>
      </div>
    </div>
    <div class="break-music-box">
      <div class="music-option"
        :key="i"
        v-for="(name, i) in options">
        <input type="radio"
          class="radio-btn"
          :id="'break-' + name"
          :value="name"
          v-model="breakSelected">
        <label :for="'break-' + name">{{name}}</label>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      workSelected: 'DEFAULT',
      breakSelected: 'ALERT',
      options: 'NONE DEFAULT ALARM ALERT BEEP BELL BIRD BUGLE DIGITAL DROP HORN MUSIC RING WATNING WHITSTLE'.split(' ')
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/main.styl'
.work-header
  top 45px
.break-header
  top 335px

[class$="music-box"]
  width 446px
  height 182px
  position absolute
  left 560px
  top 105px
  display flex
  justify-content flex-start
  align-content space-between
  flex-wrap wrap
.break-music-box
  top 395px
.music-option
  width 148px
  text-align left
  display inline-block
  color white
  font-weight bold
  font-size 16px
  line-height 20px
  vertical-align middle
  label
    user-select none
  .radio-btn
    appearance none
    display inline-block
    position relative
    box-sizing border-box
    margin 0
    margin-right 5px
    vertical-align middle
    background-color transparent
    border solid 2px white
    size(20px)
    border-radius 50%
    &:hover
      opacity 0.8
    &:checked
      border-color $deepPink
      &:after
        content ''
        position absolute
        border-radius 50%
        background-color $deepPink
        size(11px)
        top 50%
        left 50%
        transform translate(-50%, -50%)

</style>
