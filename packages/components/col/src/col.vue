<template>
  <div :class="['yq-col', ` yq-col-${span}`]" :style="style">
    <slot></slot>
  </div>
</template>

<script setup>
import { computed, inject } from "vue";
import { colProps } from "./col";
import { rowContextKey } from "packages/components/row/src/constants";

defineOptions({
  name: "YqCol",
});
const props = defineProps(colProps);

const { gutter } = inject(rowContextKey, { gutter: computed(() => 0) });

const style = computed(() => {
  const styles = {};
  if (gutter.value) {
    styles.paddingLeft = styles.paddingRight = `${gutter.value / 2}px`;
  }
  return styles;
});
</script>

<style lang="scss" scoped>
.yq-col {
  float: left;
  box-sizing: border-box;
}

@for $i from 0 through 24 {
  .yq-col-#{$i} {
    width: $i / 24 * 100%;
  }
}
</style>
