<script setup>
import { ref, computed, onUnmounted } from 'vue';
import BaseRect from './BaseRect.vue';
import PlayButton from './PlayButton.vue';
import StopButton from './StopButton.vue';

const inactive = ref(true);
const count = ref(0);

let intervalId;

const handlePlayPause = () => {
  inactive.value = !inactive.value;

  if (!inactive.value) {
    intervalId = setInterval(() => count.value++, 1000);
  } else {
    clearInterval(intervalId);
  }
};

const handleStop = () => {
  clearInterval(intervalId);
  inactive.value = true;
  count.value = 0;
};

const time = computed(() => {
  const hours = String(Math.floor(count.value / 60 / 60));
  const minutes = String(Math.floor((count.value / 60) % 60));
  const seconds = String(count.value % 60);

  const h = count.value >= 60 * 60 ? `${hours}:` : '';
  const m = count.value >= 60 ? `${h ? minutes.padStart(2, '0') : minutes}:` : '';
  const s = m ? seconds.padStart(2, '0') : seconds;

  return `${h}${m}${s}`;
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<template>
  <base-rect
    class="counter-wrapper"
    :class="{
      'counter-wrapper__inactive': inactive,
    }"
    :inactive="inactive"
  >
    <section
      class="counter"
      :class="{
        counter__inactive: inactive,
      }"
    >
      <p>
        {{ time }}
      </p>
    </section>
    <section class="controls">
      <play-button
        :inactive="inactive"
        @click="handlePlayPause()"
        tabindex="0"
        data-test="play-button"
      />
      <stop-button
        :inactive="inactive"
        @click="handleStop()"
        tabindex="0"
        data-test="stop-button"
      />
    </section>
  </base-rect>
</template>

<style scoped lang="scss">
.counter-wrapper {
  &::before {
    content: '';
    box-sizing: border-box;
    display: block;
    position: relative;
    border-top: $color-primary solid 1px;
    height: 1px;
    width: inherit;
    top: 50%;
  }
  &__inactive {
    &::before {
      border-color: $color-inactive;
    }
  }
}

.counter {
  width: 100%;
  height: 50%;
  font-size: 22px;

  display: flex;
  align-items: center;
  justify-content: center;
  &__inactive {
    color: $color-inactive;
  }
}

.bottom-wrapper {
  display: flex;
}

.controls {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: px-rem(67px);
  padding-right: px-rem(67px);
}
</style>
