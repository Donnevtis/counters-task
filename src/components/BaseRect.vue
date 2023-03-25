<template>
  <div class="rect">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.rect {
  width: px-rem(225px);
  height: px-rem(120px);
  background-color: $color-counter;
}
</style>
