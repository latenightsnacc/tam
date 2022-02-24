import Axios from 'axios';
import { useState } from 'react';
import AuthService from './services/auth.service';
import Login from './pages/Login';
import Register from './pages/Register'
function App(props) {
  const [logout, setLogout] = useState();
  const [state, setState] = useState({
    showMemberDashboard: false,
    showTreasurerDashboard: false,
    showSecretaryGeneral: false,
    showPresidentDashboard: false,
    showCoordinatorDashboard: false,
    currentUser: undefined
  });

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if(user) {
      setState({
        currentUser: AuthService.getCurrentUser(),
        showMemberDashboard: user.roles.include('ROLE_MEMBER'),
        showSecretaryGeneralDashboard: user.roles.include('ROLE_SECRETARY_GENERAL'),
        showTreasurerDashboard: user.roles.include('ROLE_TREASURER'),
        showPresidentDashboard: user.roles.include('ROLE_PRESIDENT'),
        showCoordinatorDashboard: user.roles.include('ROLE_COORDINATOR'),
      })
    }
  }
  return (
    <div className="App">
      {showMemberDashboard && (
        <Mem
      )}
    </div>
  );
}

export default App;
