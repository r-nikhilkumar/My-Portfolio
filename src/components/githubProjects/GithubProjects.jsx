import React, { useState, useEffect } from "react";
import { fetchProjects } from "./GithubService"; // Adjust the path as per your project structure
import GithubProjectCarousel from "./GithubProjectCarousel";

const GithubProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjectsData = async () => {
      const data = await fetchProjects(); // Assume this function fetches projects from GitHub
      if (data) {
        setProjects(data);
      }
    };
    fetchProjectsData();
  }, []);

  return (
    <div style={{marginTop:"15vmin"}}>
      <GithubProjectCarousel projects={projects} />
    </div>
  );
};

export default GithubProjects;
