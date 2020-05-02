import React, { Component } from 'react';
import Dashboard from './components/layout/dashboard';
import Login from './components/layout/login';

class App extends Component {
  state = {
    isLoggedIn: '',
  };
  
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ isLoggedIn: res.isLoggedIn }))
      .catch(err => console.log(err));
  }
  
  callApi = async () => {
    const response = await fetch('/api/isLoggedIn');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    
    return body;
  };
  
  render() {
    if (this.state.isLoggedIn) {
      return <Dashboard />
    } else {
      return <Login />
    }
    
  }
}

export default App;
