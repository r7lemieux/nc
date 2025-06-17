// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// import type firebase from 'firebase/compat'
// import { initializeApp } from "firebase/app"
// import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, signInAnonymously, onAuthStateChanged} from "firebase/auth"
import { browser } from '$app/environment'

export let db: any
export let addDoc: any
export let collection: any
export let firestore: any
let app
export const prerender = true

const firebaseConfig = {
  apiKey: "AIzaSyDSH64GdZd8z4GQfUQjhUme_weu2OQhP6k",
  authDomain: "costofwar-78f15.firebaseapp.com",
  projectId: "costofwar-78f15",
  storageBucket: "costofwar-78f15.appspot.com",
  messagingSenderId: "427274116099",
  appId: "1:427274116099:web:0a0342f4ac29ae8f14c236",
  measurementId: "G-HG64L9HT1V",
}
export const initFirebase = () => {
  // https://github.com/vitejs/vite/issues/2579  does not work
  // https://github.com/firebase/firebase-js-sdk/issues/4846
  if (browser) {
    import('firebase/app').then(firebaseAppImpl => {
      app = firebaseAppImpl.initializeApp(firebaseConfig)
      return import('firebase/firestore')
    })
      .then(fs => {
        db = fs.getFirestore()
        firestore = fs
        addDoc = fs.addDoc
        collection = fs.collection
      })
      .then(() => {
        const auth = getAuth()
        return signInAnonymously(auth)
          // .then(() => {
          //   // Signed in..
          // })
          // .catch((error) => {
          //   const errorCode = error.code
          //   const errorMessage = error.message
          //   // ...
          // })
      })
  } else {
    console.log('Not in browser')
  }

  // app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app)
  // db = getFirestore(app)

  if (browser) {
    // import('firebase/app').then(firebaseAppImpl => {
    //   app = firebaseAppImpl.initializeApp(firebaseConfig)
    //
    // })
    // .then(db1 => {
    //   db = db1
    //   console.log(`==>dbService.ts :34`, db)
    // })
    // } else {
    //   console.log('Not in browser');
  }
}

const authChanged = () => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
  } else {
    // User is signed out
  }
});
}



