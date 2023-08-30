<template>
  <div class="yq-row" :gutter="gutter" :style="style">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, provide } from "vue";
import { rowContextKey } from "./constants";
import { rowProps } from "./row";
import type { CSSProperties } from "vue";

defineOptions({
  name: "YqRow",
});

const props = defineProps(rowProps);

const gutter = computed(() => props.gutter);

provide(rowContextKey, {
  gutter,
});

const style = computed(() => {
  const styles: CSSProperties = {};
  if (props.gutter) {
    styles.marginLeft = styles.marginRight = `-${props.gutter / 2}px`;
  }
  return styles;
});
</script>

<style lang="scss" scoped>
.yq-row {
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
}
</style>
