// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics, logEvent, setUserProperties } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAx6rgXxW7VsoiwQuakaGgpST8sot7NiSo",
  authDomain: "iam-dipanjan.firebaseapp.com",
  databaseURL: "https://iam-dipanjan.firebaseio.com",
  projectId: "iam-dipanjan",
  storageBucket: "iam-dipanjan.appspot.com",
  messagingSenderId: "254603575786",
  appId: "1:254603575786:web:61d623663ace73df3bf293",
  measurementId: "G-YZRBKJTKNL",
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
let analytics = null

if (typeof window !== "undefined") analytics = getAnalytics(app)

export const logEvents = (data, event = "page_view") => {
  if (analytics) {
    logEvent(analytics, event, data)
  } else console.warn("analytics not ready.")
}

export const userProperties = data => {
  if (analytics) setUserProperties(analytics, data)
}
