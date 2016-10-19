import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDon1H9elXmZbIuzgZY-lnImzjNXUcq16A',
      authDomain: 'manager-16c2b.firebaseapp.com',
      databaseURL: 'https://manager-16c2b.firebaseio.com',
      storageBucket: 'manager-16c2b.appspot.com',
      messagingSenderId: '693402752674'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <View>
          <Header headerText="Login" />
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
