import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
firebase.initializeApp({
  apiKey: "AIzaSyCbyBCy5ve0TSLXYn0uIAEH4zi1afmsMNo",
  authDomain: "reactfire-chat-96bf7.firebaseapp.com",
  projectId: "reactfire-chat-96bf7",
  storageBucket: "reactfire-chat-96bf7.appspot.com",
  messagingSenderId: "102956130531",
  appId: "1:102956130531:web:79b2362d3680108b5625d6"
})

const firestore = firebase.firestore()
const auth = firebase.auth()
export {firebase, firestore, auth}