import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";

function ProductList({ shopItems }) {
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
                      a.id +
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
