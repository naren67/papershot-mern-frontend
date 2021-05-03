import firebase from 'firebase'

const firebaseConfig = {
          // apiKey: "AIzaSyD5ynxA3DElfl8qyKQJv17MvVcKpmnu5aw",
          // authDomain: "paper-shot.firebaseapp.com",
          // projectId: "paper-shot",
          // storageBucket: "paper-shot.appspot.com",
          // messagingSenderId: "29244363528",
          // appId: "1:29244363528:web:a3f70af01f4cc8472012bd",
          // measurementId: "G-0WKLBQ2Y9C"
          apiKey: "AIzaSyCeHSDBYTwElB_0EtDNrYk-3nC0VQaIkLY",
          authDomain: "papershot-mern.firebaseapp.com",
          projectId: "papershot-mern",
          storageBucket: "papershot-mern.appspot.com",
          messagingSenderId: "610627966142",
          appId: "1:610627966142:web:c6a286eef96037ae4d3aef",
          measurementId: "G-3LGVVP2F7X"
        };

        const firebaseApp = firebase.initializeApp(firebaseConfig)

        const db = firebase.firestore()
        const auth = firebase.auth()
        const provider = new firebase.auth.GoogleAuthProvider()

        export {auth, provider}
        export default db