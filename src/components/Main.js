import "./main.css";
import Intro from "./main-sections/Intro.js";
import About from "./main-sections/About.js";
import Contact from "./main-sections/Contact.js";
import Footer from "./main-sections/Footer";
import Experience from "./main-sections/Experience";
import Work from "./main-sections/Work";

const Main = () => {
  return (
    <main className="main" id="main">
      <Intro />
      <About />
      <Experience />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
};

export default Main;
