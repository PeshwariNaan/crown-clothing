import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    
        apiKey: "AIzaSyBM_xMZatz0F49ILrQz5PLSsCN6o8Mdru0",
        authDomain: "crown-db-jb.firebaseapp.com",
        databaseURL: "https://crown-db-jb.firebaseio.com",
        projectId: "crown-db-jb",
        storageBucket: "crown-db-jb.appspot.com",
        messagingSenderId: "365595039711",
        appId: "1:365595039711:web:30f1dbd6ee7968d73cd66a",
        measurementId: "G-SKCGFJF6V3"
      
    
}; 

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
