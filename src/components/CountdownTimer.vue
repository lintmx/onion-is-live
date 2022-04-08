<script setup lang="ts">
import { reactive, computed, onMounted } from "vue";
import type { CountdownData } from "@/types/types";

const data: CountdownData = {
  time: new Date("2022-04-08T19:09:49+00:00"),
  now: new Date(),
};
const state = reactive(data);

const days = computed(() => {
  const diff = Math.floor((state.now.getTime() - state.time.getTime()) / 1000);
  return `${Math.floor(diff / 86400)}`.padStart(2, "0");
});
const hours = computed(() => {
  const diff = Math.floor((state.now.getTime() - state.time.getTime()) / 1000);
  return `${Math.floor((diff % 86400) / (60 * 60))}`.padStart(2, "0");
});
const minutes = computed(() => {
  const diff = Math.floor((state.now.getTime() - state.time.getTime()) / 1000);
  return `${Math.floor(((diff % 86400) % (60 * 60)) / 60)}`.padStart(2, "0");
});
const seconds = computed(() => {
  const diff = Math.floor((state.now.getTime() - state.time.getTime()) / 1000);
  return `${Math.floor((diff % 86400) % 60)}`.padStart(2, "0");
});

onMounted(() => {
  clearInterval(state.timer);
  state.timer = setInterval(() => {
    state.now = new Date();
  }, 500);
});
</script>

<template>
  <div class="time-box">
    <div class="days">
      <time>{{ days }}</time>
      <span>&emsp;天</span>
    </div>
    <div class="hours">
      <time>{{ hours }}</time>
      <span>小时</span>
    </div>
    <div class="minutes">
      <time>{{ minutes }}</time>
      <span>分钟</span>
    </div>
    <div class="seconds">
      <time>{{ seconds }}</time>
      <span>&emsp;秒</span>
    </div>
  </div>
</template>

<style scoped>
.time-box {
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
}

.time-box > div {
  width: 25% - 4vh;
}

.time-box > div > time {
  font-size: 20vh;
  font-family: "NumberFonts";
  margin: 0 2vh;
}

.time-box > div span {
  font-size: 2vh;
  margin: 0;
  padding: 0;
}

@media screen and (max-width: 1200px) {
  .time-box > div > time {
    font-size: 15vh;
  }
}

@media screen and (max-width: 980px) {
  .time-box > div > time {
    font-size: 7vh;
  }
}

@media screen and (max-width: 640px) {
  .time-box {
    flex-wrap: wrap;
  }
}
</style>
