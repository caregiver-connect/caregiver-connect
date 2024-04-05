import { createStore } from 'vuex';
import VuexPersister from 'vuex-persister';
const vuexPersister = new VuexPersister({
});
const store = createStore({
  state() {
    return {
      isLoggedIn: false,
      username: "",
      userSortKey: "username",
      userSortDirection: 0,
      providerSortKey: "place_id",
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
    },
    userSortDirection(state) {
      return state.userSortDirection;
    },
    userSortKey(state) {
      return state.userSortKey;    
    },
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
    },
    userSort(state, key: string) {
      if (state.userSortKey != key) {
        state.userSortDirection = 1;
      }
      else if (state.userSortDirection < 2) {
        state.userSortDirection++;
      }
      else {
        state.userSortDirection = 0;
      }
      state.userSortKey = key;
    },
  },
  plugins: [vuexPersister.persist]
});

export default store;