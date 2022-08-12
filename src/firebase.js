import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getStorage } from "firebase/storage"
// import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
    apiKey: "AIzaSyCUh_eX8y5NJkgEUgFCbvnaytgaEmGaqf8",
    authDomain: "disney-plus-e9f0a.firebaseapp.com",
    projectId: "disney-plus-e9f0a",
    storageBucket: "disney-plus-e9f0a.appspot.com",
    messagingSenderId: "514743193399",
    appId: "1:514743193399:web:864cdeb5ff2add50e114b2",
    measurementId: "G-71V9R8KXW5",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)
auth.languageCode = getAuth().useDeviceLanguage()
const provider = new GoogleAuthProvider()
const storage = getStorage(app)
// const analytics = getAnalytics(app)

export { auth, provider, storage }
export default db
