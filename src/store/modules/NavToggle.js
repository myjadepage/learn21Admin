const navToggle = {
  namespaced: true,
  state: {
    isSideOpen: false
  },
  getters: {
    isShrinked: (state) => state.isSideOpen
  },
  mutations: {
    toggleNav (state) {
      state.isSideOpen = !state.isSideOpen
    }
  },
  actions: {
    toggleSide ({ commit }) {
      commit('toggleNav')
    }
  }
}

export default navToggle
