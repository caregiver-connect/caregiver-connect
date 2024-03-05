<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/home"></ion-back-button>
        </ion-buttons>
        <ion-title>Edit Provider</ion-title>
        <ion-img slot="end" src="../../logo.jpg" @click="() => router.push('/home')"
          style="position: right 5px center; width: 35px;"></ion-img>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="vcs">
        <ion-list style="width: 50%">
          <ion-item>
            <ion-input label-placement="floating" label="Provider Name"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label-placement="floating" label="Addr Line 1"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label-placement="floating" label="Addr Line 2" helper-text="(optional)"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label-placement="floating" label="County"></ion-input>
          </ion-item>
        </ion-list>
        <ion-button color="crimson">Add Provider</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>
  
<script setup lang="ts">
import {
  IonBackButton,
  IonButtons,
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonInput,
  IonImg
} from '@ionic/vue';
import { useRouter } from 'vue-router';
const router = useRouter();

</script>