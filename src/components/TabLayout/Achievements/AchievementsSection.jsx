import React from "react";
import AchievementCard from "./AchievementCard";
import "./AchievementsSection.css";
import Slider from "react-slick";
import ach1 from "../../../img/achievements/ach1.png"
import ach2 from "../../../img/achievements/ach2.png"
import ach3 from "../../../img/achievements/ach3.png"
import ach4 from "../../../img/achievements/ach4.png"
import ach5 from "../../../img/achievements/ach5.png"
import ach6 from "../../../img/achievements/ach6.png"

const AchievementsSection = () => {
  // Mock data for achievements
  const achievements = [
    {
      id: 1,
      title: "SPIN THE CODE 2022",
      imageUrl: ach1,
      achievementUrl: "https://media.licdn.com/dms/document/media/D562DAQHrDvt6ywUIpA/profile-treasury-document-pdf-analyzed/0/1705325081718?e=1720051200&v=beta&t=QRPGQiypjQ9-y6bFfmlSas8zvKU7Nwb3xBvimgJaZck",
      details: "Won coding contest conducted by GFG!",
    },
    {
      id: 2,
      title: "Data Structures and Algorithms",
      imageUrl: ach6,
      achievementUrl: "https://www.coursera.org/account/accomplishments/specialization/A2DLGAC8QRGG",
      details: "Complete Data Structures and Algorithms by UC San Deigo",
    },
    {
      id: 3,
      title: "Meta Front-End Developer Certificate",
      imageUrl: ach5,
      achievementUrl: "https://www.credly.com/badges/4ef11a5a-03d7-45f5-b4c7-315b9d27c5f7/linked_in_profile",
      details: "Complete Front-End Development course provided by META",
    },
    {
      id: 4,
      title: "Meta Back-End Developer Certificate",
      imageUrl: ach4,
      achievementUrl: "https://www.credly.com/badges/01943819-ae6a-4356-b25e-007830d17aeb/linked_in_profile",
      details: "Complete Back-End Development course provided by META",
    },
    {
      id: 5,
      title: "Supervised Machine Learning",
      imageUrl: ach2,
      achievementUrl: "https://www.coursera.org/account/accomplishments/verify/JK2EH2GVA5A3?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
      details: "Earned through coursera provided by IBM",
    },
    {
      id: 6,
      title: "Unsupervised Machine Learning",
      imageUrl: ach3,
      achievementUrl: "https://www.coursera.org/account/accomplishments/verify/CEGYRN3TLELA",
      details: "Earned through coursera provided by IBM",
    },
    // Add more achievements as needed
  ];

  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <span className="slick-arrow slick-next" style={{ borderColor: "orange" }} />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <span className="slick-arrow slick-prev" style={{ borderColor: "orange" }} />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="achievements-section">
      <Slider {...settings}>
        {/* Render each achievement card */}
        {achievements.map((achievement) => (
          <div key={achievement.id} className="achievement-slide">
            <AchievementCard achievement={achievement} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AchievementsSection;
