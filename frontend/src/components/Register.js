import { useState } from "react";
import axios from "axios";
import "../register.css";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    const passwordCheck = password == rePassword;
    const checkEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      email
    )
      ? true
      : false;

    if (!passwordCheck) console.log("password does not match");

    if (!checkEmail) console.log("email is not valid");

    if (passwordCheck && checkEmail) {
      const userData = {
        firstname: firstName,
        lastname: lastName,
        email: email,
        password: password,
      };

      registerUser(userData);
    }
  };

  const handleLogin = () => {
    const userData = {
      username: email,
      password: password,
    };
    
    loginUser(userData);
  };

  const registerUser = async (userData) => {
    const user = await axios.post("/register", userData);

    if (user) {
      console.log(user.data);
    }
  };

  const loginUser = async (userData) => {
    const user = await axios.post("/login", userData);
    if (user) {
      console.log(user.data);
    }
  };

  const handleStateChange = () => {
    setEmail('')
    setPassword('')
    setIsLogin(!isLogin)
  }

  return (
    <>
      <div
        className={`container ${!isLogin && "right-panel-active"}`}
        id="container"
      >
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>

            <input
              type="text"
              placeholder="First Name"
              autoComplete="off"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setRePassword(e.target.value)}
            />
            <button onClick={handleSignup}>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <a href="#">Forgot your password?</a>
            <button onClick={handleLogin}>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost"
                id="signIn"
                onClick={handleStateChange}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="ghost"
                id="signUp"
                onClick={handleStateChange}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
