import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext, useEffect } from "react";
import { themeContext } from "./Context";
import { Skill } from "./components/Skill/Skill";
import GithubProjects from "./components/githubProjects/GithubProjects";
import AboutMe from "./components/AboutMe/AboutMe";
import TabLayout from "./components/TabLayout/TabLayout";
import AppProject from "./components/AppProject/AppProject";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import PortProjectMain from "./components/PortProjects/PortProjectMain";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPercentage = scrollHeight
        ? (scrollTop / scrollHeight) * 100
        : 0;
      document.querySelector(".scroll-watcher").style.transform = `scale(${
        scrollPercentage / 100
      }, 1)`;
    };

    // Initialize the scroll watcher
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <AboutMe />
      <Services />
      <Skill />
      <Experience />
      <WorkExperience />
      <Works />
      <TabLayout />
      {/* <PortProjectMain/> */}
      <GithubProjects />
      <AppProject />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
