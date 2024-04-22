<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/home"></ion-back-button>
        </ion-buttons>
        <ion-title>Admin Page</ion-title>
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
            <ion-col class="header-col" size="2" @click="userSort('username')">
              Username
              <div>
                <ion-icon class="arrows" :icon="arrowUp"
                  v-if="userSortKey != 'username' || userSortDirection != 2"></ion-icon>
                <ion-icon class="arrows" :icon="arrowDown"
                  v-if="userSortKey != 'username' || userSortDirection != 1"></ion-icon>
              </div>
            </ion-col>
            <ion-col class="header-col" size="3" @click="userSort('phone_number')">
              Phone #
              <div>
                <ion-icon class="arrows" :icon="arrowUp"
                  v-if="userSortKey != 'phone_number' || userSortDirection != 2"></ion-icon>
                <ion-icon class="arrows" :icon="arrowDown"
                  v-if="userSortKey != 'phone_number' || userSortDirection != 1"></ion-icon>
              </div>
            </ion-col>
            <ion-col class="header-col" size="3" @click="userSort('email')">
              Email
              <div>
                <ion-icon class="arrows" :icon="arrowUp"
                  v-if="userSortKey != 'email' || userSortDirection != 2"></ion-icon>
                <ion-icon class="arrows" :icon="arrowDown"
                  v-if="userSortKey != 'email' || userSortDirection != 1"></ion-icon>
              </div>
            </ion-col>
            <ion-col class="header-col" size="2" @click="userSort('county')">
              County
              <div>
                <ion-icon class="arrows" :icon="arrowUp"
                  v-if="userSortKey != 'county' || userSortDirection != 2"></ion-icon>
                <ion-icon class="arrows" :icon="arrowDown"
                  v-if="userSortKey != 'county' || userSortDirection != 1"></ion-icon>
              </div>
            </ion-col>
            <ion-col class="header-col" size="2" @click="userSort('verified')">
              Email Verified
              <div>
                <ion-icon class="arrows" :icon="arrowUp"
                  v-if="userSortKey != 'verified' || userSortDirection != 2"></ion-icon>
                <ion-icon class="arrows" :icon="arrowDown"
                  v-if="userSortKey != 'verified' || userSortDirection != 1"></ion-icon>
              </div>
            </ion-col>
            <ion-col class="header-col" size="3" @click="userSort('role')">
              Role
              <div>
                <ion-icon class="arrows" :icon="arrowUp"
                  v-if="userSortKey != 'role' || userSortDirection != 2"></ion-icon>
                <ion-icon class="arrows" :icon="arrowDown"
                  v-if="userSortKey != 'role' || userSortDirection != 1"></ion-icon>
              </div>
            </ion-col>
            <ion-col class="header-col" size="2" @click="userSort('createdAt')">
              Created At
              <div>
                <ion-icon class="arrows" :icon="arrowUp"
                  v-if="userSortKey != 'createdAt' || userSortDirection != 2"></ion-icon>
                <ion-icon class="arrows" :icon="arrowDown"
                  v-if="userSortKey != 'createdAt' || userSortDirection != 1"></ion-icon>
              </div>
            </ion-col>
            <ion-col class="header-col" size="1">Ban</ion-col>
            <!-- empty column to add white space to right of table -->
            <ion-col class="whitespace" size="0.3"></ion-col>
          </ion-row>
          <ion-row v-for="(entry, index) in entries" :key="entry.username">
            <ion-col class="whitespace" size="0.3"></ion-col>
            <ion-col :class="{ even: index % 2 == 1 }" size="2">{{ entry.username }}</ion-col>
            <ion-col :class="{ even: index % 2 == 1 }" size="3">{{ entry.phone_number }}</ion-col>
            <ion-col :class="{ even: index % 2 == 1 }" size="3">{{ entry.email }}</ion-col>
            <ion-col :class="{ even: index % 2 == 1 }" size="2">{{ entry.county }}</ion-col>
            <ion-col :class="{ even: index % 2 == 1 }" size="2">{{ entry.verified }}</ion-col>
            <ion-col :class="{ even: index % 2 == 1 }" size="3">
              <ion-button :id="entry.username">
                {{ entry.role }}
                <ion-icon slot="end" :icon="chevronDown"></ion-icon>
              </ion-button>
                <ion-popover :trigger="entry.username" :dismiss-on-select="true">
                  <ion-list>
                    <ion-item :v-if="isAdmin" :button="true" :detail="false" @click="changeRole(entry.username, 'contributor')">contributor</ion-item>
                    <ion-item :v-if="isAdmin" :button="true" :detail="false" @click="changeRole(entry.username, 'admin')">admin</ion-item>
                    <ion-item :v-if="isAdmin" :button="true" :detail="false" @click="changeRole(entry.username, 'banned')">banned</ion-item>
                  </ion-list>
                </ion-popover>
            </ion-col>
            <ion-col :class="{ even: index % 2 == 1 }" size="2">{{ entry.createdAt }}</ion-col>
            <ion-col :class="{ even: index % 2 == 1 }" size="1">
              <ion-buttons>
                <ion-button class='CRUDButton' size="small" fill="solid" @click="changeRole(entry.username, 'banned')">
                  <ion-icon slot="icon-only" :icon="close"></ion-icon>
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
  IonPopover,
  IonList,
  IonItem,
} from '@ionic/vue';
import { ref } from 'vue';
import axios from 'axios';
import { add, arrowUp, arrowDown, close, chevronBack, chevronForward, chevronDown } from 'ionicons/icons';
import { useRouter } from 'vue-router';
import router from '@/router';

interface Entry {
  username: string;
  county: string;
  phone_number: string;
  email: string;
  verified: boolean;
  role: string;
  createdAt: string;
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
    IonPopover,
    IonList,
    IonItem,
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
    userSortDirection() {
      return this.$store.getters.userSortDirection;
    },
    userSortKey() {
      return this.$store.getters.userSortKey;
    },
    isAdmin() {
      return this.$store.getters.isAdmin;
    }
  },
  setup() {
    const router = useRouter();
    const query = ref('');
    var count = 0;
    const pageSize = 10;

    return { add, arrowUp, arrowDown, close, chevronBack, chevronForward, chevronDown, router, query, count, pageSize }
  },
  methods: {
    async fetchData(this: { entries: Entry[] }) {
      // Fetch the data from the database
      try {
        var userSortKey = this.userSortDirection == 0 ? 'username' : this.userSortKey;
        var userSortDirection = this.userSortDirection == 2 ? 'DESC' : 'ASC';

        const params = {
          search: this.query,
          pageSize: this.pageSize,
          pageCurr: this.pageCurr,
          orderCol: userSortKey,
          orderDirection: userSortDirection,
        };
        const response = await axios.get('http://' + self.location.hostname + ':8081/api/users', {
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
    userSort(key: string) {
      this.$store.commit('userSort', key)
      this.fetchData();
    },
    async changeRole(username: string, role: string) {
      try {
        const response = await axios.post('http://' + self.location.hostname + `:8081/api/users/changeRole/${username}`, {
          newRole: role
        }, {
          withCredentials: true,
        });

        this.fetchData();
      }
      catch (error) {
        console.error('Error changing user role:', error);
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
  margin: auto;
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