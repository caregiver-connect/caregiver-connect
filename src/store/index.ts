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
      providerID: "",
      providerName: "", 
      providerEmail: "",
      providerPhone: "",
      providerWebsite: "",
      providerAddress: "",
      addressLine2: "",
      providerCity: "",
      providerState: "",
      providerZip: "",
      providerCounty: "",
      providerOwnershipType: "",
      providerResources: "",
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
    providerID(state) {
      return state.providerID;
    },
    providerName(state) {
      return state.providerName;
    },
    providerEmail(state) {
      return state.providerEmail;
    },
    providerPhone(state) {
      return state.providerPhone;
    },
    providerWebsite(state) {
      return state.providerWebsite;
    },
    providerAddress(state) {
      return state.providerAddress;
    },
    addressLine2(state) {
      return state.addressLine2;
    },
    providerCity(state) {
      return state.providerCity;
    },
    providerState(state) {
      return state.providerState;
    },
    providerZip(state) {
      return state.providerZip;
    },
    providerCounty(state) {
      return state.providerCounty;
    },
    providerOwnershipType(state) {
      return state.providerOwnershipType;
    },
    providerResources(state) {
      return state.providerResources;
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
    storeProvider(state, id: string, name: string, email: string, phone: string, website: string, address: string, addressLine2: string, city: string, st: string, zip: string, county: string, ownershipType: string, resources: string) {
      state.providerID = id;
      state.providerName = name;
      state.providerEmail = email;
      state.providerPhone = phone;
      state.providerWebsite = website;
      state.providerAddress = address;
      state.addressLine2 = addressLine2;
      state.providerCity = city;
      state.providerState = st;
      state.providerZip = zip;
      state.providerCounty = county;
      state.providerOwnershipType = ownershipType;
      state.providerResources = resources;
    }
  },
  plugins: [vuexPersister.persist]
});

export default store;