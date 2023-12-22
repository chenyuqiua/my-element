<template>
  <i :class="['yq-icon', `yq-icon-${name}`]"> </i>
</template>

<script setup lang="ts">
import { iconProps } from "./icon.ts";

defineOptions({ name: "YqIcon" });

const props = defineProps(iconProps);
</script>
