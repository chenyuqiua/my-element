<template>
  <component
    :is="tag"
    :class="[
      'yq-row',
      justify !== 'start' && `is-justify-${justify}`,
      !!align && `is-align-${align}`,
    ]"
    :gutter="gutter"
    :style="style"
  >
    <slot></slot>
  </component>
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
@use "packages/theme-chalk/src/mixins/config" as *;

.#{$namespace}-row {
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
}

.is-justify-center {
  justify-content: center;
}
.is-justify-end {
  justify-content: end;
}
.is-justify-space-between {
  justify-content: space-between;
}
.is-justify-space-around {
  justify-content: space-around;
}
.is-justify-space-evenly {
  justify-content: space-evenly;
}
.is-align-top {
  align-items: flex-start;
}
.is-align-middle {
  align-items: center;
}
.is-align-bottom {
  align-items: flex-end;
}
</style>
