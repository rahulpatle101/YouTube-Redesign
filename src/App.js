import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HomeView from './components/HomeView';
import DetailView from './components/DetailView';
import './App.css';

// const State = {
//   videos: Array,
//   loading
// }

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      loading: false
    }
  }

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Fragment>
            <Header />
            <Sidebar />
            <Route exact path='/' render={() => (
                <HomeView videos={this.state.videos} loading={this.state.loading} />
            )} />
            <Route path='/detail/:1' component={DetailView} />
          </Fragment>
      </BrowserRouter>
      </div>
    )
  }
}

export default App;
