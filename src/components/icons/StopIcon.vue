<script setup>
const props = defineProps({ fill: String });
</script>

<template>
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="20" height="20" :fill="props.fill" />
  </svg>
</template>
