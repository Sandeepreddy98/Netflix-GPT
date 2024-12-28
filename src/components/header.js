import { useSelector } from "react-redux";
import { ReactComponent as NetflixLogo } from "../utils/images/netflix-logo.svg";
import { auth } from "../utils/firebase/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  const handleSingout = async () => {
    try {
      await signOut(auth);
      navigate('/login')
    } catch (error) {
      console.error("Error signing out:", error);
    }
  }

  return (
    <div className="flex justify-between">
      <NetflixLogo className="w-[148px] h-[40px] fill-[#e50914] ml-40 mt-8" />

      {user && (
        <div className="relative inline-block text-left mt-6 mr-6">
          <input type="checkbox" id="dropdownToggle" className="peer hidden" />
          <label htmlFor="dropdownToggle" className="cursor-pointer">
            <img
              src={user.photoURL}
              alt="User Avatar"
              className="w-10 h-10 rounded-full border border-gray-300"
            />
          </label>
          <div className="absolute right-0 mt-2 w-36 bg-white rounded-md shadow-lg border border-gray-200 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible transition-all duration-200">
            <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={handleSingout}>
              Logout
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
