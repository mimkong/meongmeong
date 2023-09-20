import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/PageStyle.css";
import { useState } from "react";
import MainSlider from "../components/MainSlider/MainSlider";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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
            return <Card key={i} bestItems={bestItems[i]} i={i + 1}></Card>;
          })}
        </Row>
        {maxBestItems < items.filter((item) => item.isBest === true).length && ( // 버튼을 최대 아이템 개수보다 작을 때만 표시
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
        )}
      </Container>
      <Container className="main-container">
        <h1>NEW ITEM</h1>
        <Row md={3}>
          {newItems.map((a, i) => {
            return (
              <Col key={i} onClick={() => navigate(`/shop/${a.id}`)}>
                <img
                  src={
                    "https://github.com/mimkong/meongmeongdata/blob/master/item" +
                    newItems[i].id +
                    ".jpg?raw=true"
                  }
                  width="70%"
                  height="330px"
                ></img>
                <h4>{newItems[i].title}</h4>
                <p>{newItems[i].price}원</p>
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
    <Col onClick={() => navigate(`/shop/${props.bestItems.id}`)}>
      <img
        src={
          "https://github.com/mimkong/meongmeongdata/blob/master/item" +
          props.bestItems.id +
          ".jpg?raw=true"
        }
        width="70%"
        height="330px"
      ></img>
      <h4>{props.bestItems.title}</h4>
      <p>{props.bestItems.price}원</p>
    </Col>
  );
}

export default Main;
