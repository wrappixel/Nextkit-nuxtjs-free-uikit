<template>
  <!-- -----------------------------------------------
        Start Footer
  ----------------------------------------------- -->
  <v-footer class="footer">
    <v-container>
      <notification v-if="notification" :type="notification.type" :message="notification.message" />
      <v-row class="py-0 py-md-15">
        <!-- -----------------------------------------------
        First Column
      ----------------------------------------------- -->
        <v-col cols="12" sm="12" md="12" lg="3" class="px-xs-0">
          <h4 class="font-weight-regular font-18">{{$t('address')}}</h4>
          <p class="mt-10">Văn phòng giao dịch: số 6, ngõ 50 phố Đào Duy Từ, phường Hàng Buồm, quận Hoàn Kiếm, Hà Nội
          </p>
        </v-col>
        <!-- -----------------------------------------------
        Second Column
      ----------------------------------------------- -->
        <v-col cols="12" sm="12" md="12" lg="3" class="px-xs-0">
          <h4 class="font-weight-regular font-18">Hotline</h4>
          <p class="mt-10 mb-0"> 0383999685
          </p>
        </v-col>
        <!-- -----------------------------------------------
        Third Column
      ----------------------------------------------- -->
        <v-col cols="12" sm="12" md="12" lg="3" class="px-xs-0">
          <h4 class="font-weight-regular font-18">Email</h4>
          <p class="mt-10 mb-0">
            <a class="dark-link" href="/">info@protrip.com.vn</a>
          </p>
        </v-col>
        <!-- -----------------------------------------------
        Fourth Column
      ----------------------------------------------- -->
        <v-col cols="12" sm="12" md="12" lg="3" class="px-xs-0">
          <h4 class="font-weight-regular font-18">Social</h4>

          <div class="social-icons mt-10">
            <a href="#">
              <i class="mdi mdi-facebook"></i>
            </a>
            <a href="#">
              <i class="mdi mdi-twitter"></i>
            </a>
            <a href="#">
              <i class="mdi mdi-google-plus"></i>
            </a>
            <a href="#">
              <i class="mdi mdi-youtube"></i>
            </a>
            <a href="#">
              <i class="mdi mdi-instagram"></i>
            </a>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
  <!-- -----------------------------------------------
        End Footer
  ----------------------------------------------- -->
</template>

<script>
import {mapActions} from "vuex";
import Notification from '@/components/Notification'

export default {
  name: "Footer",
  data() {
    return {
      data: [],
    };
  },
  components: {Notification},
  mounted() {
    this.init()
  },
  computed: {
    notification () {
      return this.$notification.getNotification()
    }
  },
  methods:{
    ...mapActions('contact-information', ['fetchContactInformation']),
    async init() {
      // const promise = [this.fetchContactInformation()]
      //
      // await Promise.all(promise)
    },
    goToDealerPage() {
      this.$router.push({path: '/dealer'})
    }
  },
  watch: {
    '$route' (to, from) {
      this.$notification.resetNotification()
    }
  }
};
</script>
