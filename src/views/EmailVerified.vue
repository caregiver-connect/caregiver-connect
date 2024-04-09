<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button default-href="/home"></ion-back-button>
          </ion-buttons>
          <ion-title>Verify Email</ion-title>
          <ion-img slot="end" src="../../logo.jpg" @click="() => router.push('/home')"
            style="position: right 5px center; width: 35px;"></ion-img>
        </ion-toolbar>
      </ion-header>
      <ion-content ref="content">
        <ion-text>Your email has been verified!</ion-text>
      </ion-content>
    </ion-page>
  </template>
    
  <script setup lang="ts">
  import {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonImg
  } from '@ionic/vue';
  import { ref } from 'vue';
  import { add } from 'ionicons/icons';
  import { useRouter } from 'vue-router';
  const router = useRouter();
  
  const content = ref();
  </script>