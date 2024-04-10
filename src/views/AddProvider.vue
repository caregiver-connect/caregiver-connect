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
            <ion-input label-placement="floating" label="Provider Email" type="email"
              v-model="providerEmail"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label-placement="floating" label="Provider Phone #" type="tel"
              v-model="providerPhone"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label-placement="floating" label="Provider Website" type="url"
              v-model="providerWebsite"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label-placement="floating" label="Address" v-model="providerAddress"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label-placement="floating" label="Addr Line 2" helper-text="(optional)"
              v-model="addressLine2"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label-placement="floating" label="City" v-model="city"></ion-input>
          </ion-item>
          <ion-item>
            <ion-select label-placement="floating" label="State" v-model="state">
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
            <ion-select label-placement="floating" label="County" v-model="county">
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
            <ion-input label-placement="floating" label="Ownership Type" v-model="ownershipType"></ion-input>
          </ion-item>
          <div class="vcs">
            <ion-text>
              <h4>Select all services you provide:</h4>
            </ion-text>
            <ion-list style="width: 100%;">
              <div v-for="(services, serviceType) in allServices">
                <p style="padding-top: 5px;">{{ serviceType }}:</p>
                <ion-item v-for="service in services">
                  <ion-checkbox label-placement="end" justify="start">{{ service }}</ion-checkbox>
                </ion-item>
                <ion-item>
                  <ion-checkbox label-placement="end" justify="start">Other in {{ serviceType }}:</ion-checkbox>
                </ion-item>
                <ion-item>
                  <ion-input placeholder="For other please specify"></ion-input>
                </ion-item>
              </div>
              <p style="padding-top: 5px;">Technology</p>
              <ion-item>
                <!-- <ion-checkbox label-placement="end" justify="start">Home care</ion-checkbox> -->
                <ion-checkbox label-placement="end" justify="start">Technology</ion-checkbox>
              </ion-item>
              <p style="padding-top: 5px;">Academic</p>
              <ion-item>
                <ion-checkbox label-placement="end" justify="start">Studies and trials</ion-checkbox>
              </ion-item>
              <ion-item>
                <ion-checkbox label-placement="end" justify="start">Research and medical procedures</ion-checkbox>
              </ion-item>
              <ion-item>
                <ion-checkbox label-placement="end" justify="start">Diagnosis</ion-checkbox>
              </ion-item>
            </ion-list>
          </div>
        </ion-list>
        <ion-button color="crimson" @click="addProvider">Add Provider</ion-button>
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
  IonImg,
  IonCheckbox,
  IonText,
} from '@ionic/vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import { ref } from 'vue';
import ToastPlugin from 'vue-toast-notification';
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';

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
    IonImg,
    IonCheckbox,
    IonText,
  },
  data() {
    return {
      allServices: {
        "Home Services": [
          "House keeping",
          "Personal care",
          "Daycare",
          "Respite care",
          "In home memory care",
          "In home nursing",
          "Activity enrichment",
          "Report problems with in home providers",
          "Research in home service providers",
        ],
        "Caregiver Support": [
          "Caregiver support groups",
          "Caregiver training",
          "Counseling",
          "Home changes (ramps, grab bars, etc)",
          "Home maintenance",
        ],
        "Supplies": [
          "Incontinence items",
          "Medical supplies (Consumable medical supplies)",
          "Durable equipment",
          "Medic alerting services",
          "Vision aids/glasses",
          "Hearing aids",
          "Oral/Dentures",
          "Medical devices/prosthetics (shoe inserts, wearable glucose monitor, etc.)",
          "Oxygen",
        ],
        "Financial Assistance": [
          "Transportation",
          "Referrals",
          "Drug assistance",
          "Reimbursement for services",
          "Medicare",
          "Home meal delivery",
          "Bill assistance",
          "Food pantry",
          "Food vouchers",
          "Medicare waivers",
          "Food stamps",
        ],
        "Medical Services": [
          "Medicare providers",
          "Geriatricians",
          "Psychiatrist",
          "Neurologists",
          "Specialists",
          "Long term skilled nursing facility",
          "In patient rehabilitation",
          "Out of home memory care",
          "Physical therapy",
          "Occupational therapists (assistance with activities of daily living)",
          "Hospice care",
        ],
        "Legal Services": [
          "Advanced directives/wills",
          "Death and burial"
        ],
      }
    }
  },
  setup() {
    const providerId = ref('');
    const providerName = ref('');
    const providerPhone = ref('');
    const providerEmail = ref('');
    const providerWebsite = ref('');
    const providerAddress = ref('');
    const addressLine2 = ref('');
    const city = ref('');
    const state = ref('');
    const zipCode = ref('');
    const county = ref('');
    const ownershipType = ref('');

    const router = useRouter();

    const showSuccess = ref(false); // Track whether to show the success message

    return { router, showSuccess, providerId, providerName, providerPhone, providerEmail, providerWebsite, providerAddress, addressLine2, city, state, zipCode, county, ownershipType }
  },
  methods: {
    async addProvider() {
      try {
        const response = await axios.post('http://' + self.location.hostname + ':8081/api/providers', { //NOTE: Email is a good idea but not a field in the database currently
          id_cms_other: this.providerId.value,
          agency_name: this.providerName.value,
          phone_number: this.providerPhone.value,
          email: this.providerEmail.value,
          addr1: this.providerAddress.value,
          addr2: this.addressLine2.value,
          city: this.city.value,
          state: this.state.value,
          website: this.providerWebsite.value,
          zip: this.zipCode.value,
          county: this.county.value,
          ownership_type: this.ownershipType.value,
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
        this.providerId.value = '';
        this.providerName.value = '';
        this.providerPhone.value = '';
        this.providerEmail.value = '';
        this.providerAddress.value = '';
        this.addressLine2.value = '';
        this.city.value = '';
        this.state.value = '';
        this.providerWebsite.value = '';
        this.zipCode.value = '';
        this.county.value = '';
        this.ownershipType.value = '';
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
    },
  }
}

</script>