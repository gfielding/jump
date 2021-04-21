import firebase from 'firebase/app';

require("firebase/auth")
require("firebase/storage")
require("firebase/firestore")
require("firebase/functions")
require("firebase/analytics")
require("firebase/performance")
  
// firebase init goes here
const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_KEY_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_ID,
  measurementId: process.env.VUE_APP_MEASUREMENT_ID
};
firebase.initializeApp(firebaseConfig);
firebase.analytics()
firebase.performance()
firebase.firestore().enablePersistence()

const db = firebase.firestore()
const firestore = firebase.firestore
const auth = firebase.auth()
const storageRef = firebase.storage().ref()
const currentUser = auth.currentUser
const functions = firebase.functions()

// firebase collections
const usersCollection = db.collection('users')

export {
  db,
  auth,
  storageRef,
  firestore,
  currentUser,
  functions,
  usersCollection,
}