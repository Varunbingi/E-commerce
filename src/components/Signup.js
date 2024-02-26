import { Link } from "react-router-dom";

const Signup=()=>{
    return (
        <div className="bg-gray-600 h-[100vh] text-white ">
            <h1>Create Account</h1>
        <form>
            <input type="text" placeholder="Enter your name"/>
            <input type="email" placeholder="Enter your email"/>
            <input type="password" placeholder="Enter your password"/>
            <input type="password" placeholder="Re-enter your password"/>
            <button type="submit">Submit</button>

        </form>
        <div>
        <span>Already have an account?</span>
        <Link to={'/login'}><button>Login</button></Link>
        </div>
        
        </div>

    )
}
export default Signup;