import * as firebase from 'firebase';


const firebaseService = {
  login: ( email, password ) => firebase.auth().signInWithEmailAndPassword( email, password ),
};