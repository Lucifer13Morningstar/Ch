import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyBpXa5SV-Nek-gqjDE8Fa9fKKo0f6ZmwR8",
    authDomain: "chatapp-460e3.firebaseapp.com",
    projectId: "chatapp-460e3",
    storageBucket: "chatapp-460e3.appspot.com",
    messagingSenderId: "800105957931",
    appId: "1:800105957931:web:98f3ecb215f97b1292786e"
  };

  let app;
  if (firebase.apps.length === 0){
      app = firebase.initializeApp(firebaseConfig);
  }
  else
  {
      app = firebase.app()
  } 
  const db = app.firestore();
  const auth = firebase.auth();
  export { db, auth };