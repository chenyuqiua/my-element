<template>
  <div class="yq-col">
    <slot></slot>
  </div>
</template>

<script setup>
defineOptions({
  name: "YqCol",
});
defineProps({
  span: {
    type: Number,
    default: 24,
  },
});
</script>

<style lang="scss" scoped></style>
