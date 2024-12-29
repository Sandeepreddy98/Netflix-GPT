import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as NetflixLogo } from "../utils/images/netflix-logo.svg";
import { auth } from "../utils/firebase/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { adduser, removeUser } from "../utils/redux-store/userSlice";
import {LOGO} from '../utils/constants'

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSingout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName,photoURL } = user;
        dispatch(adduser({ uid: uid, email: email, displayName: displayName,photoURL : photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/login");
      }
    });
    
    return () => unsubscribe()
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2 justify-between">
          {user && (
        <div className="relative inline-block text-left p-4">
          <input type="checkbox" id="dropdownToggle" className="peer hidden" />
          <label htmlFor="dropdownToggle" className="cursor-pointer">
            <img
              src={user.photoURL}
              alt="User Avatar"
              className="w-10 h-10 rounded-full border border-gray-300"
            />
          </label>
          <div className="absolute right-0 mt-2 w-36 bg-white rounded-md shadow-lg border border-gray-200 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible transition-all duration-200">
            <span
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              onClick={handleSingout}
            >
              Logout
            </span>
          </div>
        </div>
      )}
        </div>
      )}
    </div>
  );
};

export default Header;
