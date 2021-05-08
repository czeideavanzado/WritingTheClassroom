<template>
  <v-container fluid>
    <v-row justify="space-around">
      <v-col id="registration-and-payment" class="my-5" cols="12" md="5">
        <v-container>
          <h3 class="register-title">
            Registration and Payment
          </h3>
        </v-container>
      </v-col>

      <v-col id="contact-us" class="my-5" cols="12" md="5">
        <v-container>
          <h3 class="register-title">
            Contact Us
          </h3>

          <v-row>
            <v-col>
              <v-data-table
                class="elevation-1"
                :headers="contactHeaders"
                :items="contacts"
                dark
                hide-default-footer
                disable-sort
                disable-pagination
                disable-filtering
              ></v-data-table>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
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
</style>
