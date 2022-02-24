import React, {useRef, useState} from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import AuthService from "../services/auth.service"
import Footer from "./components/Footer";
import Container from "./components/Container";
import Layout from "./components/Layout";
import MiniLayout from "./components/MiniLayout";
import Spacer from "./components/Spacer";

const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };
  const validEmail = (value) => {
    if (!isEmail(value)) {
      return (
        <div className="alert alert-danger" role="alert">
          This is not a valid email.
        </div>
      );
    }
  };
  const vfname = (value) => {
    if (value.length < 3 || value.length > 50) {
      return (
        <div className="alert alert-danger" role="alert">
            Your first name must be between 3 and 20 characters.
        </div>
      );
    }
  };
  const vlname = (value) => {
    if (value.length < 3 || value.length > 50) {
      return (
        <div className="alert alert-danger" role="alert">
            Your last name must be between 3 and 20 characters.
        </div>
      );
    }
  };
  const vlga = (value) => {
    if (value.length < 3 || value.length > 50) {
      return (
        <div className="alert alert-danger" role="alert">
            L.G.A must be between 3 and 20 characters.
        </div>
      );
    }
  };
  const vPpa = (value) => {
    if (value.length < 3 || value.length > 50) {
      return (
        <div className="alert alert-danger" role="alert">
            P.P.A must be between 3 and 20 characters.
        </div>
      );
    }
  };
  const vStatecode = (value) => {
    if (value.length < 11 || value.length > 11) {
      return (
        <div className="alert alert-danger" role="alert">
            Statecode must be 11 characters.
        </div>
      );
    }
  };
  const vGroup = (value) => {
    if (value === 'Select CDS Group' || value.length === 0) {
      return (
        <div className="alert alert-danger" role="alert">
            Please select your CDS Group.
        </div>
      );
    }
  };
  const vPhone = (value) => {
    if (value.length < 11 || value.length > 11) {
      return (
        <div className="alert alert-danger" role="alert">
            Phone Number must be 11 characters.
        </div>
      );
    }
  };
  
