  // Initialize Firebase
  //require('../.env').config()
  var firebase = require("firebase");
  var config = {
    apiKey: "AIzaSyAWVwb4SespufERfwTxCi-g6CjS9H-ypIE",
    authDomain: "library-188e9.firebaseapp.com",
    databaseURL: "https://library-188e9.firebaseio.com",
    storageBucket: "library-188e9.appspot.com",
    messagingSenderId: "676372866910"
  };

var FbApp = firebase.initializeApp(config);
module.exports = FbApp.database();
