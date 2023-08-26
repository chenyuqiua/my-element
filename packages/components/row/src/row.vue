<template>
  <div class="yq-row" :gutter="gutter" :style="style">
    <slot></slot>
  </div>
</template>

<script setup>
import { computed, provide } from "vue";
import { rowContextKey } from "./constants";
import { rowProps } from "./row";

defineOptions({
  name: "YqRow",
});

const props = defineProps(rowProps);

const gutter = computed(() => props.gutter);

const style = computed(() => {
  const styles = {};
  if (props.gutter) {
    styles.marginLeft = styles.marginRight = `-${props.gutter / 2}px`;
  }
  return styles;
});

provide(rowContextKey, {
  gutter,
});
</script>

<style lang="scss" scoped>
.yq-row {
  &::before,
  &::after {
    content: "";
    display: block;
  }

  &::after {
    clear: both;
  }
}
</style>
