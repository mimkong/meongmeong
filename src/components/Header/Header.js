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
      </div>
      <div className="nav__mypage">
        <Link className="nav__mypage__li" to="/login">
          로그인
        </Link>
        <Link className="nav__mypage__li" to="/join">
          회원가입
        </Link>
        <Link className="nav__mypage__li" to="/recently_viewed">
          최근 본 상품
        </Link>
        <Link className="nav__mypage__li" to="/cart">
          장바구니
        </Link>
      </div>
    </header>
  );
}
export default Header;