const Register = (props) => {
    const form = useRef();
    const checkBtn = useRef();
    const [file, setFile] = useState("");
    const [fileName, setFileName] = useState("");
    const [inputs, setInputs] = useState({});
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");
    
  const onChangeInput = (e) => {
    setInputs({
        ...inputs,
        [e.target.name]: e.target.value
    })
  };

  const onChangeFile = (e) => {
    const file = e.target.value;
    setFile(file);
    setFileName(file[0]);
  };
  
  const handleRegister = (e) => {
    e.preventDefault();
    setMessage("");
    setSuccessful(false);
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(inputs.firstName, inputs.lastName, inputs.statecode, inputs.lga, inputs.ppa, inputs.cdsGroup, inputs.email, inputs.phone_no, file, fileName).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
  };
    return(
        <>
           <Layout>
               <Container>
               <MiniLayout>
                    <Form onSubmit={handleRegister} ref={form} className="w-full md:w-4/6 mx-auto" id="form">
                        {!successful && (
                            <div>
                                <div className="mt-5 mb-4 text-center">
                        <h2 className="font-bold md:text-xl mb-2">Create Profile</h2>
                            <h1 className="font-bold md:text-2xl text-green-500">CDS E-ATTENDANCE</h1>
                            
                        </div>
                        <div className="flex flex-co"></div>
                        <div className="relative border-1 py-2 mb-4 border-gray-300 rounded text-sm w-full hover:border-green-400">
                            <div className="absolute -top-3">
                                <label className="text-xs px-2 bg-white text-green-500">Full Name</label>
                            </div>
                            <Input 
                            type={'text'}
                            name={'firstName'}
                            value={inputs.firstName}
                            className={'border-0 text-xs md:text-sm px-2 w-full focus:ring-0 focus:outline-0 text-capitalize'}
                            onChange={onChangeInput}
                            validations={[required, vfname]}
                            />
                        </div>
                        <div className="relative border-1 py-2 mb-4 border-gray-300 rounded text-sm w-full hover:border-green-400">
                            <div className="absolute -top-3">
                                <label className="text-xs px-2 bg-white text-green-500">Statecode</label>
                            </div>
                            <Input 
                            type={'text'}
                            name={'statecode'}
                            value={inputs.statecode}
                            className={'border-0 text-xs md:text-sm px-2 w-full focus:ring-0 focus:outline-0 text-uppercase'}
                            onChange={onChangeInput}
                            validations={[required, vStatecode]} 
                            />
                        </div>
                        <div className="relative border-1 py-2 mb-4 border-gray-300 rounded text-sm w-full hover:border-green-400">
                            <div className="absolute -top-3">
                                <label className="text-xs px-2 bg-white text-green-500">Local Government Area</label>
                            </div>
                            <Input 
                            type={'text'}
                            name={"lga"}
                            value={inputs.lga}
                            className={'border-0 text-xs md:text-sm px-2 w-full focus:ring-0 focus:outline-0'}
                            onChange={onChangeInput}
                            validations={[required, vlga]}
                            />
                        </div>
                        <div className="relative border-1 py-2 mb-4 border-gray-300 rounded text-sm w-full hover:border-green-400">
                            <div className="absolute -top-3">
                                <label className="text-xs px-2 bg-white text-green-500">C.D.S Group</label>
                            </div>
                            <select 
                            name="cds_group"
                            value={inputs.cds_group}
                            className={'border-0 text-xs md:text-sm px-2 w-full focus:ring-0 focus:outline-0'}
                            onChange={onChangeInput} 
                            validations={[required, vGroup]}>
                                <option disabled>Select CDS Group</option>
                                <option value={'Information Comunication Technology (I.C.T)'}>Information Comunication Technology (I.C.T)</option>
                                <option value={'Band'}>Band</option>
                            </select>
                        </div>
                        <div className="relative border-1 py-2 mb-4 border-gray-300 rounded text-sm w-full hover:border-green-400">
                            <div className="absolute -top-3">
                                <label className="text-xs px-2 bg-white text-green-500">Place of Primary Assignment</label>
                            </div>
                            <Input 
                            type={'text'}
                            name={'ppa'}
                            value={inputs.ppa}
                            className={'border-0 text-xs md:text-sm px-2 w-full focus:ring-0 focus:outline-0'}
                            onChange={onChangeInput}
                            validations={[required, vPpa]}
                            />
                        </div>
                        <div className="relative border-1 py-2 mb-4 border-gray-300 rounded text-sm w-full hover:border-green-400">
                            <div className="absolute -top-3">
                                <label className="text-xs px-2 bg-white text-green-500">Phone (Whatsapp)</label>
                            </div>
                            <Input 
                            type={"tel"}
                            name={"phone_no"}
                            value={inputs.phone_no}
                            className={'border-0 text-xs md:text-sm px-2 w-full focus:ring-0 focus:outline-0'}
                            onChange={onChangeInput}
                            validations={[required, vPhone]}
                            />
                        </div>
                        <div className="relative border-1 py-2 mb-4 border-gray-300 rounded text-sm w-full hover:border-green-400">
                            <div className="absolute -top-3">
                                <label className="text-xs px-2 bg-white text-green-500">Email</label>
                            </div>
                            <Input 
                            type={'email'}
                            name={'email'}
                            value={inputs.email}
                            className={'border-0 text-xs md:text-sm px-2 w-full focus:ring-0 focus:outline-0'}
                            onChange={onChangeInput}
                            validations={[required, validEmail]}
                            />
                        </div>
                        <div className="relative border-1 py-2 mb-4 border-gray-300 rounded text-sm w-full hover:border-green-400">
                            <div className="absolute -top-3">
                                <label className="text-xs px-2 bg-white text-green-500">Profile Picture</label>
                            </div>
                            <Input 
                            type="file"
                            name={'profile_pic'}
                            className={'border-0 text-xs md:text-sm px-2 w-full focus:ring-0 focus:outline-0'}
                            onChange={onChangeFile}
                            validations={[required]}
                            />
                        </div>
                            </div>
                        )}
                
                        <button
                         
                        className="w-full bg-green-300 text-white p-2 hover:bg-green-500 rounded hover:shadow-lg">Create Profile</button>
                        
                        {message && (
                            <div>
                                <div 
                                className={successful ? "text-gray-50 bg-green-500 " : " text-red-500 bg-white"}>
                                    {message}
                                </div>
                            </div>
                        )}
                        <CheckButton style={ {display: "none"}} ref={checkBtn} />
                    </Form>
                    </MiniLayout> 
               </Container>
            </Layout>
            <Spacer />
            <Footer />
        </>
    )
}

export default Register;