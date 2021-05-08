<template>
  <v-app id="everything">
    <TheNavbar />

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import TheNavbar from "./components/TheNavbar";

export default {
  name: "App",
  components: { TheNavbar }
};
</script>

<style scoped>
#everything {
  background: linear-gradient(-45deg, #261ac1, #2f3dbc, #4121b7, #4121b7);
  background-size: 400% 400%;
  animation: gradient 3s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
