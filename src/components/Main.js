import "./main.css";
import Intro from "./main-sections/Intro.js";
import About from "./main-sections/About.js";
import Contact from "./main-sections/Contact.js";

const Main = () => {
  return (
    <main className="main" id="main">
      <Intro />
      <About />
      <Contact />
    </main>
  );
};

export default Main;
