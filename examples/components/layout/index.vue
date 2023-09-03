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
    <h2>对齐方式</h2>
    <yq-row class="row-bg">
      <yq-col :span="6"><div class="grid-content ep-bg-purple" /></yq-col>
      <yq-col :span="6"><div class="grid-content ep-bg-purple-light" /></yq-col>
      <yq-col :span="6"><div class="grid-content ep-bg-purple" /></yq-col>
    </yq-row>
    <yq-row class="row-bg" justify="center">
      <yq-col :span="6"><div class="grid-content ep-bg-purple" /></yq-col>
      <yq-col :span="6"><div class="grid-content ep-bg-purple-light" /></yq-col>
      <yq-col :span="6"><div class="grid-content ep-bg-purple" /></yq-col>
    </yq-row>
    <yq-row class="row-bg" justify="end">
      <yq-col :span="6"><div class="grid-content ep-bg-purple" /></yq-col>
      <yq-col :span="6"><div class="grid-content ep-bg-purple-light" /></yq-col>
      <yq-col :span="6"><div class="grid-content ep-bg-purple" /></yq-col>
    </yq-row>
    <yq-row class="row-bg" justify="space-between">
      <yq-col :span="6"><div class="grid-content ep-bg-purple" /></yq-col>
      <yq-col :span="6"><div class="grid-content ep-bg-purple-light" /></yq-col>
      <yq-col :span="6"><div class="grid-content ep-bg-purple" /></yq-col>
    </yq-row>
    <yq-row class="row-bg" justify="space-around">
      <yq-col :span="6"><div class="grid-content ep-bg-purple" /></yq-col>
      <yq-col :span="6"><div class="grid-content ep-bg-purple-light" /></yq-col>
      <yq-col :span="6"><div class="grid-content ep-bg-purple" /></yq-col>
    </yq-row>
    <yq-row class="row-bg" justify="space-evenly">
      <yq-col :span="6"><div class="grid-content ep-bg-purple" /></yq-col>
      <yq-col :span="6"><div class="grid-content ep-bg-purple-light" /></yq-col>
      <yq-col :span="6"><div class="grid-content ep-bg-purple" /></yq-col>
    </yq-row>
    <h2>响应式布局</h2>
    <yq-row :gutter="10">
      <yq-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content ep-bg-purple" />
      </yq-col>
      <yq-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        <div class="grid-content ep-bg-purple-light" />
      </yq-col>
      <yq-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        <div class="grid-content ep-bg-purple" />
      </yq-col>
      <yq-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content ep-bg-purple-light" />
      </yq-col>
    </yq-row>
    <h2>基于断点的隐藏类</h2>
    <yq-row class="row-bg">
      <yq-col class="hidden-xs-only" :span="6">
        <div class="grid-content ep-bg-purple">1</div>
      </yq-col>
      <yq-col class="hidden-sm-only" :span="6">
        <div class="grid-content ep-bg-purple-light">2</div>
      </yq-col>
      <yq-col class="hidden-sm-and-down" :span="6">
        <div class="grid-content ep-bg-purple">3</div>
      </yq-col>
      <yq-col class="hidden-sm-and-up" :span="6">
        <div class="grid-content ep-bg-purple-light">4</div>
      </yq-col>
      <yq-col class="hidden-md-only" :span="6">
        <div class="grid-content ep-bg-purple">5</div>
      </yq-col>
      <yq-col class="hidden-md-and-down" :span="6">
        <div class="grid-content ep-bg-purple-light">6</div>
      </yq-col>
      <yq-col class="hidden-md-aand-up" :span="6">
        <div class="grid-content ep-bg-purple-light">7</div>
      </yq-col>
      <yq-col class="hidden-lg-only" :span="6">
        <div class="grid-content ep-bg-purple-light">8</div>
      </yq-col>
      <yq-col class="hidden-lg-and-down" :span="6">
        <div class="grid-content ep-bg-purple-light">9</div>
      </yq-col>
      <yq-col class="hidden-lg-and-up" :span="6">
        <div class="grid-content ep-bg-purple-light">10</div>
      </yq-col>
      <yq-col class="hidden-xl-only" :span="6">
        <div class="grid-content ep-bg-purple-light">11</div>
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
