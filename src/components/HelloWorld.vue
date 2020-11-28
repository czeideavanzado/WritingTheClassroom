<template>
  <v-container class="d-flex flex-column justify-center">
    <div>
      <div id="creative" class="d-flex flex-column">
        <h1>CREATIVE/</h1>
        <h1>CRITICAL</h1>
        <h2>Pedagogies</h2>
        <div class="pink-circle"> <h3>June 3-5 | AN ONLINE CONFERENCE</h3> </div>
        <div class="blue-circle" style="width:50%"> <h3>Conference description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. </h3> </div>
      </div>
      <img id="drawing" src="../assets/drawing2.png" width="55%" />
      <div id="earn-units">
        <h3 style="color: black; text-align:center; font-size: 5vh; margin:1.5vh; text-shadow: -.1vh -.2vh #ff3bb0;">EARN 24 CPD UNITS FOR ATTENDING PLENARY SESSIONS ON:</h3>
        <div id="earn-units-content">
           <div>Poetry</div>
           <div>Fiction</div>
           <div>Drama & Performance</div>
           <div>Creative Nonfiction</div>
           <div>Literary Criticism</div>
           <div>Art Appreciation</div>
           <div>Philippine Literature</div>
           <div>World Literature</div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({})
};
</script>

<style>
 @import url("https://use.typekit.net/kfl2rcb.css");

#earn-units{
  margin: 10% 0%;
  width:100%;
  background: rgba(147, 249, 251, 0.8);
  padding: 5% 15%;
  border-radius: 15px;
}

#earn-units-content{
  column-count: 2;
  text-align: center;
  font-size: 3vh;
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
  color: 	#fada28;
  font-weight: 900;
  text-shadow: -.15vw -.15vw #8e745d;
  margin-top: -2.5vw;
}
h2 {
  font: 5.2vw brandon-grotesque, sans-serif;
  color: 	#fada28;
  font-weight: 500;
  text-shadow: -.15vw -.15vw #8e745d;
  margin-top: -2.5vw;
}
h3 {
  font: 1.5vw atten-new, sans-serif;
  font-weight: 900;
  color: white;
}
.pink-circle{
  background-color: #ff3bb0;
  border-radius: 15px;
  width: fit-content;
  padding: 3px 8px;
  margin: 3vh 0px;
}

.blue-circle{
  background-color: rgba(82, 92, 193, 0.8);
  border-radius: 15px;
  width: fit-content;
  padding: 5px 8px;
  margin: 1vh 0px;
}
</style>
