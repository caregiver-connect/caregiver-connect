<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/home"></ion-back-button>
        </ion-buttons>
          <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="vcs">
        <ion-list style="width: 50%">
          <ion-item>
            <ion-input label-placement="floating" label="Username"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label-placement="floating" label="Password" type="password"></ion-input>
          </ion-item>
        </ion-list>
        <ion-button>Login</ion-button>
        <ion-card class="ion-text-center" color="secondary" style="width: 50%">
          <ion-card-content>
            Still need to Signup? General users sign up
            <a @click="() => router.push('/signup')">here</a>.
            Providers sign up <a @click="() => router.push('/provider-signup')">here</a>.
          </ion-card-content>
        </ion-card>
      </div>
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
    IonInput,
    IonList,
    IonItem,
    IonButton,
    IonCard,
    IonCardContent
  } from '@ionic/vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();
</script>