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
    <ion-content ref="content">
      <ion-grid>
        <ion-row class="header-row">
          <ion-col size="2">id</ion-col>
          <ion-col size="2">name</ion-col>
          <ion-col size="2">address</ion-col>
          <ion-col size="2">city</ion-col>
          <ion-col size="2">state</ion-col>
          <ion-col size="2">zip</ion-col>
          <ion-col size="2">county</ion-col>
          <ion-col size="2">phone #</ion-col>
          <ion-col size="2">website</ion-col>
          <ion-col size="2">resources</ion-col>
        </ion-row>
        <ion-row v-for="entry in entries">
          <ion-col size="2">{{ entry.name }}</ion-col>
          <ion-col size="2">{{ entry.address }}</ion-col>
          <ion-col size="2">{{ entry.city }}</ion-col>
          <ion-col size="2">{{ entry.state }}</ion-col>
          <ion-col size="2">{{ entry.zip }}</ion-col>
          <ion-col size="2">{{ entry.county }}</ion-col>
          <ion-col size="2">{{ entry.phone }}</ion-col>
          <ion-col size="2">{{ entry.website }}</ion-col>
          <ion-col size="2">{{ entry.resources }}</ion-col>
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
  IonCol
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
    IonCol
  },
  data() {
    return {
      entries: [
        {
          id: 10,
          name: "test",
          address: "123 Way",
          city: "Tusca",
          state: "AL",
          zip: 12345,
          county: "Conecuh",
          phone: 1234567890,
          website: "www.example.com",
          resources: "test2"
        }
      ]
    }
  },
  setup() {
    const router = useRouter();
    const content = ref();
    return { add, router, content }
  }
}
const router = useRouter();

const content = ref();
</script>

<style scoped>
ion-row {
  border: solid 1px;
}

ion-col {
  border: solid 1px
}
</style>