import "./CartModal.css";
import { useNavigate } from "react-router-dom";
function CartModal({ onClose }) {
  const navigate = useNavigate();
  return (
    <div className="cart-modal">
      <div className="cart-modal-content">
        <p>장바구니에 상품이 정상적으로 담겼습니다.</p>
        <button
          onClick={() => {
            navigate(`/cart`);
          }}
        >
          장바구니 보기
        </button>
        <button onClick={onClose}>쇼핑 계속하기</button>
      </div>
    </div>
  );
}

export default CartModal;
