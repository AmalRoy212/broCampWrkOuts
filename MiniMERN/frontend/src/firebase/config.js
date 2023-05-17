import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCgFl5-2rPF9fOf5jYj_h18DpUTGOr9UBI",
  authDomain: "mernauth-a387a.firebaseapp.com",
  projectId: "mernauth-a387a",
  storageBucket: "mernauth-a387a.appspot.com",
  messagingSenderId: "673117289285",
  appId: "1:673117289285:web:8eae203872ff7cc6db1c2c",
  measurementId: "G-LXZ9J598V2"
};

export default firebase.initializeApp(firebaseConfig)
