import React, { useContext, useEffect, useState, useRef } from "react";
import "./WorkExperience.css"; // Import your WorkExperience styles here
import { themeContext } from "../../Context";

const WorkExperience = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const darkMode = useContext(themeContext).state.darkMode;
  const timelineLineProgressRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      updateProgress();
      updateActiveItems();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const updateProgress = () => {
    const timelineLineProgress = timelineLineProgressRef.current;
    const timeline = timelineRef.current;
    const timelineItems = document.querySelectorAll(".js-timeline_item");

    if (timelineLineProgress && timelineItems.length) {
      const timelineRect = timeline.getBoundingClientRect();
      const timelineStart = timelineRect.top + window.scrollY;
      const timelineEnd = timelineRect.bottom + window.scrollY;
      const windowHeight = window.innerHeight;

      // Calculate the current scroll position relative to the timeline
      const scrollPositionRelativeToTimeline = Math.min(
        Math.max(window.scrollY + windowHeight / 2 - timelineStart, 0),
        timelineEnd - timelineStart
      );

      // Calculate the height of the progress line based on scroll position
      const height = (scrollPositionRelativeToTimeline / timelineRect.height) * 100;
      timelineLineProgress.style.height = `${height}%`;
    }
  };

  const updateActiveItems = () => {
    const timelineItems = document.querySelectorAll(".js-timeline_item");

    timelineItems.forEach((item) => {
      const timelinePoint = item.querySelector(".ag-timeline-card_point-box");
      if (timelinePoint) {
        const top = timelinePoint.getBoundingClientRect().top + window.scrollY;
        if (top < window.scrollY + window.innerHeight / 2) {
          item.classList.add("js-ag-active");
        } else {
          item.classList.remove("js-ag-active");
        }
      }
    });
  };

  // Define your timeline items here
  const timelineItems = [
    {
      year: "2024",
      season: "March - Present",
      imageSrc:
        "https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-13.png",
      title: "Contributor {ACTIVE}",
      description:
        "Contributed to open source projects at the <b>Open HealthCare Network</b>, an organization focused on integrating artificial intelligence into the medical field. The work involved developing and refining AI algorithms for medical applications, including projects aimed at improving tumor detection, predictive analytics, and telemedicine services. These contributions have been recognized and appreciated by Satya Nadella, Chairman of Microsoft.",
    },
    {
      year: "2024",
      season: "May - July",
      imageSrc:
        "https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-13.png",
      title: "Contributor {PASSIVE}",
      description:
        "Contributed to the <b>GirlScript Summer of Code (GSSoC) 2024</b>, an open-source program aimed at promoting coding and development skills among students. The work involved collaborating with a diverse community of developers, contributing code to various projects, and enhancing software functionalities. This experience provided valuable opportunities for learning, mentorship, and community engagement in the open-source ecosystem.",
    },
    // Add more timeline items as needed
  ];

  return (
    <div className="ag-timeline-block">
      <div className="ag-timeline_title-box">
        <div className="ag-timeline_tagline" style={{ color: darkMode ? "white" : "" }}>
          Work Experience
        </div>
        <div
          className="ag-timeline_title"
          style={{ color: "var(--orange)", fontSize: "1.5rem" }}
        >
          Timeline
        </div>
      </div>
      <section className="ag-section" ref={timelineRef}>
        <div className="ag-format-container">
          <div className="js-timeline ag-timeline">
            <div className="js-timeline_line ag-timeline_line">
              <div
                ref={timelineLineProgressRef}
                className="js-timeline_line-progress ag-timeline_line-progress"
              ></div>
            </div>
            <div className="ag-timeline_list">
              {timelineItems.map((item, index) => (
                <div
                  key={index}
                  className="js-timeline_item ag-timeline_item"
                >
                  <div className="ag-timeline-card_box">
                    {index % 2 === 0 ? (
                      <div>
                        <div className="js-timeline-card_point-box ag-timeline-card_point-box">
                          <div className="ag-timeline-card_point">
                            {item.year}
                          </div>
                        </div>
                        <div className="ag-timeline-card_meta-box">
                          <div
                            className={`ag-timeline-card_meta ${
                              index % 2 === 0 ? "js-ag-reverse" : ""
                            }`}
                          >
                            {item.season}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="ag-timeline-card_meta-box">
                          <div
                            className={`ag-timeline-card_meta ${
                              index % 2 === 0 ? "js-ag-reverse" : ""
                            }`}
                          >
                            {item.season}
                          </div>
                        </div>
                        <div className="js-timeline-card_point-box ag-timeline-card_point-box">
                          <div
                            className={`ag-timeline-card_point ${
                              index % 2 === 1 ? "js-ag-reverse" : ""
                            }`}
                          >
                            {item.year}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="ag-timeline-card_item">
                    <div className="ag-timeline-card_inner">
                      <div className="ag-timeline-card_img-box">
                        <img
                          src={item.imageSrc}
                          className="ag-timeline-card_img"
                          width="640"
                          height="360"
                          alt=""
                        />
                      </div>
                      <div className="ag-timeline-card_info">
                        <div className="ag-timeline-card_title">
                          {item.title}
                        </div>
                        <div className="ag-timeline-card_desc" dangerouslySetInnerHTML={{ __html: item.description }}>
                        </div>
                      </div>
                    </div>
                    <div className="ag-timeline-card_arrow"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkExperience;
