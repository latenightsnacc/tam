import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

const Login = () => {

    const required = value => {
        if (!value) {
            return(
                <div className="" role={"alert"}>
                    This field is required.
                </div>
            )
        }
    }

    const email = value => {
        if (!isEmail(value)) {
            return(
                <div className="" role={"alert"}>
                    This is not a valid email.
                </div>
            )
        }
    }
    return(
        <div className="flex h-screen flex-col items-center justify-center">
            <form className="w-full md:w-3/6 mx-auto">
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
                validations={[required, email]} 
                />
            </div>
            <div className="relative border-1 py-2 mb-4 border-gray-300 rounded text-sm w-full">
                <div className="absolute -top-3">
                    <label className="text-xs px-2 bg-white text-green-500">password</label>
                </div>
                <input 
                type={'password'}
                className={'border-0 text-xs md:text-sm px-2 w-full focus:ring-0 focus:outline-0'}
                required 
                />
            </div>
            <CheckButton style={ {display: "none"}} ref={che} />
            <button className="w-full bg-green-300 text-white p-2 hover:bg-green-500 hover:shadow-lg">Create Profile</button>
            
            </form>
        </div>
    )
}

export default Login;