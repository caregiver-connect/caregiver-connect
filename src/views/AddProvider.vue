<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/home"></ion-back-button>
        </ion-buttons>
        <ion-title>Add a Provider</ion-title>
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
        <ion-button>
          Add Provider
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import { IonBackButton, IonButtons, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonInput } from '@ionic/vue';
  import { useRouter } from 'vue-router';
  const router = useRouter();

</script>