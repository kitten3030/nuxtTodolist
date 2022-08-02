<template>
  <div class="demo-box">
    <h1>文章</h1>
    <hr>
    <div v-if="this.$route.params.id">
      文章ID：{{ this.$route.params.id }}
    </div>
  </div>
</template>

<script>
export default {
  // validate method https://nuxtjs.org/docs/2.x/components-glossary/pages-validate
  // 校驗方法 參數
  validate({ params, query, store }) {
    // 限制參數值為數字，否則返回佈局的錯誤頁面
    return /^\d+$/.test(params.id)
  }
}
</script>