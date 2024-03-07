<!-- To do: 1. add padding at right of table.
            2. vertically center cells-->

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
      <ion-searchbar></ion-searchbar>
      <ion-grid>
        <ion-row class="header-row">
          <ion-col class="header-col" size="1">ID</ion-col>
          <ion-col class="header-col" size="2">Provider Name</ion-col>
          <ion-col class="header-col" size="2">Address</ion-col>
          <ion-col class="header-col" size="2">Address Line 2</ion-col>
          <ion-col class="header-col" size="3">City</ion-col>
          <ion-col class="header-col" size="1">State</ion-col>
          <ion-col class="header-col" size="2">zip</ion-col>
          <ion-col class="header-col" size="2">county</ion-col>
          <ion-col class="header-col" size="3">phone #</ion-col>
          <ion-col class="header-col" size="4">website</ion-col>
          <ion-col class="header-col" size="3">resources</ion-col>
        </ion-row>
        <ion-row v-for="entry in entries" :key="entry.id">
          <ion-col>{{ entry.id }}</ion-col>
          <ion-col>{{ entry.name }}</ion-col>
          <ion-col>{{ entry.address }}</ion-col>
          <ion-col>{{ entry.address2 }}</ion-col>
          <ion-col>{{ entry.city }}</ion-col>
          <ion-col>{{ entry.state }}</ion-col>
          <ion-col>{{ entry.zip }}</ion-col>
          <ion-col>{{ entry.county }}</ion-col>
          <ion-col>{{ entry.phone }}</ion-col>
          <ion-col>{{ entry.website }}</ion-col>
          <ion-col>{{ entry.resources }}</ion-col>
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
  IonSearchbar
} from '@ionic/vue';
import axios from 'axios';
import { ref } from 'vue';
import { add, arrowUp, arrowDown } from 'ionicons/icons';
import { useRouter } from 'vue-router';
const router = useRouter();

interface Entry {
  id: number;
  name: string;
  address: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  county: string;
  phone: string;
  website: string;
  resources: string;
}


export default {
  components: {
    IonBackButton,
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
    IonSearchbar
  },
  data() {
    return {
      entries: [] as Entry[],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData(this: {entries: Entry[]}) {
      try {
        const response = await axios.get('http://localhost:8080/api/providers');
        this.entries = response.data;
      }
      catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  },
  setup() {
    const router = useRouter();
    return { add, arrowUp, arrowDown, router }
  }
}
</script>

<style scoped>
ion-grid {
  padding-left: 10px;
  padding-bottom: 80px;
  min-width: 600px;
}

ion-row {
  /* keep rows from wrapping */
  flex-wrap: nowrap;
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
}

ion-col {
  border: solid 1px;
  text-align: center;
  align-self: stretch;
}

ion-fab {
  padding: 1%;
}
</style>