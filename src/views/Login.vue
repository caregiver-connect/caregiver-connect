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
    login() {
      // console.log(this.username)
      if (this.username == "test" && this.password == "pass") {
        this.$store.commit("login", this.username);
        this.username = "";
        this.password = "";
        this.router.push('/home');
      }
    }
  }
}
</script>