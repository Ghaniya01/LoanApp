import { Link } from "react-router-dom";
import logo from "../assets/Images/logo.png";
import bell from "../assets/Icons/bell.png";
import profileimage from "../assets/Images/profileimage.png";
import dropdown from "../assets/Icons/dropdown.png";
import search from "../assets/Icons/search.png";
import { useNavigate } from "react-router-dom";

export const Topbar = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="w-full h-[100px] bg-primary flex items-center px-8 border-b-2 border-gray-100">
      
      <div className="cursor-pointer flex-shrink-0" onClick={handleLogin}>
        <img src={logo} alt="Logo" className="w-[144.8px] h-[30px]" />
      </div>

      
      <div className="hidden md:flex items-center border border-main-100 rounded-md w-[400px] h-[40px] ml-[160px]">
        <input
          className="w-full h-full text-sm p-2 bg-transparent focus:outline-none"
          placeholder="Search for anything"
        />
        <button className="flex items-center justify-center bg-brandcolor text-white text-sm h-[40px] w-[56px] rounded-r-md">
          <img
            src={search}
            alt="Search"
            className="w-[13.97px] h-[14px]"
          />
        </button>
      </div>

      
      <Link
        to="#"
        className="text-textcolor2 mr-6 ml-[420px] underline decoration-textcolo2 hidden md:block"
      >
        Docs
      </Link>

      
      <div className="flex items-center space-x-6 ml-auto mr-[55px]">
        <img
          src={bell}
          alt="bell"
          className="w-[26px] h-[26px] cursor-pointer"
        />
        <div className="flex items-center space-x-2">
          <img
            src={profileimage}
            alt="Profile"
            className="w-[48px] h-[48px]"
          />
          <p className="text-textcolor2 hidden md:block">Ghaniya</p>
          <img
            src={dropdown}
            alt="dropdown"
            className="w-[20px] h-[20px]"
          />
        </div>
      </div>
    </div>
  );
};
