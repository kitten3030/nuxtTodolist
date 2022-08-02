<template>
  <div class="demo-box">
    <div>使用 bootstrap-vue 模板</div>
    <br />
    <pre>
$ npm install bootstrap-vue --save

編輯 nuxt.config.js
...
  modules: [
    'bootstrap-vue/nuxt',
  ],
  bootstrapVue: {
    // Install the `IconsPlugin` plugin (in addition to `BootstrapVue` plugin)
    icons: false
  },
...
    </pre>
    <hr>
    <div>
      <b-button>Button</b-button>
      <b-button variant="danger">Button</b-button>
      <b-button variant="success">Button</b-button>
      <b-button variant="outline-primary"
                @click="hello()">Button</b-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    hello: function () {
      alert('hello bootstrap-vue @nuxt.js')
    }
  }
}
</script>