import Axios from 'axios';
import { Component, useState } from 'react';
import AuthService from './services/auth.service';
import Login from './pages/Login';
import Register from './pages/Register'
const App = () => {
  const [showMemberDashboard, setMemberDashboard] = useState(false);
  c
  
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
    const { currentUser, showPresidentDashboard, showSecretaryGeneralDashboard, showTreasurerDashboard, showCoordinatorDashboard} = this.state;
    return (
      <div className="App">
        
      </div>
    );
  }
  
}

export default App;
