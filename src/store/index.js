import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: []
  },
  getters: {
    isUserCreated(state) {
      if (state.user.length > 0) {
        return "Клиент успешно создан";
      }
    }
  },
  mutations: {
    CREATE_NEW_USER(state, payload) {
      state.user.push(payload);
    }
  },
  actions: {
    createNewUser({ commit }, payload) {
      commit("CREATE_NEW_USER", payload);
    }
  }
});
