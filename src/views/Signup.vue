<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/home"></ion-back-button>
        </ion-buttons>
        <ion-title>Signup</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content ref="content">
      <div class="vcs">
        <ion-card class="ion-text-center" color="primary" style="width: 50%">
          <ion-card-content>Are you a service provider? Signup here instead!</ion-card-content>
          <ion-button color="secondary" @click="() => router.push('/provider-signup')">Provider Signup</ion-button>
        </ion-card>
        <ion-list style="width: 50%">
          <ion-item>
            <ion-input label-placement="floating" label="Username" placeholder="username"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label-placement="floating" label="Password" type="password" placeholder="password1234"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label-placement="floating" label="Retype Password" type="password" placeholder="password1234"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label-placement="floating" label="Email" type="email" placeholder="email address"></ion-input>
          </ion-item>
        </ion-list>
        <ion-button>Signup</ion-button>
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
    IonList,
    IonItem,
    IonInput,
    IonButton,
    IonCard,
    IonCardContent
  } from '@ionic/vue';
  import { ref } from 'vue';
  import { add } from 'ionicons/icons';
  import { useRouter } from 'vue-router';
  const router = useRouter();

  const content = ref();
</script>