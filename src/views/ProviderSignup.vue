<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/home"></ion-back-button>
        </ion-buttons>
        <ion-title>Provider Signup</ion-title>
        <ion-img slot="end" src="../../logo.jpg" @click="() => router.push('/home')"
          style="position: right 5px center; width: 35px;"></ion-img>
      </ion-toolbar>
    </ion-header>
    <ion-content ref="content">
      <div class="vcs">
        <ion-list style="width: 50%">
          <ion-item>
            <ion-input label-placement="floating" label="Provider Name"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label-placement="floating" label="Username"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label-placement="floating" label="Password" type="password"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label-placement="floating" label="Retype Password" type="password"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label-placement="floating" label="Email" type="email"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label-placement="floating" label="Phone #" type="tel"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label-placement="floating" label="Website" type="url"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label-placement="floating" label="Address"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label-placement="floating" label="City"></ion-input>
          </ion-item>
          <ion-item>
            <ion-select lebel-placement="floating" label="State">
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
            <ion-input label-placement="floating" label="Zip Code" type="number"></ion-input>
          </ion-item>
          <ion-item>
            <ion-select lebel-placement="floating" label="County" :multiple="true">
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
          <div class="vcs">
            <ion-text>
              <h4>Select all services you provide:</h4>
            </ion-text>
            <ion-list style="width: 100%;">
              <ion-item>
                <ion-checkbox label-placement="end" justify="start">Home care</ion-checkbox>
              </ion-item>
              <ion-item>
                <ion-checkbox label-placement="end" justify="start">Home care</ion-checkbox>
              </ion-item>
              <ion-item>
                <ion-checkbox label-placement="end" justify="start">Home care</ion-checkbox>
              </ion-item>
              <ion-item>
                <ion-checkbox label-placement="end" justify="start">Home care</ion-checkbox>
              </ion-item>
              <ion-item>
                <ion-checkbox label-placement="end" justify="start">Home care</ion-checkbox>
              </ion-item>
            </ion-list>
          </div>
        </ion-list>
        <ion-button color="crimson">Signup</ion-button>
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
  IonCheckbox,
  IonText,
  IonSelect,
  IonSelectOption,
  IonCard,
  IonCardContent,
  IonImg
} from '@ionic/vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const content = ref();
</script>

<style>
ion-checkbox::part(container) {
  border-radius: 3px;
  border: 2px solid #9e1b32;
}
</style>