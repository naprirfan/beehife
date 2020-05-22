import React, { Component } from 'react';
import Dashboard from './components/layout/dashboard';
import Login from './components/layout/login';
import callApi from './service/Api';

class App extends Component {
  state = {
    isLoggedIn: '',
  };
  
  componentDidMount() {
    callApi('/api/isLoggedIn')
      .then(res => this.setState({ isLoggedIn: res.isLoggedIn }))
      .catch(err => console.log(err));
  }
  
  render() {
    if (this.state.isLoggedIn) {
      return <Dashboard />
    } else {
      return <Login />
    }
    
  }
}

export default App;
