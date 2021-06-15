<template>
  <div>
    <v-row justify="space-around">
      <div class="d-flex-column" style="margin-top: 8%;">
        <h1>About Us</h1>
      </div>
      <div class="d-flex-column">
        <div class="about-the-conference">
          <h3
            style="color: black; text-align:center; font-size: 5vh; margin:1.5vh; text-shadow: -.1vh -.2vh #ff3bb0;"
          >
            The Organizers
          </h3>
          <p>
            De La Salle University’s Department of Literature offers
            undergraduate and graduate programs in literary, cultural, and
            performance studies; creative writing; and literature across the
            professions. Faculty members are award-winning writers and leading
            researchers and scholars who are published and recognized in the
            national and international scenes.
          </p>
        </div>
      </div>
      <div class="d-flex-column">
        <div class="about-the-conference">
          <h3
            style="color: black; text-align:center; font-size: 5vh; margin:1.5vh; text-shadow: -.1vh -.2vh #ff3bb0;"
          >
            Vision-Mission
          </h3>
          <p>
            As Commission of Higher Education’s Center of Development, the
            Department of Literature aims to be a leading learner-centered
            department in literary, cultural, and performance pedagogy,
            production, and research in the Philippines and Asia.
          </p>
          <p>
            Literary, Cultural, and Performance Production – in poetry, drama
            and performance, fiction, and creative nonfiction; in the
            translation of creative texts into Philippine and foreign languages;
            in multi-genre, hybrid, hyper-, and other texts; and in other forms
            of cultural production.
          </p>
          <p>
            Pedagogy in Literary, Cultural, and Performance Studies – on
            graduate and undergraduate levels; in seminar-lecture and
            craft-workshop courses on histories, genres, and theories of
            literature, culture, performance, and creative writing.
          </p>
          <p>
            Literary, Cultural, and Performance Research – in local, national,
            and transnational intersections of literary history, critical theory
            and poetics, literary, cultural, and performance criticism.
          </p>
          <p>
            Through these three main thrusts, the Department nurtures scholars
            and artists who bridge faith and scholarship in their advocacy of
            cultural heritage and in their contributions to Philippine and Asian
            literature, culture, and performance.
          </p>
        </div>
      </div>
      <div class="d-flex-column" style="margin-top: 8%; margin-bottom: 3%;">
        <h1>Core Team Members</h1>
      </div>
    </v-row>
    <v-container
      v-for="(organizer, index) in organizers"
      :key="`organizer-${index}`"
      fluid
    >
      <v-row class="text-center">
        <v-col cols="12">
          <h2 style="margin:auto;">{{ organizer.division }}</h2>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col
          v-for="(head, headIndex) in organizer.heads"
          :key="`head-${headIndex}`"
          cols="12"
          md="2"
        >
          <v-card
            class="text-center"
            color="rgba(82, 92, 193, 0.8)"
            style="border-radius: 15px; height: 100%"
          >
            <br />

            <v-avatar size="150">
              <img :src="head.image" :alt="head.name" />
            </v-avatar>

            <v-card-title class="white--text no-text-wrap" style="display: block">
              <h3>{{ head.name }}</h3>
            </v-card-title>

            <v-card-subtitle class="body-2 white--text text-wrap">
              {{ head.position }}
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col
          v-for="(member, memberIndex) in organizer.members"
          :key="`member-${memberIndex}`"
          cols="12"
          md="2"
        >
          <v-card
            class="text-center"
            color="rgba(82, 92, 193, 0.8)"
            style="border-radius: 15px; height: 100%"
          >
            <br />

            <v-avatar size="150">
              <img :src="member.image" :alt="member.name" />
            </v-avatar>

            <v-card-title class="white--text no-text-wrap" style="display: block">
              <h3>{{ member.name }}</h3>
            </v-card-title>

            <v-card-subtitle class="body-2 white--text">
              {{ member.position }}
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Organizers",
  data: () => ({
    organizers: [
      {
        division: "Conference Directors",
        heads: [
          {
            name: "Anne Richie Balgos",
            position: "Conference Director",
            image: require("../assets/speakers/Anne Richie Balgos.jpg")
          }
        ],
        members: [
          {
            name: "Mesándel Arguelles",
            position: "Deputy Conference Director",
            image: require("../assets/speakers/Ayer Arguelles.jpg")
          },
          {
            name: "Cris Barbra Pe",
            position: "Deputy Conference Director",
            image: require("../assets/speakers/Cris Barbara Pe.jpg")
          }
        ]
      },
      {
        division: "Publicity and Promotions",
        heads: [
          {
            name: "Juan Miguel Leandro Quizon",
            position: "Committee Head",
            image: require("../assets/speakers/Leandro Miguel Quizon.jpg")
          },
          {
            name: "Adrian Ho",
            position: "Co-committee Head",
            image: require("../assets/speakers/Adrian Ho.jpg")
          }
        ],
        members: [
          {
            name: "Antonette Arogo",
            position: "Committee Member",
            image: require("../assets/speakers/Antonette Arogo.jpg")
          },
          {
            name: "Eros Atalia",
            position: "Committee Member",
            image: require("../assets/speakers/Eros Atalia.jpg")
          },
          {
            name: "Genaro Gojo Cruz",
            position: "Committee Member",
            image: require("../assets/speakers/Genaro Gojo Cruz.jpg")
          },
          {
            name: "Johann Espiritu",
            position: "Committee Member",
            image: require("../assets/speakers/Johann Espiritu.jpg")
          },
          {
            name: "Tanya Simon",
            position: "Committee Member",
            image: require("../assets/speakers/Tanya Simon.jpg")
          }
        ]
      },
      {
        division: "Registration",
        heads: [
          {
            name: "Clarissa Militante",
            position: "Committee Head:",
            image: require("../assets/speakers/Clarissa Militante.jpg")
          }
        ],
        members: [
          {
            name: "Ina Abuan",
            position: "Committee Member",
            image: require("../assets/speakers/Ina Abuan.jpg")
          },
          {
            name: "Vijae Alquisola",
            position: "Committee Member",
            image: require("../assets/speakers/Vijae Alquisola.jpg")
          },
          {
            name: "Donna Mina",
            position: "Committee Member",
            image: require("../assets/speakers/Donna Mina.jpg")
          }
        ]
      },
      {
        division: "Logistics and Documentation",
        heads: [
          {
            name: "Harmony Guevarra",
            position: "Committee Head:",
            image: require("../assets/speakers/Harmony Guevarra.jpg")
          },
          {
            name: "Jessel Duque",
            position: "Co-committee Head",
            image: require("../assets/speakers/Jessel Duque.jpg")
          }
        ],
        members: [
          {
            name: "Jo Sylvelyn Almanzor",
            position: "Committee Member",
            image: require("../assets/speakers/Jo Almanzor.jpg")
          },
          {
            name: "Donna Mina",
            position: "Committee Member",
            image: require("../assets/speakers/Donna Mina.jpg")
          },
          {
            name: "May Ann Raquepo",
            position: "Committee Member",
            image: require("../assets/speakers/May Raquepo.jpg")
          },
           {
            name: "Hannah Pabalan",
            position: "Committee Member",
            image: require("../assets/speakers/Hannah Pabalan.jpg")
          }
        ]
      },
      {
        division: "Department of Literature Administration",
        heads: [
          {
            name: "Genevieve Asenjo",
            position: "Chair",
            image: require("../assets/speakers/Genevieve Asenjo.jpg")
          },
          {
            name: "Johann Espiritu",
            position: "Vice Chair",
            image: require("../assets/speakers/Johann Espiritu.jpg")
          },
          {
            name: "Antonette Arogo",
            position: "Graduate Programs Coordinator",
            image: require("../assets/speakers/Antonette Arogo.jpg")
          },
          {
            name: "Donna Mina",
            position: "Department Secretary",
            image: require("../assets/speakers/Donna Mina.jpg")
          }
        ],
        members: [
        ]
      }
    ]
  })
};
</script>
<style scoped>
.about-the-conference {
  margin: auto;
  margin-top: 5%;
  width: 80%;
  background: rgba(147, 249, 251, 0.8);
  padding: 3% 5%;
  border-radius: 15px;
}

h1 {
  font: 6vw Gopher, bold;
  color: #fada28;
  font-weight: 900;
  text-shadow: -0.25vw -0.25vw #8e745d;
  margin-top: -2.5vw;
}

h2 {
  font: 3vw brandon-grotesque, sans-serif;
  color: #ff3bb0;
  font-weight: 900;
  text-shadow: -0.05vw -0.05vw #ffffff;
  margin-top: -2.5vw;
}

h3 {
  font: 1.3vw atten-new, sans-serif;
  font-weight: 900;
  color: white; 
}
.d-flex-column {
  margin-top: -2%;
}

.pink-circle {
  background-color: #ff3bb0;
  border-radius: 15px;
  width: 100%;
  padding: 3px 8px;
  margin: auto;
  text-align: center;
  margin: 10% 5%;
}
.box {
  width: 30%;
}
</style>
