import Axios from 'axios';
import { Component, useState } from 'react';
import AuthService from './services/auth.service';
import Login from './pages/Login';
import Register from './pages/Register'
class App extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);

    this.state = {
      showCoordinatorDashboard: false,
      showPresidentDashboard:false,
      showSecretaryGeneralDashboard: false,
      showTreasurerDashboard: false,
      currentUser: undefined
    }
  }
  
  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if(user) {
      this.setState({
        currentUser: AuthService.getCurrentUser(),
        showMemberDashboard: user.roles.include('ROLE_MEMBER'),
        showSecretaryGeneralDashboard: user.roles.include('ROLE_SECRETARY_GENERAL'),
        showTreasurerDashboard: user.roles.include('ROLE_TREASURER'),
        showPresidentDashboard: user.roles.include('ROLE_PRESIDENT'),
        showCoordinatorDashboard: user.roles.include('ROLE_COORDINATOR'),
      })
    }
  }
  logout() {
    AuthService.logout();
  }
  render() {
    const { currentUser, showPresidentDashboard, showSecretaryGeneralDashboard, showTreasurerDashboard, showCoordinatorDashboard} = this.s
    return (
      <div className="App">
        
      </div>
    );
  }
  
}

export default App;
