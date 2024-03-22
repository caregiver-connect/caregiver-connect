<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>
          <ion-row class="ion-align-items-center">
            CareGiver Connect
          </ion-row>
        </ion-title>
        <ion-buttons :collapse="true" slot="end">
          <ion-button v-if="!isLoggedIn" color="secondary" fill="solid"
            @click="() => router.push('/login')">Login</ion-button>
          <ion-button v-else color="secondary" fill="solid" @click="logout">Logout</ion-button>
          <ion-button v-if="!isLoggedIn" color="secondary" fill="solid"
            @click="() => router.push('/signup')">Signup</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title>
            <ion-row class="ion-align-items-center">
              <ion-text color="primary">
                CareGiver Connect
              </ion-text>
            </ion-row>
          </ion-title>
          <ion-img slot="start" src="../../logo.jpg" style="position: left 5px center; width: 35px;"></ion-img>
          <ion-buttons :collapse="true" slot="end">
            <ion-button v-if="!isLoggedIn" color="primary" fill="solid"
              @click="() => router.push('/login')">Login</ion-button>
            <ion-button v-else color="primary" fill="solid" @click="logout">Logout</ion-button>
            <ion-button v-if="!isLoggedIn" color="primary" fill="solid"
              @click="() => router.push('/signup')">Signup</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-card class="ion-text-center">
        <ion-img src="../../banner.png" />
        <ion-card-content align-items: center>
          If you are an Alabamian facing the challenges of dementia, you are not alone!
          Alabama Caregiver Connect was created by researchers, providers, and caregivers, to help Alabama
          caregivers get information they need about dementia and caregiving.
          Get started by searching for providers or services in your area or tell us about the services in your area!
        </ion-card-content>
      </ion-card>
      <!-- <ion-buttons color="primary" size="large" expand="block"> -->
      <ion-button color="primary" size="large" expand="block" @click="() => router.push('/providers-search')">
        <ion-icon slot="start" :icon="searchCircle" color="secondary"></ion-icon>
        <ion-text color="secondary">Find Providers</ion-text>
      </ion-button>
      <ion-button color="primary" size="large" expand="block" @click="() => router.push('/services-search')">
        <ion-icon slot="start" :icon="searchCircle" color="secondary"></ion-icon>
        <ion-text color="secondary">Find Services</ion-text>
      </ion-button>
      <ion-button color="primary" size="large" expand="block" @click="() => router.push('/add-provider')">
        <ion-icon slot="start" :icon="addCircle" color="secondary"></ion-icon>
        <ion-text color="secondary">Add Provider</ion-text>
      </ion-button>
      <ion-button color="primary" size="large" expand="block" @click="() => router.push('/edit-provider')">
        <ion-icon slot="start" :icon="addCircle" color="secondary"></ion-icon>
        <ion-text color="secondary">Edit Provider</ion-text>
      </ion-button>
      <ion-button color="primary" size="large" expand="block" @click="() => router.push('/edit-provider')">
        <ion-icon slot="start" :icon="addCircle" color="secondary"></ion-icon>
        <ion-text color="secondary">Find Services</ion-text>
      </ion-button>
      <ion-button color="primary" size="large" expand="block" @click="() => router.push('/edit-provider')">
        <ion-icon slot="start" :icon="addCircle" color="secondary"></ion-icon>
        <ion-text color="secondary">Find Services</ion-text>
      </ion-button>
      <ion-button color="primary" size="large" expand="block" @click="() => router.push('/edit-provider')">
        <ion-icon slot="start" :icon="addCircle" color="secondary"></ion-icon>
        <ion-text color="secondary">Find Services</ion-text>
      </ion-button>
      <ion-button color="primary" size="large" expand="block" @click="() => router.push('/edit-provider')">
        <ion-icon slot="start" :icon="addCircle" color="secondary"></ion-icon>
        <ion-text color="secondary">Find Services</ion-text>
      </ion-button>
      <ion-button color="primary" size="large" expand="block" @click="() => router.push('/edit-provider')">
        <ion-icon slot="start" :icon="addCircle" color="secondary"></ion-icon>
        <ion-text color="secondary">Find Services</ion-text>
      </ion-button>
      <ion-button color="primary" size="large" expand="block" @click="() => router.push('/edit-provider')">
        <ion-icon slot="start" :icon="addCircle" color="secondary"></ion-icon>
        <ion-text color="secondary">Find Services</ion-text>
      </ion-button>
      <ion-button color="primary" size="large" expand="block" @click="() => router.push('/edit-provider')">
        <ion-icon slot="start" :icon="addCircle" color="secondary"></ion-icon>
        <ion-text color="secondary">Find Services</ion-text>
      </ion-button>
      <ion-button color="primary" size="large" expand="block" @click="() => router.push('/edit-provider')">
        <ion-icon slot="start" :icon="addCircle" color="secondary"></ion-icon>
        <ion-text color="secondary">Find Services</ion-text>
      </ion-button>
      <ion-button color="primary" size="large" expand="block" @click="() => router.push('/edit-provider')">
        <ion-icon slot="start" :icon="addCircle" color="secondary"></ion-icon>
        <ion-text color="secondary">Find Services</ion-text>
      </ion-button>
      <!-- </ion-buttons> -->
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonCard,
  IonCardContent,
  IonText,
  IonRow,
  IonImg
} from '@ionic/vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import { searchCircle, addCircle } from 'ionicons/icons';
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';
// store.commit('login')

export default {
  components: {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonIcon,
    IonCard,
    IonCardContent,
    IonText,
    IonRow,
    IonImg
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    }
  },
  setup() {
    const router = useRouter();
    return { router, addCircle, searchCircle };
  },
  methods: {
    async logout() {
      try {
        // Make a POST request to the logout endpoint
        await axios.post('http://' + self.location.hostname + ':8081/api/users/logout', null, {
          withCredentials: true
        });
        // Upon successful logout, clear the authentication token from local storage or store
        this.$store.commit('logout');
        const $toast = useToast();
        let instance = $toast.success(`Logout successful!`);

        // Dismiss the toast after a certain duration (e.g., 3000 milliseconds)
        setTimeout(() => {
          instance.dismiss();
        }, 3000);

      } catch (error) {
        // Handle any errors that occur during logout
        console.error('Logout error:', error);
      }
    }
  }

};


// const loggedIn = ref(true);

// const logout = () => {
//   // Perform logout logic here (e.g., clear session)
//   // Upon successful logout, update loggedIn status
//   loggedIn.value = false;
//   // Redirect to login page (optional)
// };
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 25px;
  line-height: 32px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}

ion-title {
  line-height: 40px;
  padding-left: 45px;
  background: url('../../logo.jpg') no-repeat left center;
  background-position-x: 5px;
  background-size: auto 35px;
}
</style>
