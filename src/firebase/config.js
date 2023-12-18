import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBEFgImAWP4kgTrZEX8v_ohiMXQltveDGs",
  authDomain: "miniblog-react-82f04.firebaseapp.com",
  projectId: "miniblog-react-82f04",
  storageBucket: "miniblog-react-82f04.appspot.com",
  messagingSenderId: "412133252142",
  appId: "1:412133252142:web:3f3dda83738f2d51d113bf",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
