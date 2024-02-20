<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button default-href="/home"></ion-back-button>
          </ion-buttons>
          <ion-title>Signup</ion-title>
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
        IonText
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