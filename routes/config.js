  // Initialize Firebase
  require('dotenv').config()
  var firebase = require("firebase");
  var config = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
  };

var FbApp = firebase.initializeApp(config);

module.exports = FbApp;
//module.exports = FbApp.database();
