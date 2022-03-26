<script setup lang="ts">
import CountdownTimer from "./components/CountdownTimer.vue";
</script>

<template>
  <div class="container">
    <img src="@/assets/logo.svg" />
    <h1>今天洋葱直播了吗</h1>
    <h3>距离洋葱上次直播竟然已经过去</h3>
    <CountdownTimer />
  </div>
</template>

<style>
@import "@/assets/base.css";

.container {
  text-align: center;
}

.container h1 {
  font-size: 7vh;
}

.container > h1,
.container > h3 {
  text-align: center;
}

.container > img {
  animation: transform 4.45s linear 0s infinite forwards;
  stroke: white;
  width: 22.25vh;
}

@media screen and (max-width: 640px) {
  .container h1 {
    font-size: 5vh;
  }

  .container h3 {
    font-size: 2vh;
  }
}

@keyframes transform {
  0% {
    -webkit-transform: rotate(0deg);
    -webkit-transform-origin: center 25%;
    -ms-transform: rotate(0deg);
    -ms-transform-origin: center 25%;
    transform-origin: center 25%;
    transform: rotate(0deg);
  }

  25% {
    -webkit-transform: rotate(25deg);
    -webkit-transform-origin: center 25%;
    -ms-transform: rotate(25deg);
    -ms-transform-origin: center 25%;
    transform-origin: center 25%;
    transform: rotate(25deg);
  }

  50% {
    -webkit-transform: rotate(0deg);
    -webkit-transform-origin: center 25%;
    -ms-transform: rotate(0deg);
    -ms-transform-origin: center 25%;
    transform-origin: center 25%;
    transform: rotate(0deg);
  }

  75% {
    -webkit-transform: rotate(-25deg);
    -webkit-transform-origin: center 25%;
    -ms-transform: rotate(-25deg);
    -ms-transform-origin: center 25%;
    transform-origin: center 25%;
    transform: rotate(-25deg);
  }

  100% {
    -webkit-transform: rotate(0deg);
    -webkit-transform-origin: center 25%;
    -ms-transform: rotate(0deg);
    -ms-transform-origin: center 25%;
    transform-origin: center 25%;
    transform: rotate(0deg);
  }
}
</style>
