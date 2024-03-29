import { createStore } from 'vuex';
import VuexPersister from 'vuex-persister';
const vuexPersister = new VuexPersister({
});
const store = createStore({
  state() {
    return {
      isLoggedIn: false,
      username: "",
      providerSortKey: "id_cms_other",
      providerSortDirection: 1,
    };
  },
  getters: {
    isLoggedIn(state) {
      return state.isLoggedIn;
    },
    username(state) {
      return state.username;
    },
    providerSortDirection(state) {
      return state.providerSortDirection;
    },
    providerSortKey(state) {
      return state.providerSortKey;
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
    providerSort(state, key: string){
      if(state.providerSortKey != key){
        state.providerSortDirection = 1;
      }
      else if(state.providerSortDirection < 2){
        state.providerSortDirection++;
      }
      else {
        state.providerSortDirection = 0;
      }
      state.providerSortKey = key;

    }
  },
  plugins: [vuexPersister.persist]
});

export default store;