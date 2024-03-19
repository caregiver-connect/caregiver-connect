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
  IonCardContent
} from '@ionic/vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import {createApp} from 'vue';
import ToastPlugin from 'vue-toast-notification';
import {useToast} from 'vue-toast-notification';
import axios from 'axios';
import 'vue-toast-notification/dist/theme-bootstrap.css';
/*const app = createApp({});
app.use(ToastPlugin);
app.mount('#app'); */


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
    IonCardContent
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
  const response = await axios.post('http://localhost:8081/api/users/login', { //NOTE: Email is a good idea but not a field in the database currently
      username: this.username,
      password: this.password,
    });
    // this.$store.commit(this.username, this.username);
    console.log('User logged in successfully:', response.data);
    // Show toast message
    const $toast = useToast();
    let instance = $toast.success(`Welcome back ${this.username}! :)`);
    this.$store.commit("login", this.username);

    // Dismiss the toast after a certain duration (e.g., 3000 milliseconds)
    setTimeout(() => {
      instance.dismiss();
    }, 3000);


    this.router.push('/home');
    // Show toast message
    // Rest input fields after successful login
    this.username = '';
    this.password= '';
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
      // console.log(this.username)
    }
  }
}
</script>





