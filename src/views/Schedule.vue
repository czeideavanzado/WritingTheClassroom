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

        <v-row align="center" justify="center">
          <v-col
            v-for="(schedule, index) in schedules"
            :key="`schedule-${index}`"
            cols="12"
          >
            <div class="fill-height pa-5">
              <h2 class="schedule-date">{{ schedule.date }}</h2>
              <v-expansion-panels dark>
                <v-expansion-panel class="schedule-todo" color="red">
                  <v-expansion-panel-header>
                    <h3 class="schedule-day">Morning</h3>
                  </v-expansion-panel-header>

                  <v-expansion-panel-content>
                    <div
                      class="schedule-todo"
                      v-for="(todo, morningIndex) in schedule.morning"
                      :key="`morning-${morningIndex}`"
                    >
                      <p class="title">- {{ todo.text }}</p>

                      <v-row
                        v-if="!!todo.image"
                        align="center"
                        justify="center"
                      >
                        <v-col class="text-center" cols="12">
                          <v-avatar class="mb-5" :size="imageSize" tile>
                            <img :src="todo.image" />
                          </v-avatar>

                          <p>
                            {{ todo.imageTitle }}
                          </p>
                        </v-col>
                      </v-row>

                      <v-row
                        v-if="todo.lectures"
                        align="center"
                        justify="center"
                      >
                        <v-col
                          v-for="(lecture, lectureIndex) in todo.lectures"
                          :key="`lecture-${lectureIndex}`"
                          cols="12"
                        >
                          <v-row align="center" justify="center">
                            <v-col class="text-center" cols="12">
                              <v-avatar class="mb-5" :size="imageSize" tile>
                                <img :src="lecture.image" />
                              </v-avatar>

                              <p>
                                {{ lecture.instructor }}
                              </p>

                              <p>
                                {{ lecture.title }}
                              </p>

                              <p
                                :style="{
                                  'padding-left': $vuetify.breakpoint.mdAndUp
                                    ? '250px'
                                    : '',
                                  'padding-right': $vuetify.breakpoint.mdAndUp
                                    ? '250px'
                                    : ''
                                }"
                              >
                                {{ lecture.description }}
                              </p>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                    </div>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>

              <v-expansion-panels dark>
                <v-expansion-panel class="schedule-todo" color="red">
                  <v-expansion-panel-header>
                    <h3 class="schedule-day">Afternoon</h3>
                  </v-expansion-panel-header>

                  <v-expansion-panel-content>
                    <div
                      class="schedule-todo"
                      v-for="(todo, afternoonIndex) in schedule.afternoon"
                      :key="`afternoon-${afternoonIndex}`"
                    >
                      <p class="title">- {{ todo.text }}</p>

                      <v-row
                        v-if="!!todo.image"
                        align="center"
                        justify="center"
                      >
                        <v-col class="text-center" cols="12">
                          <v-avatar class="mb-5" :size="imageSize" tile>
                            <img :src="todo.image" />
                          </v-avatar>

                          <p>
                            {{ todo.imageTitle }}
                          </p>
                        </v-col>
                      </v-row>

                      <v-row
                        v-if="todo.lectures"
                        align="center"
                        justify="center"
                      >
                        <v-col
                          v-for="(lecture, lectureIndex) in todo.lectures"
                          :key="`lecture-${lectureIndex}`"
                          cols="12"
                        >
                          <v-row align="center" justify="center">
                            <v-col class="text-center" cols="12">
                              <v-avatar class="mb-5" :size="imageSize" tile>
                                <img :src="lecture.image" />
                              </v-avatar>

                              <p>
                                {{ lecture.instructor }}
                              </p>

                              <p>
                                {{ lecture.title }}
                              </p>

                              <p
                                v-if="lecture.subtitle"
                                class="subtitle-2 font-italic"
                              >
                                {{ lecture.subtitle }}
                              </p>

                              <p
                                v-html="lecture.description"
                                :style="{
                                  'padding-left': $vuetify.breakpoint.mdAndUp
                                    ? '250px'
                                    : '',
                                  'padding-right': $vuetify.breakpoint.mdAndUp
                                    ? '250px'
                                    : ''
                                }"
                              ></p>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                    </div>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const schedules = require("../../data/schedules");

export default {
  name: "Schedule",
  data() {
    return {
      imageSize: 200,
      schedules
    };
  }
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
  color: #fada28;
}

.schedule-todo {
  color: #fada28;
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
