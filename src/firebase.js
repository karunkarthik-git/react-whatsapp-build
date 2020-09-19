import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBNWFdFOxxek2I4H28ipd7UcrRWjoqt-q8",
  authDomain: "whatsapp-react-js-fc9bd.firebaseapp.com",
  databaseURL: "https://whatsapp-react-js-fc9bd.firebaseio.com",
  projectId: "whatsapp-react-js-fc9bd",
  storageBucket: "whatsapp-react-js-fc9bd.appspot.com",
  messagingSenderId: "158617697576",
  appId: "1:158617697576:web:3e43f42e6ca1d61ca6241d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
