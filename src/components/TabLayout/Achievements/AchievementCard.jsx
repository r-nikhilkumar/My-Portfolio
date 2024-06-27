import React from "react";
import PropTypes from "prop-types";
import "./AchievementCard.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AchievementCard = ({ achievement }) => {
  const { imageUrl, title, details, achievementUrl } = achievement;
  return (
    <div className="achievement-card">
      <div
        className="card-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="overlay">
          <div className="card-content">
            <h3 className="card-title">{title}</h3>
            <p className="card-details">{details}</p>
            <div className="verify">
              <a href={achievementUrl}>Verify👉🏿</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AchievementCard.propTypes = {
  achievement: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
  }).isRequired,
};

export default AchievementCard;
