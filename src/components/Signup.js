import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Signup=()=>{
    return (
        <div className="p-10 bg-gray-600 h-[100vh]">
        <Link to={"/"}>
        <span>
          <FaArrowLeft className="text-white" />
        </span>
      </Link>
        <div className=" h-full text-white flex justify-center  items-center ">
         <div className="md:w-1/2 flex flex-col gap-5 border-2 border-white p-10 rounded-lg  bg-white bg-opacity-10 backdrop-blur-sm justify-between">
            <h1 className="text-center text-2xl font-semibold text-amber-300">Create Account</h1>
        <form className="flex flex-col gap-2 " >
            <label> UserName :</label>
            <input type="text" placeholder="Enter your name" className="p-2 rounded-md" />
            <label>Email :</label>
            <input type="email" placeholder="Enter your email" className="p-2 rounded-md" />
            <label >Password :</label>
            <input type="password" placeholder="Enter your password" className="p-2 rounded-md" />
            <label>Re-enter Password :</label>
            <input type="password" placeholder="Re-enter your password"  className="p-2 rounded-md"/>
            <button type="submit" className="bg-amber-400 text-black  font-bold hover:bg-white hover:text-amber-700 hover:border-amber-700  hover:border-2 rounded-lg p-2  mt-5">Submit</button>

        </form>
        <div className="text-center">
        <span>Already have an account?</span>
        <Link to={'/login'}><button className="text-amber-300 text-lg p-2 font-semibold">Login</button></Link>
        </div>
        </div>
        </div>
        </div>
    )
}
export default Signup;