import NewNote from "./dashboard/SecretaryGeneral/NewNote";
import AdminLogin from "./pages/AdminLogin";
import AdminRegister from "./pages/AdminRegister";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {

    return (
      <div className="App">
        <NewNote />
        <Register />
        {/* <Login />
        <AdminRegister />
        <AdminLogin /> */}
      </div>
    );
  
  
}

export default App;
