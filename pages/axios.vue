<template>
  <div class="demo-box">
    <div>使用 @nuxtjs/axios</div>
    <br />
    <pre>
$ npm install @nuxtjs/axios --save

編輯 nuxt.config.js
...
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    // https://axios.nuxtjs.org/options/
  },
...
    </pre>
    <hr>
    <div>
      <b-button variant="success"
                @click="fetchGames()">請求數據</b-button>
      <hr>
      <ul>
        <li v-for="item in list">{{item.name}} - {{item.price}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      list: []
    }
  },
  methods: {
    async fetchGames() {
      const data = await this.$axios.$get(
        'https://raw.githubusercontent.com/komavideo/LearnNuxtJS/main/games.json'
      )
      console.log(data)
      this.list = data
    }
  }
}
</script>