import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyCzMXOsTdDR5_5HhF1Zdd3FjBgZvvhILwg",
  authDomain: "crwn-clothing-8e63b.firebaseapp.com",
  projectId: "crwn-clothing-8e63b",
  storageBucket: "crwn-clothing-8e63b.appspot.com",
  messagingSenderId: "55076818654",
  appId: "1:55076818654:web:84651b171f691170a43c4f",
  measurementId: "G-T9Z3PLYZWP"
};

firebase.initializeApp(config);

// initialized app. FIrebase knows who we are.

// exported an asynchronous arrow function to create a user's document in firestore after authentication
export const createUserProfileDocument = async (userAuth, additionalData) => {
  // if the uerAuth object is null, the function returns null
  if (!userAuth) return;
  // create userRef which is getting the
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

const facebookProvider = new firebase.auth.FacebookAuthProvider();
facebookProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithFacebook = () => auth.signInWithPopup(facebookProvider);

export default firebase;
