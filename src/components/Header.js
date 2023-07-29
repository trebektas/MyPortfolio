import logo from "../assets/logo.svg";
import "./components.css";

const Header = () => {
  return (
    <section className="header">
      <div className="container-logo">
        <img className="logo" src={logo} alt="Logo" />
        <span>ENSAR BEKTAS</span>
      </div>
      <div>Hamburger Button</div>
    </section>
  );
};

export default Header;
