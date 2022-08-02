<template>
  <div class="demo-box">
    <div>使用 vuex 狀態管理</div>
    <hr>
    <button @click="increment">遞增 + 1</button>
    <div>{{ counter }}</div>
    <div>{{ test1 }}</div>
    <div>{{ test2 }}</div>
    <button @click="counterFn(10)">遞增 + 10</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  name: 'demo1',
  components: {
  },
  data: function () {
    return {}
  },
  props: {},
  computed: {
    // 映射 store.state 狀態數據
    ...mapState({
      counter: (state) => state.counter
    }),
    // 映射 store.getters 獲取狀態數據進行修補方法
    ...mapGetters(['test1','test2'])
  },
  methods: {
    // 映射 store.mutations 變更動作
    ...mapMutations({
      increment: 'increment'
    }),
    // 映射 store.actions 動作方法
    ...mapActions(['counterFn'])
  }
}
</script>