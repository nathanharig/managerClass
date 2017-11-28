import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

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
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <View style={{ flex: 1 }}>
          <Router />
        </View>
      </Provider>
    );
  }
}


export default App;
