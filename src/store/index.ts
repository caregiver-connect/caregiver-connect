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
      provider: {
        place_id: "",
        id_cms_other: "",
        agency_name: "",
        email: "",
        phone_number: "",
        website: "",
        addr1: "",
        addr2: "",
        city: "",
        state: "",
        zip: "",
        county: "",
        resources_JSON: {},
        ownership_type: "",
      }
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
    provider(state) {
      return state.provider;
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
    providerSort(state, key: string) {
      if (state.providerSortKey != key) {
        state.providerSortDirection = 1;
      }
      else if (state.providerSortDirection < 2) {
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
    storeProvider(state, provider) {
      state.provider.place_id = provider.place_id;
      state.provider.id_cms_other = provider.id_cms_other;
      state.provider.agency_name = provider.agency_name;
      state.provider.email = provider.email;
      state.provider.phone_number = provider.phone_number;
      state.provider.website = provider.website;
      state.provider.addr1 = provider.addr1;
      state.provider.addr2 = provider.addr2;
      state.provider.city = provider.city;
      state.provider.state = provider.state;
      state.provider.zip = provider.zip;
      state.provider.county = provider.county;
      state.provider.resources_JSON = JSON.parse(provider.resources_JSON);
      state.provider.ownership_type = provider.ownership_type;
    }
  },
  plugins: [vuexPersister.persist]
});

export default store;