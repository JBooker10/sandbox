import React, { Component } from 'react';
import Post from './components/Post';
import PostForm from './components/PostForm'
import { Provider } from 'react-redux'
import store from './store/store'

import logo from './logo.svg';
import './App.css';



class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <PostForm/>
          <hr/>
          <Post/>
        </header>
      </div>
      </Provider>
    );
  }
}

export default App;
