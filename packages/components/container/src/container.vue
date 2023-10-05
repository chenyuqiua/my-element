<template>
  <section :class="['yq-container', { 'is-vertical': isVertical }]">
    <slot />
  </section>
</template>

<script setup lang="ts">
import { Component, computed, useSlots } from "vue";

defineOptions({
  name: "YqContainer",
});

const props = defineProps({
  direction: {
    type: String,
    validator: (val: string) => ["horizontal", "vertical"].includes(val),
  },
});

const slots = useSlots();
// 判断子元素的排列方向, 水平or垂直
const isVertical = computed(() => {
  // 根据传入的direction值进行判断
  if (props.direction === "vertical") return true;
  else if (props.direction === "horizontal") return false;

  // 根据container中是否插入了header或footer进行判断
  if (slots && slots.default) {
    const vNodes = slots.default();
    return vNodes.some((vNode) => {
      const tag = (vNode.type as Component).name;
      return tag === "YqHeader" || tag === "YqFooter";
    });
  } else return false;
});
</script>
