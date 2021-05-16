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
              <v-expansion-panels  dark >
                <v-expansion-panel class="schedule-todo">
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
                              
                              <h2>
                                {{ lecture.title }}
                              </h2>
                              <h3>
                                {{ lecture.instructor }}
                              </h3>


                              <p
                                :style="{
                                  'padding-left': $vuetify.breakpoint.mdAndUp
                                    ? '100px'
                                    : '',
                                  'padding-right': $vuetify.breakpoint.mdAndUp
                                    ? '100px'
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
export default {
  name: "Schedule",
  data() {
    return {
      imageSize: 200,
      schedules: [
        {
          date: "Day 1 - June 17, 2021 (Thursday)",
          morning: [
            {
              text: "Opening Ceremonies"
            },
            {
              text: "Keynote Lecture by Sir Ricky Lee",
              image: require("../assets/speakers/Ricky Lee.jpg"),
              imageTitle: "Ricky Lee"
            },
            {
              text: "Panel 1: Teaching Poetry/Pagtuturo ng Tula",
              lectures: [
                {
                  title: "Ang Naituturo ng Tula",
                  instructor: "Mesándel Virtusio Arguelles",
                  image: require("../assets/speakers/Ayer Arguelles.jpg"),
                  description:
                    "Sa master class na ito, sisikaping maituro, i.e., matukoy, maihayag, at maipaunawa kung ano ang (maaaring) naituturo ng tula. Bagamat may guro na nagtuturo (pagbasa at pagsulat) ng tula, higit ang diin sa tula mismo bilang siyang gabay/guro; sa pagkilala/pangangailangan sa tula bilang tagpuan at pagtatagpo na labas/lumalabas sa silid-aralan (kung/habang nasa silid-aralan)."
                },
                {
                  title: "Doing Philosophy through Poetry",
                  instructor: "Noelle Leslie dela Cruz",
                  image: require("../assets/speakers/Noelle Leslie dela Cruz.jpg"),
                  description:
                    "The lecture explores the relations between poetry and philosophy, providing an overview of selected issues drawn from philosophy of literature, philosophy of poetry, and philosophy of language, such as truth in/and poetry, metaphorical meaning, and lyric philosophy. Poetic works are used to shed light on philosophical problems. It also discusses modern and contemporary poets whose works are inclined toward philosophy. It culminates in a couple of workshops on (1) reading philosophy in poetry and (2) doing philosophy through poetry."
                },
                {
                  title:
                    "Poetry, Rap, and Spoken Word - Giving Voice to the Voiceless",
                  instructor: "P.J. Martin",
                  image: require("../assets/speakers/PJ Martin.jpg"),
                  description:
                    "In 1979, “Rapper’s Delight” by The Sugarhill Gang became the first rap single to become a Top 40 hit. Thirty-nine years later, rapper Kendrick Lamar’s album DAMN. won the Pulitzer Prize—the first non-classical, non-jazz record to receive this distinction. The genre emerged out of inner-city, African-American neighborhoods, but its origins are undeniably rooted in poetry. So how—and most importantly, why—did this form of literature, usually associated with highbrow society, become the preferred medium for historically un- and under-educated, marginalized communities to tell their story? What can we glean from the accessibility of verse that could help us enrich and empower our own students, especially those who find themselves academically deficient and/or disenfranchised? This workshop will include a brief background in the origins of “poems set to a beat” and spoken word poetry, with an emphasis on seminal works that have been catalysts for social change. Then we will share practical classroom activities with the objective of piquing students’ interest in poetry (with popular rap music and spoken word as an entrée), honing the skillset required in the appreciation and creation of poetry, and encouraging self-expression."
                }
              ]
            }
          ],
          afternoon: [
            {
              text: "Panel 2: Teaching Fiction/Pagtuturo ng Kuwento",
              lectures: [
                {
                  title: "Pagkwentuhan Ang Pagkukwento",
                  subtitle:
                    "Ang Pagtuturo at Pag-aaral ng Kwento sa Panahon ng Pad Paper hanggang Wattpad",
                  instructor: "Eros Atalia",
                  image: require("../assets/speakers/Eros Atalia.jpg"),
                  description:
                    "Isa sa pinakamasiglang industriya at disiplina sa ngayon, hatid na rin ng iba’t ibang media platform (wattpad, facebook, twitter) ang malikhaing pagsulat partikular ang novella, maikling kwento at dagli. Gayundin, sa pagsasama ng Malikhaing Pagsulat/Creative Writing sa K+12 Curriculum. Malakas ang demand ng mga publishing company para sa mga bagong akda lalong-lalo na sa classroom dahil sa localization at indigenization ng mga akda.  Naglalayon ang diskursong ito na magabayan ang mga paparating na manunulat (teacher at estudyante) mula sa malikhaing proseso at aktwal na pagsusulat hanggang sa maibahagi ito sa iba’t ibang paraan (libro, e-book, wattpad, littweet, pelikula, etc) lalong-lalo na kung paano maituturo ang pagpapasulat na magagamit sa loob at labas ng classroom."
                },
                {
                  title: "Characters & their Worlds",
                  instructor: "Clarissa Militante",
                  image: require("../assets/speakers/Clarissa Militante.jpg"),
                  description:
                    "Readers enter the world of story through the characters who serve as mirrors of human behavior and psychology. But another critical role of characters in fiction is to give us a world that can parallel, reject, or re-imagine our own. This masterclass shall focus on the close & critical reading of works of fiction while paying attention to techniques in characterization and world building so that in turn teachers can use or pass on these skills that can help students increase/deepen their understanding of humanity and the contemporary world."
                },
                {
                  title: "Setting as Antagonist/Lunan bilang Kontrabida",
                  instructor: "John Iremil Teodoro",
                  image: require("../assets/speakers/John Iremil Teodoro.jpg"),
                  description:
                    "Writing short fiction is creating a temporary world that the reader can visit in one sitting. Ang setting o lunan bilang isa sa mga elemento ng isang kuwento ay nagsisilbi bilang background, atmosphere, metaphor, at environmental force. This master class underscores setting as an antagonist or a force shaping the plot and the characters. Magkakaroon ng dalawang bahagi ang klaseng ito. Una, pagbabasa at talakayan ng dalawang maikling kuwento ni Leoncio P. Deriada na “The Week of the Whales” at “Ang Kamatayon sang Isa ka Kalye” concentrating on the setting as fictional element at kung paano nahuhubog ang plot at ang mga karakter sa dalawang kuwento. Second, a workshop where participants will craft an idea of a short story they are going to write where setting is a strong environmental force. Hindi lamang tungkol sa pagsusulat ng katha ang sesyon na ito kundi tungkol din sa pagtuturo kung paano magbasa at magsulat ng short story."
                }
              ]
            },
            {
              text:
                "Panel 3: Teaching Creative Nonfiction/Pagtuturo ng Sanaysay",
              lectures: [
                {
                  title:
                    "What’s Sex Got to Do With It?: Exploring Queer Identity Politics and Creative Nonfiction",
                  instructor: "Ronald Baytan",
                  image: require("../assets/speakers/Ronald Baytan.jpg"),
                  description:
                    "This class explores how the writing of creative nonfiction (CNF), like all other genres of literature, is a highly political act, and an empowering one, too.  The “self” that nonfiction writers create through various platforms or media is inevitably gendered and “sexed.”  As teachers, we need to ask how we can use our CNF class towards a critical examination and revaluation of hegemonic and heteronormative practices that have plagued the world for so long. How can we fuse the development or sharpening of creative writing and critical thinking skills with the ethics of life writing?  How can we use creative writing as a methodological tool and/or approach to broaden our students’ understanding of sex, gender, and sexuality?  Using sample texts by LGBTQIA and women writers, this module will teach students/teachers how to “queer” their class and how to design tasks that will deepen students’ consciousness of their subject-position as gendered/sexual beings."
                },
                {
                  title:
                    "Maituturo ba talaga ang Malikhaing Pagsulat?: Ang Sanaysay Bílang Isang Anyo ng Pagtatapat",
                  instructor: "Genaro Gojo Cruz",
                  image: require("../assets/speakers/Genaro Gojo Cruz.jpg"),
                  description:
                    "Ang sanaysay ang pinakamabisang anyo ng panitikan upang magtapat ang isang manunulat.  Sa sanaysay ang manunulat ang mismong nagsasalita, walang pagtatago o pagtatakip.  Bílang isang anyo, malawak o iba’t iba ang maibibigay na halimbawa ng sanaysay.<br /><br />" +
                    "Ang lekturang ito ay magbibigay-tuon sa sanaysay bílang isang anyo ng kumpisal o pagtatapat (confession). Tatalakayin ang ilan sa mga halimbawang teksto na may ganitong intensiyon o layon, kung paano ito wastong maipababasa at kritikal na maituturo/maipapasuri sa mga mag-aaral sa Senior High School na di lámang nakatuon sa kung anong mga halagahan (values) ang makukuha o matutuhan dito.<br /><br />" +
                    "Layon din ng lektura na makapagbigay ng ilang mga napapanahon at makabuluhang gawain sa mga guro; kung paanong maging malikhaing guro sa pagtuturo ng malikhaing pagsulat; at kung paano magagamit ang sanaysay bílang behikulo ng mga mag-aaral sa pagtatapat sa kanilang sulatin upang makapagparanas/makapagpadama ng kanilang katangi-tangi/makukulay na karanasan sa iba, bílang panghuling kahingian sa creative nonfiction, na isang asignatura ngayon sa Senior High School."
                },
                {
                  title:
                    "How to Live Ahead of Your Life: The Art of Memoir Writing",
                  instructor: "Dinah T. Roma",
                  image: require("../assets/speakers/Dinah Roma.jpg"),
                  description:
                    "The memoir is one of the many types of creative nonfiction genre (CNF) that appeals to young, beginning writers. Some of the reasons for this is that it provides a chance to reflect on an aspect of one’s life, craft it into a powerful and inspiring narrative, and articulate its value for growth. This lecture/workshop on memoir writing is divided into two parts. The first part will consider the more effective ways of writing a memoir by looking at the philosophy behind its writing, the concept of time and narrative framing, and the “bigger idea” behind a memoir. This will largely be done through the close reading of excerpts from published creative nonfiction books. In the second part of the workshop, participants will be asked to identify their own stories, outline their narratives, and write a one-page essay that integrate the lessons from the first part. The workshop will conclude with a discussion synthesizing how the participants’ individual writings may be improved for completion and future publishing plans."
                }
              ]
            }
          ]
        }
      ]
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
}

.schedule-date {
  font: 2vw brandon-grotesque, sans-serif;
  color: #fada28;
  font-weight: 500;
  text-shadow: -0.15vw -0.15vw #8e745d;
  margin-top: 0;
}

.schedule-day {
  font: 1.5vw atten-new, sans-serif;
  font-weight: 300;
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


h3{
  font: 1.5vw atten-new, sans-serif;
  font-weight: 900;
  color: white;
}
h2 {
  font: 2.5vw Gopher, bold;
  color: #fada28;
  font-weight: 900;
  text-shadow: -0.15vw -0.15vw #8e745d;

}
h1 {
  font: 6vw Gopher, bold;
  color: #fada28;
  font-weight: 900;
  text-shadow: -0.15vw -0.15vw #8e745d;
  margin-top: -2.5vw;
}

p{
  font-size: 1vw;
  font-weight: 300;
  color: white;
}
.title{
  font: 2vw atten-new, sans-serif;
  font-weight: 100;
  color: white;
}

</style>
