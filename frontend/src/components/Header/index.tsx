import "./style.css";
import LOGO from "../../assets/LOGO.png";

const Header = () => {
  return (
    <header>
      <div className="header__container">
        <img src={LOGO} alt="Logo LocalSIG" />
        <nav className="header__nav">
          <ul>
           <li className="header__nav__item active">Cadastrar Cliente</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
