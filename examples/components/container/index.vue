<template>
  <div class="container">
    <h2>常见页面布局</h2>
    <yq-container>
      <yq-header>Header</yq-header>
      <yq-main>Main</yq-main>
    </yq-container>
    <br />

    <yq-container>
      <yq-header height="100px">Header</yq-header>
      <yq-main>Main</yq-main>
      <yq-footer height="100px">Footer</yq-footer>
    </yq-container>
    <br />

    <yq-container>
      <yq-aside width="200px">Aside</yq-aside>
      <yq-main>Main</yq-main>
    </yq-container>
    <br />

    <yq-container>
      <yq-header>Header</yq-header>
      <yq-container>
        <yq-aside width="200px">Aside</yq-aside>
        <yq-main>Main</yq-main>
      </yq-container>
    </yq-container>
    <br />

    <yq-container>
      <yq-header>Header</yq-header>
      <yq-container>
        <yq-aside width="200px">Aside</yq-aside>
        <yq-container>
          <yq-main>Main</yq-main>
          <yq-footer>Footer</yq-footer>
        </yq-container>
      </yq-container>
    </yq-container>
    <br />

    <yq-container>
      <yq-aside width="200px">Aside</yq-aside>
      <yq-container>
        <yq-header>Header</yq-header>
        <yq-main>Main</yq-main>
      </yq-container>
    </yq-container>
    <br />

    <yq-container>
      <yq-aside width="200px">Aside</yq-aside>
      <yq-container>
        <yq-header>Header</yq-header>
        <yq-main>Main</yq-main>
        <yq-footer>Footer</yq-footer>
      </yq-container>
    </yq-container>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.yq-header,
.yq-footer {
  background-color: #cbe1fc;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.yq-aside {
  background-color: #ddebfd;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.yq-main {
  background-color: #eef5fe;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .yq-container {
  margin-bottom: 40px;
}

.yq-container:nth-child(5) .yq-aside,
.yq-container:nth-child(6) .yq-aside {
  line-height: 260px;
}

.yq-container:nth-child(7) .yq-aside {
  line-height: 320px;
}
</style>
