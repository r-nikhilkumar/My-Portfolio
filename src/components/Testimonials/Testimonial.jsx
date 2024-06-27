import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Working with Nikhil Kumar was an absolute pleasure. His expertise in web development brought our project to life swiftly and efficiently. He meticulously handled every detail, from frontend design to backend functionality, ensuring a seamless user experience. Highly recommend his services for anyone looking to elevate their online presence!",
    },
    {
      img: profilePic2,
      review:
        "I had the pleasure of collaborating with Nikhil Kumar on an open-source web development project. His expertise in web development truly shined as he efficiently brought our project to life. Nikhil's meticulous attention to detail, from frontend design to backend functionality, ensured a smooth user experience. His contributions are invaluable, and I highly recommend his services to anyone looking to enhance their online presence!",
    },
    {
      img: profilePic3,
      review:
        "I had the opportunity to witness Nikhil Kumar's expertise firsthand during an open-source web development endeavor. His proficiency in frontend technologies such as React.js and backend frameworks like Node.js was impressive. Nikhil's commitment to quality, clear communication, and timely delivery were instrumental in achieving our project goals. His contributions significantly enhanced the project's outcomes, and I look forward to future collaborations with him in the open-source community!",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Noticiable </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
