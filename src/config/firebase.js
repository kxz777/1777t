import firebase from 'firebase/app';
import 'firebase/firestore'
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "937329540848558090",
  storageBucket: "",
  messagingSenderId: "937448664727703553",
  appId: "937448664727703553",
  measurementId: "937448664727703553"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();