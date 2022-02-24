import React, {useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth.service";
const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const Login = (props) => {
    const form = useRef();
    const checkBtn = useRef();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    }

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    }
    const handleLogin = (e) => {
        e.preventDefault();
        setMessage("");
        setLoading(true);
        form.current.validateAll();
        if (checkBtn.current.context._errors.length === 0) {
          AuthService.login(username, password).then(
            () => {
              props.history.push("/member");
              window.location.reload();
            },
            (error) => {
              const resMessage =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
              setLoading(false);
              setMessage(resMessage);
            }
          );
        } else {
          setLoading(false);
        }
    
    return(
        <div className="flex h-screen flex-col items-center justify-center">
            <form onSubmit={handleLogin} className="w-full md:w-3/6 mx-auto">
            <div className="mb-4 text-center">
            <h2 className="font-bold md:text-xl mb-2">Login</h2>
                <h1 className="font-bold md:text-2xl text-green-500">CDS E-ATTENDANCE</h1>
                
            </div>
            
        
            <div className="relative border-1 py-2 mb-4 border-gray-300 rounded text-sm w-full">
                <div className="absolute -top-3">
                    <label className="text-xs px-2 bg-white text-green-500">Email</label>
                </div>
                <input 
                type={'email'}
                placeholder={'Email'}
                value={'egonubuchi97@gmail.com'}
                className={'border-0 text-xs md:text-sm px-2 w-full focus:ring-0 focus:outline-0'}
                onChange={onChangeUsername}
                validations={[required]} 
                />
            </div>
            <div className="relative border-1 py-2 mb-4 border-gray-300 rounded text-sm w-full">
                <div className="absolute -top-3">
                    <label className="text-xs px-2 bg-white text-green-500">password</label>
                </div>
                <input 
                type={'password'}
                className={'border-0 text-xs md:text-sm px-2 w-full focus:ring-0 focus:outline-0'}
                onChange={onChangePassword}
                required 
                />
            </div>
            <div>
                {message && (
                    <div>
                        <p>{message}</p>
                    </div>
                )}
            </div>
            <button 
            className="w-full bg-green-300 text-white p-2 hover:bg-green-500 hover:shadow-lg"
            disabled={loading}>
                {loading && (
                    <span>Q</span>
                )}
                <span>Create Profile</span>
            
            </button>

            <CheckButton style={ {display: "none"}} ref={checkBtn} />
            
            </form>
        </div>
    )
}
}
export default Login;