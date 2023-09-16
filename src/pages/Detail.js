import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CartModal from "../components/CartModal";
import useCart from "../hooks/useCart";
import "../styles/PageStyle.css";
import { decreaseQuantity, increaseQuantity } from "../store";

function Detail() {
  const { addToCart } = useCart();
  const items = useSelector((state) => state.item);
  const { id } = useParams();
  const result = items.find((item) => item.id == id);

  const [showModal, setShowModal] = useState(false);

  // 최근 본 상품
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

  // 상품 옵션선택
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleOptionChange = (e) => {
    const itemId = e.target.value;
    const item = items.find((item) => item.id == itemId);
    setSelectedItem(item);
  };

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  const handleDelete = () => {
    setSelectedItem(null);
    setQuantity(1);
  };
  // 옵션값 수량 조절
  const increaseItemQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseItemQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
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

          <div className="product-option">
            <select onChange={handleOptionChange}>
              <option value="">{"- [필수]옵션을 선택해주세요 -"}</option>
              <option disabled>------</option>
              <option value={result?.id}>{result?.title}</option>
            </select>
          </div>

          {selectedItem && (
            <div className="selected-product">
              <div>{selectedItem.title}</div>
              <div className="quantity-controls">
                <button onClick={decreaseItemQuantity}>-</button>
                <span>{quantity}</span>
                <button onClick={increaseItemQuantity}>+</button>
              </div>
              <button onClick={handleDelete}>삭제</button>
              <div>{selectedItem.price * quantity}원</div>
            </div>
          )}

          {selectedItem && (
            <div className="total-amount">
              총액: {selectedItem.price * quantity}원 ({quantity}개)
            </div>
          )}

          <button
            className="add-to-cart"
            onClick={() => {
              if (selectedItem) {
                const updatedItem = { ...selectedItem, quantity: quantity };
                addToCart(updatedItem);
                setShowModal(true);
              } else {
                alert("옵션을 선택해주세요.");
              }
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
