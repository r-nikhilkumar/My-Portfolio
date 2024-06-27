import React, { useContext, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { themeContext } from "../../Context";
import "./AboutMe.css";
import mypic from "../../img/mypic.png"

const AboutMe = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const pulse = keyframes`
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  `;

  const scrambleIn = keyframes`
    0% {
      opacity: 0;
      transform: translateY(50px);
    }
    50% {
      opacity: 1;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  `;

  const floatOut = keyframes`
    0% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(-50px);
    }
  `;

  const Content = styled.div`
    max-width: 800px;
    padding: 20px;
    border: 2px solid var(--orangeCard);
    border-radius: 15px;
    box-shadow: 0 0 20px var(--boxShadow);
    opacity: 0;
    display: flex;
    flex-direction: vertical;
    justify-content: center;
    transform: translateY(20px);
    transition: opacity 1.5s, transform 1.5s;
    animation: ${pulse} 2s infinite;
    &.animate-in {
      animation: ${scrambleIn} 1.5s forwards;
    }
    &.animate-out {
      animation: ${floatOut} 1.5s forwards;
    }
  `;

  const Title = styled.h1`
    color: ${darkMode ? "white" : "var(--black)"};
    font-weight: bold;
    font-size: 3rem;
  `;

  const Text = styled.p`
    font-size: 1.25rem;
    line-height: 1.5;
    margin-bottom: 20px;
  `;

  const Highlight = styled.span`
    color: var(--orange);
    font-weight: bold;
  `;

  const scrambleText = (text) => {
    return text.split("").map((char, index) => (
      <span key={index} className="scramble-char">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  const handleScroll = () => {
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const offset = 150; // Adjust this value to control when the animation starts and ends
    if (rect.top + offset >= 0 && rect.bottom - offset <= window.innerHeight) {
      element.classList.add("animate-in");
      element.classList.remove("animate-out");
    } else {
      element.classList.add("animate-out");
      element.classList.remove("animate-in");
    }
  };

  const ref = useRef();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="aboutMeContainer">
      <div ref={ref} className="content">
        <div className="left">
          <Title>About Me</Title>
          <p>Here is a brief <br/>summary about me!</p>
        </div>
        <div className="right">
          <Text>
            {scrambleText("I'm a ")}
            <Highlight>{scrambleText("Software Engineer")}</Highlight>
            {scrambleText(" specializing in ")}
            <Highlight>{scrambleText("Artificial Intelligence")}</Highlight>
            {scrambleText(" and ")}
            <Highlight>{scrambleText("Machine Learning")}</Highlight>
            {scrambleText(" also proficient in ")}
            <Highlight>{scrambleText("Full-Stack Development")}</Highlight>
            {scrambleText(" and ")}
            <Highlight>{scrambleText("Application Development")}</Highlight>
            {scrambleText(".")}
          </Text>
          <Text>
            {scrambleText("Passionate about ")}
            <Highlight>
              {scrambleText("Data Structures and Algorithms (DSA)")}
            </Highlight>
            {scrambleText(" with excellent problem-solving skills.")}
          </Text>
          <Text>
            {scrambleText(
              "I build seamless and efficient applications, leveraging the latest in AI and ML to push boundaries. Let's connect and create amazing tech solutions together!"
            )}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
