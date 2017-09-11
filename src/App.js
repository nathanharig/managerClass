import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDkKWyXAqLoDTCqSTkl_e-asKNVI3Lp35Q',
      authDomain: 'manager-f1abc.firebaseapp.com',
      databaseURL: 'https://manager-f1abc.firebaseio.com',
      projectId: 'manager-f1abc',
      storageBucket: 'manager-f1abc.appspot.com',
      messagingSenderId: '294396243236'
    };

    firebase.initializeApp(config);
  }


  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}


export default App;