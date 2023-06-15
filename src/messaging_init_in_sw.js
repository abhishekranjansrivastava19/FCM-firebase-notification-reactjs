// import { initializeApp } from "firebase/app";
// import { getMessaging, getToken, onMessage } from "firebase/messaging";

// // TODO: Replace the following with your app's Firebase project configuration
// // See: https://firebase.google.com/docs/web/learn-more#config-object
// const firebaseConfig = {
//     apiKey: "AIzaSyCuY4b9i-iEPPTLQFYO2tMvT7JehEz2co4",
//     authDomain: "testmessaging-firebase-reactjs.firebaseapp.com",
//     projectId: "testmessaging-firebase-reactjs",
//     storageBucket: "testmessaging-firebase-reactjs.appspot.com",
//     messagingSenderId: "497051006480",
//     appId: "1:497051006480:web:e1bb37d71a30e276b83c95",
//     measurementId: "G-8Y6LY28S37"
// };


// function requestPermission() {
//     console.log('Requesting permission...');
//     Notification.requestPermission().then((permission) => {
//         if (permission === 'granted') {
//             console.log('Notification permission granted.');

//             // Initialize Firebase
//             const app = initializeApp(firebaseConfig);


//             // Initialize Firebase Cloud Messaging and get a reference to the service
//             const messaging = getMessaging(app);
//             getToken(messaging, { vapidKey: "BP55Xcvikfv6TQE53xq2K5kIeuZQfeDPFIQB3wHRokSouRbRwHaxeL6pgzs3AcRiDdNsU_6Yow4_FQ2aZd6CDUA" })
//                 .then((currentToken) => {
//                     if (currentToken) {
//                         console.log("Current Token", currentToken);
//                     }
//                     else {
//                         console.log("Can't get the token");
//                     }
//                 });

//         }
//         else {
//             console.log("Don't have the permission!!!");
//         }
//     });

// }


// requestPermission();