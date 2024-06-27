import React, { useContext } from "react";
import fb from "../../img/Facebook.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../../img/color-sharp.png";
import { themeContext } from "../../Context";
import "./Skill.css"; // Import the CSS file
import { getYearsAndMonthsFromNowToDate } from "../../utils/utils";

export const Skill = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const skillsData = [
    { img: require("../../img/c-.png"), title: "C++" },
    { img: require("../../img/java.png"), title: "Java" },
    { img: require("../../img/python.png"), title: "Python" },
    { img: require("../../img/typescript.png"), title: "Typescript" },
    { img: require("../../img/javascript.png"), title: "Javascript" },
    { img: require("../../img/dart.png"), title: "Dart" },
    { img: require("../../img/kotlin.png"), title: "Kotlin" },
    { img: require("../../img/c.png"), title: "C" },
    {
      img: require("../../img/dsa.png"),
      title: "Data Structures and Algorithms",
    },
    { img: require("../../img/nodejs.png"), title: "Node.js" },
    { img: require("../../img/reactjs.png"), title: "React.js" },
    { img: require("../../img/expressjs.png"), title: "Express.js" },
    { img: require("../../img/django.png"), title: "Django" },
    { img: require("../../img/mongo.png"), title: "MongoDB" },
    { img: require("../../img/mysql.png"), title: "MySQL" },
    { img: require("../../img/tailwind.png"), title: "TailwindCSS" },
    { img: require("../../img/bootstrap.png"), title: "Bootstrap" },
    {
      img: require("../../img/android.png"),
      title: "Android Development (Java/Kotlin)",
    },
    {
      img: require("../../img/flutter.png"),
      title: "App development (Flutter)",
    },
    { img: require("../../img/deepLearning.png"), title: "Deep Learning" },
    {
      img: require("../../img/machineLearning.png"),
      title: "Machine Learning",
    },
    { img: require("../../img/cv.png"), title: "Computer Vision (OpenCV)" },
    {
      img: require("../../img/ArtificialIntelligence.png"),
      title: "Artificial Intelligence",
    },
    {
      img: require("../../img/os.png"),
      title: "Operating System (Unix/Linux environments)",
    },
    { img: require("../../img/cn.png"), title: "Computer Networks" },
    { img: require("../../img/systemDesign.png"), title: "System Design" },
  ];

  const time = getYearsAndMonthsFromNowToDate("2022-09-25");

  return (
    <section className={`skill ${darkMode ? "dark" : "light"}`} id="skills">
      <div className="container">
        <div className="skill-bx wow zoomIn">
          <h2 style={{ color: darkMode ? "white" : "" }}>Skills</h2>
          <p>
            Here are the skills I've developed during my {time.years}{" "}
            {time.years > 1 ? "years" : "year"} and {time.months}{" "}
            {time.months > 1 ? "months" : "month"} journey. This is just the
            beginning; there's much more to learn and achieve!
          </p>
          <Carousel
            autoPlay={true}
            autoPlaySpeed={2000} // Adjust the speed here (2000ms = 2s)
            transitionDuration={500} // Adjust the transition duration (500ms = 0.5s)
            responsive={responsive}
            infinite={true}
            className="owl-carousel owl-theme skill-slider"
          >
            {skillsData.map((skill, index) => (
              <div className="item" key={index}>
                <img
                  src={skill.img}
                  alt={skill.title}
                  height={100}
                  width={100}
                />
                <h5>{skill.title}</h5>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};
