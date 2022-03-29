import { createStore } from 'vuex'

export default createStore({
  state: {
    firstName: '',
    lastName:''
  },
  getters: {
  },
  mutations: {
    setFirstName(state, newName) {
      state.firstName = newName;
    },

    setLastName(state, newName) {
      state.lastName = newName;
    }
  },
  actions: {
  },
  modules: {
  }
})
