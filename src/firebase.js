import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics"; // Analytics optional for now

const firebaseConfig = {
    apiKey: "AIzaSyCwgBq4K6KwWU73JzVqAzZ_Gb-31UFMdtw",
    authDomain: "supersonic-cloud.firebaseapp.com",
    projectId: "supersonic-cloud",
    storageBucket: "supersonic-cloud.firebasestorage.app",
    messagingSenderId: "663668541187",
    appId: "1:663668541187:web:fc33d59d7b17d38b2fcb36",
    measurementId: "G-N2SNJ4GKVM"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

export { db };
