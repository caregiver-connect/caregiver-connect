<template>
  <ion-page>
      <ion-header>
          <ion-toolbar>
              <ion-buttons slot="start">
                  <ion-back-button default-href="/home"></ion-back-button>
              </ion-buttons>
              <ion-title>Password Reset</ion-title>
              <ion-img slot="end" src="../../logo.jpg" @click="() => router.push('/home')"
                  style="position: right 5px center; width: 35px;"></ion-img>
          </ion-toolbar>
      </ion-header>
      <ion-content>
          <div class="vcs">
              <ion-list style="width: 50%">
                  <ion-item>
                      <ion-input label-placement="floating" label="New Password" type="password" v-model="password"></ion-input>
                  </ion-item>
                  <ion-item>
                      <ion-input label-placement="floating" label="Confirm New Password" type="password" v-model="confirmpassword"></ion-input>
                  </ion-item>
              </ion-list>
              <ion-button @click="resetpassword">Reset Password</ion-button>
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
import { useRouter, useRoute } from 'vue-router';
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
        const route = useRoute();
        const password = ref('');
        const confirmpassword = ref('')
        return { router, route, password, confirmpassword }
    },
    methods: {
        async resetpassword() {
            try {
                const response = await axios.post('http://' + self.location.hostname + ':8081/api/email/reset-password', { //NOTE: Email is a good idea but not a field in the database currently
                    password: this.password,
                    confirmpassword: this.confirmpassword,
                    token: this.route.params.token,
                    user_id: this.route.params.id,
                },{
                    headers: {
                        'Content-type': 'application/json'
                    },
                    withCredentials: true, // will allow browser to store cookie
                });
                // Show toast message
                const $toast = useToast();
                let instance = $toast.success(`Password Reset Succesfully!`);
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
