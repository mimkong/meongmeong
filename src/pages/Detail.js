import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CartModal from "../components/CartModal";
import useCart from "../hooks/useCart";
import "../styles/PageStyle.css";
import { useNavigate } from "react-router-dom";
import numberWithCommas from "../utils/format";

function Detail() {
  const { addToCart } = useCart();
  const items = useSelector((state) => state.item);
  const { id } = useParams();
  const result = items.find((item) => item.id == id);

  const [showModal, setShowModal] = useState(false);

  const userState = useSelector((state) => state.user);
  const navigate = useNavigate();

  // 스크롤 상단으로 설정
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          <h2>{numberWithCommas(result?.price)}원</h2>
          <p>배송비: 3,000원</p>
          <p>최소주문수량 1개 이상</p>

          <div className="product-option">
            <h6>옵션</h6>
            <select onChange={handleOptionChange}>
              <option value="">{"- [필수]옵션을 선택해주세요 -"}</option>
              <option disabled>------</option>
              <option value={result?.id}>{result?.title}</option>
            </select>
          </div>

          {selectedItem && (
            <div className="selected-product">
              <div className="selected-product-data">{selectedItem.title}</div>
              <div className="quantity-controls">
                <button
                  className="quantity-button"
                  onClick={decreaseItemQuantity}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  className="quantity-button"
                  onClick={increaseItemQuantity}
                >
                  +
                </button>
              </div>
              <button className="delete-btn" onClick={handleDelete}>
                Delete
              </button>
              <div className="selected-product-data">
                {numberWithCommas(selectedItem.price * quantity)}원
              </div>
            </div>
          )}

          {selectedItem && (
            <div className="total-amount">
              <div className="total-amount-text">총액: </div>
              <div className="total-amount-price">
                {numberWithCommas(selectedItem.price * quantity)}원 ({quantity}
                개)
              </div>
            </div>
          )}
          <div className="detail-btn">
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
            <button
              className="buy-now"
              onClick={() => {
                if (userState.isLoggedIn) {
                  // 사용자가 로그인한 상태인지 확인
                  if (selectedItem) {
                    const updatedItem = { ...selectedItem, quantity: quantity };
                    navigate("/order", { state: { items: [updatedItem] } });
                  } else {
                    alert("옵션을 선택해주세요.");
                  }
                } else {
                  // 로그인하지 않았을 경우
                  alert("회원만 구매 가능합니다.");
                  navigate("/join"); // 회원가입 페이지로 리디렉션
                }
              }}
            >
              바로 구매하기
            </button>
          </div>
        </div>
      </div>
      {showModal && <CartModal onClose={() => setShowModal(false)} />}
    </>
  );
}

export default Detail;
