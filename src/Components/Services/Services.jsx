
import React, { useContext } from "react";
import { themeContext } from "../../Context";
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card'
import Resume from './resume.pdf'
import { motion } from "framer-motion";
function Services() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

    // transition
    const transition = {
      duration: 1,
      type: "spring",
    };
  return (
    <div className='services'>
       
      <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
          <span>Services</span>
        
          <span>
            Frontend Developer with high level of experience in web designing
           <span> and development, producting the Quality work</span>
          </span>
          <a href={Resume}  download>
          <button className="button s-button">Download CV</button>
          </a>
          <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
       
      {/* right side */} 
      <div className="cards">
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
            <Card emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}/>
        </motion.div>
        {/* card 2 */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
            <Card emoji={Glasses}
            heading={"Develepre"}
            detail={"Html, Css, React, Java Script,tailwind,c++"}/>
        </motion.div>
        {/* card 3 */}
       
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
            <Card emoji={Humble}
            heading={"UI/UX"}
            detail={"More option for desigen your website"}/>
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  )
}

export default Services
