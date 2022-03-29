<template>
  <!-- Add navbar -->
  <div>
    <h1>Home page</h1>
    <h3 style="color: red">{{ errMsg }}</h3>
    <h3 style="color: green">{{ successMsg }}</h3>
    <nav class="nav justify-content-center">
      <a class="nav-link active" href="#">Videos</a>
      <a class="nav-link" href="#">Games</a>
      <a class="nav-link" href="#">Musics</a>
      <a class="nav-link" v-on:click="deconnecter" clic href="#">Déconnecter</a>
    </nav>
    <li v-for="item in totalVuePackages">{{ item }} <br /></li>
  </div>
</template>

<script lang="ts">
// import TheWelcome from "@/components/TheWelcome.vue";
import store from "@/store";
import { getAuth, signOut } from "@firebase/auth";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  data() {
    return {
      errMsg: "",
      successMsg: "",
      totalVuePackages: [],
    };
  },
  async mounted() {
    this.testFetch();
    console.log("The store state: ");
    console.log(store.state);
  },
  methods: {
    testFetch() {
      fetch("https://pokeapi.co/api/v2/ability/150/")
        .then((response) => response.json())
        .then((data) => {
          this.totalVuePackages = data;
          console.log(this.totalVuePackages);
        });
    },

    // -- START -- : Signout
    deconnecter() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          console.log("Logout successuful.");
          this.successMsg = "Déconnexion réussie.";
        })
        .catch((error) => {
          console.log(error);
          this.errMsg = "Erreur rencontré: " + error;
        });
    },
    // -- END -- : Signout
  },
});
</script>