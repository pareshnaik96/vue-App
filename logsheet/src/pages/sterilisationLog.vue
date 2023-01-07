<template>
  <q-page>
    <q-form class="q-pa-md form" style="margin-bottom: 60px; width: 100%">
      <div class="row col-12" style="margin-top: 40px; justify-content: end">
        <div>DATE:</div>
        <div>
          <q-input
            filled
            dense
            v-model="sterilisation.date"
            mask="date"
            :rules="['date']"
            style="width: 200px"
            @click="$refs.qDateProxy.show()"
          >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  refs="qDateProxy"
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date @input="closeDialog" v-model="sterilisation.date">
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
        <div>Shift:</div>
        <div>
          <q-select
            filled
            dense
            v-model="sterilisation.shift"
            :options="['A', 'B', 'C']"
            style="width: 200px"
          />
        </div>
      </div>

      <div class="row col-12" style="margin-left: 20px">
        <div>BATCH NO:</div>
        <div>
          <q-input
            filled
            dense
            mask="####"
            v-model="sterilisation.batch"
            style="max-width: 300px; margin-left: 40px; padding-bottom: 10px"
          />
        </div>
      </div>

      <div class="row col-12" style="margin-left: 20px; padding-bottom: 10px">
        <div>STERILIZER NO:</div>
        <div>
          <q-input
            filled
            dense
            mask="#####"
            v-model="sterilisation.sterilizer"
            style="max-width: 300px; margin-left: 10px"
          />
        </div>
      </div>
      <!------------------------------------------- 1st peak time  ------------------------------------------------------>
      <div class="row col-12">
        <div style="margin-left: 200px">Time In</div>
        <div style="margin-left: 230px">Time Out</div>
      </div>
      <div class="row col-12" style="margin-left: 20px">
        <div>1st Peak</div>
        <div>
          <q-input
            filled
            dense
            v-model="sterilisation.firstTimeIn"
            mask="time"
            :rules="['time']"
            style="margin-left: 55px"
          >
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-time v-model="sterilisation.firstTimeIn" format24h>
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
        <div>
          <q-input
            filled
            dense
            v-model="sterilisation.firstTimeOut"
            mask="time"
            :rules="['time']"
            style="margin-left: 55px"
          >
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-time v-model="sterilisation.firstTimeOut" format24h>
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
      <!--------------------------------------------------- 2nd peak time -------------------------------------------------->
      <div class="row col-12">
        <div style="margin-left: 200px">Time In</div>
        <div style="margin-left: 230px">Time Out</div>
      </div>
      <div class="row col-12" style="margin-left: 20px">
        <div>2nd Peak</div>
        <div>
          <q-input
            filled
            dense
            v-model="sterilisation.secondTimeIn"
            mask="time"
            :rules="['time']"
            style="margin-left: 52px"
          >
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-time v-model="sterilisation.secondTimeIn" format24h>
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
        <div>
          <q-input
            filled
            dense
            v-model="sterilisation.secondTimeOut"
            mask="time"
            :rules="['time']"
            style="margin-left: 55px"
          >
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-time v-model="sterilisation.secondTimeOut" format24h>
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
      <!---------------------------------------------------------- 3rd peak time ------------------------------------------->
      <div class="row col-12">
        <div style="margin-left: 200px">Time In</div>
        <div style="margin-left: 240px">40 PSI</div>
        <div style="margin-left: 230px">Time Out</div>
      </div>
      <div class="row col-12" style="margin-left: 20px">
        <div>3rd Peak</div>

        <div>
          <q-input
            filled
            dense
            v-model="sterilisation.thirdTimeIn"
            mask="time"
            :rules="['time']"
            style="margin-left: 54px"
          >
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-time v-model="sterilisation.thirdTimeIn" format24h>
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
        <div>
          <q-input
            filled
            dense
            v-model="sterilisation.thirdTimePSI"
            mask="time"
            :rules="['time']"
            style="margin-left: 52px"
          >
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-time v-model="sterilisation.thirdTimePSI" format24h>
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
        <div>
          <q-input
            filled
            dense
            v-model="sterilisation.thirdTimeOut"
            mask="time"
            :rules="['time']"
            style="margin-left: 55px"
          >
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-time v-model="sterilisation.thirdTimeOut" format24h>
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

      <div class="row col-12" style="margin-left: 20px">
        <div>No.of.Cages</div>
        <div>
          <q-input
            filled
            dense
            min="1"
            mask="#"
            type="number"
            v-model="sterilisation.cages"
            style="width: 490px; margin-left: 30px; padding-bottom: 10px"
          />
        </div>
      </div>
      <div class="row col-12" style="margin-left: 20px">
        <div>Remarks</div>
        <div>
          <q-input
            filled
            dense
            type="textarea"
            v-model="sterilisation.remarks"
            style="width: 770px; margin-left: 50px"
          />
        </div>
      </div>

      <div style="margin-left: 125px; padding: 20px; justify-content: center">
        <div>
          <q-btn
            label="Save"
            type="submit"
            color="primary"
            style="width: 120px"
          />

          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            style="margin-left: 250px; width: 120px"
          />
        </div>
      </div>
    </q-form>

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
</template>
  
<script>
import { date } from "quasar";
import { refs } from "vue";
import moment from "moment";

export default {
  // name: "sterilisationLog",

  data() {
    return {
      moment: moment,
      sterilisation: {
        date: moment(new Date().toISOString().substr(0, 10)).format(
          "DD/MM/YYYY"
        ),
        shift: "",
        batch: "",
        sterilizer: "",
        firstTimeIn: "",
        firstTimeOut: "",
        secondTimeIn: "",
        secondTimeOut: "",
        thirdTimeIn: "",
        thirdTimePSI: "",
        thirdTimeOut: "",
        cages: "",
        remarks: "",
      },
      optionsFn(d) {
        return d <= date.formatDate(Date.now(), "YYYY/MM/DD");
      },
    };
  },
  methods: {
    closeDialog() {
      this.$refs.qDateProxy.hide();
    },
  },
};
</script>


  