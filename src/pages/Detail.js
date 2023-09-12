import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem, increaseQuantity } from "../store";
import { useState, useEffect } from "react";
import CartModal from "../components/CartModal";
import "./Detail.css";

function Detail() {
  const items = useSelector((state) => state.item);
  const cartItems = useSelector((state) => state.cart);
  const { id } = useParams();
  const result = items.find((item) => item.id == id);
  const isIdExistInCart = cartItems.some((item) => item.id == result?.id);

  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // 데이터가 준비되지 않았으면 아무것도 하지 않는다.
    if (!result?.id) return;
    let 꺼낸거 = localStorage.getItem("watched");
    // localStorage의 값이 없다면 빈 배열로 시작한다.
    꺼낸거 = 꺼낸거 ? JSON.parse(꺼낸거) : [];
    꺼낸거.push(result?.id);
    꺼낸거 = Array.from(new Set(꺼낸거));
    localStorage.setItem("watched", JSON.stringify(꺼낸거));
  }, [result]);

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
          <button
            className="add-to-cart"
            onClick={() => {
              isIdExistInCart
                ? dispatch(increaseQuantity(result?.id))
                : dispatch(addItem(result));
              setShowModal(true);
            }}
          >
            장바구니 담기
          </button>
          <button className="buy-now">바로 구매하기</button>
        </div>
      </div>
      {showModal && <CartModal onClose={() => setShowModal(false)} />}
    </>
  );
}

export default Detail;
