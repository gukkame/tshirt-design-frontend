import { createStore } from 'vuex'
const store = createStore({
  state: {
    count: 0
  },
  getters: {
    getCount(state) {
      return state.count
    }
  },
  actions: {
    async changeCount({ commit }, payload) {
      return Promise.resolve(commit('changeCount', payload))
    },
    async reset({ commit }) {
      return Promise.resolve(commit('reset'))
    }
  },
  mutations: {
    changeCount(state, payload) {
      return (state.count += payload)
    },
    reset(state) {
      return (state.count = 0)
    }
  }
})
export default store
