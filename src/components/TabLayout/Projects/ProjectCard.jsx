import React from "react";
import PropTypes from "prop-types";
import "./ProjectCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ project }) => {
  const { title, description, imageUrl, socialLinks, deployLink } = project;
  return (
    <div
      className="cardContainer"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="social">
        {socialLinks.map((link, index) => (
          <a
            href={link.url}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={link.icon} />
          </a>
        ))}
      </div>
      <button
        className="demo-arrow"
        onClick={() => {
          window.open(deployLink, "_blank");
        }}
      >
        <FontAwesomeIcon style={{ fontSize: "4vmin" }} icon={faGlobe} />
      </button>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      icon: PropTypes.object.isRequired,
    })
  ).isRequired,
};

export default ProjectCard;
