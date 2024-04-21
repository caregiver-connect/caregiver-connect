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
        <ion-button @click="verifyemail">Verify Email</ion-button>
      </div>
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
  IonInput,
  IonList,
  IonItem,
  IonButton,
  IonCard,
  IonCardContent,
  IonImg
} from '@ionic/vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { createApp } from 'vue';
import ToastPlugin from 'vue-toast-notification';
import { useToast } from 'vue-toast-notification';
import axios from 'axios';
import 'vue-toast-notification/dist/theme-bootstrap.css';

export default {
  components: {
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
  },
  setup() {
    const router = useRouter();
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);

    const token = urlParams.get('token')
    console.log(token);


    const user_id = urlParams.get('user')
    console.log(user_id);

    return { router, token, user_id }
  },
  methods: {
    async verifyemail() {
      try {
        const response = await axios.post('http://' + self.location.hostname + ':8081/api/email/verify-email', { //NOTE: Email is a good idea but not a field in the database currently
          token: this.token,
          user_id: this.user_id,
        },{
          headers: {
            'Content-type': 'application/json'
          },
          withCredentials: true, // will allow browser to store cookie
        });
        // Show toast message
        const $toast = useToast();
        let instance = $toast.success(`Your account has been verified!`);

        // Dismiss the toast after a certain duration (e.g., 3000 milliseconds)
        setTimeout(() => {
          instance.dismiss();
        }, 3000);


        this.router.push('/home');
      } catch (error: any) {
        // Handle error response from the server
        if (error.response) {
          console.error('Error verifying user:', error.response.data);
          const $toast = useToast();
          let instance = $toast.error(error.response.data.message); // Assuming error response has a "message" field
          setTimeout(() => {
            instance.dismiss();
          }, 3000);
        }
        // Handle other types of errors
        else {
          console.error('Unknown error:', error);
          const $toast = useToast();
          let instance = $toast.error('An unknown error occurred. Please try again later.');
          setTimeout(() => {
            instance.dismiss();
          }, 3000);
        }
      }
    }
  }
}
</script>
