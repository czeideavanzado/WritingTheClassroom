<template>
  <v-container fluid>
    <v-row justify="space-around">
      <div class="d-flex-column" id="HowToRegister" >
            <div ><h1>How to Register</h1></div>
            <img class="steps" src="../assets/misc_step1.png" width="65%" />
            <img class="steps" src="../assets/misc_step2.png" width="65%" />
            <img class="steps" src="../assets/misc_step3.png" width="65%" />  
            <img class="steps" src="../assets/misc_info.png" width="65%" />  
        </div>
      
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Register",
  data: () => ({
    contactHeaders: [
      { text: "Title", value: "title" },
      { text: "Name", value: "name" },
      { text: "Email", value: "email" }
    ],
    contacts: [
      {
        title: "General Information",
        name: "Anne Richie Balgos",
        email: "wtc4information@gmail.com"
      },
      {
        title: "Registration & Payment",
        name: "Clarissa Militante",
        email: "wtc4registrants@gmail.com"
      },
      {
        title: "Online Sessions & Schedule",
        name: "Harmony Guevarra",
        email: "wtc4logistics@gmail.com"
      },
      {
        title: "Posters & Letters of Invitation",
        name: "Juan Miguel Leandro",
        email: "wtc4publicity@gmail.com"
      },
      {
        title: "Certificates",
        name: "Donna Mina",
        email: "wtc4certificates@gmail.com"
      }
    ]
  })
};
</script>

<style scoped>
.register-title {
  color: black;
  text-align: center;
  font-size: 5vh;
  margin: 1.5vh;
  text-shadow: -0.1vh -0.2vh #ff3bb0;
}

#contact-us,
#registration-and-payment {
  background: rgba(147, 249, 251, 0.8);
}

#HowToRegister {
  margin-top: 50px;
  width: 100%;
  text-align: center;
}

.steps {
  margin: auto;
}

h1 {
  font: 6vw Gopher, bold;
  color: #fada28;
  font-weight: 900;
  text-shadow: -0.25vw -0.25vw #8e745d;
  margin-top: -2.5vw;
}
</style>
