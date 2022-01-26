// var admin = require("firebase-admin");

// var serviceAccount = require("../config/fbServiceAccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://ecommerce-225c8.firebaseio.com",
// });

// module.exports = admin;


var admin = require("firebase-admin");

var serviceAccount = require("../config/fbServiceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports=admin;


  // //==================
  // Then, initialize Firebase and begin using the SDKs for the products you’d like to use.

  // // Import the functions you need from the SDKs you need
  // import { initializeApp } from "firebase/app";
  // // TODO: Add SDKs for Firebase products that you want to use
  // // https://firebase.google.com/docs/web/setup#available-libraries

  // // Your web app's Firebase configuration
  // const firebaseConfig = {
  //   apiKey: "AIzaSyCP1UDv0A5qJ4i29gQ-3DirSh6cYMfRchI",
  //   authDomain: "ecommerce-96880.firebaseapp.com",
  //   projectId: "ecommerce-96880",
  //   storageBucket: "ecommerce-96880.appspot.com",
  //   messagingSenderId: "106107429252",
  //   appId: "1:106107429252:web:d9a4fcd89f0c2f91923dd1"
  // };

  // // Initialize Firebase
  // const app = initializeApp(firebaseConfig);

// //=============el ultimo metodo de auth ================
// //======================================================
//     var admin = require("firebase-admin");

//     var serviceAccount = require("path/to/serviceAccountKey.json");

//     admin.initializeApp({
//       credential: admin.credential.cert(serviceAccount)
//     });
