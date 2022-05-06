import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDOsJnxofgD0J6fdiAOWpFz09nbsmu7vts",
  authDomain: "anime-recomendations.firebaseapp.com",
  projectId: "anime-recomendations",
  storageBucket: "anime-recomendations.appspot.com",
  messagingSenderId: "782519297517",
  appId: "1:782519297517:web:4ee94b5973332d987d33e4",
  measurementId: "G-81R4CLWCFN",
};

const appExists = getApps().length !== 0;

export const app = appExists ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
