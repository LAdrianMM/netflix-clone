import firebase from 'firebase'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXG31J1oRZ6-hv60vy0WwZM_vO4Sv-6Jk",
  authDomain: "netflix-clone-69c1c.firebaseapp.com",
  projectId: "netflix-clone-69c1c",
  storageBucket: "netflix-clone-69c1c.appspot.com",
  messagingSenderId: "1074883914017",
  appId: "1:1074883914017:web:8b888de530ed054d927660"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()

export {auth}