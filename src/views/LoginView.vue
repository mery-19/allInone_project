<template>
  <div>
    <input type="email" v-model="email" />
    <input type="password" v-model="password" />
    <button v-on:click="connect">Se conecter</button>
  </div>
</template>

<script lang="ts">
import db from "@/main";
import { doc, getDoc } from "@firebase/firestore";
import { defineComponent } from "@vue/runtime-core";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default defineComponent({
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },

  methods: {
    connect() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(async (userCredential) => {
          const user = userCredential.user;
          console.log(user);
          // go to index.js
          //   state{ firstName;
          //   lastName:}

          const docRef = doc(db, "users", userCredential.user.uid);
          const docSnap = await getDoc(docRef);
          console.log(docSnap);
          this.$router.push("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    },
  },
});
</script>