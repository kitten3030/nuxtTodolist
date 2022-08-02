export const state = () => ({
  list: []
})

export const mutations = {
  // 添加
  add(state, text) {
    state.list.push({
      text,
      done: false
    })
  },
  // 移除已完成
  remove(state, { todo }) {
    state.list = state.list.filter(data => !data.done)
  },
  // 是否完成
  toggle(state, todo) {
    todo.done = !todo.done
  }
}