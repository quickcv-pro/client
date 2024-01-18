// import facebook from "./assets/img/fb.png";
// import google from "./assets/img/gg.png";
import { Link } from "react-router-dom";
// import "./assets/login.css";

const Login = () => {
  return (
    <div className="loginContainer">
      <Login className="myLogo">Qcv</Login>

      <div className="loginDiv">
        <div className="loginFormContainer">
          <h1 className="loginFormHeader">LOGIN</h1>
          <div className="loginFormLine"></div>
          <div className="loginForm">
            <div className="loginSocials">
              {/* <img className="loginSocialsImg" src={facebook} alt="" />
              <img className="loginSocialsImg" src={google} alt="" /> */}
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
            <button className="loginFormBtn">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
