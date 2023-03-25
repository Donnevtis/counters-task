<script setup>
import { defineEmits } from 'vue';
import BaseRect from './BaseRect';
import PlusIcon from './icons/PlusIcon';

const emits = defineEmits(['click']);
</script>

<template>
  <base-rect class="add-wrapper">
    <button class="add-button" @click="emits('click')">
      <plus-icon />
    </button>
  </base-rect>
</template>

<style scoped lang="scss">
.add-wrapper {
  display: flex;
  justify-content: center;
}

.add-button {
  width: 100%;
  height: 100%;
}
</style>
