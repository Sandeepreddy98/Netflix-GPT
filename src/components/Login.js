import { Link } from "react-router-dom";
import { images } from "../utils/images/imageConstans";
import { ReactComponent as NetflixLogo } from "../utils/images/netflix-logo.svg";
import { useRef } from "react";
import { checkValidLoginData } from "../utils/validate/validateLogin";
import { useState } from "react";
import axios from "axios";
import { apiUrl } from "../utils/url";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const { background } = images;
  const email = useRef(null);
  const password = useRef(null);
  const handleLogin = () => {
    const message = checkValidLoginData(
      email.current.value.trim(),
      password.current.value.trim()
    );
    setErrorMessage(message);
    if (message) return;
    loginAPI({
      email: email.current.value.trim(),
      password: password.current.value.trim(),
    });
  };

  const loginAPI = async (params) => {
    try {
      const response = await axios.post(`${apiUrl}/auth/login`, params);
      console.log(response);
    } catch (err) {
      console.error("Error while signing up : ", err);
    }
  };
  return (
    <div
      className="bg-cover bg-center h-screen w-screen absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-90"
      style={{ backgroundImage: `url(${background})` }}
    >
      <NetflixLogo className="w-[148px] h-[40px] fill-[#e50914] ml-40 mt-8" />
      <div className="container mx-auto bg-gray-200 bg-opacity-60 bac p-9 mt-12 w-fit flex flex-col bg-gray-950">
        <h2 className="text-3xl font-bold mb-4 text-slate-50">Sign Up</h2>
        <input
          type="email"
          placeholder="Enter your email"
          className="bg-gray-800 text-white rounded p-3 w-80 mb-4 placeholder-gray-400"
          ref={email}
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="bg-gray-800 text-white rounded p-3 w-80 my-4 placeholder-gray-400"
          ref={password}
        />
        <p className="text-sm text-red-500 mb-4 ">{errorMessage} </p>
        <button
          className="bg-red-600 hover:bg-red-700 rounded p-3 w-80 font-semibold text-slate-50"
          onClick={handleLogin}
        >
          Login
        </button>
        <p className="text-gray-400 mt-4 text-sm">
          Not in Netflix yet?{" "}
          <Link to="/signup">
            <span className="text-white cursor-pointer">Sign Up now</span>.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
