<template>
  <div>
   <v-row justify="space-around">
      <div class="d-flex-column" style="margin-top: 8%;">
        <h1>About Us</h1>
      </div>
      <div class="d-flex-column">
        <div class="about-the-conference">
          <h3 style="color: black; text-align:center; font-size: 5vh; margin:1.5vh; text-shadow: -.1vh -.2vh #ff3bb0;"
          > The Organizers</h3>
          <p> De La Salle University’s Department of Literature offers undergraduate and graduate programs in literary, cultural, and performance studies; creative writing; and literature across the professions. Faculty members are award-winning writers and leading researchers and scholars who are published and recognized in the national and international scenes. </p>
        </div>
      </div>
      <div class="d-flex-column">
        <div class="about-the-conference">
          <h3 style="color: black; text-align:center; font-size: 5vh; margin:1.5vh; text-shadow: -.1vh -.2vh #ff3bb0;"
          > Vision-Mission</h3>
          <p> As Commission of Higher Education’s Center of Development, the Department of Literature aims to be a leading learner-centered department in literary, cultural, and performance pedagogy, production, and research in the Philippines and Asia. </p>
          <p> Literary, Cultural, and Performance Production – in poetry, drama and performance, fiction, and creative nonfiction; in the translation of creative texts into Philippine and foreign languages; in multi-genre, hybrid, hyper-, and other texts; and in other forms of cultural production. </p>
          <p> Pedagogy in Literature, Cultural, and Performance Studies – on graduate and undergraduate levels; in seminar-lecture and craft-workshop courses on histories, genres, and theories of literature, culture, performance, and creative writing. </p>   
          <p> Literary, Cultural, and Performance Research – in local, national, and transnational intersections of literary history, critical theory and poetics, literary, cultural, and performance criticism. </p>
          <p> Through these three main thrusts, the Department nurtures scholars and artists who bridge faith and scholarship in their advocacy of cultural heritage and in their contributions to Philippine and Asian literature, culture, and performance. </p>
        </div>
      </div>
      <div class="d-flex-column" style="margin-top: 8%; margin-bottom: 3%;">
        <h1>Core Team Members</h1>
      </div>
      </v-row>
      <v-row v-for="i in organizers" :key="i" class="d-flex flex-column justify-space-around">
        
        <h1 style="margin:auto;"> {{i.division}} </h1>

        <v-row v-for="j in i.heads" :key="j" class="d-flex justify-space-around">
          <div class=" d-flex flex-column just box;">
            <v-avatar style="margin: auto;"
                size="150"
                >
              <img
                :src="j.image"
                :alt="j.name"
              >
              </v-avatar>
              <div class="pink-circle">
                <p style="color:white;"> {{j.name}} </p>
                <h3> {{j.position}}</h3>            
            </div>
          </div> 
        </v-row>
        <v-row v-for="j in i.members" :key="j" class="d-flex justify-space-around">
          <div class=" d-flex flex-column just box;">
            <v-avatar style="margin: auto;"
                size="150"
                >
              <img
                :src="j.image"
                :alt="j.name"
              >
              </v-avatar>
              <div class="pink-circle">
                <p style="color:white;"> {{j.name}} </p>
                <h3> {{j.position}}</h3>            
            </div>
          </div> 
        </v-row>
      </v-row>
  </div>
</template>

<script>
export default {
  name: "Organizers",
  data: () => ({
    organizers: [
      {
        division: "Conference Directors",
        heads: [ {
            name: "Anne Richie Balgos",
            position: "Conference Director",
            image: require("../assets/speakers/Anne Richie Balgos.jpg"),
          }
        ],
        members: [
          {
            name: "Mesándel Virtusio Arguelles",
            position: "Deputy Conference Director",
            image: require("../assets/speakers/Ayer Arguelles.jpg"),
          },
          {
            name: "Cris Barbra Pe",
            position: "Deputy Conference Director",
            image: require("../assets/speakers/Cris Barbara Pe.jpg"),
          },
        ]
      },
      {
        division: "Publicity and Promotions",
        heads: [ {
            name: "Juan Miguel Leandro Quizon",
            position: "Committee Head:",
            image: require("../assets/speakers/Leandro Miguel Quizon.jpg"),
          },
          {
            name: "Adrian Ho",
            position: "Co-committee Head:",
            image: require("../assets/speakers/Adrian Ho.jpg"),
          },
        ],
        members: [
          {
            name: "Antonette Talaue-Arogo",
            position: "Committee Member",
            image: require("../assets/speakers/Antonette Arogo.jpg"),
          },
          {
            name: "Eros Atalia",
            position: "Committee Member",
            image: require("../assets/speakers/Eros Atalia.jpg"),
          },
          {
            name: "Genaro Gojo Cruz",
            position: "Committee Member",
            image: require("../assets/speakers/Genaro Gojo Cruz.jpg"),
          },
          {
            name: "Johann Vladimir Espiritu",
            position: "Committee Member",
            image: require("../assets/speakers/Johann Espiritu.jpg"),
          },
          {
            name: "Tanya Simon",
            position: "Committee Member",
            image: require("../assets/speakers/Tanya Simon.jpg"),
          },
        ]
      },
      {
        division: "Registration",
        heads: [ {
            name: "Clarissa Militante",
            position: "Committee Head:",
            image: require("../assets/speakers/Clarissa Militante.jpg"),
          },
        ],
        members: [
          {
            name: "Mariane Amor Romina Abuan",
            position: "Committee Member",
            image: require("../assets/speakers/Ina Abuan.jpg"),
          },
          {
            name: "Vijae Alquisola",
            position: "Committee Member",
            image: require("../assets/speakers/Vijae Alquisola.jpg"),
          },
          {
            name: "Donna Mina",
            position: "Committee Member",
            image: require("../assets/speakers/Genaro Gojo Cruz.jpg"),
          },
        ]
      },
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

h3 {
  font: 1.5vw atten-new, sans-serif;
  font-weight: 900;
  color: white;
  margin-top: -1.8vh;
}
.d-flex-column{
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
.box{
  width: 30%; 
}
</style>
