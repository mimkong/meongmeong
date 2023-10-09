import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/PageStyle.css";
import { useState } from "react";
import MainSlider from "../components/MainSlider/MainSlider";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import numberWithCommas from "../utils/format";

function Main() {
  const items = useSelector((state) => state.item);
  const [maxBestItems, setMaxBestItems] = useState(3);
  const [visible, setVisible] = useState(false);

  const bestItems = items
    .filter((item) => item.isBest === true)
    .slice(0, maxBestItems);
  const newItems = items.filter((item) => item.isNew === true).slice(0, 3);

  const navigate = useNavigate();

  return (
    <>
      <MainSlider />
      <Container className="main-container">
        <h1>BEST of THIS MONTH</h1>
        <Row md={3}>
          {bestItems.map((a, i) => {
            return <Card key={a.id} bestItems={bestItems[i]} i={i + 1}></Card>;
          })}
        </Row>
        {maxBestItems < items.filter((item) => item.isBest === true).length && ( // 버튼을 최대 아이템 개수보다 작을 때만 표시
          <div className="btn-container">
            <button
              className="btn"
              onClick={() => {
                setMaxBestItems(maxBestItems + 3); // 더보기 클릭 시 3개씩 추가하기
                setVisible(!visible);
              }}
            >
              더보기
              {visible &&
                (document.getElementsByClassName("btn")[0].style.display =
                  "none")}
            </button>
          </div>
        )}
      </Container>
      <Container className="main-container">
        <h1>NEW ITEM</h1>
        <Row md={3}>
          {newItems.map((a, i) => {
            return (
              <Col
                key={i}
                onClick={() => navigate(`/shop/product/${a.id}`)}
                style={{ cursor: "pointer" }}
                xs={12}
                md={4}
              >
                <img
                  src={
                    "https://github.com/mimkong/meongmeongdata/blob/master/item" +
                    newItems[i].id +
                    ".jpg?raw=true"
                  }
                  width="70%"
                  height="330px"
                ></img>
                <h5>{newItems[i].title}</h5>
                <p>{numberWithCommas(newItems[i].price)}원</p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

function Card(props) {
  const navigate = useNavigate();
  return (
    <Col
      xs={12}
      md={4}
      onClick={() => navigate(`/shop/product/${props.bestItems.id}`)}
      style={{ cursor: "pointer" }}
    >
      <img
        src={
          "https://github.com/mimkong/meongmeongdata/blob/master/item" +
          props.bestItems.id +
          ".jpg?raw=true"
        }
        width="70%"
        height="330px"
      ></img>
      <h5>{props.bestItems.title}</h5>
      <p>{numberWithCommas(props.bestItems.price)}원</p>
    </Col>
  );
}

export default Main;
