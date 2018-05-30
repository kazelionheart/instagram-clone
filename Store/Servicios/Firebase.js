import * as firebase from "firebase";

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC2Moj3OWFUMSWJ9vuobuMOeyRWsgg3Tzc",
    authDomain: "instagram-clone-a3d43.firebaseapp.com",
    databaseURL: "https://instagram-clone-a3d43.firebaseio.com",
    projectId: "instagram-clone-a3d43",
    storageBucket: "instagram-clone-a3d43.appspot.com",
    messagingSenderId: "1066139358960"
  };

  firebase.initializeApp(config);

export const autenticacion = firebase.auth();
export const baseDeDatos = firebase.database();
