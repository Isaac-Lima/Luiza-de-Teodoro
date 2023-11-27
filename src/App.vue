<template>
  <v-app id="inspire">
    <TopBar />
    <v-main>
      <router-view />
    </v-main>
    <v-footer>
      <AppFooter />
    </v-footer>
  </v-app>
</template>

<script>
import TopBar from '@/components/TopBar.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  name: 'App',

  components: {
    TopBar,
    AppFooter,
  }, 

  data: () => ({
    //
  }),
};
</script>
