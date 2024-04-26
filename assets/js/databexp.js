import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyC7j-NIF51Mvm7qKgLZZF6ChuWIE8G7wdA",
    authDomain: "homes28.firebaseapp.com",
    databaseURL: "https://homes28-default-rtdb.firebaseio.com",
    projectId: "homes28",
    storageBucket: "homes28.appspot.com",
    messagingSenderId: "100292614475",
    appId: "1:100292614475:web:5867f71ff7e092e64b30ce"
  };

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
