import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from './store';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// import 'jquery/src/jquery.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const app = createApp(App).use(store);

app.use(router);
app.mount("#app");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJ4RYSsgb9b5f3v_I7HJq5wZzkxK6y18M",
  authDomain: "allinone-899b9.firebaseapp.com",
  projectId: "allinone-899b9",
  storageBucket: "allinone-899b9.appspot.com",
  messagingSenderId: "105046507686",
  appId: "1:105046507686:web:cf95dc027a3d91793b3467"
};

// Initialize Firebase
const appFire = initializeApp(firebaseConfig);
const db = getFirestore();
export default db;
