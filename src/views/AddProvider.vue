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
          <div class="vcs">
            <ion-text>
              <h4>Select all services you provide:</h4>
            </ion-text>
            <ion-list style="width: 100%;">
              <div v-for="(services, serviceType) in allServices.services_with_other">
                <p style="padding-top: 5px;">{{ serviceType }}:</p>
                <div v-for="(value, service, index) in services">
                  <ion-item
                    v-if="Object.keys(services).length - 1 !== index && Object.keys(services).length - 2 !== index">
                    <ion-checkbox label-placement="end" justify="start" v-model="value.checked">{{ service
                      }}</ion-checkbox>
                  </ion-item>
                </div>
                <ion-item>
                  <ion-checkbox label-placement="end" justify="start" v-model="services.other_checked">Other in {{
                    serviceType }}:</ion-checkbox>
                  <ion-input placeholder="For other please specify" v-model="services.specific"></ion-input>
                </ion-item>
              </div>
              <div v-for="(services, serviceType) in allServices.services_without_other">
                <p style="padding-top: 5px;">{{ serviceType }}:</p>
                <ion-item v-for="(value, service) in services">
                  <ion-checkbox label-placement="end" justify="start" v-model="value.checked">{{ service
                    }}</ion-checkbox>
                </ion-item>
              </div>
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
      provider: {
        id_cms_other: "",
        agency_name: "",
        email: "",
        phone_number: "",
        website: "",
        addr1: "",
        addr2: "",
        city: "",
        state: "",
        zip: "",
        county: "",
        ownership_type: "",
      },
      allServices: {
        services_with_other: {
          "Home Services": {
            "House keeping": { checked: false },
            "Personal care": { checked: false },
            "Daycare": { checked: false },
            "Respite care": { checked: false },
            "In home memory care": { checked: false },
            "In home nursing": { checked: false },
            "Activity enrichment": { checked: false },
            "Report problems with in home providers": { checked: false },
            "Research in home service providers": { checked: false },
            other_checked: false,
            "specific": "",
          },
          "Caregiver Support": {
            "Caregiver support groups": { checked: false },
            "Caregiver training": { checked: false },
            "Counseling": { checked: false },
            "Home changes (ramps, grab bars, etc)": { checked: false },
            "Home maintenance": { checked: false },
            other_checked: false,
            specific: "",
          },
          "Supplies": {
            "Incontinence items": { checked: false },
            "Medical supplies (Consumable medical supplies)": { checked: false },
            "Durable equipment": { checked: false },
            "Medic alerting services": { checked: false },
            "Vision aids/glasses": { checked: false },
            "Hearing aids": { checked: false },
            "Oral/Dentures": { checked: false },
            "Medical devices/prosthetics (shoe inserts, wearable glucose monitor, etc.)": { checked: false },
            "Oxygen": { checked: false },
            other_checked: false,
            specific: "",
          },
          "Financial Assistance": {
            "Transportation": { checked: false },
            "Referrals": { checked: false },
            "Drug assistance": { checked: false },
            "Reimbursement for services": { checked: false },
            "Medicare": { checked: false },
            "Home meal delivery": { checked: false },
            "Bill assistance": { checked: false },
            "Food pantry": { checked: false },
            "Food vouchers": { checked: false },
            "Medicare waivers": { checked: false },
            "Food stamps": { checked: false },
            other_checked: false,
            specific: "",
          },
          "Medical Services": {
            "Medicare providers": { checked: false },
            "Geriatricians": { checked: false },
            "Psychiatrist": { checked: false },
            "Neurologists": { checked: false },
            "Specialists": { checked: false },
            "Long term skilled nursing facility": { checked: false },
            "In patient rehabilitation": { checked: false },
            "Out of home memory care": { checked: false },
            "Physical therapy": { checked: false },
            "Occupational therapists (assistance with activities of daily living)": { checked: false },
            "Hospice care": { checked: false },
            other_checked: false,
            specific: "",
          },
          "Legal Services": {
            "Advanced directives/wills": { checked: false },
            "Death and burial": { checked: false },
            other_checked: false,
            specific: "",
          },
        },
        services_without_other: {
          "Technology": {
            "Technology": { checked: false },
          },
          "Academic": {
            "Studies and trials": { checked: false },
            "Research and medical procedures": { checked: false },
            "Diagnosis": { checked: false },
          }
        }
      },
    }
  },
  setup() {
    const router = useRouter();

    const showSuccess = ref(false); // Track whether to show the success message

    return { router, showSuccess }
  },
  methods: {
    parse() {
      var res = "";
      // loop through services_wwith_other
      for (var serviceType in this.allServices.services_with_other) {
        var buff = "";

        for (var service in this.allServices.services_with_other[serviceType]) {
          if (service == "other_checked") break;

          if (this.allServices.services_with_other[serviceType][service].checked) {
            if (buff == "") {
              buff = service;
            } else {
              buff = buff + ", " + service;
            }
          }
        }
        if (this.allServices.services_with_other[serviceType].other_checked) {
          if (buff == "") {
            buff = "Other in " + serviceType + "(" + this.allServices.services_with_other[serviceType].specific + ")";
          } else {
            buff = buff + ", Other in " + serviceType + "(" + this.allServices.services_with_other[serviceType].specific + ")";
          }
        }

        if (buff != "") {
          if(res == ""){
            res = serviceType + ": " + buff
          } else {
            res = res + ", " + serviceType + ": " + buff
          }
        }
      }

      for(var serviceType in this.allServices.services_without_other) {
        var buff = "";

        for (var service in this.allServices.services_without_other[serviceType]) {
          if (this.allServices.services_without_other[serviceType][service].checked) {
            if (buff == "") {
              buff = service;
            } else {
              buff = buff + ", " + service;
            }
          }
        }

        if (buff != "") {
          if(res == ""){
            res = serviceType + ": " + buff
          } else {
            res = res + ", " + serviceType + ": " + buff
          }
        }
      }
      return res;
    },
    async addProvider() {
      try {
        const response = await axios.post('http://' + self.location.hostname + ':8081/api/providers', { //NOTE: Email is a good idea but not a field in the database currently
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
          resources_JSON: JSON.stringify(this.allServices),
          resources_text: this.parse(),
        }, {
          withCredentials: true,
          xsrfCookieName: '_csrf'
        });
        console.log('Provider added successfully:', response.data);
        const $toast = useToast();
        let instance = $toast.success('Provider added successfully!');
        this.router.replace('/providers-search');
        // this.$store.commit("login", this.username);

        // Dismiss the toast after a certain duration (e.g., 3000 milliseconds)
        setTimeout(() => {
          instance.dismiss();
        }, 3000);

        // Show toast message
        // Optionally, you can reset input fields after successful submission
        this.provider.id_cms_other = '';
        this.provider.agency_name = '';
        this.provider.phone_number = '';
        this.provider.email = '';
        this.provider.addr1 = '';
        this.provider.addr2 = '';
        this.provider.city = '';
        this.provider.state = '';
        this.provider.website = '';
        this.provider.zip = '';
        this.provider.county = '';
        this.provider.ownership_type = '';
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