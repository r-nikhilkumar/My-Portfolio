import React, { useContext } from "react";
import ProjectCard from "./ProjectCard";
import "./ProjectsSection.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="projects-section">
      <Slider {...settings}>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </Slider>
    </div>
  );
};

export default ProjectsSection;
