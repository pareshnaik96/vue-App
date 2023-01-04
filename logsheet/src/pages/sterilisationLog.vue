<template>
  <q-page>
    <div class="template">
      <div class="q-pa-md" style="max-width: 400px">
        <q-form @submit="onSubmit" @reset="onReset" class="q-pa-md form">
          <!-- <div class="head">
            <h6 id="headline">STERILISATION STATION LOG SHEET</h6>
          </div> -->
          <div class="date">
            <label for="date">DATE:</label>
            <input type="text" id="date" name="date" /><br />
            <label for="shift">Shift:</label>
            <input type="text" id="shift" name="shift" /><br />
          </div>
          <label for="batch no">BATCH NO:</label>
          <input type="text" id="batch" name="batch" /><br />
          <label for="batch no">STERILIZER NO:</label>
          <input type="text" id="sterilizer" name="sterilizer" /><br />

          <!-- 1st time peak -->
          <label for="peak">1st Peak</label>
          <label for="time" id="time-in">Time In</label>
          <label for="time" id="time-out">Time Out</label>
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
                          <q-btn
                            v-close-popup
                            label="Close"
                            color="primary"
                            flat
                          />
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
                          <q-btn
                            v-close-popup
                            label="Close"
                            color="primary"
                            flat
                          />
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
          <label for="date" id="time-in">Time In</label>
          <label for="date" id="time-out">Time Out</label>
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
                          <q-btn
                            v-close-popup
                            label="Close"
                            color="primary"
                            flat
                          />
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
                          <q-btn
                            v-close-popup
                            label="Close"
                            color="primary"
                            flat
                          />
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
          <label for="date" id="time-in">Time In</label>
          <label for="date" id="psi">40 PSI</label>
          <label for="date" id="time-out">Time Out</label>
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
                          <q-btn
                            v-close-popup
                            label="Close"
                            color="primary"
                            flat
                          />
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
                          <q-btn
                            v-close-popup
                            label="Close"
                            color="primary"
                            flat
                          />
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
                          <q-btn
                            v-close-popup
                            label="Close"
                            color="primary"
                            flat
                          />
                        </div>
                      </q-time>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>
          </div>

          <label for="cages">No.of.Cages</label>
          <input type="text" id="cages" name="cages" /><br />

          <label for="remarks">Remarks</label>
          <input type="text" id="remarks" name="remarks" /><br />
          <!-- <q-input outlined v-model="text" stack-label :dense="dense" /> -->
          <div class="button">
            <q-btn label="Save" type="submit" color="primary" id="save" />
            <q-btn label="Reset" type="reset" color="primary" id="reset" />
          </div>
        </q-form>
      </div>
    </div>
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
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "sterilisationLog",

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style>
.template {
  display: flex;
  justify-content: center;
  margin-right: 30%;
}
.form {
  /* outline-style: solid; */
  width: 800px;
}
.date {
  margin-left: 70%;
  margin-top: 0%;
}
#date {
  margin-left: 15px;
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
  margin-left: 200px;
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
  