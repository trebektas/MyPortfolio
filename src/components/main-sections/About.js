import "./about.css";
import profileImg from "../../assets/coding.png";

const About = () => {
  return (
    <section className="sections about" id="about">
      <div className="container-section">
        <div className="about-me">
          <article>
            <h1>Web Developer</h1>
            <p>
              As I grow as a developer, I hope to write clean, readable code
              that can be used by others and leveraged to create beautiful
              software.
            </p>
          </article>
          <figure>
            <img src={profileImg} alt="Profile" />
          </figure>
        </div>
        <div className="about-texts">
          <ul className="list-about-texts">
            <li>
              A developer with a BSc in Industrial Engineering and four years of
              experience as a business analyst.
            </li>
            <li>
              An explorer who is hungry for success, enjoys learning, and
              constantly improves himself.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
