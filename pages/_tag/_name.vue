<template>
  <div class="demo-box">
    <h1>商品詳細</h1>
    <hr>
    <div v-if="this.$route.params.name">
      標籤名：{{ this.$route.params.tag }} / {{ this.$route.params.name }}
    </div>
  </div>
</template>