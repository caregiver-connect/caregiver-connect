<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/home"></ion-back-button>
        </ion-buttons>
        <ion-title>Add a Provider</ion-title>
        <ion-img slot="end" src="../../logo.jpg" @click="() => router.push('/home')"
          style="position: right 5px center; width: 35px;"></ion-img>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="vcs">
        <ion-list style="width: 50%">
          <ion-item>
            <ion-input label-placement="floating" label="Provider ID" v-model="providerId"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label-placement="floating" label="Provider Name" v-model="providerName"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label-placement="floating" label="Provider Email" type="email"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label-placement="floating" label="Provider Phone #" type="tel" v-model="providerPhone"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label-placement="floating" label="Provider Website" type="url" v-model="providerWebsite"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label-placement="floating" label="Address" v-model="providerAddress"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label-placement="floating" label="Addr Line 2" helper-text="(optional)" v-model="addressLine2"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label-placement="floating" label="City" v-model="city"></ion-input>
          </ion-item>
          <ion-item>
            <ion-select lebel-placement="floating" label="State" v-model="state">
              <ion-select-option>AL</ion-select-option>
              <ion-select-option>AK</ion-select-option>
              <ion-select-option>AZ</ion-select-option>
              <ion-select-option>AR</ion-select-option>
              <ion-select-option>CA</ion-select-option>
              <ion-select-option>CO</ion-select-option>
              <ion-select-option>CT</ion-select-option>
              <ion-select-option>DE</ion-select-option>
              <ion-select-option>FL</ion-select-option>
              <ion-select-option>GA</ion-select-option>
              <ion-select-option>HI</ion-select-option>
              <ion-select-option>ID</ion-select-option>
              <ion-select-option>IL</ion-select-option>
              <ion-select-option>IN</ion-select-option>
              <ion-select-option>IA</ion-select-option>
              <ion-select-option>KS</ion-select-option>
              <ion-select-option>KY</ion-select-option>
              <ion-select-option>LA</ion-select-option>
              <ion-select-option>ME</ion-select-option>
              <ion-select-option>MD</ion-select-option>
              <ion-select-option>MA</ion-select-option>
              <ion-select-option>MI</ion-select-option>
              <ion-select-option>MN</ion-select-option>
              <ion-select-option>MS</ion-select-option>
              <ion-select-option>MO</ion-select-option>
              <ion-select-option>MT</ion-select-option>
              <ion-select-option>NE</ion-select-option>
              <ion-select-option>NV</ion-select-option>
              <ion-select-option>NH</ion-select-option>
              <ion-select-option>NJ</ion-select-option>
              <ion-select-option>NM</ion-select-option>
              <ion-select-option>NY</ion-select-option>
              <ion-select-option>NC</ion-select-option>
              <ion-select-option>ND</ion-select-option>
              <ion-select-option>OH</ion-select-option>
              <ion-select-option>OK</ion-select-option>
              <ion-select-option>OR</ion-select-option>
              <ion-select-option>PA</ion-select-option>
              <ion-select-option>RI</ion-select-option>
              <ion-select-option>SC</ion-select-option>
              <ion-select-option>SD</ion-select-option>
              <ion-select-option>TN</ion-select-option>
              <ion-select-option>TX</ion-select-option>
              <ion-select-option>UT</ion-select-option>
              <ion-select-option>VT</ion-select-option>
              <ion-select-option>VA</ion-select-option>
              <ion-select-option>WA</ion-select-option>
              <ion-select-option>WV</ion-select-option>
              <ion-select-option>WI</ion-select-option>
              <ion-select-option>WY</ion-select-option>
            </ion-select>
          </ion-item>
          <ion-item>
            <ion-input label-placement="floating" label="Zip Code" v-model="zipCode"></ion-input>
          </ion-item>
          <ion-item>
            <ion-select lebel-placement="floating" label="County" :multiple="true" v-model="county">
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
          <ion-item>
            <ion-input label-placement="floating" label="Ownership Type" v-model="ownershipType"></ion-input>
          </ion-item>
        </ion-list>
        <ion-button color="crimson" @click="addProvider">Add Provider</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonBackButton,
  IonButtons,
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonImg
} from '@ionic/vue';
import { useRouter } from 'vue-router';
const router = useRouter();
import axios from 'axios';
import { ref } from 'vue';
import ToastPlugin from 'vue-toast-notification';
import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';

const providerId = ref('');
const providerName = ref('');
const providerPhone = ref('');
const providerWebsite = ref('');
const providerAddress = ref('');
const addressLine2 = ref('');
const city = ref('');
const state = ref('');
const zipCode = ref('');
const county = ref('');
const ownershipType = ref('');

const showSuccess = ref(false); // Track whether to show the success message

const addProvider = async () => {
  try {
    // Extract the county from the array if it's received as an array with one element
    const countyValue = Array.isArray(county.value) ? county.value[0] : county.value;

    const response = await axios.post('http://' + self.location.hostname + ':8081/api/providers', { //NOTE: Email is a good idea but not a field in the database currently
      id_cms_other: providerId.value,
      agency_name: providerName.value,
      phone_number: providerPhone.value,
      addr1: providerAddress.value,
      addr2: addressLine2.value,
      city: city.value,
      state: state.value,
      website: providerWebsite.value,
      zip: zipCode.value,
      county: countyValue,
      ownership_type: ownershipType.value,
    }, {
      withCredentials: true
    });
    console.log('Provider added successfully:', response.data);
    const $toast = useToast();
    let instance = $toast.success('Provider added successfully!');
    router.replace('/providers-search');
     // this.$store.commit("login", this.username);

    // Dismiss the toast after a certain duration (e.g., 3000 milliseconds)
    setTimeout(() => {
      instance.dismiss();
    }, 3000);

    // Show toast message
    // Optionally, you can reset input fields after successful submission
    providerId.value = '';
    providerName.value = '';
    providerPhone.value = '';
    providerAddress.value = '';
    addressLine2.value = '';
    city.value = '';
    state.value = '';
    providerWebsite.value ='';
    zipCode.value = '';
    county.value = '';
    ownershipType.value = '';
    // Reset other input fields similarly
  } catch (error: any) {
        if (error.response) {
          console.error('Error adding provider', error.response.data);
          const $toast = useToast();
          let instance = $toast.error(error.response.data.message); // Assuming error response has a "message" field
          setTimeout(() => {
            instance.dismiss();
          }, 3000);
          // Handle error response from the server
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

</script>