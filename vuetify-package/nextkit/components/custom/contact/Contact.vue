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
        ],
        phone: [
          v => !!v || this.$t('phone_required'),
          v => !!v && validatePhoneNumber(v) || this.$t('phone_incorrect')
        ],
      }
    };
  },
  methods: {},
};
</script>
