import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
function ProductList({ shopItems }) {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Row md={3}>
          {shopItems &&
            shopItems.map((a, i) => {
              return (
                <Col
                  xs={12}
                  md={4}
                  className="product-list"
                  key={a.id}
                  onClick={() => {
                    navigate(`/shop/product/${a.id}`);
                  }}
                >
                  <img
                    src={`https://raw.githubusercontent.com/mimkong/meongmeongdata/master/item${a.id}.jpg`}
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
