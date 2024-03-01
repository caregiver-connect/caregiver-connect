<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title class="hometitle">
          <ion-row class="ion-align-items-center">
            CareGiver Connect
          </ion-row>
        </ion-title>
        <ion-buttons :collapse="true" slot="end">
          <ion-button color="secondary" fill="solid" @click="() => router.push('/login')">Login</ion-button>
          <ion-button color="secondary" fill="solid" @click="() => router.push('/signup')">Signup</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title class="hometitle">
            <ion-row class="ion-align-items-center">
              <ion-text color="primary">
                CareGiver Connect
              </ion-text>
            </ion-row>
          </ion-title>
          <ion-img slot="start" src="../../logo.jpg" style="position: left 5px center; width: 35px;"></ion-img>
          <ion-buttons :collapse="true" slot="end">
            <ion-button color="primary" fill="solid" @click="() => router.push('/login')">Login</ion-button>
            <ion-button color="primary" fill="solid" @click="() => router.push('/signup')">Signup</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-card class="ion-text-center">
        <ion-img src="../../banner.png" />
        <ion-card-content align-items: center>
          If you are an Alabamian facing the challenges of dementia, you are not alone!
          Alabama Caregiver Connect was created by researchers, providers, and caregivers, to help Alabama
          caregivers get information they need about dementia and caregiving.
          Get started by searching for providers or services in your area or tell us about the services in your area!
        </ion-card-content>
      </ion-card>
      <!-- <ion-buttons color="primary" size="large" expand="block"> -->
      <ion-button color="primary" size="large" expand="block" @click="() => router.push('/providers-search')">
        <ion-icon slot="start" :icon="searchCircle" color="secondary"></ion-icon>
        <ion-text color="secondary">Find Providers</ion-text>
      </ion-button>
      <ion-button color="primary" size="large" expand="block" @click="() => router.push('/services-search')">
        <ion-icon slot="start" :icon="searchCircle" color="secondary"></ion-icon>
        <ion-text color="secondary">Find Services</ion-text>
      </ion-button>
      <ion-button color="primary" size="large" expand="block" @click="() => router.push('/add-provider')">
        <ion-icon slot="start" :icon="addCircle" color="secondary"></ion-icon>
        <ion-text color="secondary">Add Provider</ion-text>
      </ion-button>
      <ion-button color="primary" size="large" expand="block" @click="() => router.push('/edit-provider')">
        <ion-icon slot="start" :icon="addCircle" color="secondary"></ion-icon>
        <ion-text color="secondary">Edit Provider</ion-text>
      </ion-button>
      <ion-button color="primary" size="large" expand="block" @click="() => router.push('/edit-provider')">
        <ion-icon slot="start" :icon="addCircle" color="secondary"></ion-icon>
        <ion-text color="secondary">Find Services</ion-text>
      </ion-button>
      <ion-button color="primary" size="large" expand="block" @click="() => router.push('/edit-provider')">
        <ion-icon slot="start" :icon="addCircle" color="secondary"></ion-icon>
        <ion-text color="secondary">Find Services</ion-text>
      </ion-button>
      <ion-button color="primary" size="large" expand="block" @click="() => router.push('/edit-provider')">
        <ion-icon slot="start" :icon="addCircle" color="secondary"></ion-icon>
        <ion-text color="secondary">Find Services</ion-text>
      </ion-button>
      <ion-button color="primary" size="large" expand="block" @click="() => router.push('/edit-provider')">
        <ion-icon slot="start" :icon="addCircle" color="secondary"></ion-icon>
        <ion-text color="secondary">Find Services</ion-text>
      </ion-button>
      <ion-button color="primary" size="large" expand="block" @click="() => router.push('/edit-provider')">
        <ion-icon slot="start" :icon="addCircle" color="secondary"></ion-icon>
        <ion-text color="secondary">Find Services</ion-text>
      </ion-button>
      <ion-button color="primary" size="large" expand="block" @click="() => router.push('/edit-provider')">
        <ion-icon slot="start" :icon="addCircle" color="secondary"></ion-icon>
        <ion-text color="secondary">Find Services</ion-text>
      </ion-button>
      <ion-button color="primary" size="large" expand="block" @click="() => router.push('/edit-provider')">
        <ion-icon slot="start" :icon="addCircle" color="secondary"></ion-icon>
        <ion-text color="secondary">Find Services</ion-text>
      </ion-button>
      <ion-button color="primary" size="large" expand="block" @click="() => router.push('/edit-provider')">
        <ion-icon slot="start" :icon="addCircle" color="secondary"></ion-icon>
        <ion-text color="secondary">Find Services</ion-text>
      </ion-button>
      <ion-button color="primary" size="large" expand="block" @click="() => router.push('/edit-provider')">
        <ion-icon slot="start" :icon="addCircle" color="secondary"></ion-icon>
        <ion-text color="secondary">Find Services</ion-text>
      </ion-button>
      <!-- </ion-buttons> -->
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonCard,
  IonCardContent,
  IonText,
  IonRow,
  IonImg
} from '@ionic/vue';
import { useRouter } from 'vue-router';
import { searchCircle, addCircle } from 'ionicons/icons';
const router = useRouter();

</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 25px;
  line-height: 32px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
