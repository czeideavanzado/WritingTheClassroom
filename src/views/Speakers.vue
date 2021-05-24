<template>
  <div>
    <v-card color="transparent" flat>
      <v-container fluid>
        <v-row align="start" justify="center">
          <v-col class="text-center" cols="12" md="6">
            <v-img
              :aspect-ratio="
                speakers[speakerIndex].removeAspectRatio ? 1 : 4 / 3
              "
              :src="speakers[speakerIndex].image"
            ></v-img>
          </v-col>

          <v-col class="white--text" cols="12" md="6">
            <p class="title">{{ speakers[speakerIndex].name }}</p>
            <span v-html="speakers[speakerIndex].description"></span>
          </v-col>
        </v-row>
      </v-container>

      <v-card-actions>
        <v-btn
          color="white"
          :disabled="speakerIndex === 0"
          x-large
          @click="speakerIndex -= 1"
        >
          Previous
        </v-btn>

        <v-spacer></v-spacer>

        <span class="white--text title">
          {{ speakerIndex + 1 }} / {{ speakers.length }}
        </span>

        <v-spacer></v-spacer>

        <v-btn
          color="white"
          :disabled="speakerIndex === speakers.length - 1"
          x-large
          @click="speakerIndex += 1"
        >
          Next
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
const speakers = require("../../data/speakers");

export default {
  name: "Speakers",
  data: () => ({
    speakers,
    speakerIndex: 0
  })
};
</script>
