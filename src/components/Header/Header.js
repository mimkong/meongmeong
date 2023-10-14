import "./Header.css";
import logo from "./logo.jpg";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { setSearchResults } from "../../store";

function Header() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  // 검색 기능
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const handleSearchClick = () => {
    setIsModalOpen(false);
    navigate("/search");
  };

  const [searchQuery, setSearchQuery] = useState("");

  const items = useSelector((state) => state.item);
  const search = useSelector((state) => state.search);

  const handleSearch = (query) => {
    setSearchQuery(query);

    if (query) {
      const results = items.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      dispatch(setSearchResults(results));
    } else {
      dispatch(setSearchResults([]));
    }
  };

  return (
    <header className="nav">
      <div className="nav__logo">
        <Link to="/">
          <img className="nav__logo__img" src={logo}></img>
        </Link>
      </div>
      <div className="nav__menu">
        <div className="nav__menu__dropdown">
          <Link className="nav__menu__li" to="/shop">
            SHOP
          </Link>
          <div className="nav__menu__categories">
            <Link to="/shop/living">LIVING</Link>
            <Link to="/shop/walking">WALIKING</Link>
            <Link to="/shop/clean">CLEAN</Link>
            <Link to="/shop/food">FOOD</Link>
          </div>
        </div>
        <Link className="nav__menu__li" to="/best">
          BEST
        </Link>
      </div>
      <div className="nav__mypage">
        {isLoggedIn ? (
          <>
            {/* 로그인 상태일 때 표시할 링크들 */}
            <button className="nav__mypage__li">검색</button>
            <div className={`search-modal ${isModalOpen ? "open" : ""}`}>
              <div className="search-container">
                <input
                  type="text"
                  className="search-input"
                  onChange={(e) => handleSearch(e.target.value)}
                />
                <button className="search-btn" onClick={handleSearchClick}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
                </button>
              </div>
              <button
                className="search-close-btn"
                onClick={() => setIsModalOpen(false)}
              >
                <FontAwesomeIcon icon={faX} size="xs" />
              </button>
            </div>
            <button className="nav__mypage__li" onClick={handleLogout}>
              로그아웃
            </button>
            <Link className="nav__mypage__li" to="/recently-viewed">
              최근 본 상품
            </Link>
            <Link className="nav__mypage__li" to="/cart">
              장바구니
            </Link>
          </>
        ) : (
          <>
            {/* 로그아웃 상태일 때 표시할 링크들 */}
            <button
              className="nav__mypage__li"
              onClick={() => setIsModalOpen(true)}
            >
              검색
            </button>
            <div className={`search-modal ${isModalOpen ? "open" : ""}`}>
              <div className="search-container">
                <input
                  type="text"
                  className="search-input"
                  onChange={(e) => handleSearch(e.target.value)}
                />
                <button className="search-btn" onClick={handleSearchClick}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
                </button>
              </div>
              <button
                className="search-close-btn"
                onClick={() => setIsModalOpen(false)}
              >
                <FontAwesomeIcon icon={faX} size="x" />
              </button>
            </div>
            <Link className="nav__mypage__li" to="/login">
              로그인
            </Link>
            <Link className="nav__mypage__li" to="/join">
              회원가입
            </Link>
            <Link className="nav__mypage__li" to="/recently-viewed">
              최근 본 상품
            </Link>
            <Link className="nav__mypage__li" to="/cart">
              장바구니
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
export default Header;
