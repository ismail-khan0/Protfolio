import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>ik8323253@gmail.com</span>
         
        <div className="f-icons">
          <a href="https://instagram.com/itz_me_ismail_khann?igshid=MzNlNGNkZWQ4Mg==">
          <Insta color="white" size={"3rem"} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100007120635255&mibextid=ZbWKwL" >
          <Facebook color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/ismail-khan0" >
          <Gitub color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

