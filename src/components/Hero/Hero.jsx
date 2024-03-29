import {
  ArticleOutlined,
  FactCheck,
  PaidOutlined,
  TipsAndUpdatesOutlined,
} from "@mui/icons-material";
import "./assets/hero.css";
import typewriter from "./assets/tp.png";
import { Link } from "react-router-dom";
import logodark from "../../assets/logodark.png";
import Modal from "../Modal/Modal"
import { useState } from "react";

const Hero = () => {
  const [modalState, setModalState] = useState(false);
  function toggleModal(){
    setModalState(!modalState)
  }
    return (
      <div className="heroContainer">
      {modalState && <Modal 
      header="Choose your prefered payment method"
      closeModal={toggleModal} />}
      <Link className="heroLink" to="/">
        <img className="heroLogo" src={logodark} alt="" />
      </Link>

      <div className="heroDiv">
        <div className="heroSubContainer">
          <div className="heroSection">
            <div className="heroText">
              <h1 className="heroLargeText">Reliable & Free</h1>
              <p className="heroSmallText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                consectetur numquam sint repellendus eius velit odit assumenda
                consequuntur voluptatibus perferendis! am sint repellendus eius
                velit odit assumenda consequuntur voluptatibus perferend
              </p>
              {/* DOES NOT NAVIGATE WHEN I CLICK HERE */}
              <Link to="/Login" className="heroBtn">
                Get Started <ArticleOutlined />{" "}
              </Link>
            </div>
            <img className="heroImage" src={typewriter} alt="typewriter" />
          </div>
          <div className="heroFoote5r">
            <button>
              Suggest something for us <TipsAndUpdatesOutlined />
            </button>
            <button className="Donate"
              onClick={() => toggleModal()}>
              Donate <PaidOutlined />{" "}
            </button>
            <button>
              ATS Checker <FactCheck />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
