import "./Footer.css";
import logo from "./logo-footer.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
function Footer() {
  const handleOpenNewTab = (url) => {
    window.open(url);
  };

  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} />
          <p>Photo source: </p>
          <p>https://arrr.kr/index.html</p>
          <p>https://simplydog.co.kr/</p>
          <p>https://lorenzmall.com/</p>
          <p>&copy; 2023</p>
        </div>
        <div className="footer-cs">
          <p className="footer-title"></p>
          <p>AM 09:00 ~ PM 18:00</p>
          <p>PM 12:00 ~ 13:00 (Lunch)</p>
          <p>SAT, SUN, HOLIDAY OFF</p>
          <p>CS Email. shinhw12@naver.com</p>
        </div>
        <div className="footer-social">
          <FontAwesomeIcon
            icon={faGithub}
            size="2x"
            onClick={() =>
              handleOpenNewTab("https://github.com/mimkong/meongmeong")
            }
          />
          <FontAwesomeIcon
            icon={faBlog}
            size="2x"
            onClick={() =>
              handleOpenNewTab(
                "https://velog.io/@x5foddl/series/%EC%87%BC%ED%95%91%EB%AA%B0%EB%A7%8C%EB%93%A4%EA%B8%B0%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8"
              )
            }
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
