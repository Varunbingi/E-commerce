import { Link } from "react-router-dom";
import logo from "../utils/assets/logo.png";
import { FaCartArrowDown } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";


const Header = () => {

  return (
    <div className="grid grid-cols-2 bg-gradient-to-b from-indigo-300 to-gray-600 justify-between items-center h-[100px] w-full text-white">
      <div>
        <img src={logo} className="h-[80px] px-3" />
      </div>
      <div className=" ">
        <ul className="flex items-center justify-around text-xl font-semibold m-2 ">
          <li className="cursor-pointer hover:scale-110">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="cursor-pointer hover:scale-110">
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li className="cursor-pointer hover:scale-110">
            <Link to={"/favourite"}>
              <div className="flex items-center gap-3">
                <span>Favourites</span>
                <span>
                  <FaRegHeart />
                </span>
              </div>
            </Link>
          </li>
          <li className="cursor-pointer hover:scale-110">
            <Link to={"/cart"}>
              <div className="flex items-center gap-3">
                <span>
                  <FaCartArrowDown />
                </span>
                <span>Cart</span>
              </div>
            </Link>
          </li>
            <Link to={"/login"}>
          <button className="border-2 bg-blue-500 font-semibold text-white px-4 py-2 rounded-lg   hover:border-blue-500 animate-bounce hover:animate-none">
            Login
          </button>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
