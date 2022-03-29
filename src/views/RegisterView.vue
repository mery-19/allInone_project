/* eslint-disable prettier/prettier */
<template>
  <div>
    <h3 style="color: red">{{ errorMessage }}</h3>
    <input type="email" v-model="email" />
    <input type="password" v-model="password" />
    <input type="password" v-model="passwordVerif" />
    <input type="text" v-model="firstName" />
    <input type="text" v-model="lastName" />

    <button v-on:click="createAccount">Se conecter</button>
    // prenom nom
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "@firebase/firestore";
import db from "@/main";

export default defineComponent({
  data() {
    return {
      email: "",
      password: "",
      passwordVerif: "",
      firstName: "",
      lastName: "",
      errorMessage: "",
    };
  },
  methods: {
    createAccount() {
      if (
        this.email == "" ||
        this.password == "" ||
        this.passwordVerif == "" ||
        this.firstName == "" ||
        this.lastName == ""
      ) {
        this.errorMessage = "Merci de remplir tous les champs";
      } else {
        if (this.password == this.passwordVerif) {
          const auth = getAuth();
          createUserWithEmailAndPassword(auth, this.email, this.password)
            .then(async (userCredential) => {
              console.log(userCredential);
              // Signed in
              const user = userCredential.user;
              // Add a new document in collection "cities"
              console.log("the user: ");
              console.log(user.uid);
              const docRef = doc(db, "users",user.uid);
              await setDoc(docRef, {
                firstName: this.firstName,
                lastName: this.lastName,
              });

              this.$router.push("/login");
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode);
              console.log(errorMessage);
              this.errorMessage = errorCode;
            });
        } else {
          this.errorMessage = "Passwords not match.";
        }
      }
    },
  },
});
</script>
