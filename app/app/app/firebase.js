import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBekRRao0A0etkwpLQBRbnGwK8AwHU5s-I",
  authDomain: "kofannan-cargo-and-logistics.firebaseapp.com",
  projectId: "kofannan-cargo-and-logistics",
  storageBucket: "kofannan-cargo-and-logistics.appspot.com",
  appId: "1:657267065654:web:e8755a2123efcff13a6997",
};

const app = initializeApp(firebaseConfig);

export default app;