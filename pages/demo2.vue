<template>
  <div class="demo-box">
    <div>使用 vuex 狀態管理，做一個 todos</div>
    <hr>
    <div>
      <input @keyup.enter="addTodo"
             placeholder="請輸入任務">
      <button @click="remove">移除已完成</button>
    </div>
    <ol>
      <li v-for="(data, index) in list"
          :key="data.text">
        <label>
          <input :checked="data.done"
                 @change="toggle(data)"
                 type="checkbox">
          <span :class="{ done: data.done }">{{ data.text }}</span>
        </label>
      </li>
    </ol>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'demo2',
  components: {
  },
  data: function () {
    return {}
  },
  props: {},
  computed: {
    // 映射 store.state 狀態數據
    ...mapState({
      list: (state) => state.todos.list
    })
  },
  methods: {
    addTodo(e) {
      this.add(e.target.value)
      e.target.value = ''
    },
    // 映射 store.mutations 變更動作
    ...mapMutations({
      add: 'todos/add',
      remove: 'todos/remove',
      toggle: 'todos/toggle'
    })
  }
}
</script>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>