<!-- To do: vertically center cells-->

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/home"></ion-back-button>
        </ion-buttons>
        <ion-title>Providers</ion-title>
        <ion-img slot="end" src="../../logo.jpg" @click="() => router.push('/home')"
          style="position: right 5px center; width: 35px;"></ion-img>
      </ion-toolbar>
    </ion-header>
    <ion-content :scroll-x=true>
      <ion-searchbar v-model="search" placeholder="Search" show-clear-button="focus" style="padding-left: 3%;"></ion-searchbar>
      <ion-button class="searchButton" @click="() => fetchData()">Search</ion-button>
      <ion-grid>
        <ion-row class="header-row">
          <!-- empty column to add white space to left of table -->
          <ion-col class="whitespace" size="0.3"></ion-col>
          <ion-col class="header-col" size="1" @click="sort('id')">
            ID
            <div>
              <ion-icon class="arrows" :icon="arrowUp" v-if="sortKey != 'id' || sortDirection != 2"></ion-icon>
              <ion-icon class="arrows" :icon="arrowDown" v-if="sortKey != 'id' || sortDirection != 1"></ion-icon>
            </div>
          </ion-col>
          <ion-col class="header-col" size="2" @click="sort('pn')">
            Provider Name
            <div>
              <ion-icon class="arrows" :icon="arrowUp" v-if="sortKey != 'pn' || sortDirection != 2"></ion-icon>
              <ion-icon class="arrows" :icon="arrowDown" v-if="sortKey != 'pn' || sortDirection != 1"></ion-icon>
            </div>
          </ion-col>
          <ion-col class="header-col" size="2" @click="sort('addr')">
            Address
            <div>
              <ion-icon class="arrows" :icon="arrowUp" v-if="sortKey != 'addr' || sortDirection != 2"></ion-icon>
              <ion-icon class="arrows" :icon="arrowDown" v-if="sortKey != 'addr' || sortDirection != 1"></ion-icon>
            </div>
          </ion-col>
          <ion-col class="header-col" size="2">
            Address Line 2
          </ion-col>
          <ion-col class="header-col" size="3" @click="sort('city')">
            City
            <div>
              <ion-icon class="arrows" :icon="arrowUp" v-if="sortKey != 'city' || sortDirection != 2"></ion-icon>
              <ion-icon class="arrows" :icon="arrowDown" v-if="sortKey != 'city' || sortDirection != 1"></ion-icon>
            </div>
          </ion-col>
          <ion-col class="header-col" size="1" @click="sort('state')">
            State
            <div>
              <ion-icon class="arrows" :icon="arrowUp" v-if="sortKey != 'state' || sortDirection != 2"></ion-icon>
              <ion-icon class="arrows" :icon="arrowDown" v-if="sortKey != 'state' || sortDirection != 1"></ion-icon>
            </div>
          </ion-col>
          <ion-col class="header-col" size="2" @click="sort('zip')">
            Zip code
            <div>
              <ion-icon class="arrows" :icon="arrowUp" v-if="sortKey != 'zip' || sortDirection != 2"></ion-icon>
              <ion-icon class="arrows" :icon="arrowDown" v-if="sortKey != 'zip' || sortDirection != 1"></ion-icon>
            </div>
          </ion-col>
          <ion-col class="header-col" size="2" @click="sort('county')">
            County
            <div>
              <ion-icon class="arrows" :icon="arrowUp" v-if="sortKey != 'county' || sortDirection != 2"></ion-icon>
              <ion-icon class="arrows" :icon="arrowDown" v-if="sortKey != 'county' || sortDirection != 1"></ion-icon>
            </div>
          </ion-col>
          <ion-col class="header-col" size="3" @click="sort('phone')">
            Phone #
            <div>
              <ion-icon class="arrows" :icon="arrowUp" v-if="sortKey != 'phone' || sortDirection != 2"></ion-icon>
              <ion-icon class="arrows" :icon="arrowDown" v-if="sortKey != 'phone' || sortDirection != 1"></ion-icon>
            </div>
          </ion-col>
          <ion-col class="header-col" size="4" @click="sort('website')">
            Website
            <div>
              <ion-icon class="arrows" :icon="arrowUp" v-if="sortKey != 'website' || sortDirection != 2"></ion-icon>
              <ion-icon class="arrows" :icon="arrowDown" v-if="sortKey != 'website' || sortDirection != 1"></ion-icon>
            </div>
          </ion-col>
          <ion-col class="header-col" size="3" @click="sort('resources')">
            Resources
            <div>
              <ion-icon class="arrows" :icon="arrowUp" v-if="sortKey != 'resources' || sortDirection != 2"></ion-icon>
              <ion-icon class="arrows" :icon="arrowDown" v-if="sortKey != 'resources' || sortDirection != 1"></ion-icon>
            </div>
          </ion-col>
          <ion-col class="header-col" size="1.5">Edit / Delete</ion-col>
          <!-- empty column to add white space to right of table -->
          <ion-col class="whitespace" size="0.3"></ion-col>
        </ion-row>
        <ion-row v-for="(entry, index) in entries" :key="entry.id_cms_other">
          <ion-col class="whitespace" size="0.3"></ion-col>
          <ion-col :class="{ even: index % 2 == 1 }" size="1">{{ entry.id_cms_other }}</ion-col>
          <ion-col :class="{ even: index % 2 == 1 }" size="2">{{ entry.agency_name }}</ion-col>
          <ion-col :class="{ even: index % 2 == 1 }" size="2">{{ entry.addr1 }}</ion-col>
          <ion-col :class="{ even: index % 2 == 1 }" size="2">{{ entry.addr2 }}</ion-col>
          <ion-col :class="{ even: index % 2 == 1 }" size="3">{{ entry.city }}</ion-col>
          <ion-col :class="{ even: index % 2 == 1 }" size="1">{{ entry.state }}</ion-col>
          <ion-col :class="{ even: index % 2 == 1 }" size="2">{{ entry.zip }}</ion-col>
          <ion-col :class="{ even: index % 2 == 1 }" size="2">{{ entry.county }}</ion-col>
          <ion-col :class="{ even: index % 2 == 1 }" size="3">{{ entry.phone_number }}</ion-col>
          <ion-col :class="{ even: index % 2 == 1 }" size="4">{{ entry.website }}</ion-col>
          <ion-col :class="{ even: index % 2 == 1 }" size="3">{{ entry.resources }}</ion-col>
          <ion-col :class="{ even: index % 2 == 1 }" size="1.5">
            <ion-buttons>
              <ion-button size="small" fill="solid" @click="edit(index)">
                <ion-icon slot="icon-only" :icon="pencil"></ion-icon>
              </ion-button>
              <ion-button size="small" fill="solid" @click="remove(index)">
                <ion-icon slot="icon-only" :icon="trash"></ion-icon>
              </ion-button>
            </ion-buttons>
          </ion-col>
        </ion-row>
      </ion-grid>
      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button @click="() => router.push('/add-provider')" color="crimson">
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
  IonSearchbar,
} from '@ionic/vue';
import { ref } from 'vue';
import axios from 'axios';
import { add, arrowUp, arrowDown, pencil, trash } from 'ionicons/icons';
import { useRouter } from 'vue-router';
import router from '@/router';

