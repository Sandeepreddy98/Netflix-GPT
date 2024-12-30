import { Link, useNavigate } from "react-router-dom";
import { images } from "../utils/images/imageConstans";
import { useRef, useState } from "react";
import { checkValidSignupData } from "../utils/validate/validateSingup";
import { apiUrl } from "../utils/constants";
import axios from "axios";
import { config } from "../config";
import { signUpUser } from "../utils/firebase/functions";
import { updateProfile } from "firebase/auth";
import Header from "./header";

const Signup = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate()

  const { background } = images;
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleSignup = () => {
    const message = checkValidSignupData(
      name.current.value.trim(),
      email.current.value.trim(),
      password.current.value.trim()
    );
    setErrorMessage(message);
    if (message) return;
    const params = {
      name: name.current.value.trim(),
      email: email.current.value.trim(),
      password: password.current.value.trim(),
    }
    
    if(config.backend === "firebase"){
      signUpUserUsingFirebase(params)
    }else{
      signUpAPI(params);
    }
  };

  //using firebase
  const signUpUserUsingFirebase = async ({ email, password }) => {
    try {
      const user = await signUpUser(email, password);
      if (user) {
        try {
          await updateProfile(user, {
            displayName: name.current.value.trim(),
            photoURL: `https://ui-avatars.com/api/?name=${name.current.value.trim()}&size=48&background=random&rounded=true`,
          });
          navigate("/login");
        } catch (error) {
          navigate("/error");
        }
      }
    } catch (err) {
      setErrorMessage(err.message);
    }
  };
  
  //using node backend
  const signUpAPI = async (params) => {
    try {
      const response = await axios.post(`${apiUrl}/auth/signup`, params);
      if(response){
        navigate('/login')
      }
    } catch (err) {
      setErrorMessage(err.message)
    }
  };

  return (
    <div
      className="bg-cover bg-center h-screen w-screen absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-90"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Header/>
      <div className="container mx-auto bg-gray-200 bg-opacity-60 bac p-9 mt-32 w-fit flex flex-col bg-gray-950">
        <h2 className="text-3xl font-bold mb-4 text-slate-50">Sign Up</h2>
        <input
          type="text"
          placeholder="Enter your name"
          className="bg-gray-800 text-white rounded p-3 w-80 mb-4 placeholder-gray-400"
          ref={name}
        />
        <input
          type="email"
          placeholder="Enter your email"
          className="bg-gray-800 text-white rounded p-3 w-80 my-4 placeholder-gray-400"
          ref={email}
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="bg-gray-800 text-white rounded p-3 w-80 my-4 placeholder-gray-400"
          ref={password}
        />
        {/* <p className="text-red-500 font-bold text-sm">{errorMessage}</p> */}
        <p className="text-sm text-red-500 mb-4 ">{errorMessage} </p>
        <button
          className="bg-red-600 hover:bg-red-700 rounded p-3 w-80 font-semibold text-slate-50"
          onClick={handleSignup}
        >
          Sign Up
        </button>
        <p className="text-gray-400 mt-4 text-sm">
          Already in Netflix?{" "}
          <Link to="/login">
            <span className="text-white cursor-pointer">Login In now</span>.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
