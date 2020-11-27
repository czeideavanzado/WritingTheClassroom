<template>
  <v-app id="everything">
    <v-app-bar app id="navbar">
      <div class="d-flex align-center">
        <LogoOnly> </LogoOnly>
        <v-img
          alt="Writing The Classroom Logo"
          class="shrink mr-2"
          contain
          src="../src/assets/logo.png"
          transition="scale-transition"
          width="40"
        />
        <div style="height:100%; font-size: 100%">Writing The Classroom</div>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        text
        color="white"
      >
        <span class="mr-2">REGISTER</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld
  },

  data: () => ({
    //
  })
};
</script>

<style scoped>
#navbar {
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
}

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
