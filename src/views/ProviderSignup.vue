<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button default-href="/home"></ion-back-button>
          </ion-buttons>
          <ion-title>Provider Signup</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content ref="content">
        <div class="vcs">
          <ion-list style="width: 50%">
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
              <ion-input label-placement="floating" label="Provider Name"></ion-input>
            </ion-item>
            <ion-item>
              <ion-input label-placement="floating" label="Address"></ion-input>
            </ion-item>
            <ion-item>
              <ion-input label-placement="floating" label="Phone #" type="tel"></ion-input>
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
                    <ion-text><h4>Select all services you provide:</h4></ion-text>
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
          <ion-button>Signup</ion-button>
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
        IonSelectOption
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