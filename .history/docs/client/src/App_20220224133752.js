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
        currentUser: A
      })
    }
  }
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

export default App;