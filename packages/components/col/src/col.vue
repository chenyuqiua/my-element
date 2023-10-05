<template>
  <component :is="tag" :class="['yq-col', colKls]" :style="style">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { computed, inject } from "vue";
import { colProps } from "./col";
import { rowContextKey } from "packages/components/row/src/constants";
import { isNumber, isObject } from "packages/utils";
import type { CSSProperties } from "vue";
// import "../style";

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

  const sizes = ["xs", "sm", "md", "lg", "xl"] as const;
  sizes.forEach((size) => {
    if (isNumber(props[size])) classes.push(`yq-col-${size}-${props[size]}`);
    else if (isObject(props[size])) {
      Object.entries(props[size]).forEach(([prop, sizeProp]) => {
        classes.push(
          prop === "span"
            ? `yq-col-${size}-${sizeProp}`
            : `yq-col-${size}-${prop}-${sizeProp}`
        );
      });
    }
  });

  return classes;
});
</script>
