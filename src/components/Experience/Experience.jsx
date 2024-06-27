import React, { useContext, useEffect, useState } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
import { fetchProjects } from "../githubProjects/GithubService";
import { getYearsAndMonthsFromNowToDate } from "../../utils/utils";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [projects, setProjects] = useState("_");
  const [experience, setExperience] = useState("_");

  useEffect(() => {
    const fetchProjectsData = async () => {
      const data = await fetchProjects(); // Assume this function fetches projects from GitHub
      if (data) {
        setProjects(data.length);
      }
    };
    fetchProjectsData();
    setExperience(getYearsAndMonthsFromNowToDate("2024-03-12"));
  }, []);

  return (
    <div className="experience" id="experience">
      <div className="achievement">
        {/* darkMode */}
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          {experience.years >= 1 ? experience.years : experience.months}+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>
          {experience.years >= 1
            ? experience.years > 1
              ? "years"
              : "year"
            : experience.months > 1
            ? "months"
            : "month"}{" "}
        </span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          {projects}+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>completed </span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          3+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>companies </span>
        <span>OS Work</span>
      </div>
    </div>
  );
};

export default Experience;
