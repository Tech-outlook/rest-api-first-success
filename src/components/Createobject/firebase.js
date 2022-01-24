import firebase from "firebase/app";
import "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyCGbfzkNWGL__tM6DR1zUiTOMPnJVIYWeo",
  authDomain: "peppy-primacy-336610.firebaseapp.com",
  databaseURL: "https://peppy-primacy-336610-default-rtdb.firebaseio.com",
  projectId: "peppy-primacy-336610",
  storageBucket: "peppy-primacy-336610.appspot.com",
  messagingSenderId: "505394455611",
  appId: "1:505394455611:web:7399b7b96762a684dd681e",
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database().ref();

export default database;
