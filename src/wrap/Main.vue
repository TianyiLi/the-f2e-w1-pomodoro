<template>
  <div class="wrap"
    :class="isRest && 'rest' || ''">
    <div class="add-new-mission">
      <input type="text" required>
      <span class="label">ADD A NEW MISSION...</span>
      <svg class="add"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        <path d="M0 0h24v24H0z"
          fill="none" /></svg>
    </div>

    <div class="current-todo" :class="isCountDown && 'on-count-down'">THE FIRST THING TO DO TODAY
      <div class="cost-time">
        <div class="ball" :class="num <= currentTODO.costTime && 'fill'" v-for="num in currentTODO.costTime + 1" :key="num"></div>
      </div>
    </div>

    <div class="count-down-display">{{currentCountDownTime|timeF}}</div>

    <ul class="todo-list">
      <li>THE SECOND THING TO DO TODAY <PlayerButton class="player-btn"></PlayerButton>
      </li>
      <li>THE THIRD THING TO DO TODAY <PlayerButton class="player-btn"></PlayerButton>
      </li>
      <li>THE FORTH THING TO DO TODAY <PlayerButton class="player-btn"></PlayerButton>
      </li>
      <div class="corner">MORE</div>
    </ul>

    <List class="menu-todo"
      @click.native="toTODO"></List>
    <InsertChart class="analytics"></InsertChart>
    <Music class="ringtones"></Music>
    <PlayTrigger class="middle-player"
      :pause="true"
      :initSec="30"></PlayTrigger>
  </div>
</template>
<script>
import PlayTrigger from '../components/Player-spinner'
import PlayerButton from '../components/svg/player-button'
import Music from '../components/svg/library-music'
import InsertChart from '../components/svg/insert-chart'
import List from '../components/svg/list'
import { mapActions, mapGetters } from 'vuex'
import constant from '../constant'
export default {
  components: {
    PlayTrigger,
    PlayerButton,
    Music,
    InsertChart,
    List
  },
  computed: {
    ...mapGetters([
      'isRest',
      'currentCountDownTime',
      'currentTODO',
      'isCountDown'
    ])
  },
  methods: {
    ...mapActions([
      'showControl'
    ]),
    toTODO () {
      return this.showControl({ isShow: true, category: constant.TODO_LIST })
    },
    toAnalytics () {
      return this.showControl({ isShow: true, category: constant.ANALYTICS })
    },
    toRingtones () {
      return this.showControl({ isShow: true, category: constant.RINGTONES })
    }
  },
  filters: {
    timeF (value = 0) {
      let mins = (Math.floor(value / 60)) + ''
      let secs = (value % 60) + ''
      return mins.padStart(2, '0') + ':' + secs.padStart(2, '0')
    }
  }
}
</script>
