<template>
  <div class="layout">
    <h2>基础布局</h2>
    <yq-row>
      <yq-col><div class="grid-content ep-bg-purple-dark" /></yq-col>
    </yq-row>
    <yq-row>
      <yq-col :span="12"><div class="grid-content ep-bg-purple" /></yq-col>
      <yq-col :span="12">
        <div class="grid-content ep-bg-purple-light" />
      </yq-col>
    </yq-row>
    <yq-row>
      <yq-col :span="8"><div class="grid-content ep-bg-purple" /></yq-col>
      <yq-col :span="8"><div class="grid-content ep-bg-purple-light" /></yq-col>
      <yq-col :span="8"><div class="grid-content ep-bg-purple" /></yq-col>
    </yq-row>
    <yq-row>
      <yq-col :span="6"><div class="grid-content ep-bg-purple" /></yq-col>
      <yq-col :span="6"><div class="grid-content ep-bg-purple-light" /></yq-col>
      <yq-col :span="6"><div class="grid-content ep-bg-purple" /></yq-col>
      <yq-col :span="6"><div class="grid-content ep-bg-purple-light" /></yq-col>
    </yq-row>
    <yq-row>
      <yq-col :span="4"><div class="grid-content ep-bg-purple" /></yq-col>
      <yq-col :span="4"><div class="grid-content ep-bg-purple-light" /></yq-col>
      <yq-col :span="4"><div class="grid-content ep-bg-purple" /></yq-col>
      <yq-col :span="4"><div class="grid-content ep-bg-purple-light" /></yq-col>
      <yq-col :span="4"><div class="grid-content ep-bg-purple" /></yq-col>
      <yq-col :span="4"><div class="grid-content ep-bg-purple-light" /></yq-col>
    </yq-row>
    <h2>分栏间隔</h2>
    <yq-row :gutter="20">
      <yq-col :span="6"><div class="grid-content ep-bg-purple" /></yq-col>
      <yq-col :span="6"><div class="grid-content ep-bg-purple" /></yq-col>
      <yq-col :span="6"><div class="grid-content ep-bg-purple" /></yq-col>
      <yq-col :span="6"><div class="grid-content ep-bg-purple" /></yq-col>
    </yq-row>
    <h2>混合布局</h2>
    <yq-row :gutter="20">
      <yq-col :span="16"><div class="grid-content ep-bg-purple" /></yq-col>
      <yq-col :span="8"><div class="grid-content ep-bg-purple" /></yq-col>
    </yq-row>
    <yq-row :gutter="20">
      <yq-col :span="8"><div class="grid-content ep-bg-purple" /></yq-col>
      <yq-col :span="8"><div class="grid-content ep-bg-purple" /></yq-col>
      <yq-col :span="4"><div class="grid-content ep-bg-purple" /></yq-col>
      <yq-col :span="4"><div class="grid-content ep-bg-purple" /></yq-col>
    </yq-row>
    <yq-row :gutter="20">
      <yq-col :span="4"><div class="grid-content ep-bg-purple" /></yq-col>
      <yq-col :span="16"><div class="grid-content ep-bg-purple" /></yq-col>
      <yq-col :span="4"><div class="grid-content ep-bg-purple" /></yq-col>
    </yq-row>
    <h2>分栏偏移</h2>
    <yq-row :gutter="20">
      <yq-col :span="6"><div class="grid-content ep-bg-purple" /></yq-col>
      <yq-col :span="6" :offset="6">
        <div class="grid-content ep-bg-purple" />
      </yq-col>
    </yq-row>
    <yq-row :gutter="20">
      <yq-col :span="6" :offset="6">
        <div class="grid-content ep-bg-purple" />
      </yq-col>
      <yq-col :span="6" :offset="6">
        <div class="grid-content ep-bg-purple" />
      </yq-col>
    </yq-row>
    <yq-row :gutter="20">
      <yq-col :span="12" :offset="6">
        <div class="grid-content ep-bg-purple" />
      </yq-col>
    </yq-row>
    <yq-row :gutter="20">
      <yq-col :span="6" :push="12">
        <div class="grid-content ep-bg-purple" />
      </yq-col>
      <yq-col :span="6" :pull="3">
        <div class="grid-content ep-bg-purple" />
      </yq-col>
    </yq-row>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.yq-row {
  margin-bottom: 20px;
}
.yq-row:last-child {
  margin-bottom: 0;
}
.yq-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.ep-bg-purple-dark {
  background: #99a9bf;
}
.ep-bg-purple {
  background: #d3dce6;
}
.ep-bg-purple-light {
  background: #e5e9f2;
}
</style>
