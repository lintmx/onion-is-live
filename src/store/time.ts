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
      // 读取缓存
      const cache = localStorage.getItem(CacheKey);
      if (cache !== null) {
        const data = JSON.parse(cache) || {};
        if (data?.timestamp > Date.now()) {
          this.time = new Date(data.time);
          this.live = data.live;
          return;
        }
      }

      // 无缓存或缓存过期进行接口请求
      const response = await ky.get(
        "https://live-status.minatoaqua.fans/status"
      );
      // const response = await ky.get("/api/status");
      if (response.status === 200) {
        const result = await response.json();
        this.live = result.status === "OK";
        this.time = new Date(this.live ? 0 : result.time * 1000);
        // 存储缓存
        localStorage.setItem(
          CacheKey,
          JSON.stringify({
            timestamp: Date.now() + 60000, // 缓存 60 秒
            time: result.time * 1000,
            live: this.live,
          })
        );
      }
    },
    refresh() {
      this.now = new Date();
    },
  },
});
