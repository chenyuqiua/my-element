<template>
  <aside class="yq-aside" :style="{ width }">
    <slot />
  </aside>
</template>

<script setup lang="ts">
defineOptions({
  name: "YqAside",
});

defineProps({
  width: {
    type: String,
    default: "300px",
  },
});
</script>
