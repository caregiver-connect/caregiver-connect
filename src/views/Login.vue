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
            Forgot your password?
            <a @click="() => router.replace('/password-reset-prompt')"><u>Reset Password</u></a>.
          </ion-card-content>
        </ion-card>
        <ion-card class="ion-text-center" color="secondary" style="width: 50%">
          <ion-card-content>
            Still need to Signup?
            <a @click="() => router.replace('/signup')"><u>Signup Here</u></a>.
          </ion-card-content>
        </ion-card>
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
    const username = ref('');
    const password = ref('')
    return { router, username, password }
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://' + self.location.hostname + ':8081/api/users/login', { //NOTE: Email is a good idea but not a field in the database currently
          username: this.username,
          password: this.password,
        },{
          headers: {
            'Content-type': 'application/json'
          },
          withCredentials: true, // will allow browser to store cookie
        });
        // Show toast message
        const $toast = useToast();
        let instance = $toast.success(`Welcome back ${this.username}! :)`);
        this.$store.commit("login", this.username);

        // Dismiss the toast after a certain duration (e.g., 3000 milliseconds)
        setTimeout(() => {
          instance.dismiss();
        }, 3000);


        this.router.push('/home');
        // Rest input fields after successful login
        this.username = '';
        this.password = '';
      } catch (error: any) {
        // Handle error response from the server
        if (error.response) {
          console.error('Error logging in user:', error.response.data);
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
