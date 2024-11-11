import { defineStore } from "pinia";
import ky from "ky";

const CacheKey = "time";

export const useTimeStore = defineStore("timerStore", {
  state: () => ({
    now: new Date(),
    time: new Date(),
    live: false,
  }),
  actions: {
    async update() {
      console.log("不用再更新了");
      this.time = new Date(1724849457 * 1000);
    },
    refresh() {
      this.now = new Date();
    },
  },
});
