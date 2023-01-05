<template>
  <q-page>
    <q-form class="form">
      <div class="row col-12" style="margin-top: 51px; justify-content: end">
        <div class="row">DATE:</div>
        <div class="q-pa-md" style="max-width: 300px">
          <q-input
            label="Date"
            filled
            v-model="mytask.date"
            mask="date"
            :rules="['date']"
          >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="mytask.date">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </div>
      <div class="row col-12" style="justify-content: end">
        <div class="row">Shift:</div>
        <div style="max-width: 250px">
          <q-input filled v-model="shift" />
        </div>
      </div>

      <div class="row col-12" style="margin-left: 20px">
        <div class="row">BATCH NO:</div>
        <div style="max-width: 300px; margin-left: 30px">
          <q-input filled v-model="batch" />
        </div>
      </div>

      <div class="row col-12" style="margin-left: 20px">
        <div class="row">STERILIZER NO:</div>
        <div style="max-width: 250px; margin-left: 1px">
          <q-input filled v-model="sterilizer" />
        </div>
      </div>

      <!-- 1st time peak -->

      <label for="peak">1st Peak</label>
      <label for="time" id="time-in">1st-Time In</label>
      <label for="time" id="time-out">1st-Time Out</label>
      <div class="q-pa-md">
        <div class="q-gutter-sm row">
          <q-input filled v-model="time" mask="time" :rules="['time']">
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-time v-model="time">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>

          <q-input filled v-model="time" mask="time" :rules="['time']">
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-time v-model="time">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </div>
      <!-- <input type="text" id="peak-1" name="peak-1" /><br /> -->
      <!-- 2nd time peak -->
      <label for="peak">2nd Peak</label>
      <label for="date" id="time-in">2nd-Time In</label>
      <label for="date" id="time-out">2nd-Time Out</label>
      <div class="q-pa-md">
        <div class="q-gutter-sm row">
          <q-input filled v-model="time" mask="time" :rules="['time']">
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-time v-model="time">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>

          <q-input filled v-model="time" mask="time" :rules="['time']">
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-time v-model="time">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </div>
      <!-- 3rd time peak -->
      <label for="peak">3rd Peak</label>
      <label for="date" id="time-in">3rd-Time In</label>
      <label for="date" id="psi">40 PSI</label>
      <label for="date" id="third-time-out">3rd-Time Out</label>
      <div class="q-pa-md">
        <div class="q-gutter-sm row">
          <q-input filled v-model="time" mask="time" :rules="['time']">
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-time v-model="time">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>

          <q-input filled v-model="time" mask="time" :rules="['time']">
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-time v-model="time">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <q-input filled v-model="time" mask="time" :rules="['time']">
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-time v-model="time">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </div>

      <label for="cages">No.of.Cages</label>
      <q-input type="text" id="cages" name="cages" /><br />

      <label for="remarks">Remarks</label>
      <q-input type="text" id="remarks" name="remarks" /><br />
      <!-- <q-input outlined v-model="text" stack-label :dense="dense" /> -->
      <div class="button">
        <q-btn label="Save" type="submit" color="primary" id="save" />
        <q-btn label="Reset" type="reset" color="primary" id="reset" />
      </div>
    </q-form>
    <!-- </div>
    </div> -->
    <!-- Page Sticky -->
    <q-page-sticky expand position="top" class="bg-primary text-white">
      <q-toolbar class="bg-green text-white shadow-2" dense>
        <q-icon name="lab la-wpforms" size="md" />
        <q-item-section avatar>
          <q-icon name="description" />
        </q-item-section>
        <q-toolbar-title class="text-subtitle1"
          >STERILISATION STATION LOG SHEET
        </q-toolbar-title>
      </q-toolbar>
    </q-page-sticky>
  </q-page>
  <!-- </q-page-container> -->
  <!-- </q-layout> -->
</template>
  
<script>
import { date } from "quasar";
import { ref } from "vue";

export default {
  // name: "sterilisationLog",

  setup() {
    return {
      mytask: {
        date: "",
      },

      // taskdate(d) {
      //   return d <= date.formateDate(Date.now(), "YYYY/MM/DD");
      // },
    };
  },
  methods: {
    closeDate() {
      this.$refs.mydate.hide();
    },
  },
};
</script>

<style>
/* .template {
  display: flex;
  justify-content: center;
  margin-right: 30%;
} */
/* .form {
  /* outline-style: solid; */
/* width: 800px; */
*/
/* } */
.date {
  margin-left: 70%;
  margin-top: 40px;
}
#date {
  margin-left: 15px;
}
#date-text {
  margin-left: 15px;
}
rilisation #shift-text {
  margin-left: 17px;
}
#input-date {
  margin-left: 20px;
}
#shift {
  margin-left: 19.8px;
}
#batch {
  margin-left: 39px;
}
#sterilizer {
  margin-left: 10px;
  margin-bottom: 10px;
}
.head {
  color: gray;
}
#headline {
  margin-top: 0%;
  width: 100%;
  display: flex;
  justify-content: center;
  color: black;
}
#peak-1 {
  margin-left: 30px;
}
#time-in {
  margin-left: 50px;
}
#time-out {
  margin-left: 150px;
}
#third-time-out {
  margin-left: 180px;
}
#psi {
  margin-left: 160px;
}
#peak-2 {
  margin-left: 25px;
}
#peak-3 {
  margin-left: 25px;
}
#cages {
  margin-left: 27px;
  width: 250px;
}
#remarks {
  margin-left: 50px;
  width: 400px;
  height: 50px;
  margin-top: 20px;
}
.button {
  cursor: pointer;
  margin-top: 20px;
}
#save {
  margin-left: 105px;
  width: 120px;
  border-top: 5px;
  border-bottom: 0px;
}
#reset {
  margin-left: 100px;
  width: 120px;
}
</style>
  