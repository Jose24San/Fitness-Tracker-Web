import React, { Component } from 'react';
import * as firebase from 'firebase';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import configureStore from './store/configureStore';
import { Header } from './components/Header';
import Home from './pages/Home';
import Login from './pages/Authentication/Login';


const config = {
  apiKey: 'AIzaSyDqocPOu_ZMLivtKW1xk1WdzrR29zZooA8',
  authDomain: 'fitness-tracker-a5204.firebaseapp.com',
  databaseURL: 'https://fitness-tracker-a5204.firebaseio.com',
  projectId: 'fitness-tracker-a5204',
  storageBucket: 'fitness-tracker-a5204.appspot.com',
  messagingSenderId: '791050351564',
};
firebase.initializeApp( config );

const store = configureStore();

class App extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged( user => {
      if ( user ) {
        console.log( 'user is logged in: ', user );
      }
    } );

    setTimeout( () => {
      firebase.auth().signInWithEmailAndPassword( 'sanchez24jose@gmail.com', 'butthead' );
    }, 2000 );
  }

  render() {
    const app = firebase.app();
    const features = [ 'auth', 'database', 'messaging', 'storage', 'firestore' ].filter( feature => typeof app[ feature ] === 'function' );


    console.log( 'what is in firebase', app );
    console.log( 'what is in features: ', features );

    return (
      <Provider store={ store }>
        <Router>
          <Header />

          <Route path="/" exact component={ Home } />
          <Route path="/Login" exact component={ Login } />

        </Router>
        {/*<div className="App">*/ }
        {/*  <Header />*/ }
        {/*  <img src={ logo } className="App-logo" alt="logo" />*/ }
        {/*  <p>*/ }
        {/*    Edit <code>src/App.js</code> and save to reload.*/ }
        {/*  </p>*/ }
        {/*  <a*/ }
        {/*    className="App-link"*/ }
        {/*    href="https://reactjs.org"*/ }
        {/*    target="_blank"*/ }
        {/*    rel="noopener noreferrer"*/ }
        {/*  >*/ }
        {/*    Learn React*/ }
        {/*  </a>*/ }
        {/*</div>*/ }
      </Provider>
    );
  }
}

export default App;
