<script setup>
import StopIcon from './icons/StopIcon';
import { theme } from '@/utils/constants';

const props = defineProps({ inactive: Boolean });
</script>

<template>
  <button><stop-icon :fill="props.inactive ? theme.inactive : theme.primary" /></button>
</template>
