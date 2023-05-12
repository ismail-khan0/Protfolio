import React, { useContext } from "react";
import { themeContext } from "../../Context";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { motion } from "framer-motion";
import './Works.css'
function Works() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='works' id="">
       <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>Work for All these</span>
          <span>Brand & Client</span>
        
          <span>
            Frontend Developer with high level of experience in web designing
           <br/>
            development, producting the Quality 
            <br/>
            Frontend Developer with high level of experience in web designing
            <br/>
            Frontend Developer with high level of experience in web designing
           <br/>
          </span>
         
          <button className="button s-button">Hire Me</button>
          
          <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
        
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
        <div className="w-backCircle greenCircle"></div>
      </div>
    </div>
  )
}

export default Works
