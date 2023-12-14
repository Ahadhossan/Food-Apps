import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD3EzcEWL6rmpOzrPba4DY5bHe-2WEEX54",
  authDomain: "restaurant-app-1aea5.firebaseapp.com",
  databaseURL: "https://restaurant-app-1aea5-default-rtdb.firebaseio.com",
  projectId: "restaurant-app-1aea5",
  storageBucket: "restaurant-app-1aea5.appspot.com",
  messagingSenderId: "311629877472",
  appId: "1:311629877472:web:b3843573257c2a2a06c085",
  measurementId: "G-QL2QQEPDGW",
};



const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);



const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
