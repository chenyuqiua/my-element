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
// import "../style";

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
