import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import { BrowserRouter, Route } from 'react-router-dom';
// import { app } from './firebase';
// import { PATH_POPULAR, PATH_TOP_RATED, PATH_UPCOMING } from './api';

// import Loading from './components/Loading';
// import Header from './components/Header';
// import Login from './components/Login';
// import Logout from './components/Logout';
// import Footer from './components/Footer';
// import Sidebar from './components/Sidebar';
// import Main from './components/Main';
// import Discover from './components/Discover';
// import SearchResults from './components/SearchResults';
// import Movie from './components/Movie';
// import UserLists from './components/UserLists';
// import NotificationSystem from 'react-notification-system';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
