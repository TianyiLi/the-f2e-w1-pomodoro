<template>
  <div class="wrap">
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

    <div class="current-todo">THE FIRST THING TO DO TODAY</div>

    <div class="count-down-display">25:00</div>

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
import { mapActions } from 'vuex'
import constant from '../constant'
export default {
  components: {
    PlayTrigger,
    PlayerButton,
    Music,
    InsertChart,
    List
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
  }
}
</script>
