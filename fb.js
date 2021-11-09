
const firebaseConfig = {
    apiKey: "AIzaSyAUmRz4cdBN9w0jbD_lmyiYg3YtLgKGr-U",
    authDomain: "bullseye-fb481.firebaseapp.com",
    projectId: "bullseye-fb481",
    storageBucket: "bullseye-fb481.appspot.com",
    messagingSenderId: "801435400065",
    appId: "1:801435400065:web:90f3e489479a14190eda80"
  };
  
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebaseApp.auth();

 