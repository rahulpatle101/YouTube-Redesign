import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HomeView from './components/HomeView';
import DetailView from './components/DetailView';
import './App.css';

const App = () => {
    return (
      <Fragment>
          <Header />
          <Sidebar />
          <DetailView />
      </Fragment>
    )
}

export default App;
