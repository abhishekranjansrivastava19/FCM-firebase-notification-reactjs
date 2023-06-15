import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDiIGm0VSERQASu7CKaajV3eqJV8P1KusA",
  authDomain: "fcm-demo-e84a1.firebaseapp.com",
  projectId: "fcm-demo-e84a1",
  storageBucket: "fcm-demo-e84a1.appspot.com",
  messagingSenderId: "418145193110",
  appId: "1:418145193110:web:dc24c9e043a9773e3046b7",
  measurementId: "G-R9R2CFB6ZV"
    // databaseURL: "Enter Your's"
};
const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);
export const fetchToken = (setTokenFound) => {
    return getToken(messaging, {
        vapidKey:
            "BE6o0q05VJ2GATSnvf5xSb6kUfRX-uQEnGDxG8uVnQqS68KrCIGuKIsT_CUtkXflvuIgKuvvNYpYZwkzHGgO4ys",
    })
        .then((currentToken) => {
            if (currentToken) {
                console.log("current token for client: ", currentToken);
                setTokenFound(true);
                // Track the token -> client mapping, by sending to backend server
                // show on the UI that permission is secured
            } else {
                console.log(
                    "No registration token available. Request permission to generate one."
                );
                setTokenFound(false);
                // shows on the UI that permission is required
            }
        })
        .catch((err) => {
            console.log("An error occurred while retrieving token. ", err);
            // catch error while creating client token
        });
};
export const onMessageListener = () =>
    new Promise((resolve) => {
        onMessage(messaging, (payload) => {
            resolve(payload);
        });
    });
//   export default Firebase;
//amqps://tziscvmz:USqRmzw7wWQYwTgYk7_MShLquWXyyblm@shrimp.rmq.cloudamqp.com/tziscvmz