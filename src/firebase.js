import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCx9y_xBdmQvC9O52rYeQ3cQ9bSfYg72oE",
  authDomain: "chat-app-f4254.firebaseapp.com",
  projectId: "chat-app-f4254",
  storageBucket: "chat-app-f4254.appspot.com",
  messagingSenderId: "966355082793",
  appId: "1:966355082793:web:fe9691691fd52fd4960638",
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messageRef = database.ref('messages');

export const PushMessage = ({ name ,text}) => {
    messageRef.push({name, text});
}