import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClvWi3ls9srRIQcpc6TiJwsHGi7biumY0",
  authDomain: "elabuelomario-5712f.firebaseapp.com",
  projectId: "elabuelomario-5712f",
  storageBucket: "elabuelomario-5712f.appspot.com",
  messagingSenderId: "632980875796",
  appId: "1:632980875796:web:704986197513768d7b5501"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);