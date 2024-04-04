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
      <ion-searchbar v-model="query" placeholder="Search" show-clear-button="focus"
        style="padding-left: 3%;"></ion-searchbar>
      <ion-button class="searchButton" @click="() => search()">Search</ion-button>
      <div id="scroller">
        <ion-grid>
          <ion-row class="header-row">
            <!-- empty column to add white space to left of table -->
            <ion-col class="whitespace" size="0.3"></ion-col>
            <ion-col class="header-col" size="1" @click="providerSort('id_cms_other')">
              ID
              <div>
                <ion-icon class="arrows" :icon="arrowUp"
                  v-if="providerSortKey != 'id_cms_other' || providerSortDirection != 2"></ion-icon>
                <ion-icon class="arrows" :icon="arrowDown"
                  v-if="providerSortKey != 'id_cms_other' || providerSortDirection != 1"></ion-icon>
              </div>
            </ion-col>
            <ion-col class="header-col" size="2" @click="providerSort('agency_name')">
              Provider Name
              <div>
                <ion-icon class="arrows" :icon="arrowUp"
                  v-if="providerSortKey != 'agency_name' || providerSortDirection != 2"></ion-icon>
                <ion-icon class="arrows" :icon="arrowDown"
                  v-if="providerSortKey != 'agency_name' || providerSortDirection != 1"></ion-icon>
              </div>
            </ion-col>
            <ion-col class="header-col" size="2" @click="providerSort('addr1')">
              Address
              <div>
                <ion-icon class="arrows" :icon="arrowUp"
                  v-if="providerSortKey != 'addr1' || providerSortDirection != 2"></ion-icon>
                <ion-icon class="arrows" :icon="arrowDown"
                  v-if="providerSortKey != 'addr1' || providerSortDirection != 1"></ion-icon>
              </div>
            </ion-col>
            <ion-col class="header-col" size="2">
              Address Line 2
            </ion-col>
            <ion-col class="header-col" size="3" @click="providerSort('city')">
              City
              <div>
                <ion-icon class="arrows" :icon="arrowUp"
                  v-if="providerSortKey != 'city' || providerSortDirection != 2"></ion-icon>
                <ion-icon class="arrows" :icon="arrowDown"
                  v-if="providerSortKey != 'city' || providerSortDirection != 1"></ion-icon>
              </div>
            </ion-col>
            <ion-col class="header-col" size="1" @click="providerSort('state')">
              State
              <div>
                <ion-icon class="arrows" :icon="arrowUp"
                  v-if="providerSortKey != 'state' || providerSortDirection != 2"></ion-icon>
                <ion-icon class="arrows" :icon="arrowDown"
                  v-if="providerSortKey != 'state' || providerSortDirection != 1"></ion-icon>
              </div>
            </ion-col>
            <ion-col class="header-col" size="2" @click="providerSort('zip')">
              Zip code
              <div>
                <ion-icon class="arrows" :icon="arrowUp"
                  v-if="providerSortKey != 'zip' || providerSortDirection != 2"></ion-icon>
                <ion-icon class="arrows" :icon="arrowDown"
                  v-if="providerSortKey != 'zip' || providerSortDirection != 1"></ion-icon>
              </div>
            </ion-col>
            <ion-col class="header-col" size="2" @click="providerSort('county')">
              County
              <div>
                <ion-icon class="arrows" :icon="arrowUp"
                  v-if="providerSortKey != 'county' || providerSortDirection != 2"></ion-icon>
                <ion-icon class="arrows" :icon="arrowDown"
                  v-if="providerSortKey != 'county' || providerSortDirection != 1"></ion-icon>
              </div>
            </ion-col>
            <ion-col class="header-col" size="3" @click="providerSort('phone_number')">
              Phone #
              <div>
                <ion-icon class="arrows" :icon="arrowUp"
                  v-if="providerSortKey != 'phone_number' || providerSortDirection != 2"></ion-icon>
                <ion-icon class="arrows" :icon="arrowDown"
                  v-if="providerSortKey != 'phone_number' || providerSortDirection != 1"></ion-icon>
              </div>
            </ion-col>
            <ion-col class="header-col" size="3" @click="providerSort('email')">
              Email
              <div>
                <ion-icon class="arrows" :icon="arrowUp"
                  v-if="providerSortKey != 'email' || providerSortDirection != 2"></ion-icon>
                <ion-icon class="arrows" :icon="arrowDown"
                  v-if="providerSortKey != 'email' || providerSortDirection != 1"></ion-icon>
              </div>
            </ion-col>
            <ion-col class="header-col" size="4" @click="providerSort('website')">
              Website
              <div>
                <ion-icon class="arrows" :icon="arrowUp"
                  v-if="providerSortKey != 'website' || providerSortDirection != 2"></ion-icon>
                <ion-icon class="arrows" :icon="arrowDown"
                  v-if="providerSortKey != 'website' || providerSortDirection != 1"></ion-icon>
              </div>
            </ion-col>
            <ion-col class="header-col" size="3" @click="providerSort('resources')">
              Resources
              <div>
                <ion-icon class="arrows" :icon="arrowUp"
                  v-if="providerSortKey != 'resources' || providerSortDirection != 2"></ion-icon>
                <ion-icon class="arrows" :icon="arrowDown"
                  v-if="providerSortKey != 'resources' || providerSortDirection != 1"></ion-icon>
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
            <ion-col :class="{ even: index % 2 == 1 }" size="3">{{ entry.email }}</ion-col>
            <ion-col :class="{ even: index % 2 == 1 }" size="4">{{ entry.website }}</ion-col>
            <ion-col :class="{ even: index % 2 == 1 }" size="3">{{ entry.resources }}</ion-col>
            <ion-col :class="{ even: index % 2 == 1 }" size="1.5">
              <ion-buttons>
                <ion-button class='CRUDButton' size="small" fill="solid" @click="edit(entry.id_cms_other)">
                  <ion-icon slot="icon-only" :icon="pencil"></ion-icon>
                </ion-button>
                <ion-button class='CRUDButton' size="small" fill="solid" @click="remove(entry.id_cms_other)">
                  <ion-icon slot="icon-only" :icon="trash"></ion-icon>
                </ion-button>
              </ion-buttons>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
      <div id='pageButtons'>
        <ion-button color="secondary" @click="changePage(this.pageCurr - 1)">
          <ion-icon slot="icon-only" :icon="chevronBack"></ion-icon>
        </ion-button>
        <template v-for="n in pageNumber">
          <ion-text style="padding: 5px"
            v-if="n == 1 || n == pageNumber || n == pageCurr || n == pageCurr - 1 || n == pageCurr + 1"
            @click="changePage(n)">{{ n }}</ion-text>
          <ion-text v-else-if="n == 2 || n == pageNumber - 1">...</ion-text>
        </template>
        <ion-button color="secondary" @click="changePage(this.pageCurr + 1)">
          <ion-icon slot="icon-only" :icon="chevronForward"></ion-icon>
        </ion-button>
      </div>
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
  IonText,
} from '@ionic/vue';
import { ref } from 'vue';
import axios from 'axios';
import { add, arrowUp, arrowDown, pencil, trash, chevronBack, chevronForward } from 'ionicons/icons';
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
  email: string;
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
    IonText,
  },
  data() {
    return {
      entries: [] as Entry[],
      pageCurr: 1,
      pageNumber: 0,
    }
  },
  created() {
    this.$watch(
      () => this.$route,
      this.fetchData,
      { immediate: true }
    )
  },
  computed: {
    providerSortDirection() {
      return this.$store.getters.providerSortDirection;
    },
    providerSortKey() {
      return this.$store.getters.providerSortKey;
    }
  },
  setup() {
    const router = useRouter();
    const query = ref('');
    var count = 0;
    const pageSize = 10;

    return { add, arrowUp, arrowDown, pencil, trash, chevronBack, chevronForward, router, query, count, pageSize }
  },
  methods: {
    async fetchData(this: { entries: Entry[] }) {
      // Fetch the data from the database
      try {
        const providerSortKey = this.providerSortDirection == 0 ? 'id_cms_other' : this.providerSortKey;
        const providerSortDirection = this.providerSortDirection == 2 ? 'DESC' : 'ASC';

        const params = {
          search: this.query,
          pageSize: this.pageSize,
          pageCurr: this.pageCurr,
          orderCol: providerSortKey,
          orderDirection: providerSortDirection,
        };
        console.log(params);
        const response = await axios.get('http://' + self.location.hostname + ':8081/api/providers', {
          params: params,
        }, {
          headers: {
            'Content-type': 'application/json'
          }
        });
        this.count = response.data.count;
        this.pageNumber = Math.ceil(this.count / this.pageSize);
        this.entries = response.data.rows;
      }
      catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    providerSort(key: string) {
      this.$store.commit('providerSort', key)
      this.fetchData();
    },
    edit(id: string) {
      console.log(id);
      router.push('/edit-provider/' + id)
    },
    async remove(id: string) {
      console.log(id);
      try {
        const response = await axios.delete('http://' + self.location.hostname + `:8081/api/providers/${id}`, {
          withCredentials: true,
        });

        this.fetchData();
      }
      catch (error) {
        console.error('Error deleting provider:', error);
      }
    },
    changePage(page: number) {
      if (page < 1 || page > this.pageNumber) {
        console.log("Outside of page range.");
      } else {
        this.pageCurr = page;
        this.fetchData();
      }
    },
    search() {
      this.pageCurr = 1;
      this.fetchData();
    }
  }
}
</script>

<style scoped>
ion-grid {
  /* padding-bottom: 80px; */
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

ion-searchbar {
  width: 50%;
}

ion-text {
  vertical-align: middle;
}

#scroller {
  overflow-x: scroll;
}

#pageButtons {
  border: none;

  text-align: center;
  /* position: absolute; */
}

.CRUDButton {
  min-width: 25px;
  width: 30px;
}

.searchButton {
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