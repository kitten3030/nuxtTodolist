import axios from 'axios'

// firebase 即時資料庫 API
const api = 'https://kittenflutter-56047.firebaseio.com/todolist'

// 狀態數據
export const state = () => ({
  lang: 'en', // 設置語言
  tasks: [
    // { id: 1, content: '吃早飯', done: false },
    // { id: 2, content: '吃中飯', done: true }
  ], // 任務
  isLoading: false, // 加載中
  counter: 0 // 計數
})

// 變更狀態數據動作
export const mutations = {
  // 遞增
  increment(state, payload) {
    // typeof 判斷類型    
    if (typeof payload === 'number') state.counter += payload
    else state.counter++
  },
  // 設置語言
  SET_LANG(state, payload) {
    state.lang = payload
  },
  // 獲取任務
  GET_TASK(state, payload) {
    state.tasks = payload
  },
  // 增加任務
  ADD_TASK(state, payload) {
    state.tasks = [...state.tasks, payload]
  },
  // 更新任務
  UPDATE_TASK(state, payload) {
    state.tasks = state.tasks.map(data => data.name === payload.name ? { ...payload } : data)
  },
  // 移除任務
  REMOVE_TASK(state, payload) {
    state.tasks = state.tasks.filter(data => data.name !== payload.name)
  }
}

// 動作方法
export const actions = {
  counterFn({ state, commit }, payload) {    
    commit('increment', payload)
  },
  // 增加任務
  async ADD_TASK({ state, commit }, payload) {
    state.isLoading = true
    const data = {
      id: new Date().getTime(),
      content: payload,
      done: false,
      name: ''
    }
    const response = await axios.post(`${api}/tasks.json`, data)
    console.log('發送', response.data.name)
    const responseUpdate = await axios.put(`${api}/tasks/${response.data.name}.json`, { ...data, name: response.data.name })
    console.log('更新 name 欄位', responseUpdate.data)
    commit('ADD_TASK', responseUpdate.data)
    state.isLoading = false
  },
  // 更新任務
  async UPDATE_TASK({ state, commit }, payload) {
    // state.isLoading = true
    const response = await axios.put(`${api}/tasks/${payload.name}.json`, { ...payload, done: payload.done = !payload.done })
    console.log('更新', response.data)
    commit('UPDATE_TASK', response.data)
    // state.isLoading = false
  },
  // 移除任務
  async REMOVE_TASK({ state, commit }, payload) {
    state.isLoading = true
    const response = await axios.delete(`${api}/tasks/${payload.name}.json`)
    console.log('刪除', response.data)
    commit('REMOVE_TASK', payload)
    state.isLoading = false
  },
}

// 獲取狀態數據進行修補方法
export const getters = {
  test1(state) {
    return state.counter + 1
  },
  test2(state) {
    return state.counter + 2
  }
}

// 嚴格模式
export const strict = false

// import Vuex from 'vuex'
// import { state } from './state.js'
// import { mutations } from './mutations.js'

// // 創建儲存
// const createStore = () => {
//   return new Vuex.Store({
//     state,
//     mutations,
//   })
// }
// export default createStore