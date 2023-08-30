<template>
  <div :class="['yq-col', colKls]" :style="style">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from "vue";
import { colProps } from "./col";
import { rowContextKey } from "packages/components/row/src/constants";
import { isNumber } from "packages/utils/types";
import type { CSSProperties } from "vue";

defineOptions({
  name: "YqCol",
});
const props = defineProps(colProps);

const { gutter } = inject(rowContextKey, { gutter: computed(() => 0) });

const style = computed(() => {
  const styles: CSSProperties = {};
  if (gutter.value) {
    styles.paddingLeft = styles.paddingRight = `${gutter.value / 2}px`;
  }
  return styles;
});

const colKls = computed(() => {
  const classes: string[] = [];
  const pos = ["span", "offset", "push", "pull"] as const;

  pos.forEach((prop) => {
    const size = props[prop];
    if (isNumber(size)) {
      if (prop === "span") classes.push(`yq-col-${props[prop]}`);
      else if (size > 0) classes.push(`yq-col-${prop}-${props[prop]}`);
    }
  });

  return classes;
});
</script>

<style lang="scss" scoped>
.yq-col {
  float: left;
  box-sizing: border-box;
}

@for $i from 0 through 24 {
  .yq-col-#{$i} {
    max-width: $i / 24 * 100%;
    flex: 0 0 $i / 24 * 100%;
  }
  .yq-col-offset-#{$i} {
    margin-left: $i / 24 * 100%;
  }
  .yq-col-push-#{$i} {
    position: relative;
    left: $i / 24 * 100%;
  }
  .yq-col-pull-#{$i} {
    position: relative;
    right: $i / 24 * 100%;
  }
}
</style>
