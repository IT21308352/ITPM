import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAWvXGCK8g6vRLJF6EcF7jPe2frUauVnWs",
    authDomain: "VisioEase-ceec0.firebaseapp.com",
    projectId: "VisioEase-ceec0",
    storageBucket: "VisioEase-ceec0.appspot.com",
    messagingSenderId: "580293695594",
    appId: "1:580293695594:web:335d0a4d8ade19640c1213"
  };

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
