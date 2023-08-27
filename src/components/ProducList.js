import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import axios from "axios";

function ProductList() {
  let [shopItems, setShopItems] = useState();

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/mimkong/meongmeongdata/master/data.json"
      )
      .then((result) => {
        setShopItems(result.data);
      })
      .catch(() => {
        console.log("json 데이터를 불러오는데 실패했습니다.");
      });
  }, []);
  return (
    <>
      <Container>
        <Row md={3}>
          {shopItems &&
            shopItems.map((a, i) => {
              return (
                <Col>
                  <img
                    src={
                      "https://github.com/mimkong/meongmeongdata/blob/master/item" +
                      (i + 1) +
                      ".jpg?raw=true"
                    }
                    width="80%"
                    height="380px"
                  ></img>
                  <h5>{shopItems[i].title}</h5>
                  <p>{shopItems[i].price}원</p>
                </Col>
              );
            })}
        </Row>
      </Container>
    </>
  );
}
export default ProductList;
