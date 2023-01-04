<template>
  <q-page class="bg-gery-3" padding style="padding-top: 0px">
    <marquee class="text-white text-bold"> LOG SHEETS</marquee>
  </q-page>
</template>
  
  <script>
import { mapActions, mapState } from "vuex";
import { date } from "quasar";
import { api } from "boot/axios";

export default {
  name: "annualRenewal",
  components: {},
  data() {
    return {
      renewalDetails: {
        slideTitle: "",
        countOfRenewalDays: 0,
        last_day_renewal: "",
        bankdate: "",
        accept: false,
        renewalDate: "",
        producer_status: "",
        reg_valid_upto: "",
      },

      spuRenewalDetails: {
        slideTitle: "",
        countOfRenewalDays: 0,
        last_day_renewal: "",
        bankdate: "",
        accept: false,
        renewalDate: "",
        spu_status: "",
        valid_date_of_reg: "",
      },

      license_copy_uploader: [],
      optionsFn(d) {
        return d >= date.formatDate(Date.now(), "YYYY/MM/DD");
      },
    };
  },

  created() {
    if (this.userDetails.role == "producer") {
      this.getRenewalDate();
    } else if (this.userDetails.role == "spu") {
      this.getSPURenewalDate();
    }
  },
  computed: {
    ...mapState({
      wallet_balance: (state) => state.account.wallet_balance,
      banks: (state) => state.master.bank_arr,
      userDetails() {
        let user = JSON.parse(localStorage.getItem("user")) || [];
        return user;
      },
    }),

    yearRenewal() {
      var dateString = moment(this.renewalDetails.bankdate, "YYYY/MM/DD");
      return dateString;
    },
    yearRenewal1() {
      var aYearFromNow = new Date();
      moment(aYearFromNow.setFullYear(aYearFromNow.getFullYear())).format(
        "YYYY-MM-DD"
      );
      return aYearFromNow;
    },
  },

  mounted() {},

  methods: {},
};
</script>
  