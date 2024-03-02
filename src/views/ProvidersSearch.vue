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
    <ion-content ref="content" :scroll-x=true>
      <ion-searchbar></ion-searchbar>
      <ion-grid>
        <ion-row class="header-row">
          <ion-col size="1">ID</ion-col>
          <ion-col size="2">Provider Name</ion-col>
          <ion-col size="3">Address</ion-col>
          <ion-col size="2">Address Line 2</ion-col>
          <ion-col size="2">City</ion-col>
          <ion-col size="2">State</ion-col>
          <ion-col size="2">zip</ion-col>
          <ion-col size="3">county</ion-col>
          <ion-col size="3">phone #</ion-col>
          <ion-col size="6">website</ion-col>
          <ion-col size="3">resources</ion-col>
        </ion-row>
        <ion-row v-for="(entry, index) in entries" class="ion-align-items-start">
          <ion-col size="1">{{ entry.id }}</ion-col>
          <ion-col size="2">{{ entry.name }}</ion-col>
          <ion-col size="3">{{ entry.address }}</ion-col>
          <ion-col size="2">{{ entry.address2 }}</ion-col>
          <ion-col size="2">{{ entry.city }}</ion-col>
          <ion-col size="2">{{ entry.state }}</ion-col>
          <ion-col size="2">{{ entry.zip }}</ion-col>
          <ion-col size="3">{{ entry.county }}</ion-col>
          <ion-col size="3">{{ entry.phone }}</ion-col>
          <ion-col size="6">{{ entry.website }}</ion-col>
          <ion-col size="3">{{ entry.resources }}</ion-col>
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
import { ref } from 'vue';
import { add } from 'ionicons/icons';
import { useRouter } from 'vue-router';

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
      entries: [
        {
          id: 10,
          name: "test",
          address: "123 Way",
          address2: "Suite 530",
          city: "Tusca",
          state: "AL",
          zip: 12345,
          county: "Conecuh",
          phone: 1234567890,
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
  setup() {
    const router = useRouter();
    const content = ref();
    return { add, router, content }
  }
}
</script>

<style scoped>
ion-grid {
  padding-left: 10px;
  padding-bottom: 80px;
  /* display: flex;
  flex-flow: column;
  flex-grow: 1; */
  /* width: 600px; */
  min-width: 600px;
}

ion-row {
  border: solid 1px;
  flex-wrap: nowrap;
}

ion-col {
  border: solid 1px;
  text-align: center;
  /* height: 100%; */
}
</style>