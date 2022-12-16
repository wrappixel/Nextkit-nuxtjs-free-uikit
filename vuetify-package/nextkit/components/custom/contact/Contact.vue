<template>
  <div>
    <div class="mini-spacer">
      <!-- -----------------------------------------------
            Start Contact Form
        ----------------------------------------------- -->
      <v-row >
        <v-col cols="12">
          <div>
            <h4 class="font-weight-medium contact-title mt-0">
              Quick Contact
            </h4>
            <v-form v-model="valid">
              <v-row class="mt-15">
                <v-col cols="12" md="6" class="py-0">
                  <v-text-field
                    :label="$t('full_name')"
                    outlined
                    v-model="name"
                    placeholder="Name"
                    :rules="rules.name"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" class="py-0">
                  <v-text-field
                    outlined
                    type="email"
                    v-model="email"
                    :label="$t('email')"
                    placeholder="Email"
                    :rules="rules.email"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" class="py-0">
                  <v-text-field
                    :rules="rules.phone"
                    outlined
                    v-model="phoneNumber"
                    :label="$t('phone_number')"
                    :placeholder="$t('phone_number')"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" class="py-0">
                  <v-textarea
                    name="notes"
                    outlined
                    :label="$t('note')"
                    rows="3"
                    v-model="notes"
                  ></v-textarea>
                </v-col>
              </v-row>
              <v-btn
                nuxt
                to="/"
                class="btn-custom-md mt-12"
                color="primary"
                elevation="0"
                :disabled="!valid"
              >
                Submit
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
          v => !!v && validatePhoneNumber(v)
        ],
      }
    };
  },
  methods: {},
};
</script>
