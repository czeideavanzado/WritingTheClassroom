<template>
  <v-app id="everything">
    <v-app-bar class="white--text" color="rgba(0, 0, 0, 0.6)" app>
      <v-app-bar-nav-icon color="white" @click="drawer = !drawer">
      </v-app-bar-nav-icon>

      <div>
        <v-img
          alt="Writing The Classroom Logo"
          class="shrink mr-2"
          contain
          src="../src/assets/writing the classroom.png"
          transition="scale-transition"
          width="225"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        v-if="$vuetify.breakpoint.smAndUp"
        color="white"
        elevation="2"
        outlined
      >
        Register
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.link"
          link
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-btn v-if="$vuetify.breakpoint.xsOnly" elevation="2" block dark>
            Register
          </v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    drawer: false,
    items: [
      {
        title: "Home",
        link: "/"
      },
      {
        title: "Speakers",
        link: "/speakers"
      },
      {
        title: "Schedule",
        link: "/schedule"
      },
      {
        title: "Organizers",
        link: "/organizers"
      },
      {
        title: "Repository",
        link: "/repository"
      }
    ]
  })
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
