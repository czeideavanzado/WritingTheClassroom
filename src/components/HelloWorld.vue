<template>
  <v-container class="d-flex flex-column justify-center">
    <div id="title" class="d-flex justify-center">
      <img src="../assets/writing the classroom.png" width="50%" />
    </div>
    <div>
      <div id="creative" class="d-flex flex-column">
        <img src="../assets/creative.png" width="50%" />
        <img src="../assets/wtc 6.png" width="35%" />
        <img src="../assets/wtc 5.png" width="50%" style="margin-top: 3%;" />
      </div>
      <img id="drawing" src="../assets/drawing2.png" width="55%" />
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
#creative {
  position: relative;
  margin-left: 10%;
  margin-top: 5%;
  z-index: 2;
}
#drawing {
  float: right;
  position: relative;
  margin-top: -35%;
  opacity: 75% !important;
  z-index: 1;
  margin-right: 10%;
}

#title {
  margin-top: 2%;
}
</style>
