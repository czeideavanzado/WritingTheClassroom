<template>
  <div>
    <v-card color="transparent" flat>
      <v-container fluid>
        <v-row align="start" justify="center">
          <v-col class="text-center" cols="12" md="6">
            <v-img
              :aspect-ratio="4 / 3"
              :src="speakers[speakerIndex].image"
            ></v-img>
          </v-col>

          <v-col class="white--text" cols="12" md="6">
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
export default {
  name: "Speakers",
  data: () => ({
    speakers: [
      {
        name: 'Ricardo "Ricky" Lee',
        image: require("../assets/speakers/Ricky Lee.jpg"),
        description:
          "Ricky Lee is the most-awarded scriptwriter in the Philippines." +
          " He has written 180 produced film scripts, earning him more than 70 trophies from award-giving bodies, " +
          "including three life achievement awards from the Cinemanila International Film Festival, the Gawad Urian, " +
          "and the PMPC respectively. He is also the recipient of 2015 UP Gawad Plaridel, as well as one of the Gawad CCP awardees for 2015." +
          " And this 2018, Gawad Dangal ni Balagtas awardee, Apolinario Mabini Achievement awardee and Special Citation for ABS-CBN Walk On Water Awards." +
          "<br /><br />Among Ricky’s films are Himala, Anak, Jose Rizal, Muru-Ami, Dubai, Nasaan Ka Man, and Bagong Buwan." +
          " Himala won the CNN Award for Best Asia-Pacific Film of All Time in 2011." +
          "<br /><br />Ricky is the author of the scriptwriting manual, Trip to Quiapo, which is both a bestseller and a required text in communication courses in the Philippines." +
          "<br /><br />Ricky wrote two best-selling novels: Para Kay B (O Kung Paano Dinevastate ng Pag-ibig ang 4 Out of 5 sa Atin);" +
          " Si Amapola sa 65 na Kabanata; Kung Alam N’yo Lang; Bahay ni Marta and the latest Ricky Lee Film Scriptwriting Workbook use in the workshop." +
          " He also wrote the book and lyrics of Himala: Isang Musikal which won 8 Gawad Buhay Awards this year." +
          "<br /><br />Ricky works for ABS-CBN. He was the Creative Manager of such shows as Lobo, Maging Sino Ka Man, Magkaribal," +
          " Maalaala Mo Kaya, The Greatest Love and others. He was also a creative consultant for Star Cinema." +
          "<br /><br />Since 1982, Ricky has also been conducting free scriptwriting workshop for beginning writers, producing hundreds of graduates who now work for TV and film." +
          " The current batch of the workshop he holds is Batch 22."
      },
      {
        name: "Mesándel Virtusio Arguelles",
        image: require("../assets/speakers/Ayer Arguelles.jpg"),
        description:
          "Si Mesándel Virtusio Arguelles ay editor, tagasalin, at guro ng literatura sa De La Salle University-Manila—pinagtapusan niya ng PhD sa Literatura. Saklaw ng kanyang interes ang konseptuwal na pagsulat, pagsasalin, pelikula, bidyo, instalasyon, found object, at eksperimentasyong text-based kaugnay ng mga konsepto ng panahon, alaala, wika, kawalan, kaakuhan, anonimidad, sex, at intimacy. Nagawaran ng Gantimpalang Palanca at Maningning Miclat Poetry Award at fellowship mula sa UP National Writers’ Workshop at BNSCWC National Workshop on Art and Cultural Criticism, awtor siya ng 19 na aklat ng––at tungkol sa––tula at tatlong beses nang naging finalist sa National Book Award."
      },
      {
        name: "Noelle Leslie dela Cruz",
        image: require("../assets/speakers/Noelle Leslie dela Cruz.jpg"),
        description:
          "Noelle Leslie dela Cruz is Associate Professor of Philosophy at De La Salle University (Manila), where she received her Ph.D. in Philosophy and her MFA in Creative Writing, specializing in poetry. Her poetry collection, Sisyphus on the Penrose Stairs, published by Vagabond Press in 2017, won First Prize for Poetry in English at the 2017 Palanca Awards. Her poems were anthologized in The Achieve of, The Mastery: Filipino Poetry and Verse from English, Mid-90s to 2016 Volume II, edited by Gémino Abad and Mookie Katigbak-Lacuesta and published by the UP Press in 2018. In 2016-17 she served as Fellow for Poetry for the Bienvenido N. Santos Creative Writing Center. She co-edited the 2011 anthology Feminista: Gender, Race, and Class in the Philippines, published by Anvil Press. She serves as editorial consultant and book review editor for Φιλοσοπηια: The International Journal of Philosophy, abstracted in ISI Web of Knowledge (Clarivate Analytics, formerly part of Thomson Reuters), Scopus (Elsevier), and The Philosopher's Index. Her research and teaching areas include existential phenomenology, philosophy of literature, and feminist philosophy."
      },
      {
        name: "P.J. Martín",
        image: require("../assets/speakers/PJ Martin.jpg"),
        description:
          "P.J. Martín is from Las Piñas, but grew up, studied, and began his career as a teacher in the United States. His passion is special education, having taught in programs for English language learners, children and adults with learning disabilities, disadvantaged youth, and juvenile delinquents. He received his MFA in Creative Writing from Chapman University in California. Along with published short stories, flash fiction, and poetry, he has also released an album as a guitarist in a rock band and produced original music for independent songwriters. His upcoming novel Dolorosa won the John Fowles Center for Creative Writing Award."
      }
    ],
    speakerIndex: 0
  })
};
</script>
