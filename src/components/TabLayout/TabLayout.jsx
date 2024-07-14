import React, { useEffect, useRef, useState } from "react";
import "./TabLayout.css";
import ProjectsSection from "./Projects/ProjectsSection";
import AchievementsSection from "./Achievements/AchievementsSection";
import OthersSection from "./Others/OthersSection";

const TabLayout = () => {
  const [activeTab, setActiveTab] = useState("projects");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabRef = useRef(null);

  useEffect(() => {
    const tabElement = tabRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          tabElement.classList.add("visible");
        } else {
          tabElement.classList.remove("visible");
        }
      });
    });

    if (tabElement) {
      observer.observe(tabElement);
    }

    return () => {
      if (tabElement) {
        observer.unobserve(tabElement);
      }
    };
  }, []);

  return (
    <div className="tab-layout" ref={tabRef}>
      <div className="tab-buttons">
        <button
          className={activeTab === "projects" ? "active" : ""}
          onClick={() => handleTabClick("projects")}
        >
          Projects
        </button>
        <button
          className={activeTab === "achievements" ? "active" : ""}
          onClick={() => handleTabClick("achievements")}
        >
          Achievements
        </button>
        {/* <button
          className={activeTab === "others" ? "active" : ""}
          onClick={() => handleTabClick("others")}
        >
          Others
        </button> */}
      </div>
      <div className="tab-content">
        {activeTab === "projects" && <ProjectsSection />}
        {activeTab === "achievements" && <AchievementsSection />}
        {activeTab === "others" && <OthersSection />}
      </div>
    </div>
  );
};

export default TabLayout;
