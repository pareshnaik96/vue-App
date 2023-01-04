<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> LOG - SHEETS </q-toolbar-title>

        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="250"
      :breakpoint="600"
    >
      <q-scroll-area
        style="
          height: calc(100% - 150px);
          margin-top: 150px;
          border-right: 1px solid #ddd;
        "
      >
        <q-separator />
        <q-list dense class="text-teal text-weight-bold">
          <q-item clickable to="/dashboard" active-class="my-menu-link">
            <q-item-section avatar>
              <q-icon name="dashboard" />
            </q-item-section>
            <q-item-section>Dashboard</q-item-section>
          </q-item>
        </q-list>

        <EssentialLink
          v-for="link in userMenus"
          :key="link.title"
          v-bind="link"
        />

        <q-list dense class="text-teal text-weight-bold">
          <q-item clickable to="/sterilisation" active-class="my-menu-link">
            <q-item-section avatar>
              <q-icon name="mdi-seed" />
            </q-item-section>
            <q-item-section>Sterilisation Log Sheet</q-item-section>
          </q-item>
        </q-list>

        <q-list dense class="text-teal text-weight-bold">
          <q-item clickable to="/turbine" active-class="my-menu-link">
            <q-item-section avatar>
              <q-icon name="mdi-seed" />
            </q-item-section>
            <q-item-section>Turbine Log Sheet</q-item-section>
          </q-item>
        </q-list>

        <q-list dense class="text-teal text-weight-bold">
          <q-item clickable to="/boiler" active-class="my-menu-link">
            <q-item-section avatar>
              <q-icon name="mdi-seed" />
            </q-item-section>
            <q-item-section>Boiler Log</q-item-section>
          </q-item>
        </q-list>

        <q-list dense class="text-teal text-weight-bold">
          <q-item clickable to="/shift" active-class="my-menu-link">
            <q-item-section avatar>
              <q-icon name="mdi-seed" />
            </q-item-section>
            <q-item-section>Shift Report</q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
// import EssentialLink from "components/EssentialLink.vue";

// const linksList = [
//   {
// title: "sterilisation",
// caption: "quasar.dev",
// icon: "school",
// link: "http://localhost:3000/#/sterilisation",
// },
// {
//   title: "Github",
//   caption: "github.com/quasarframework",
//   icon: "code",
//   link: "https://github.com/quasarframework",
// },
// {
//   title: "Discord Chat Channel",
//   caption: "chat.quasar.dev",
//   icon: "chat",
//   link: "https://chat.quasar.dev",
// },
// {
//   title: "Forum",
//   caption: "forum.quasar.dev",
//   icon: "record_voice_over",
//   link: "https://forum.quasar.dev",
// },
// {
//   title: "Twitter",
//   caption: "@quasarframework",
//   icon: "rss_feed",
//   link: "https://twitter.quasar.dev",
// },
// {
//   title: "Facebook",
//   caption: "@QuasarFramework",
//   icon: "public",
//   link: "https://facebook.quasar.dev",
// },
// {
//   title: "Quasar Awesome",
//   caption: "Community Quasar projects",
//   icon: "favorite",
//   link: "https://awesome.quasar.dev",
// },
// ];

export default defineComponent({
  name: "MainLayout",

  // components: {
  //   EssentialLink,
  // },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      // essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>