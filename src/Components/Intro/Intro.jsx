import React, { useContext } from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import FloatingDiv from "../FloatinDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { motion, spring } from "framer-motion";
const Intro = () => {

  const transition = {duration:2 ,type:'spring'}
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const firstSpanVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.5, duration: 2 ,type:'spring'},
    },
  };
  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
            {/* Wrap the first child span element with motion.span */}
            <motion.span
            variants={firstSpanVariants}
            initial="hidden"
            animate="visible"
            style={{ color: darkMode ? "white" : "" }}
          >
            Hy! I Am
          </motion.span>
          <span>Ismail Khan</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development, producting the Quality work
        </span>
        </div>
        
          <button className="button i-button">Hire me</button>

        {/* social icons */}
        <div className="i-icons">
        <a href="https://github.com/ismail-khan0" >
          <img src={Github} alt="" /></a>
       <a href="https://www.linkedin.com/in/ismail-khan-57982a244">      
          <img src={LinkedIn} alt="" />
           </a>
          <a href="https://instagram.com/itz_me_ismail_khann?igshid=MzNlNGNkZWQ4Mg==">
          <img src={Instagram} alt="" /></a>

        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
      
          <img src={Vector1} alt="" />
          <img src={Vector2} alt="" />
          <img src={boy}/>
          <motion.img
          initial={{left:"-36%"}}
          whileInView={{left:"-24%"}}
          transition={transition} src={glassesimoji}/>

          <motion.div initial={{left:"74%"}}
          whileInView={{left:"68%"}}
          transition={transition} style={{top:'-4%',left:'68%'}}
          className=".floating-div">
       <FloatingDiv image={crown} txt1='web' txt2='Developer'/>
       </motion.div>

       <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
       <FloatingDiv image={thumbup} txt1='Best design' txt2='Award'/>
       </motion.div>
       {/* blue div */}
       <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
       
       <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
