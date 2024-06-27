import React, { useContext, useEffect, useRef } from "react";
import flk1 from "../../img/projectImg/flk1(2).png";
import flk2 from "../../img/projectImg/flk2.png";
import "./AppProject.css";
import { themeContext } from "../../Context";

function AppProject() {
  const darkMode = useContext(themeContext).state.darkMode;
  const leftRef = useRef(null);
  const centerRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observerleft = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated-left");
        } else {
          entry.target.classList.remove("animated-left");
        }
      });
    }, observerOptions);

    const observercenter = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated-center");
          } else {
            entry.target.classList.remove("animated-center");
          }
        });
      }, observerOptions);
      
    const observerright = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated-right");
        } else {
          entry.target.classList.remove("animated-right");
        }
      });
    }, observerOptions);

    if (leftRef.current) observerleft.observe(leftRef.current);
    if (centerRef.current) observercenter.observe(centerRef.current);
    if (rightRef.current) observerright.observe(rightRef.current);

    // No need to unobserve the elements
  }, []);

  return (
    <div className="app-project-container">
      <div className="left" ref={leftRef}>
        <img src={flk2} alt="" height={780} width={500}/>
      </div>
      <div className="center" ref={centerRef}>
        <div className="title" style={{ color: darkMode ? "white" : "" }}>Fleeker</div>
        <div className="details">
          This is a modern social media application.
          <br />
          For more details:{" "}
          <a href="https://github.com/r-nikhilkumar/Fleeker/releases/download/v1.0.0-alpha/app-debug.apk">
            Download here👇
          </a>
        </div>
      </div>
      <div className="right" ref={rightRef}>
        <img src={flk1} alt="" height={780} width={500}/>
      </div>
    </div>
  );
}

export default AppProject;
