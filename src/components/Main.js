import "./main.css";
import Intro from "./main-sections/Intro.js";
import About from "./main-sections/About.js";

const Main = () => {
  return (
    <main className="main" id="main">
      <Intro />
      <About />
    </main>
  );
};

export default Main;
