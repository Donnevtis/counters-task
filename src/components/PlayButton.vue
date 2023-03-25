<script setup>
import PlayIcon from './icons/PlayIcon.vue';
import PauseIcon from './icons/PauseIcon.vue';

const props = defineProps({ inactive: Boolean });
</script>

<template>
  <button :class="{ 'pause-button': !props.inactive }">
    <component :is="props.inactive ? PlayIcon : PauseIcon" />
  </button>
</template>

<style lang="scss" scoped>
.pause-button {
  padding: 0 px-rem(3px);
}
</style>
