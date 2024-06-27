import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import { facebook, github, instagram } from "../../constants";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>thenikhilkumar1@gmail.com</span>
        <div className="f-icons">
          <a href={instagram} target="_blank">
            <Insta color="white" size={"3rem"} />
          </a>
          <a href={facebook} target="_blank">
            <Facebook color="white" size={"3rem"} />
          </a>
          <a href={github} target="_blank">
            <Gitub color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
