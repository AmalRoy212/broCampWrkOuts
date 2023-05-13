import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import 'firebase/compat/storage'


 const firebaseConfig = {
  apiKey: "AIzaSyBJRewgeg6DX858yZxymeZzy0iG8QPG6Y8",
  authDomain: "fir-3db24.firebaseapp.com",
  projectId: "fir-3db24",
  storageBucket: "fir-3db24.appspot.com",
  messagingSenderId: "568934042842",
  appId: "1:568934042842:web:4ada141d4670b8b3e069e3",
  measurementId: "G-KMPE57W7K0"
};

export default firebase.initializeApp(firebaseConfig)
  
