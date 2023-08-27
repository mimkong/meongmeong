import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./main.css";
import { useState } from "react";
import data from "../data/data";
import newdata from "../data/newdata";
import axios from "axios";
import MainSlider from "../components/MainSlider/MainSlider";
function Main() {
  let [items, setItems] = useState(data); // best item data
  let [newitems] = useState(newdata); // new item data
  let [visible, setVisible] = useState(false);
  return (
    <>
      <MainSlider />
      <Container>
        <h1>이달의 베스트 BEST of THIS MONTH</h1>
        <Row md={3}>
          {items.map((a, i) => {
            return <Card items={items[i]} i={i + 1}></Card>;
          })}
        </Row>
        <button
          className="btn"
          onClick={() => {
            axios
              .get(
                "https://raw.githubusercontent.com/mimkong/meongmeongdata/master/data2.json"
              )
              .then((result) => {
                let copy = [...items, ...result.data];
                setItems(copy);
              })
              .catch(() => {
                console.log("실패했습니다.");
              });
            setVisible(!visible);
          }}
        >
          더보기
          {visible &&
            (document.getElementsByClassName("btn")[0].style.display = "none")}
        </button>
      </Container>
      <Container>
        <h1>이달의 신제품 NEW ITEM</h1>
        <Row md={3}>
          {newitems.map((a, i) => {
            return (
              <Col>
                <img
                  src={
                    "https://github.com/mimkong/meongmeongdata/blob/master/item" +
                    (i + 7) +
                    ".jpg?raw=true"
                  }
                  width="70%"
                  height="330px"
                ></img>
                <h4>{newitems[i].title}</h4>
                <p>{newitems[i].price}원</p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

function Card(props) {
  return (
    <Col>
      <img
        src={
          "https://github.com/mimkong/meongmeongdata/blob/master/item" +
          props.i +
          ".jpg?raw=true"
        }
        width="70%"
        height="330px"
      ></img>
      <h4>{props.items.title}</h4>
      <p>{props.items.price}원</p>
    </Col>
  );
}

export default Main;
