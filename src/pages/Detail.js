import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./Detail.css";

function Detail() {
  const items = useSelector((state) => state.item);
  const { id } = useParams();
  const result = items.find((result) => result.id == id);
  console.log(result);

  return (
    <>
      <div className="product-detail">
        <div className="product-image">
          <img
            src={`https://raw.githubusercontent.com/mimkong/meongmeongdata/master/item${result?.id}.jpg`}
          />
        </div>
        <div className="product-info">
          <h1>{result?.title}</h1>
          <h2>{result?.price}원</h2>
          <p>배송비: 3,000원</p>
          <p>최소주문수량 1개 이상</p>
          <button className="add-to-cart">장바구니 담기</button>
          <button className="buy-now">바로 구매하기</button>
        </div>
      </div>
    </>
  );
}

export default Detail;
