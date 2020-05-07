import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    db: null
  },
  mutations: {
    saveDb: (state, db) => {
      state.db = db;
    }
  },
  actions: {
  },
  modules: {
  }
})
