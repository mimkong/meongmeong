import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./main.css";
import { useState } from "react";
import data from "../data/data";

function Main() {
  let [items] = useState(data);
  return (
    <>
      <Container>
        <h1>이달의 베스트</h1>
        <Row md={3}>
          {items.map((a, i) => {
            return <Card items={items[i]} i={i + 1}></Card>;
          })}
        </Row>
        <button>더보기</button>
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
        width="80%"
      ></img>
      <h4>{props.items.title}</h4>
      <p>{props.items.price}원</p>
    </Col>
  );
}

export default Main;