interface Entry {
  id_cms_other: number;
  agency_name: string;
  addr1: string;
  addr2: string;
  city: string;
  state: string;
  zip: string;
  county: string;
  phone_number: string;
  website: string;
  resources: string;
}

export default {
  components: {
    IonBackButton,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonFab,
    IonFabButton,
    IonIcon,
    IonImg,
    IonGrid,
    IonRow,
    IonCol,
    IonSearchbar,
  },
  data() {
    return {
      entries: [] as Entry[],
      // count: 0,
    }
  },
  created() {
    this.$watch(
      () => this.$route,
      this.fetchData,
      {immediate: true}
    )
  },
  computed: {
    sortDirection() {
      return this.$store.getters.sortDirection;
    },
    sortKey() {
      return this.$store.getters.sortKey;
    }
  },
  setup() {
    const router = useRouter();
    const search = ref('');
    var count = 0;
    const pageSize = 2;
    const pageNumber = 0;
    const pageCurr = 1;

    return { add, arrowUp, arrowDown, pencil, trash, router, search, count, pageSize, pageNumber, pageCurr }
  },
  methods: {
    async fetchData(this: { entries: Entry[] }) {
      try {
        // console.log(this.count);
        // const count_response = await axios.get('http://' + self.location.hostname + ':8081/api/providers/count');
        // this.count = count_response.data;
        // console.log(this.count);
        // this.pageNumber = Math.ceil(this.count / this.pageSize);

        const params = {
          search: this.search,
        };
        console.log(params);
        const response = await axios.get('http://' + self.location.hostname + ':8081/api/providers', {
          params: params,
        },{
          headers: {
            'Content-type': 'application/json'
          }
        });
        this.entries = response.data;
      }
      catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    sort(key: string) {
      console.log(key);
      this.$store.commit('sort', key)
      console.log(this.sortDirection)
    },
    edit(index: number) {
      console.log(index);
    },
    remove(index: number) {
      console.log(index);
    }
  }
}
</script>

<style scoped>
ion-grid {
  padding-bottom: 80px;
  min-width: 600px;
}

ion-row {
  /* keep rows from wrapping */
  flex-wrap: nowrap;
}

ion-col {
  border: solid 1px;
  text-align: center;
  align-self: stretch;
}

ion-fab {
  padding: 1%;
}

ion-button {
  min-width: 25px;
  width: 30px;
}

ion-searchbar {
  width: 50%;
}

.searchButton {
  min-width: none;
  width: 25%;
  padding-left: 3%;
}

.arrows {
  width: 12px;
}

.header-row {
  color: #ffffff;

  /* keep header row at top of screen when scroll */
  position: sticky;
  top: 0px;
  left: 0px;
  right: 0;
  z-index: 9999;
}

.header-col {
  background-color: #9e1b32;
}

.even {
  background-color: lightgray;
  color: black;
}

.whitespace {
  color: transparent;
}
</style>