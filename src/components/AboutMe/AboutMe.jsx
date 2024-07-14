import React, { useContext, useEffect, useRef } from "react";
import { themeContext } from "../../Context";
import "./AboutMe.css";

const AboutMe = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handleScroll = () => {
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const offset = 250; // Adjust this value to control when the animation starts and ends
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
          <h1 className={darkMode ? "title dark" : "title"}>About Me</h1>
          {/* <p>
            Here is a brief <br />
            summary about me!
          </p> */}
        </div>
        <div className="right">
          <p className="text">
            I'm a <span className="highlight">Software Engineer</span> specializee in{" "}
            <span className="highlight">Artificial Intelligence</span> and{" "}
            <span className="highlight">Machine Learning</span> also proficient in{" "}
            <span className="highlight">Full-Stack Development</span> and{" "}
            <span className="highlight">Application Development</span>.
          </p>
          <p className="text">
            Passionate about{" "}
            <span className="highlight">Data Structures and Algorithms (DSA)</span> with
            excellent problem-solving skills.
          </p>
          <p className="text">
            I build seamless and efficient applications, leveraging the latest
            in AI and ML to push boundaries. Let's connect and create amazing
            tech solutions together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
