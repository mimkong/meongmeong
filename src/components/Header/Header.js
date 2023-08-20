import "./Header.css";
import logo from "./logo.jpg";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="nav">
      <div className="nav__logo">
        <Link to="/">
          <img className="nav__logo__img" src={logo}></img>
        </Link>
      </div>
      <div className="nav__menu">
        <Link className="nav__menu__li" to="/shop">
          SHOP
        </Link>
        <Link className="nav__menu__li" to="/best">
          BEST
        </Link>
        <Link className="nav__menu__li" to="/about">
          ABOUT
        </Link>
      </div>
      <div className="nav__mypage">
        <Link className="nav__mypage__li" to="/login">
          LOGIN
        </Link>
        <Link className="nav__mypage__li" to="/join">
          JOIN
        </Link>
        <Link className="nav__mypage__li" to="/bag">
          BAG
        </Link>
      </div>
    </header>
  );
}
export default Header;
