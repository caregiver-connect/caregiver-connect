<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/home"></ion-back-button>
        </ion-buttons>
        <ion-title>Signup</ion-title>
        <ion-img slot="end" src="../../logo.jpg" @click="() => router.push('/home')"
          style="position: right 5px center; width: 35px;"></ion-img>
      </ion-toolbar>
    </ion-header>
    <ion-content ref="content">
      <div class="vcs">
        <ion-list style="width: 50%">
          <ion-item>
            <ion-input label-placement="floating" label="Username"  v-model="username"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label-placement="floating" label="Password" helper-text="Password must contain an Uppercase, a Lowercase, a number, a special character, and must be 6 or more characters" type="password" v-model="password"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label-placement="floating" label="Retype Password" type="password" v-model="retypePassword"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label-placement="floating" label="Email" type="email" v-model="email"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label-placement="floating" label="Phone #" type="tel" v-model="phoneNumber"></ion-input>
          </ion-item>
          <ion-item>
            <ion-select label-placement="floating" label="County" v-model="county">
              <ion-select-option>Autauga</ion-select-option>
              <ion-select-option>Baldwin</ion-select-option>
              <ion-select-option>Barbour</ion-select-option>
              <ion-select-option>Bibb</ion-select-option>
              <ion-select-option>Blount</ion-select-option>
              <ion-select-option>Bullock</ion-select-option>
              <ion-select-option>Butler</ion-select-option>
              <ion-select-option>Calhoun</ion-select-option>
              <ion-select-option>Chambers</ion-select-option>
              <ion-select-option>Cherokee</ion-select-option>
              <ion-select-option>Chilton</ion-select-option>
              <ion-select-option>Choctaw</ion-select-option>
              <ion-select-option>Clarke</ion-select-option>
              <ion-select-option>Clay</ion-select-option>
              <ion-select-option>Cleburne</ion-select-option>
              <ion-select-option>Coffee</ion-select-option>
              <ion-select-option>Colbert</ion-select-option>
              <ion-select-option>Conecuh</ion-select-option>
              <ion-select-option>Coosa</ion-select-option>
              <ion-select-option>Covington</ion-select-option>
              <ion-select-option>Crenshaw</ion-select-option>
              <ion-select-option>Cullman</ion-select-option>
              <ion-select-option>Dale</ion-select-option>
              <ion-select-option>Dallas</ion-select-option>
              <ion-select-option>DeKalb</ion-select-option>
              <ion-select-option>Elmore</ion-select-option>
              <ion-select-option>Escambia</ion-select-option>
              <ion-select-option>Etowah</ion-select-option>
              <ion-select-option>Fayette</ion-select-option>
              <ion-select-option>Franklin</ion-select-option>
              <ion-select-option>Geneva</ion-select-option>
              <ion-select-option>Greene</ion-select-option>
              <ion-select-option>Hale</ion-select-option>
              <ion-select-option>Henry</ion-select-option>
              <ion-select-option>Houston</ion-select-option>
              <ion-select-option>Jackson</ion-select-option>
              <ion-select-option>Jefferson</ion-select-option>
              <ion-select-option>Lamar</ion-select-option>
              <ion-select-option>Lauderdale</ion-select-option>
              <ion-select-option>Lawrence</ion-select-option>
              <ion-select-option>Lee</ion-select-option>
              <ion-select-option>Limestone</ion-select-option>
              <ion-select-option>Lowndes</ion-select-option>
              <ion-select-option>Macon</ion-select-option>
              <ion-select-option>Madison</ion-select-option>
              <ion-select-option>Marengo</ion-select-option>
              <ion-select-option>Marion</ion-select-option>
              <ion-select-option>Marshall</ion-select-option>
              <ion-select-option>Mobile</ion-select-option>
              <ion-select-option>Monroe</ion-select-option>
              <ion-select-option>Montgomery</ion-select-option>
              <ion-select-option>Morgan</ion-select-option>
              <ion-select-option>Perry</ion-select-option>
              <ion-select-option>Pickens</ion-select-option>
              <ion-select-option>Pike</ion-select-option>
              <ion-select-option>Randolph</ion-select-option>
              <ion-select-option>Russell</ion-select-option>
              <ion-select-option>Saint Clair</ion-select-option>
              <ion-select-option>Shelby</ion-select-option>
              <ion-select-option>Sumter</ion-select-option>
              <ion-select-option>Talladega</ion-select-option>
              <ion-select-option>Tallapoosa</ion-select-option>
              <ion-select-option>Tuscaloosa</ion-select-option>
              <ion-select-option>Walker</ion-select-option>
              <ion-select-option>Washington</ion-select-option>
              <ion-select-option>Wilcox</ion-select-option>
              <ion-select-option>Winston</ion-select-option>
            </ion-select>
          </ion-item>
        </ion-list>
        <ion-button color="crimson" @click="addUser">Signup</ion-button>
        <ion-card class="ion-text-center" color="secondary" style="width: 50%">
          <ion-card-content>
            Already have an account? <a @click="() => router.replace('/login')"><u>Login here.</u></a>
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
  IonList,
  IonItem,
  IonInput,
  IonButton,
  IonCard,
  IonCardContent,
  IonSelect,
  IonSelectOption,
  IonImg
} from '@ionic/vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import {createApp} from 'vue';
import ToastPlugin from 'vue-toast-notification';
import {useToast} from 'vue-toast-notification';
import axios from 'axios';
import 'vue-toast-notification/dist/theme-bootstrap.css';

