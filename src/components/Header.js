import logo from "../assets/logo.svg";
import "./header.css";
import { MdMenu } from "react-icons/md";

const Header = () => {
  return (
    <header className="header">
      <nav className="container-nav">
        <div className="container-logo">
          <img className="logo" src={logo} alt="Logo" />
          <span>ENSAR BEKTAS</span>
        </div>
        <div className="burger-menu">
          <MdMenu />
        </div>
      </nav>
    </header>
  );
};

export default Header;
