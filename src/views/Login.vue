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
            <ion-input label-placement="floating" label="Username" ref="Username"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label-placement="floating" label="Password" type="password" ref="Password"></ion-input>
          </ion-item>
        </ion-list>
        <ion-button @click="login">Login</ion-button>
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
    IonButton
  } from '@ionic/vue';

  import { defineComponent, ref } from 'vue';
  import { useRouter } from 'vue-router';

  // export default {
  //   name: 'Login',
  //   components: {
  //     IonBackButton,
  //     IonButtons,
  //     IonContent,
  //     IonHeader,
  //     IonPage,
  //     IonTitle,
  //     IonToolbar,
  //     IonInput,
  //     IonList,
  //     IonItem,
  //     IonButton
  //   },
  //   // data() {
  //   //   return {
  //   //     Username: "",
  //   //     Password: "test"
  //   //   };
  //   // },
  //   setup() {
      const router = useRouter();
      const Username = ref("test");
      const Password = ref("");

      console.log(Username.value);
      console.log(Password.value)

      const login = () => {
        console.log(Username.value);
        console.log(Password.value);
        if(Username.value == "test"){
          console.log("true")
        }
        // router.push('/home')
      };

      // return {
      //   login
      // };
    // },
  // };
</script>