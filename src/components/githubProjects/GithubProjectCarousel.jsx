// ProjectsCarousel.js

import React, { useContext } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { themeContext } from "../../Context"; // Adjust the path as per your project structure
import GithubProjectCard from "./GithubProjectCard";

const GithubProjectCarousel = ({ projects }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className={`projects-carousel ${darkMode ? "dark" : "light"}`}>
      <center>
        <a
          href="https://github.com/r-nikhilkumar"
          style={{
            textDecoration: "none",
            color: "var(--orange)",
            fontSize: "2rem",
          }}
        >
          Github Projects
        </a>
      </center>
      <Carousel
        responsive={responsive}
        infinite={true}
        centerMode={true}
        autoPlay={true}
        autoPlaySpeed={2000}
      >
        {projects.map((project, index) => (
          <div key={index} style={{ margin: "5px" }}>
            <GithubProjectCard project={project} />
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default GithubProjectCarousel;
