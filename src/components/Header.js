import { Link } from "react-router-dom";
import logo from "../utils/assets/logo.png";
import { FaCartArrowDown } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { FaBars } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";
import { useState } from "react";


const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };
  return (
    <div className="relative">
      <div className="grid grid-cols-[30%,70%] bg-gradient-to-b from-indigo-300 to-gray-600 justify-between items-center h-[100px]  text-white">
        <div>
          <img src={logo} className="h-[80px] px-3" alt="logo"/>
        </div>
       
        <div className="">
          <div className="md:hidden flex justify-end p-5" onClick={toggleMenu}>
           {isMenuOpen?<FaX /> :<FaBars />
            }</div>
          <ul className=" hidden   md:flex md:items-center md:justify-around text-xl font-semibold  ">
            <li className="cursor-pointer hover:scale-110">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="cursor-pointer hover:scale-110">
              <Link to={"/categories"}>Categories</Link>
            </li>
            <li className="cursor-pointer hover:scale-110">
              <Link to={"/favourite"}>
                <div className="flex items-center">
                  <span className="px-2">Favourites</span>
                  <span>
                    <FaRegHeart />
                  </span>
                </div>
              </Link>
            </li>
            <li className="cursor-pointer hover:scale-110">
              <Link to={"/cart"}>
                <div className="flex items-center ">
                  <span>
                    <FaCartArrowDown />
                  </span>
                  <span className="px-2">Cart</span><span >({cartItems.length})</span>
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

      
      {isMenuOpen &&
        <div className="absolute top-[100px] left-0  w-full h-fit bg-gray-200 text-black z-50">
          <div className="flex flex-col  p-4 boreder-b-2 border-black" onClick={()=>toggleMenu()}>
            <Link to={"/"}>Home</Link>
            <Link to={"/categories"}>Categories</Link>
            <Link to={"/favourite"}>Favourites</Link>
            <Link to={"/cart"}>Cart</Link>
            <Link to={"/login"}>Login</Link>
          </div>
        </div>
      }
    </div>
  );
};
export default Header;
