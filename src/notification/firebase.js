import firebase from 'firebase/app';
import "firebase/firebase-messaging"


 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyC_Tbrg9zlKTf-qikT879WxIG04FcjxCQA",
    authDomain: "abk-food.firebaseapp.com",
    projectId: "abk-food",
    storageBucket: "abk-food.appspot.com",
    messagingSenderId: "628290845258",
    appId: "1:628290845258:web:c108db982e1c909e6d84b3"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;