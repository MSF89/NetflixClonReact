import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBrGa8s2NvmWhu2Az_Mni_uAV_0A4E0lJw",
    authDomain: "netflixclone-5c3ce.firebaseapp.com",
    projectId: "netflixclone-5c3ce",
    storageBucket: "netflixclone-5c3ce.appspot.com",
    messagingSenderId: "347983496467",
    appId: "1:347983496467:web:a7768e9d53b8c02cb586e6"
  };

  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);

  export {auth}