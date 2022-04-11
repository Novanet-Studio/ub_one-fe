import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navigation from "./navigation";
import logotype from "../assets/images/logotype.webp";
import emblem from "../assets/images/emblem.webp";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">        
        <img className="header__logo-emblem" src={emblem} alt="logo" />
        <img className="header__logo-logotype" src={logotype} alt="logo" />
      </div>
      <Navigation />
      <div className="header__actions">
        <button className="button ">
          <FontAwesomeIcon
            className="icon header__icon"
            icon={["fas", "moon"]}
            size="lg"
          />
        </button>
        <button className="button b">Connect Wallet</button>
      </div>
    </header>
  );
};

export default Header;
