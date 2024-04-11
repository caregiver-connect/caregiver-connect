<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/home"></ion-back-button>
        </ion-buttons>
        <ion-title>Edit Provider</ion-title>
        <ion-img slot="end" src="../../logo.jpg" @click="() => router.push('/home')"
          style="position: right 5px center; width: 35px;"></ion-img>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="vcs">
        <ion-list style="width: 50%">
          <ion-item>
            <ion-input label-placement="floating" label="Provider ID" v-model="provider.id_cms_other"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label-placement="floating" label="Provider Name" v-model="provider.agency_name"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label-placement="floating" label="Provider Email" type="email"
              v-model="provider.email"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label-placement="floating" label="Provider Phone #" type="tel"
              v-model="provider.phone_number"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label-placement="floating" label="Provider Website" type="url"
              v-model="provider.website"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label-placement="floating" label="Address" v-model="provider.addr1"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label-placement="floating" label="Addr Line 2" helper-text="(optional)"
              v-model="provider.addr2"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label-placement="floating" label="City" v-model="provider.city"></ion-input>
          </ion-item>
          <ion-item>
            <ion-select label-placement="floating" label="State" v-model="provider.state">
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
            <ion-input label-placement="floating" label="Zip Code" v-model="provider.zip"></ion-input>
          </ion-item>
          <ion-item>
            <ion-select label-placement="floating" label="County" v-model="provider.county">
              <ion-select-option>Autauga County</ion-select-option>
              <ion-select-option>Baldwin County</ion-select-option>
              <ion-select-option>Barbour County</ion-select-option>
              <ion-select-option>Bibb County</ion-select-option>
              <ion-select-option>Blount County</ion-select-option>
              <ion-select-option>Bullock County</ion-select-option>
              <ion-select-option>Butler County</ion-select-option>
              <ion-select-option>Calhoun County</ion-select-option>
              <ion-select-option>Chambers County</ion-select-option>
              <ion-select-option>Cherokee County</ion-select-option>
              <ion-select-option>Chilton County</ion-select-option>
              <ion-select-option>Choctaw County</ion-select-option>
              <ion-select-option>Clarke County</ion-select-option>
              <ion-select-option>Clay County</ion-select-option>
              <ion-select-option>Cleburne County</ion-select-option>
              <ion-select-option>Coffee County</ion-select-option>
              <ion-select-option>Colbert County</ion-select-option>
              <ion-select-option>Conecuh County</ion-select-option>
              <ion-select-option>Coosa County</ion-select-option>
              <ion-select-option>Covington County</ion-select-option>
              <ion-select-option>Crenshaw County</ion-select-option>
              <ion-select-option>Cullman County</ion-select-option>
              <ion-select-option>Dale County</ion-select-option>
              <ion-select-option>Dallas County</ion-select-option>
              <ion-select-option>DeKalb County</ion-select-option>
              <ion-select-option>Elmore County</ion-select-option>
              <ion-select-option>Escambia County</ion-select-option>
              <ion-select-option>Etowah County</ion-select-option>
              <ion-select-option>Fayette County</ion-select-option>
              <ion-select-option>Franklin County</ion-select-option>
              <ion-select-option>Geneva County</ion-select-option>
              <ion-select-option>Greene County</ion-select-option>
              <ion-select-option>Hale County</ion-select-option>
              <ion-select-option>Henry County</ion-select-option>
              <ion-select-option>Houston County</ion-select-option>
              <ion-select-option>Jackson County</ion-select-option>
              <ion-select-option>Jefferson County</ion-select-option>
              <ion-select-option>Lamar County</ion-select-option>
              <ion-select-option>Lauderdale County</ion-select-option>
              <ion-select-option>Lawrence County</ion-select-option>
              <ion-select-option>Lee County</ion-select-option>
              <ion-select-option>Limestone County</ion-select-option>
              <ion-select-option>Lowndes County</ion-select-option>
              <ion-select-option>Macon County</ion-select-option>
              <ion-select-option>Madison County</ion-select-option>
              <ion-select-option>Marengo County</ion-select-option>
              <ion-select-option>Marion County</ion-select-option>
              <ion-select-option>Marshall County</ion-select-option>
              <ion-select-option>Mobile County</ion-select-option>
              <ion-select-option>Monroe County</ion-select-option>
              <ion-select-option>Montgomery County</ion-select-option>
              <ion-select-option>Morgan County</ion-select-option>
              <ion-select-option>Perry County</ion-select-option>
              <ion-select-option>Pickens County</ion-select-option>
              <ion-select-option>Pike County</ion-select-option>
              <ion-select-option>Randolph County</ion-select-option>
              <ion-select-option>Russell County</ion-select-option>
              <ion-select-option>Saint Clair County</ion-select-option>
              <ion-select-option>Shelby County</ion-select-option>
              <ion-select-option>Sumter County</ion-select-option>
              <ion-select-option>Talladega County</ion-select-option>
              <ion-select-option>Tallapoosa County</ion-select-option>
              <ion-select-option>Tuscaloosa County</ion-select-option>
              <ion-select-option>Walker County</ion-select-option>
              <ion-select-option>Washington County</ion-select-option>
              <ion-select-option>Wilcox County</ion-select-option>
              <ion-select-option>Winston County</ion-select-option>
            </ion-select>
          </ion-item>
          <ion-item>
            <ion-input label-placement="floating" label="Ownership Type" v-model="provider.ownership_type"></ion-input>
          </ion-item>
          <!-- <div class="vcs">
            <ion-text>
              <h4>Select all services you provide:</h4>
            </ion-text>
            <ion-list style="width: 100%;">
              <div v-for="(services, serviceType) in provider.resources.services_with_other">
                <p style="padding-top: 5px;">{{ serviceType }}:</p>
                <div v-for="(value, service, index) in services">
                  <ion-item v-if="Object.keys(services).length - 1 !== index && Object.keys(services).length - 2 !== index">
                    <ion-checkbox label-placement="end" justify="start" v-model="value.checked">{{ service }}</ion-checkbox>
                  </ion-item>
                </div>
                <ion-item>
                  <ion-checkbox label-placement="end" justify="start" v-model="services.other_checked">Other in {{ serviceType }}:</ion-checkbox>
                  <ion-input placeholder="For other please specify" v-model="services.specific"></ion-input>
                </ion-item>
              </div>
              <div v-for="(services, serviceType) in provider.resources.services_without_other">
                <p style="padding-top: 5px;">{{ serviceType }}:</p>
                <ion-item v-for="(value, service) in services">
                  <ion-checkbox label-placement="end" justify="start" v-model="value.checked">{{ service }}</ion-checkbox>
                </ion-item>
              </div>
            </ion-list>
          </div> -->
        </ion-list>
        <ion-buttons>
          <ion-button color="crimson" @click="() => router.replace('/providers-search')">Cancel Edit</ion-button>
          <ion-button color="crimson" @click="editProvider">Save Edit</ion-button>
        </ion-buttons>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
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
import axios from 'axios';
import { ref } from 'vue';
import ToastPlugin from 'vue-toast-notification';
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';
import router from '@/router';

export default {
  components: {
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
  },
  computed: {
    provider() {
      return this.$store.getters.provider;
    },
    // allServices() {
    //   return this.$store.getters.allServices;
    // }
  },
  watch: {
    $route(currentRoute) {
      this.place_id = currentRoute.params.id;
    }
  },
  setup() {
    const showSuccess = ref(false); // Track whether to show the success message

    const router = useRouter();

    return { router, showSuccess };
  },
  methods: {
    async editProvider() {
      console.log(this.provider);
      // console.log(this.allServices);
      await axios.put("http://" + self.location.hostname + `:8081/api/providers/${this.provider.place_id}`, { //NOTE: Email is a good idea but not a field in the database currently
        id_cms_other: this.provider.id_cms_other,
        agency_name: this.provider.agency_name,
        phone_number: this.provider.phone_number,
        email: this.provider.email,
        addr1: this.provider.addr1,
        addr2: this.provider.addr2,
        city: this.provider.city,
        state: this.provider.state,
        website: this.provider.website,
        zip: this.provider.zip,
        county: this.provider.county,
        ownership_type: this.provider.ownership_type,
      }, {
        withCredentials: true
      });

      this.router.replace('/providers-search');
    },
  }
}
</script>