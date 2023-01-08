<template>
  <div>
    <div class="mini-spacer">
      <!-- -----------------------------------------------
            Start Contact Form
        ----------------------------------------------- -->
      <v-row >
        <v-col cols="12">
          <div>
            <h4 class="font-weight-medium contact-title mt-0 text-capitalize">
              {{ $t('contact_information') }}
            </h4>
            <v-form v-model="valid">
              <v-row class="mt-15">
                <v-col cols="12" md="6" class="py-0">
                  <v-text-field
                    :label="$t('full_name')"
                    :outlined="outline"
                    :solo="solo"
                    v-model="name"
                    placeholder="Name"
                    :rules="rules.name"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" class="py-0">
                  <v-text-field
                    :outlined="outline"
                    :solo="solo"
                    type="email"
                    v-model="email"
                    :label="$t('email_field')"
                    placeholder="Email"
                    :rules="rules.email"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" class="py-0">
                  <v-text-field
                    :rules="rules.phone"
                    :outlined="outline"
                    :solo="solo"
                    v-model="phoneNumber"
                    :label="$t('phone_number')"
                    :placeholder="$t('phone_number')"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" class="py-0">
                  <v-textarea
                    name="notes"
                    :outlined="outline"
                    :solo="solo"
                    :label="$t('note')"
                    rows="3"
                    v-model="notes"
                  ></v-textarea>
                </v-col>
              </v-row>
              <v-btn
                class="btn-custom-md mt-12 text-capitalize"
                color="error"
                elevation="0"
                :disabled="!valid"
                :loading="submitting"
                @click="submit"
              >
                {{$t('submit')}}
              </v-btn>
            </v-form>
          </div>
        </v-col>
      </v-row>
      <!-- -----------------------------------------------
          End Contact Form
      ----------------------------------------------- -->
    </div>
  </div>
</template>
<script>
import {validatePhoneNumber} from "~/core/utils/phone";
import bookingService from "@/services/apis/bookingService";

export default {
  name: "Contact",
  props: {
    outline: {
      type: Boolean,
      default: true
    },
    solo: {
      type: Boolean,
      default: false
    },
    tripId: {
      type: Number,
      default: 0,
    }
  },
  data() {
    return {
      name: "",
      email: "",
      phoneNumber: "",
      notes: "",
      valid: false,
      rules: {
        name: [
          v => !!v || this.$t('name_required'),
        ],
        email: [
          v => !!v || this.$t('email_required'),
          v => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(v) || this.$t('email_invalid')
          }
        ],
        phone: [
          v => !!v || this.$t('phone_required'),
          v => !!v && validatePhoneNumber(v) || this.$t('phone_incorrect')
        ],
      },
      submitting: false,
    };
  },
  methods: {
    async submit() {
      this.submitting = true;
      const res = await bookingService.createBooking({
        trip_id: this.tripId,
        customer: {
          phone: this.phoneNumber,
          full_name: this.name,
          email: this.email,
        },
        message: this.notes
      })
      if (res && res.success) {
        this.$notification.addSuccess(this.$t('contact_success'))
      }
      this.submitting = false;
    }
  },
};
</script>
