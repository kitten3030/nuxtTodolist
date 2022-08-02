<template>
  <div class="demo-box">
    <h1>商品一覽({{ this.$route.params.tag }})</h1>
    <hr>
    <ul>
      <li><a :href="this.$route.params.tag + '/cat111'">cat111</a></li>
      <li><a :href="this.$route.params.tag + '/cat222'">cat222</a></li>
    </ul>
  </div>
</template>