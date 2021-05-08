<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col>
        <v-row class="pt-5 mt-5">
          <v-col
            class="conference-title text-center"
            :class="{
              'display-2': $vuetify.breakpoint.mdAndUp,
              'display-1': $vuetify.breakpoint.smOnly
            }"
          >
            <h1>Conference Schedule</h1>
          </v-col>
        </v-row>

        <v-row>
          <v-col
            v-for="(schedule, index) in schedules"
            :key="`schedule-${index}`"
            cols="12"
            md="4"
          >
            <div class="fill-height pink-circle pa-5">
              <h2 class="schedule-date">{{ schedule.date }}</h2>
              <h3 class="schedule-day">Morning</h3>
              <ul>
                <li
                  class="schedule-todo"
                  v-for="(todo, morningIndex) in schedule.morning"
                  :key="`morning-${morningIndex}`"
                >
                  {{ todo }}
                </li>
              </ul>
              <h3 class="schedule-day">Afternoon</h3>
              <ul>
                <li
                  class="schedule-todo"
                  v-for="(todo, afternoonIndex) in schedule.afternoon"
                  :key="`afternoon-${afternoonIndex}`"
                >
                  {{ todo }}
                </li>
              </ul>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Schedule",
  data: () => ({
    schedules: [
      {
        date: "Jun 17, 2021 (Thursday)",
        morning: [
          "Opening Ceremonies",
          "Keynote Lecture by Sir Ricky Lee",
          "Teaching Poetry/Pagtuturo ng Tula"
        ],
        afternoon: [
          "Teaching Fiction/Pagtuturo ng Kuwento",
          "Teaching Creative Nonfiction/Pagtuturo ng Sanaysay"
        ]
      },
      {
        date: "Jun 18, 2021 (Friday)",
        morning: [
          "Teaching Drama and Performance/Pagtuturo ng Dula at Pagtatanghal",
          "Teaching Philippine Literature/Pagtuturo ng Panitikan ng Pilipinas"
        ],
        afternoon: [
          "Teaching World Literature/Pagtuturo ng Panitikan",
          "Teaching Art Appreciation/ Pagtuturo ng Pagpapahalaga sa Sining"
        ]
      },
      {
        date: "Jun 19, 2021 (Saturday)",
        morning: [
          "Teaching Literary Criticism/ Pagtuturo ng Panuring Pampanitikan",
          "Roundtable Discussion - ENTANGLEMENTS: Creating “Fields of Learning” for  Multidisciplinary Dialogue and Collaboration"
        ],
        afternoon: [
          "Best Practices",
          "Closing Ceremonies",
          "Awarding of Certificates"
        ]
      }
    ]
  })
};
</script>

<style scoped>
@import url("https://use.typekit.net/kfl2rcb.css");

.conference-title {
  font: Gopher, bold;
  color: #fada28;
  font-weight: 900;
  text-shadow: -0.15vw -0.15vw #8e745d;
  margin-top: -2.5vw;
}

.schedule-date {
  font: brandon-grotesque, sans-serif;
  color: #fada28;
  font-weight: 500;
  text-shadow: -0.15vw -0.15vw #8e745d;
  margin-top: 0;
}

.schedule-day {
  font-weight: 900;
  color: white;
}

.schedule-todo {
  color: white;
}

.pink-circle {
  background-color: #ff3bb0;
  border-radius: 15px;
  padding: 3px 8px;
  margin: 3vh 0px;
}

.blue-circle {
  background-color: rgba(82, 92, 193, 0.8);
  border-radius: 15px;
  width: fit-content;
  padding: 5px 8px;
  margin: 1vh 0px;
}
</style>
