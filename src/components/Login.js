import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Login = () => {
  return (
    <div className="p-10 h-[100vh]  border-none bg-gray-600 text-white">
      <Link to={"/"}>
        <span>
          <FaArrowLeft className="text-white" />
        </span>
      </Link>
      <div className=" flex h-full justify-center items-center">
        <div className="md:w-1/2 flex flex-col gap-5 border-2 border-white p-10 rounded-lg  bg-white bg-opacity-10 backdrop-blur-sm">
          <h1 className="text-3xl text-center font-semibold">Login</h1>
          <input
            type="email"
            placeholder="Enter your email"
            className="border-2 border-black rounded-lg p-2"
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="border-2 border-black rounded-lg p-2"
          />
          <button className="bg-blue-600 text-white  font-bold hover:bg-white hover:text-blue-700 hover:border-blue-700  hover:border-2 rounded-lg p-2">
            Login
          </button>
          <div className="text-center border-t-2 border-black">
            <span>Don't have an account yet? </span>
            <Link to={"/signup"}>
              {" "}
              <button className="text-xl font-semibold">Create Account</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
