import "../styles/PageStyle.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

import {
  toggleSelection,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  removeSelectedItems,
  removeAllItems,
} from "../store";

function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const userState = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <>
      <div className="cart-container">
        <h1>CART</h1>
        {cartItems.length === 0 ? (
          <p className="empty-text">장바구니가 비어있습니다.</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <div
                  className="cart-item-left"
                  onClick={() => navigate(`/shop/${item.id}`)}
                >
                  <input
                    type="checkbox"
                    checked={item.selected}
                    onChange={() => dispatch(toggleSelection(item.id))}
                    className="checkbox"
                  />
                  <img
                    src={`https://raw.githubusercontent.com/mimkong/meongmeongdata/master/item${item.id}.jpg`}
                    className="product-image"
                  />
                  <span className="product-name">{item.title}</span>
                  <span className="product-price">{item.price}원</span>
                </div>
                <div className="cart-item-right">
                  <div className="quantity-controls">
                    <button
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                      className="quantity-button"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => dispatch(increaseQuantity(item.id))}
                      className="quantity-button"
                    >
                      +
                    </button>
                  </div>
                  <FontAwesomeIcon
                    icon={faX}
                    onClick={() => dispatch(removeItem(item.id))}
                    className="delete-button"
                  />
                </div>
              </div>
            ))}
            <div className="cart-actions">
              <div className="cart-actions-delete">
                <button
                  onClick={() => {
                    const selectedCartItems = cartItems.filter(
                      (item) => item.selected
                    );

                    if (selectedCartItems.length === 0) {
                      alert("선택된 상품이 없습니다.");
                    } else {
                      dispatch(removeSelectedItems());
                    }
                  }}
                >
                  선택 삭제
                </button>
                <button onClick={() => dispatch(removeAllItems())}>
                  전체 삭제
                </button>
              </div>
              <div className="cart-actions-order">
                <button
                  onClick={() => {
                    if (userState.isLoggedIn) {
                      // 사용자가 로그인한 상태인지 확인
                      const selectedCartItems = cartItems.filter(
                        (item) => item.selected
                      );
                      if (selectedCartItems.length === 0) {
                        alert("선택된 상품이 없습니다.");
                      } else {
                        navigate("/order", {
                          state: { items: selectedCartItems },
                        });
                      }
                    } else {
                      alert("회원만 구매 가능합니다.");
                      navigate("/join"); // 로그인 페이지로 이동 (경로를 적절히 조정하세요)
                    }
                  }}
                >
                  선택 상품 주문
                </button>
              </div>
            </div>
            <div className="cart-summary">
              <div className="cart-summary-container">
                <div>주문 금액</div>
                <div>{calculateTotal()}원</div>
              </div>
              <div className="cart-summary-container">
                <div>배송비</div>
                <div>3000원</div>
              </div>
              <div className="cart-summary-container">
                <div>합계</div>
                <div>{calculateTotal() + 3000}원</div>
              </div>
            </div>
            <button
              className="checkout"
              onClick={() => {
                if (userState.isLoggedIn) {
                  // 사용자가 로그인한 상태인지 확인
                  navigate("/order", { state: { items: cartItems } });
                } else {
                  alert("회원만 구매 가능합니다.");
                  navigate("/join");
                }
              }}
            >
              주문하기
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default Cart;
