// Scripts for firebase and firebase messaging
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);
// Initialize the Firebase app in the service worker by passing the generated config

const firebaseConfig = {
  apiKey: "AIzaSyDiIGm0VSERQASu7CKaajV3eqJV8P1KusA",
  authDomain: "fcm-demo-e84a1.firebaseapp.com",
  projectId: "fcm-demo-e84a1",
  storageBucket: "fcm-demo-e84a1.appspot.com",
  messagingSenderId: "418145193110",
  appId: "1:418145193110:web:dc24c9e043a9773e3046b7",
  measurementId: "G-R9R2CFB6ZV"
  // databaseURL: "Enter Your's",
};
firebase.initializeApp(firebaseConfig);
// Retrieve firebase messaging
const messaging = firebase.messaging();
messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});