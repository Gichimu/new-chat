import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {

    apiKey: "AIzaSyDn43PI-E1H2n0EReXsQuPzwfzbfpKEhJ8",

    authDomain: "testapp-e910c.firebaseapp.com",

    databaseURL: "https://testapp-e910c.firebaseio.com",

    projectId: "testapp-e910c",

    storageBucket: "testapp-e910c.appspot.com",

    messagingSenderId: "591210265378",

    appId: "1:591210265378:web:7d8ec4a605f9908522437b",

    measurementId: "G-8R3EZTZ633"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider();

const auth = getAuth();

const googleLogin = document.getElementById("loginWithGoogle");

// googleLogin.addEventListener("click", app.signInWithPopup(auth, provider)
// .then((result) => {
//   // This gives you a Google Access Token. You can use it to access the Google API.
//   const credential = GoogleAuthProvider.credentialFromResult(result);
//   const token = credential.accessToken;
//   // The signed-in user info.
//   const user = result.user;
//   // ...
// }).catch((error) => {
//   // Handle Errors here.
//   const errorCode = error.code;
//   const errorMessage = error.message;
//   // The email of the user's account used.
//   const email = error.email;
//   // The AuthCredential type that was used.
//   const credential = GoogleAuthProvider.credentialFromError(error);
//   // ...
// });
// )

googleLogin.addEventListener("click", ()=>{
    return app.signInWithPopup(auth, provider)
})