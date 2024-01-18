import { Link } from "react-router-dom";
import "./assets/login.css";
import facebook from "./assets/img/fb.png";
import google from "./assets/img/gg.png";
import logo from "../../assets/logolight.png";

const Login = () => {
  return (
    <div className="loginContainer">
      <Link to="/" className="myLogo">
        <img className="heroLogo" src={logo} alt="" />
      </Link>
      <div className="loginDiv">
        <div className="loginFormContainer">
          <h1 className="loginFormHeader">LOGIN</h1>
          <div className="loginFormLine"></div>
          <div className="loginForm">
            <div className="loginSocials">
              <img className="loginSocialsImg" src={facebook} alt="" />
              <img className="loginSocialsImg" src={google} alt="" />
            </div>
            <div className="loginFormInput">
              <input
                className="loginFormInputs"
                type="text"
                placeholder="Email"
              />

              <input
                className="loginFormInputs"
                type="text"
                placeholder="Password"
              />
            </div>
            <p className="loginText">
              Dont have an account?{" "}
              <Link to="/Signup" className="loginTextSpan">
                SIGN UP
              </Link>
            </p>
            <Link to="/Dashboard" className="loginFormBtn">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
