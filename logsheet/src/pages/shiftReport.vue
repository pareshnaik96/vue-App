<template>
  <q-page>
    <div class="template">
      <q-form> </q-form>
    </div>
    <!-- Page Sticky -->
    <q-page-sticky expand position="top" class="bg-primary text-white">
      <q-toolbar class="bg-green text-white shadow-2" dense>
        <q-icon name="lab la-wpforms" size="md" />
        <q-item-section avatar>
          <q-icon name="description" />
        </q-item-section>
        <q-toolbar-title class="text-subtitle1">SHIFT REPORT </q-toolbar-title>
      </q-toolbar>
    </q-page-sticky>
  </q-page>
</template>
      
    <script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "shiftReport",

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