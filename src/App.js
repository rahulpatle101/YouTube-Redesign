import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HomeView from './components/HomeView';
import DetailView from './components/DetailView';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      loading: false,
      toggleSidebar: false
    }
  }

  handleSidebar = () => {
    this.setState({toggleSidebar: !this.state.toggleSidebar});
  }


  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Fragment>
            <Header isHidden={this.handleSidebar}/>
            <Sidebar isHidden={this.state.sidebarToggle}/>
            <Route exact path='/' render={() => (
                <HomeView videos={this.state.videos} loading={this.state.loading} />
            )} />
            <Route path='/detail/:video' component={DetailView} />
          </Fragment>
      </BrowserRouter>
      </div>
    )
  }
}

export default App;
