import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      { id: 1660950150918, title: "Ir ao mercado", completed: false },
      { id: 1660950150919, title: "Fazer lanche", completed: false },
      { id: 1660950150920, title: "Malhar", completed: false },
      { id: 1660950150921, title: "Buscar filha", completed: false },
      { id: 1660950150922, title: "Ir ao jogo", completed: false }
    ]
  },
  getters: {
  },
  mutations: {
    addTask(state, title) {
        if (title) {
          state.tasks.push({
            id: new Date().getTime(),
            title,
            completed: false,
          });
        }
    }
  },
  actions: {
  },
  modules: {
  }
})
