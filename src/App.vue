<template>
  <v-app>
    <Navbar />

    <v-content>
      <router-view class="mx-4 my-4"> </router-view>
    </v-content>

  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  },
  data: () => ({
    //
  }),
};
</script>
