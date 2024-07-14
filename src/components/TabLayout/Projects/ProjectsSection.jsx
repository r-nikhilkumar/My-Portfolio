import React, { useContext } from "react";
import ProjectCard from "./ProjectCard";
import "./ProjectsSection.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faFacebookF, faTwitter, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import Carousel from "react-multi-carousel";
import { themeContext } from "../../../Context";
import projImg1 from "../../../img/projectImg/project1.png";
import projImg2 from "../../../img/projectImg/project2.png";
import projImg3 from "../../../img/projectImg/project3.png";
import { facebook, github, instagram, twitter } from "../../../constants";

const ProjectsSection = () => {
  const darkMode = useContext(themeContext).state.darkMode;

  const projects = [
    {
      title: "QuantumCoder",
      description: "Developer Friendly Site",
      imageUrl: projImg1,
      socialLinks: [
        { url: facebook, icon: faFacebookF },
        { url: twitter, icon: faTwitter },
        { url: instagram, icon: faInstagram },
        { url: github + "/QuantumCoder", icon: faGithub },
      ],
      deployLink: "https://nikhilkumar1.pythonanywhere.com/",
    },
    {
      title: "ExchangeNest",
      description: "Stock Market Site",
      imageUrl: projImg2,
      socialLinks: [
        { url: facebook, icon: faFacebookF },
        { url: twitter, icon: faTwitter },
        { url: instagram, icon: faInstagram },
        { url: github + "/ExchangeNest", icon: faGithub },
      ],
      deployLink: "https://exchange-nest.vercel.app/",
    },
    {
      title: "LittleLemon",
      description: "Learning Demo",
      imageUrl: projImg3,
      socialLinks: [
        { url: facebook, icon: faFacebookF },
        { url: twitter, icon: faTwitter },
        { url: instagram, icon: faInstagram },
        { url: github + "/LittleLemon", icon: faGithub },
      ],
      deployLink: "https://r-nikhilkumar.github.io/LittleLemon/",
    },
  ];

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
    <div className="projects-section">
      <Carousel
        responsive={responsive}
        centerMode={true}
        className="carousel"
        infinite
        showDots
        dotListClass="slick-dots" /* Add this line to apply custom dots class */
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </Carousel>
    </div>
  );
};

export default ProjectsSection;