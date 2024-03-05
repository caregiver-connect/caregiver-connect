<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/home"></ion-back-button>
        </ion-buttons>
        <ion-title>Login</ion-title>
        <ion-img slot="end" src="../../logo.jpg" @click="() => router.push('/home')"
          style="position: right 5px center; width: 35px;"></ion-img>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="vcs">
        <ion-list style="width: 50%">
          <ion-item>
            <ion-input label-placement="floating" label="Username" v-model="username"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label-placement="floating" label="Password" type="password" v-model="password"></ion-input>
          </ion-item>
        </ion-list>
        <ion-button @click="login">Login</ion-button>
        <ion-card class="ion-text-center" color="secondary" style="width: 50%">
          <ion-card-content>
            Still need to Signup?
            <a @click="() => router.push('/signup')"><u>General user sign up here</u></a>.
            <a @click="() => router.push('/provider-signup')"><u>Provider sign up here</u></a>.
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
  IonCardContent,
  IonImg
} from '@ionic/vue';
import { useRouter } from 'vue-router';

const router = useRouter();
import axios from 'axios';
import { ref } from 'vue';

const username = ref('');
const password = ref('');

const login = async () => {
try {
  const response = await axios.post('http://localhost:8081/api/users/login', { //NOTE: Email is a good idea but not a field in the database currently
      username: username.value,
      password: password.value,
    });
    console.log('User logged in successfully:', response.data);
    // Show toast message
    // Optionally, you can reset input fields after successful submission
    username.value = '';
    password.value = '';
    // Reset other input fields similarly
  } catch (error: any) {
    if (error.response) {
      console.error('Error logging in user:', error.response.data);
      // Handle error response from the server
    } else {
      console.error('Unknown error:', error);
      // Handle other types of errors
    }
  }
  };
</script>