import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";

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
  const dispatch = useDispatch();

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-container">
      {cartItems.map((item) => (
        <div className="cart-item" key={item.id}>
          <input
            type="checkbox"
            checked={item.selected}
            onChange={() => dispatch(toggleSelection(item.id))}
          />
          <img
            src={`https://raw.githubusercontent.com/mimkong/meongmeongdata/master/item${item.id}.jpg`}
            className="product-image"
          />
          <span className="product-name">{item.title}</span>
          <span className="product-price">{item.price}원</span>
          <div className="quantity-controls">
            <button onClick={() => dispatch(decreaseQuantity(item.id))}>
              -
            </button>
            <input
              type="number"
              value={item.quantity}
              readOnly
              className="product-quantity"
            />
            <button onClick={() => dispatch(increaseQuantity(item.id))}>
              +
            </button>
          </div>
          <button onClick={() => dispatch(removeItem(item.id))}>삭제</button>
        </div>
      ))}
      <div className="cart-actions">
        <button onClick={() => dispatch(removeSelectedItems())}>
          선택 삭제
        </button>
        <button onClick={() => dispatch(removeAllItems())}>전체 삭제</button>
        <button>선택 상품 주문</button>
        <button>전체 상품 주문</button>
      </div>
      <div className="cart-summary">
        <div>주문 금액: {calculateTotal()}원</div>
        <div>배송비: 3000원</div>
        <div>합계: {calculateTotal() + 3000}원</div>
      </div>
      <button className="checkout">주문하기</button>
    </div>
  );
}

export default Cart;
