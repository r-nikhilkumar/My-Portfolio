import React, { useContext, useState } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import HeartEye from "../../img/hearteye.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from "./resume2.pdf";
import Dialog from "../Dialog/Dialog";
import downloadPng from "../../img/download.png";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [showDialog, setShowDialog] = useState(false);

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  const cardsData = [
    {
      emoji: HeartEye,
      heading: "Founder",
      detail: "Awekon- A virtual reality based content media application",
      initial: { left: "25rem", top: "0rem" },
      animate: { left: "14rem", top: "0rem" },
      link: "https://github.com/orgs/Awekon/",
    },
    {
      emoji: HeartEmoji,
      heading: "App Developer",
      detail: "Android application, ios application, java, kotlin, flutter",
      initial: { left: "45rem", top: "10rem" },
      animate: { left: "32rem", top: "10rem" },
    },
    {
      emoji: Glasses,
      heading: "Web Developer",
      detail:
        "Html, Css, JavaScript, typescript, React.js, Node.js, Express.js, Django",
      initial: { left: "-11rem", top: "12rem" },
      animate: { left: "-4rem", top: "12rem" },
    },
    {
      emoji: Humble,
      heading: "AI/ML",
      detail:
        "Machine Learning, Deep Learning, Computer Vision, Tensorflow, Pytorch, Keras",
      initial: { top: "19rem", left: "25rem" },
      animate: { left: "12rem", top: "19rem" },
    },
  ];

  const handleDownloadClick = () => {
    setShowDialog(true);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <span>
          Here are the services I offer as a Machine Learning Engineer,
          <br /> Full Stack Developer, App Developer, and competitive
          programmer.
          <br /> I provide comprehensive solutions and innovative approaches
          <br /> across these domains to meet diverse technological challenges.
        </span>
        <button className="button s-button" onClick={handleDownloadClick}>
          My Resume
        </button>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {cardsData.map((card, index) => (
          <motion.div
            key={index}
            initial={card.initial}
            whileInView={card.animate}
            transition={transition}
          >
            <Card {...card} />
          </motion.div>
        ))}
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
      {/* Dialog for CV */}
      <Dialog show={showDialog} onClose={handleCloseDialog}>
        <iframe
          src={Resume}
          title="CV Viewer"
          className="iframe-responsive"
        ></iframe>
        <center>
          <a
            href="https://www.overleaf.com/project/668a2c199800839cf220c6b7/output/output.pdf"
            style={{ zIndex: "1" }}
            download
          >
            <button
              className="button s-button"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={downloadPng} alt="⬇️" height={20} /> Download
            </button>
          </a>
        </center>
      </Dialog>
    </div>
  );
};

export default Services;
