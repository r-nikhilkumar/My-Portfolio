import React, { useContext } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import "./GithubProjectCard.css"; // Import CSS file for additional styling
import { themeContext } from "../../Context";

const GithubProjectCard = ({ project }) => {
  const darkMode = useContext(themeContext).state.darkMode;
  const style = {
    color: "white",
    backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${require("../../img/githubBack.png")})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "250px",
    width: "100%",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    boxSizing: "border-box",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: darkMode ? "#333" : "#fff",
  };

  return (
    <div className="gitproject-card" style={style}>
      <div className="project-details">
        <h3 className="project-title">{truncateDescription(project.name, 3, "-")}</h3>
        <p className="project-description">
          {truncateDescription(project.description, 7, " ")}
        </p>
        <p className="project-language">Languages: {project.language??"No Language"}</p>
      </div>
      <a
        href={project.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="source-code-button"
      >
        <div className="githubtext">
          <FontAwesomeIcon icon={faCode} />
          Code
        </div>
      </a>
    </div>
  );
};

const truncateDescription = (description, truncatedBy, splitBy) => {
  if (!description) return "No Description";

  const words = description.split(splitBy);
  const truncated = words.slice(0, truncatedBy).join(splitBy);
  return words.length > truncatedBy ? `${truncated}...` : truncated;
};

GithubProjectCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    language: PropTypes.string,
    html_url: PropTypes.string.isRequired,
  }).isRequired,
};

export default GithubProjectCard;
