<template>
  <div class="template">
    <div class="q-pa-md" style="max-width: 400px">
      <q-form @submit="onSubmit" @reset="onReset" class="q-pa-md form">
        <!-- <div class="head">
          <h6 id="headline">TURBINE LOG SHEET</h6>
        </div> -->
        <div class="date">
          <label for="date">DATE:</label>
          <input type="text" id="date" name="date" /><br />
          <label for="shift">Shift:</label>
          <input type="text" id="shift" name="shift" /><br />
        </div>
        <label for="time">Time:</label>
        <input type="text" id="time" name="time" /><br />
        <label for="speed">Speed(RPM)</label>
        <input type="text" id="speed" name="speed" /><br />
        <label for="load">Load(KW)</label>
        <input type="text" id="load" name="load" /><br />

        <label for="inlet">Inlet Steam Temp(Deg C)</label>
        <input type="text" id="inlet-steam" name="inlet-steam" /><br />
        <label for="inlet">Inlet Steam Pfe.(kg/cm2)</label>
        <input type="text" id="steam-pfe" name="steam-pfe" /><br />
        <label for="inlet">Inlet Steam flow(TPH)</label>
        <input type="text" id="steam-flow" name="steam-flow" /><br />
        <label for="oil">Lub Oil Pre.(kg/cm2)</label>
        <input type="text" id="lub-oil" name="lub-oil" /><br />
        <label for="oil">Control Oil Pre.(kg/cm2)</label>
        <input type="text" id="control-oil" name="control-oil" /><br />
        <label for="oil">Trip Oil Pre.(kg/cm2)</label>
        <input type="text" id="trip-oil" name="trip-oil" /><br />
        <label for="pipe">Chust pres.(kg/cm2)</label>
        <input type="text" id="chust-pres" name="chust-pres" /><br />
        <label for="pipe">Exhaust Steam pipe(kg/cm2)</label>
        <input type="text" id="exhaust-pipe" name="exhaust-pipe" /><br />
        <label for="pipe">Exhaust Steam Temp(DegC)</label>
        <input type="text" id="exhaust-steam" name="exhaust-steam" /><br />

        <div class="gear">
          <h6 id="gear-head">
            <div id="text">GEAR BOX BEARING TEMPERATURE</div>
          </h6>
        </div>

        <label for="trust">Thrust Wear Pre.(kg/cm2)</label>
        <input type="text" id="thrust" name="thrust" /><br />
        <label for="casing">HP Casing Vibra(mm/sec)</label>
        <input type="text" id="hp-casing" name="hp-casing" /><br />
        <label for="casing">LP Casing Vibra(mm/sec)</label>
        <input type="text" id="lp-casing" name="lp-casing" /><br />

        <div>
          <label for="temp" id="temp">HP(Deg C)</label>
          <label for="temp" id="temp">L.P(Deg C)</label>
          <label for="temp" id="temp">P.F(Deg C)</label>
          <label for="temp" id="temp">P.A(Deg C)</label>
          <label for="temp" id="temp">G.F(Deg C)</label>
          <label for="temp" id="temp">G.R(Deg C)</label>
        </div>

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
        >TURBINE LOG SHEET
      </q-toolbar-title>
    </q-toolbar>
  </q-page-sticky>
</template>


<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "turbineLog",

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

#time {
  margin-left: 46px;
}
#speed {
  margin-left: 3px;
}
#load {
  margin-left: 19px;
  margin-bottom: 15px;
}

#inlet-steam {
  margin-left: 27px;
}
#steam-pfe {
  margin-left: 27px;
}
#steam-flow {
  margin-left: 46px;
}
#lub-oil {
  margin-left: 54px;
}
#control-oil {
  margin-left: 32px;
}
#trip-oil {
  margin-left: 53px;
}
#chust-pres {
  margin-left: 55px;
}
#exhaust-pipe {
  margin-left: 2px;
}
#exhaust-steam {
  margin-left: 8px;
}
#thrust {
  margin-left: 11px;
}
#hp-casing {
  margin-left: 10px;
}
#lp-casing {
  margin-left: 12px;
}
.gear {
  display: flex;
  justify-content: flex-start;
  margin-top: -20px;
  margin-bottom: -20px;
  margin-left: 100px;
}
#gear-head {
  display: flex;
  justify-content: center;
  outline-style: solid;
  width: 60%;
  border-radius: 3px;
  background-color: rgb(141, 140, 140);
}
#text {
  color: white;
  height: 50%;
}
#temp {
  margin-left: 25px;
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