const router = useRouter();
const username = ref('');
const password = ref('');
const email = ref('');
const phoneNumber = ref('');
const county = ref('');
const retypePassword = ref('');

const isStrongPassword = (password: string) => {
  const isUppercase = /[A-Z]/;
  const isLowerase = /[a-z]/;
  const isNumber = /[0-9]/;
  const isSpecialChar = /[^A-Za-z0-9]/;

  return (
    isUppercase.test(password) &&
    isLowerase.test(password) &&
    isNumber.test(password) &&
    isSpecialChar.test(password)
    );
};

const addUser = async () => {
  try {
    // Extract the county from the array if it's received as an array with one element
    const countyValue = Array.isArray(county.value) ? county.value[0] : county.value;
    if (password.value !== retypePassword.value) {
      throw new Error("Passwords do not match");
    }

    if (password.value.length < 6){
      throw new Error("Password must be 6 or more characters")
    }

    if (!isStrongPassword(password.value)) {
      throw new Error("Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
    }

    const response = await axios.post('http://' + self.location.hostname + ':8081/api/users', { //NOTE: Email is a good idea but not a field in the database currently
      username: username.value,
      password: password.value,
      email: email.value,
      phone_number: phoneNumber.value,
      county: countyValue,
    });
    console.log('User added successfully:', response.data);
    const $toast = useToast();
    let instance = $toast.success(`Signup successful!`);
    // Show toast message
    // Optionally, you can reset input fields after successful submission
    username.value = '';
    password.value = '';
    email.value = '';
    phoneNumber.value = '';
    county.value = '';
    retypePassword.value = '';
    router.push('/home');
    // Reset other input fields similarly
  }  catch (error: any) {
        if (error.response) {
          console.error('Error signing up', error.response.data);
          const $toast = useToast();
          let instance = $toast.error(error.response.data.message); // Assuming error response has a "message" field
          setTimeout(() => {
            instance.dismiss();
          }, 3000);
          // Handle error response from the server
        } else if (error.message.includes("Password must contain")){
          const $toast = useToast();
          let instance = $toast.error(error.message);
          setTimeout(() => {
            instance.dismiss();
          }, 3000);
        } else if (error.message.includes("Password must be")){
          const $toast = useToast();
          let instance = $toast.error(error.message);
          setTimeout(() => {
            instance.dismiss();
          }, 3000);
        } else if (error.message.includes("Passwords do not")){
          const $toast = useToast();
          let instance = $toast.error(error.message);
          setTimeout(() => {
            instance.dismiss();
          }, 3000);
        } else {
          console.error('Unknown error:', error);
          const $toast = useToast();
          let instance = $toast.error('An unknown error occurred. Please try again later.');
          setTimeout(() => {
            instance.dismiss();
          }, 3000);
        }
        // Handle other types of errors
      }
};
const content = ref();
</script>