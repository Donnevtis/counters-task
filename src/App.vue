<template>
  <div class="container">
    <time-counter v-for="(counter, index) in counters" :key="index" />
    <add-counter @click="counters.push(0)" />
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import TimeCounter from './components/TimeCounter.vue';
import AddCounter from './components/AddCounter.vue';

const counters = reactive(new Array(4));
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: $color-bg;
  margin: 0 auto;
}

button {
  position: static;
  border: none;
  background: 0;
  padding: 0;
  cursor: pointer;
  padding: px-rem(3px);
  display: flex;
  justify-content: center;
  align-items: center;
  &:focus {
    outline: none;
  }

  &:focus-visible {
    border: 2px solid #ffffff;
    border-radius: 4px;
    outline: none;
  }
}

#counter-app {
  font-family: Gotham Pro, Helvetica, Arial, sans-serif;
  font-size: $font-primary;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color-primary;
  width: 100%;
}

// Адаптивность CSS Grid
// .container {
//   margin: 0 auto;
//   display: grid;
//   row-gap: px-rem(45px);
//   column-gap: px-rem(50px);
//   width: px-rem(225px);
//   padding-top: px-rem(72px);

//   @media (min-width: 768px) {
//     grid-template-columns: repeat(2, 1fr);
//     width: px-rem(500px);
//   }

//   @media (min-width: 1024px) {
//     grid-template-columns: repeat(3, 1fr);
//     width: px-rem(775px);
//   }
// }

// Адаптивность CSS Flexbox
.container {
  margin: 0 auto;
  display: flex;
  width: px-rem(225px);
  padding-top: px-rem(72px);
  row-gap: px-rem(45px);
  column-gap: px-rem(50px);
  flex-wrap: wrap;

  @media (min-width: 768px) {
    width: px-rem(500px);
  }

  @media (min-width: 1024px) {
    width: px-rem(775px);
  }
}
</style>
