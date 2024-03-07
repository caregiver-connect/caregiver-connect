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
      <ion-searchbar></ion-searchbar>
      <ion-grid>
        <ion-row class="header-row">
          <!-- empty column to add white space to left of table -->
          <ion-col class="whitespace" size="0.3"></ion-col>
          <ion-col class="header-col" size="1" @click="sort('id')">
            ID
            <ion-icon class="arrows" :icon="arrowUp" v-if="sortKey != 'id' || sortDirection != 2"></ion-icon>
            <ion-icon class="arrows" :icon="arrowDown" v-if="sortKey != 'id' || sortDirection != 1"></ion-icon>
          </ion-col>
          <ion-col class="header-col" size="2" @click="sort('pn')">
            Provider Name
            <ion-icon class="arrows" :icon="arrowUp" v-if="sortKey != 'pn' || sortDirection != 2"></ion-icon>
            <ion-icon class="arrows" :icon="arrowDown" v-if="sortKey != 'pn' || sortDirection != 1"></ion-icon>
          </ion-col>
          <ion-col class="header-col" size="2" @click="sort('addr')">
            Address
            <ion-icon class="arrows" :icon="arrowUp" v-if="sortKey != 'addr' || sortDirection != 2"></ion-icon>
            <ion-icon class="arrows" :icon="arrowDown" v-if="sortKey != 'addr' || sortDirection != 1"></ion-icon>
          </ion-col>
          <ion-col class="header-col" size="2">
            Address Line 2
          </ion-col>
          <ion-col class="header-col" size="3" @click="sort('city')">
            City
            <ion-icon class="arrows" :icon="arrowUp" v-if="sortKey != 'city' || sortDirection != 2"></ion-icon>
            <ion-icon class="arrows" :icon="arrowDown" v-if="sortKey != 'city' || sortDirection != 1"></ion-icon>
          </ion-col>
          <ion-col class="header-col" size="1" @click="sort('state')">
            State
            <ion-icon class="arrows" :icon="arrowUp" v-if="sortKey != 'state' || sortDirection != 2"></ion-icon>
            <ion-icon class="arrows" :icon="arrowDown" v-if="sortKey != 'state' || sortDirection != 1"></ion-icon>
          </ion-col>
          <ion-col class="header-col" size="2" @click="sort('zip')">
            Zip code
            <ion-icon class="arrows" :icon="arrowUp" v-if="sortKey != 'zip' || sortDirection != 2"></ion-icon>
            <ion-icon class="arrows" :icon="arrowDown" v-if="sortKey != 'zip' || sortDirection != 1"></ion-icon>
          </ion-col>
          <ion-col class="header-col" size="2" @click="sort('county')">
            County
            <ion-icon class="arrows" :icon="arrowUp" v-if="sortKey != 'county' || sortDirection != 2"></ion-icon>
            <ion-icon class="arrows" :icon="arrowDown" v-if="sortKey != 'county' || sortDirection != 1"></ion-icon>
          </ion-col>
          <ion-col class="header-col" size="3" @click="sort('phone')">
            Phone #
            <ion-icon class="arrows" :icon="arrowUp" v-if="sortKey != 'phone' || sortDirection != 2"></ion-icon>
            <ion-icon class="arrows" :icon="arrowDown" v-if="sortKey != 'phone' || sortDirection != 1"></ion-icon>
          </ion-col>
          <ion-col class="header-col" size="4" @click="sort('website')">
            Website
            <ion-icon class="arrows" :icon="arrowUp" v-if="sortKey != 'website' || sortDirection != 2"></ion-icon>
            <ion-icon class="arrows" :icon="arrowDown" v-if="sortKey != 'website' || sortDirection != 1"></ion-icon>
          </ion-col>
          <ion-col class="header-col" size="3" @click="sort('resources')">
            Resources
            <ion-icon class="arrows" :icon="arrowUp" v-if="sortKey != 'resources' || sortDirection != 2"></ion-icon>
            <ion-icon class="arrows" :icon="arrowDown" v-if="sortKey != 'resources' || sortDirection != 1"></ion-icon>
          </ion-col>
          <ion-col class="header-col" size="1.5">Edit / Delete</ion-col>
          <!-- empty column to add white space to right of table -->
          <ion-col class="whitespace" size="0.3"></ion-col>
        </ion-row>
        <ion-row v-for="(entry, index) in entries" :key="entry.id">
          <ion-col class="whitespace" size="0.3"></ion-col>
          <ion-col :class="{ even: index % 2 == 1 }" size="1">{{ entry.id }}</ion-col>
          <ion-col :class="{ even: index % 2 == 1 }" size="2">{{ entry.name }}</ion-col>
          <ion-col :class="{ even: index % 2 == 1 }" size="2">{{ entry.address }}</ion-col>
          <ion-col :class="{ even: index % 2 == 1 }" size="2">{{ entry.address2 }}</ion-col>
          <ion-col :class="{ even: index % 2 == 1 }" size="3">{{ entry.city }}</ion-col>
          <ion-col :class="{ even: index % 2 == 1 }" size="1">{{ entry.state }}</ion-col>
          <ion-col :class="{ even: index % 2 == 1 }" size="2">{{ entry.zip }}</ion-col>
          <ion-col :class="{ even: index % 2 == 1 }" size="2">{{ entry.county }}</ion-col>
          <ion-col :class="{ even: index % 2 == 1 }" size="3">{{ entry.phone }}</ion-col>
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
  IonSearchbar
} from '@ionic/vue';
import { ref } from 'vue';
import { add, arrowUp, arrowDown, pencil, trash } from 'ionicons/icons';
import { useRouter } from 'vue-router';

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
    IonSearchbar
  },
  data() {
    return {
      entries: [
        {
          id: 10,
          name: "test",
          address: "123 Way",
          address2: "Suite 530",
          city: "Owens Cross Roads",
          state: "AL",
          zip: 12345,
          county: "Saint Clair",
          phone: "(123)-456-7890",
          website: "www.example.com",
          resources: "hospice"
        },
        {
          id: 11,
          name: "test2",
          address: "123 St",
          address2: "",
          city: "Loosa",
          state: "AK",
          zip: 56789,
          county: "Jefferson",
          phone: 20512345675348,
          website: "www.example2.com",
          resources: "home health, home health, home health, home health, home health,"
        },
        {
          id: 11,
          name: "test2",
          address: "123 St",
          address2: "",
          city: "Loosa",
          state: "AK",
          zip: 56789,
          county: "Jefferson",
          phone: 20512345675348,
          website: "www.example2.com",
          resources: "home health"
        },
        {
          id: 11,
          name: "test2",
          address: "123 St",
          address2: "",
          city: "Loosa",
          state: "AK",
          zip: 56789,
          county: "Jefferson",
          phone: 20512345675348,
          website: "www.example2.com",
          resources: "home health"
        },
        {
          id: 11,
          name: "test2",
          address: "123 St",
          address2: "",
          city: "Loosa",
          state: "AK",
          zip: 56789,
          county: "Jefferson",
          phone: 20512345675348,
          website: "www.example2.com",
          resources: "home health"
        },
        {
          id: 11,
          name: "test2",
          address: "123 St",
          address2: "",
          city: "Loosa",
          state: "AK",
          zip: 56789,
          county: "Jefferson",
          phone: 20512345675348,
          website: "www.example2.com",
          resources: "home health"
        },
        {
          id: 11,
          name: "test2",
          address: "123 St",
          address2: "",
          city: "Loosa",
          state: "AK",
          zip: 56789,
          county: "Jefferson",
          phone: 20512345675348,
          website: "www.example2.com",
          resources: "home health"
        },
        {
          id: 11,
          name: "test2",
          address: "123 St",
          address2: "",
          city: "Loosa",
          state: "AK",
          zip: 56789,
          county: "Jefferson",
          phone: 20512345675348,
          website: "www.example2.com",
          resources: "home health"
        },
        {
          id: 11,
          name: "test2",
          address: "123 St",
          address2: "",
          city: "Loosa",
          state: "AK",
          zip: 56789,
          county: "Jefferson",
          phone: 20512345675348,
          website: "www.example2.com",
          resources: "home health"
        },
        {
          id: 11,
          name: "test2",
          address: "123 St",
          address2: "",
          city: "Loosa",
          state: "AK",
          zip: 56789,
          county: "Jefferson",
          phone: 20512345675348,
          website: "www.example2.com",
          resources: "home health"
        },
        {
          id: 11,
          name: "test2",
          address: "123 St",
          address2: "",
          city: "Loosa",
          state: "AK",
          zip: 56789,
          county: "Jefferson",
          phone: 20512345675348,
          website: "www.example2.com",
          resources: "home health"
        },
        {
          id: 11,
          name: "test2",
          address: "123 St",
          address2: "",
          city: "Loosa",
          state: "AK",
          zip: 56789,
          county: "Jefferson",
          phone: 20512345675348,
          website: "www.example2.com",
          resources: "home health"
        },
        {
          id: 11,
          name: "test2",
          address: "123 St",
          address2: "",
          city: "Loosa",
          state: "AK",
          zip: 56789,
          county: "Jefferson",
          phone: 20512345675348,
          website: "www.example2.com",
          resources: "home health"
        },
        {
          id: 11,
          name: "test2",
          address: "123 St",
          address2: "",
          city: "Loosa",
          state: "AK",
          zip: 56789,
          county: "Jefferson",
          phone: 20512345675348,
          website: "www.example2.com",
          resources: "home health"
        },
        {
          id: 11,
          name: "test2",
          address: "123 St",
          address2: "",
          city: "Loosa",
          state: "AK",
          zip: 56789,
          county: "Jefferson",
          phone: 20512345675348,
          website: "www.example2.com",
          resources: "home health"
        },
        {
          id: 11,
          name: "test2",
          address: "123 St",
          address2: "",
          city: "Loosa",
          state: "AK",
          zip: 56789,
          county: "Jefferson",
          phone: 20512345675348,
          website: "www.example2.com",
          resources: "home health"
        },
        {
          id: 11,
          name: "test2",
          address: "123 St",
          address2: "",
          city: "Loosa",
          state: "AK",
          zip: 56789,
          county: "Jefferson",
          phone: 20512345675348,
          website: "www.example2.com",
          resources: "home health"
        },
        {
          id: 11,
          name: "test2",
          address: "123 St",
          address2: "",
          city: "Loosa",
          state: "AK",
          zip: 56789,
          county: "Jefferson",
          phone: 20512345675348,
          website: "www.example2.com",
          resources: "home health"
        },
        {
          id: 11,
          name: "test2",
          address: "123 St",
          address2: "",
          city: "Loosa",
          state: "AK",
          zip: 56789,
          county: "Jefferson",
          phone: 20512345675348,
          website: "www.example2.com",
          resources: "home health"
        },
        {
          id: 11,
          name: "test2",
          address: "123 St",
          address2: "",
          city: "Loosa",
          state: "AK",
          zip: 56789,
          county: "Jefferson",
          phone: 20512345675348,
          website: "www.example2.com",
          resources: "home health"
        },
        {
          id: 11,
          name: "test2",
          address: "123 St",
          address2: "",
          city: "Loosa",
          state: "AK",
          zip: 56789,
          county: "Jefferson",
          phone: 20512345675348,
          website: "www.example2.com",
          resources: "home health"
        },
        {
          id: 11,
          name: "test2",
          address: "123 St",
          address2: "",
          city: "Loosa",
          state: "AK",
          zip: 56789,
          county: "Jefferson",
          phone: 20512345675348,
          website: "www.example2.com",
          resources: "home health"
        },
        {
          id: 11,
          name: "test2",
          address: "123 St",
          address2: "",
          city: "Loosa",
          state: "AK",
          zip: 56789,
          county: "Jefferson",
          phone: 20512345675348,
          website: "www.example2.com",
          resources: "home health"
        },
        {
          id: 11,
          name: "test2",
          address: "123 St",
          address2: "",
          city: "Loosa",
          state: "AK",
          zip: 56789,
          county: "Jefferson",
          phone: 20512345675348,
          website: "www.example2.com",
          resources: "home health"
        },
        {
          id: 11,
          name: "test2",
          address: "123 St",
          address2: "",
          city: "Loosa",
          state: "AK",
          zip: 56789,
          county: "Jefferson",
          phone: 20512345675348,
          website: "www.example2.com",
          resources: "home health"
        },
        {
          id: 11,
          name: "test2",
          address: "123 St",
          address2: "",
          city: "Loosa",
          state: "AK",
          zip: 56789,
          county: "Jefferson",
          phone: 20512345675348,
          website: "www.example2.com",
          resources: "home health"
        },
      ]
    }
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
    return { add, arrowUp, arrowDown, pencil, trash, router }
  },
  methods: {
    sort(key: string) {
      console.log(key);
      this.$store.commit('sort', key)
      console.log(this.sortDirection)
    },
    edit(index) {
      console.log(index);
    },
    remove(index) {
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