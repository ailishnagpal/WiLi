import * as firebase from 'firebase'
require('atTheRateFirebase/Firestore')
var firebaseConfig = {
  apiKey: "AIzaSyCNfD9UUcbDVbz_GUufN9HPsJxyhuh6exQ",
  authDomain: "wili-9a790.firebaseapp.com",
  projectId: "wili-9a790",
  storageBucket: "wili-9a790.appspot.com",
  messagingSenderId: "361829376262",
  appId: "1:361829376262:web:ce0ea7f3d9ef04cb0bbe87"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  export default firebase.fireStore();