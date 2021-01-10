<template>
  <div class="home">
    <v-container class="d-flex flex-column justify-center">
      <div>
        <div id="creative" class="d-flex flex-column">
          <h1>CREATIVE/</h1>
          <h1>CRITICAL</h1>
          <h2>Pedagogies</h2>
          <div class="pink-circle">
            <h3>June 17-19 | AN ONLINE CONFERENCE</h3>
          </div>
          <div id="earn-units" class="blue-circle">
            <h3>
              Earn 24 CPD Units for attending panel sessions on the teaching of:
            </h3>
            Poetry, Fiction, Drama & Performance, Creative Nonfiction, Literary
            Criticism, Art Appreciation, Philippine Literature and World
            Literature
          </div>
        </div>
        <img id="drawing" src="../assets/drawing2.png" width="55%" />
        <div id="about-the-conference">
          <h3
            style="color: black; text-align:center; font-size: 5vh; margin:1.5vh; text-shadow: -.1vh -.2vh #ff3bb0;"
          >
            About The Conference
          </h3>
          <p>
            “Writing the Classroom 4” is a three-day conference on June 17-19,
            2021 with a plenary lecture, master classes/craft and lesson
            planning workshops on Teaching Poetry, Fiction, Drama and
            Performance, Creative Non-Fiction, Art Appreciation, Literary
            Criticism, Philippine Literature and World Literature.
          </p>
          <p>
            Teacher-training and competency-building have been part of the main
            thrusts of the Department of Literature for decades. The proposed
            conference owes its incarnation to the department’s Teaching Caravan
            project which was first held in 2006 and is the continuation of the
            three previous Writing the Classroom instalments, 2017, 2018, and
            2019 which were all held at De La Salle University.
          </p>
          <p>
            For 2021, the conference will focus on the theme “Creative and
            Critical Pedagogies in Literature and the Humanities”. This year’s
            conference includes various plenary sessions on current trends and
            best practices in the teaching of literature and the humanities. The
            organizers have invited Mr. Ricky Lee, a multi-awarded writer and a
            seasoned publisher, to deliver a keynote address on this year’s
            conference theme.
          </p>
        </div>
        <div class="d-flex-column">
          <div id="conference-schedule"><h1>Conference Schedule</h1></div>
          <div class="d-flex justify-space-between">
            <div class="schedule pink-circle">
              <h2>Day 1</h2>
              <ul>
                <li>Keynote Lecture</li>
                <li>Teaching Poetry/Pagtuturo ng Tula</li>
                <li>Teaching Fiction/Pagtuturo ng Kuwento</li>
                <li>Teaching Creative Non-fiction/Pagtuturo ng Sanaysay</li>
              </ul>
            </div>
            <div class="schedule pink-circle">
              <h2>Day 2</h2>
              <ul>
                <li>
                  Teaching Drama and Performance/Pagtuturo ng Dula at
                  Pagtatanghal
                </li>
                <li>
                  Teaching Philippine Literature/Pagtuturo ng Panitikan ng
                  Pilipinas
                </li>
                <li>Teaching World Literature/Pagtuturo ng Panitikan</li>
                <li>
                  Teaching Art Appreciation/ Pagtuturo ng Pagpapahalaga sa
                  Sining
                </li>
              </ul>
            </div>
            <div class="schedule pink-circle">
              <h2>Day 3</h2>
              <ul>
                <li>
                  Teaching Literary Criticism/ Pagtuturo ng Panuring
                  Pampanitikan
                </li>
                <li>
                  Roundtable Discussion: “Entangled Fields: Creating
                  Interdisciplinary Spaces for Collaboration and Dialogues”
                </li>
                <li>Best Practices</li>
              </ul>
            </div>
          </div>
          <div
            width="100%"
            style="display: flex; justify-content: center;align-items: center"
          >
            <v-btn class="ma-2" outlined style="" elevation="2" color="white">
              View Complete Schedule
            </v-btn>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style>
@import url("https://use.typekit.net/kfl2rcb.css");
#earn-units {
  color: white;
  width: 55%;
}
#about-the-conference {
  margin: 10% 0% 2% 0%;
  width: 100%;
  background: rgba(147, 249, 251, 0.8);
  padding: 5% 15%;
  border-radius: 15px;
}

#creative {
  position: relative;
  margin-left: 10%;
  margin-top: 5%;
  z-index: 2;
}
#drawing {
  float: right;
  position: relative;
  margin-top: -40%;
  opacity: 0.75;
  z-index: 1;
  margin-right: 10%;
}

#title {
  margin-top: 2%;
}

h1 {
  font: 6vw Gopher, bold;
  color: #fada28;
  font-weight: 900;
  text-shadow: -0.15vw -0.15vw #8e745d;
  margin-top: -2.5vw;
}
h2 {
  font: 5.2vw brandon-grotesque, sans-serif;
  color: #fada28;
  font-weight: 500;
  text-shadow: -0.15vw -0.15vw #8e745d;
  margin-top: -2.5vw;
}

.schedule > h2 {
  font: 2.5vw brandon-grotesque, sans-serif;
  color: #fada28;
  font-weight: 500;
  text-shadow: -0.15vw -0.15vw #8e745d;
  margin-top: 0;
}
#conference-schedule > h1 {
  font: 6vw Gopher, bold;
  color: #fada28;
  font-weight: 900;
  text-shadow: -0.15vw -0.15vw #8e745d;
  margin-top: 0;
}

li {
  color: white;
}
h3 {
  font: 1.5vw atten-new, sans-serif;
  font-weight: 900;
  color: white;
}
.pink-circle {
  background-color: #ff3bb0;
  border-radius: 15px;
  width: fit-content;
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

.schedule {
  width: 30%;
  padding: 20px;
}
</style>
