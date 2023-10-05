<template>
  <footer class="yq-footer" :style="{ height }">
    <slot />
  </footer>
</template>

<script setup lang="ts">
defineOptions({
  name: "YqFooter",
});

defineProps({
  height: {
    type: String,
    default: "60px",
  },
});
</script>
