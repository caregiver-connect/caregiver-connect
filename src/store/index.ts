import { createStore } from 'vuex';
import VuexPersister from 'vuex-persister';
const vuexPersister = new VuexPersister({
});
const store = createStore({
  state() {
    return {
      isLoggedIn: false,
      username: "",
      sortKey: "id",
      sortDirection: 0,
    };
  },
  getters: {
    isLoggedIn(state) {
      return state.isLoggedIn;
    },
    username(state) {
      return state.username;
    },
    sortDirection(state) {
      return state.sortDirection;
    },
    sortKey(state) {
      return state.sortKey;
    }
  },
  mutations: {
    login(state, username: string) {
      state.isLoggedIn = true;
      state.username = username;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.username = "";
    },
    sort(state, key: string){
      if(state.sortKey != key){
        state.sortDirection = 1;
      }
      else if(state.sortDirection < 2){
        state.sortDirection++;
      }
      else {
        state.sortDirection = 0;
      }
      state.sortKey = key;

    }
  },
  plugins: [vuexPersister.persist]
});

export default store;