import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'

// const firebaseConfig = {
//   apiKey: "AIzaSyATMDTLf-ovoe9Y6bseAZiLBQ3K6IvcLHU",
//   authDomain: "hot-ornot.firebaseapp.com",
//   projectId: "hot-ornot",
//   storageBucket: "hot-ornot.appspot.com",
//   messagingSenderId: "519960281628",
//   appId: "1:519960281628:web:d25f89c9f15db62b1e95d9"
// };

const firebaseConfig = {
  apiKey: "AIzaSyCk1wpSlpvTQTyY_OvS0ZifzAhy0MD_F0I",
  authDomain: "hotornot-7f918.firebaseapp.com",
  projectId: "hotornot-7f918",
  storageBucket: "hotornot-7f918.appspot.com",
  messagingSenderId: "320810043143",
  appId: "1:320810043143:web:20bfab7fb0aacbb73de7a2",
  measurementId: "G-QRWTRW8YCH"
};

export const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export const whoresDB = collection(db, "whores")