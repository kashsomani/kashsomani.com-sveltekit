import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { addDoc, collection } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDwncizZ6Y19Rpv3hJiPfxxTiOFIbvJunI",
    authDomain: "kashsomani-c859d.firebaseapp.com",
    projectId: "kashsomani-c859d",
    storageBucket: "kashsomani-c859d.appspot.com",
    messagingSenderId: "132012232929",
    appId: "1:132012232929:web:7355ed28ec66a4e3e627a0",
    measurementId: "G-40T97MHF1C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const sendEmail = async (data) => {
    return await addDoc(collection(db, "mail"), data);
}
