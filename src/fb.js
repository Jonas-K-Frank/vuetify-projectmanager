import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAt-MoZFShU-iJUPhDTQhSwXsvHgaqQ_lQ",
    authDomain: "projectmanager-62f67.firebaseapp.com",
    databaseURL: "https://projectmanager-62f67.firebaseio.com",
    projectId: "projectmanager-62f67",
    storageBucket: "projectmanager-62f67.appspot.com",
    messagingSenderId: "1011058432632",
    appId: "1:1011058432632:web:9fe5e87dbddaa6b94e2b8d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

export default db;