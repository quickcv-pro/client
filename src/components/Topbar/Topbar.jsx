import { Link } from 'react-router-dom';
import './assets/topbar.css'
import logo from "../../assets/logolight.png";


const Topbar = () => {
  return (
    <div className="topbar">
      <Link to="/Dashboard" className="topbarLogo">
        <img className="heroLogo" src={logo} alt="" />
      </Link>
      <div className="userDash">
        <img
          className="userDashImg"
          src="https://images.unsplash.com/photo-1649532355244-e011eebe7a81?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />

        <button className="userResume">Resume</button>
        <Link to="/" className="userResume">
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
