import Axios from 'axios';
import { Component, useEffect, useState } from 'react';
import AuthService from './services/auth.service';
import Login from './pages/Login';
import Register from './pages/Register'
const App = () => {
  const [showMemberDashboard, setMemberDashboard] = useState(false);
  const [showTreasurerDashboard, setTreasurerDashboard] = useState(false);
  const [showSecretaryGeneralDashboard, setSecretaryGeneralDashboard] = useState(false);
  const [showPresidentDashboard, setPresidentDashboard] = useState(false);
  const [showCoordinatorDashboard, setCoordinatorDashboard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if(user) {
      setCurrentUser(user);
      setSecretaryGeneralDashboard(user.roles.includes("ROLE_SECRETARY_GENERAL"));
      setSecretaryGeneralDashboard(user.roles.includes("ROLE_SECRETARY_GENERAL"));
      setSecretaryGeneralDashboard(user.roles.includes("ROLE_SECRETARY_GENERAL"));
    }
  })
  
  const logout = () => {
    AuthService.logout();
  }
  
    return (
      <div className="App">
        
      </div>
    );
  
  
}

export default App;
