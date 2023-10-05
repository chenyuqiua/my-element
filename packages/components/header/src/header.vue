<template>
  <header class="yq-header" :style="{ height }">
    <slot />
  </header>
</template>

<script setup lang="ts">
defineOptions({
  name: "YqHeader",
});

defineProps({
  height: {
    type: String,
    default: "60px",
  },
});
</script>
