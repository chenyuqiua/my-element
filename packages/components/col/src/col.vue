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
      Object.entries(size).forEach(([prop, sizeProp]) => {
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

<style lang="scss" scoped>
@use "packages/theme-chalk/src/mixins/_col" as *;
@use "packages/theme-chalk/src/mixins/config" as *;
@use "packages/theme-chalk/src/mixins/mixins" as *;

.#{$namespace}-col {
  float: left;
  box-sizing: border-box;
}

/* .#{$namespace}-col-0 {
  display: none;
  // to avoid introducing !important syntax, redundant css rule is required due to selector priority.
  @include when(guttered) {
    display: none;
  }
} */

@for $i from 0 through 24 {
  .#{$namespace}-col-#{$i} {
    max-width: $i / 24 * 100%;
    flex: 0 0 $i / 24 * 100%;
  }
  .#{$namespace}-col-offset-#{$i} {
    margin-left: $i / 24 * 100%;
  }
  .#{$namespace}-col-push-#{$i} {
    position: relative;
    left: $i / 24 * 100%;
  }
  .#{$namespace}-col-pull-#{$i} {
    position: relative;
    right: $i / 24 * 100%;
  }
}

@include col-size(xs);

@include col-size(sm);

@include col-size(md);

@include col-size(lg);

@include col-size(xl);
</style>
