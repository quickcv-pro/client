import { Link } from "react-router-dom";
import facebook from "./assets/img/fb.png";
import google from "./assets/img/gg.png";
import './assets/login.css'
import logo from "../../assets/logolight.png";

const SignUp = () => {
  return (
    <div className="signupContainer">
      <Link to="/" className="myLogo">
        <img className="heroLogo" src={logo} alt="" />
      </Link>
      <div className="loginDiv">
        <div className="loginFormContainer">
          <h1 className="loginFormHeader">SIGN UP</h1>
          <div className="loginFormLine"></div>
          <div className="loginForm">
            <div className="loginSocials">
              <img className="loginSocialsImg" src={facebook} alt="" />
              <img className="loginSocialsImg" src={google} alt="" />
            </div>
            <div className="signupFormInput">
              <input
                className="signupFormInputs"
                type="text"
                placeholder="Email"
              />
              <input
                className="signupFormInputs"
                type="text"
                placeholder="First Name"
              />
              <input
                className="signupFormInputs"
                type="text"
                placeholder="Last Name"
              />
              <input
                className="signupFormInputs"
                type="text"
                placeholder="Country"
              />
              <input
                className="signupFormInputs"
                type="password"
                placeholder="Password"
              />
              <input
                className="signupFormInputs"
                type="text"
                placeholder="Confrim Password"
              />
            </div>
            <p className="loginText">
              Dont have an account?{" "}
              <Link to="/Login" className="loginTextSpan">
                LOGIN
              </Link>
            </p>
            <Link to="/Dashboard" className="loginFormBtn">
              SIGN UP
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
