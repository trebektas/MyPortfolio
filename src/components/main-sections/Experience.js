import "./experience.css";

import svgHtml from "../../assets/icons/html.svg";
import svgCss from "../../assets/icons/css.svg";
import svgJavascript from "../../assets/icons/javascript.svg";
import svgNodejs from "../../assets/icons/nodejs.svg";
import svgMysql from "../../assets/icons/mysql.svg";
import svgReact from "../../assets/icons/react.svg";
import svgGit from "../../assets/icons/git.svg";
import svgGithub from "../../assets/icons/github.svg";
import svgMongodb from "../../assets/icons/mongodb.svg";
import svgMongoose from "../../assets/icons/mongoose.svg";
import svgReactRouter from "../../assets/icons/react-router.svg";

const Experience = () => {
  const firstDate = new Date(2022, 7, 1);
  const lastDate = new Date();
  const yearsDiff = lastDate.getFullYear() - firstDate.getFullYear();

  return (
    <section className="sections experience">
      <div className="container-section">
        <div>
          <h2>EXPERIENCE</h2>
          <p>
            I've been doing web development for about {yearsDiff} years now, and
            I'm always eager to learn more in this fast paced industry.
          </p>
        </div>
        <div>
          <h3>TECHNOLOGIES I'VE WORKED WITH:</h3>
          <ul className="list-logos">
            <li>
              <img className="svg" src={svgGithub} alt="GitHub" />
            </li>
            <li>
              <img className="svg" src={svgGit} alt="Git" />
            </li>
            <li>
              <img className="svg" src={svgHtml} alt="Html" />
            </li>
            <li>
              <img className="svg" src={svgCss} alt="Css" />
            </li>
            <li>
              <img className="svg" src={svgJavascript} alt="Javascript" />
            </li>
            <li>
              <img className="svg" src={svgNodejs} alt="NodeJS" />
            </li>
            <li>
              <img className="svg" src={svgMysql} alt="MySql" />
            </li>
            <li>
              <img className="svg" src={svgMongodb} alt="MongoDB" />
            </li>
            <li>
              <img className="svg" src={svgMongoose} alt="Mongoose" />
            </li>
            <li>
              <img className="svg" src={svgReact} alt="React" />
            </li>
            <li>
              <img className="svg" src={svgReactRouter} alt="React Router" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
