<template>
  <div class="sample-box">
    <nuxt-link class="item"
               to="/bootstrap"
               active-class="my-active">使用 bootstrap-vue 模板</nuxt-link>
    <nuxt-link class="item"
               to="/post"
               active-class="my-active">文章 - 路由重定向設置，middleware 資料夾內的 redirect.js</nuxt-link>
    <nuxt-link class="item"
               to="/item/12345"
               active-class="my-active">商品 - 接收路由動態參數</nuxt-link>
    <nuxt-link class="item"
               to="/cat"
               active-class="my-active">商品一覽 - 接收路由多個動態參數</nuxt-link>
    <nuxt-link class="item"
               to="/axios"
               active-class="my-active">使用 @nuxtjs/axios</nuxt-link>
    <nuxt-link class="item"
               to="/demo1"
               active-class="my-active">使用 vuex 狀態管理</nuxt-link>
    <nuxt-link class="item"
               to="/demo2"
               active-class="my-active">使用 vuex 狀態管理，做一個 todos</nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
.sample-box {
  padding: 20px;
  a {
    display: block;
    text-decoration: none;
    padding-bottom: 8px;
    margin-bottom: 8px;
    border-bottom: 1px solid var(--color3);
  }
}
</style>