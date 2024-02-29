import { createStore } from 'vuex';
import VuexPersister from 'vuex-persister';

const vuexPersister = new VuexPersister({

});

const store = createStore({
  state() {
    return {
      isLoggedIn: false,
      username: "",
    };
  },
  getters: {
    isLoggedIn(state) {
      return state.isLoggedIn;
    },
    username(state) {
      return state.username;
    }
  },
  mutations: {
    login(state, username) {
      state.isLoggedIn = true;
      state.username = username;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.username = "";
    }
  },
  plugins: [vuexPersister.persist]
});

export default store;