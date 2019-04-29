import * as firebase from 'firebase';


export const firebaseService = {

  login: ( email, password ) => firebase.auth().signInWithEmailAndPassword( email, password ),

  logOut: () => firebase.auth().signOut(),

  listenToBodyLogs: userId => firebase.firestore()
    .collection( 'bodyLogs' )
    .where( 'userId', '==', userId ),

};
