import { useState, useEffect } from "react";
import "../styles/PageStyle.css";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

function Order() {
  const [userInfo, setUserInfo] = useState({});
  const cartItems = useSelector((state) => state.cart);
  const location = useLocation();
  const orderItems = location.state?.items || cartItems;
  const [message, setMessage] = useState("");

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("/api/user")
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, []);

  return (
    <div className="order-payment-container">
      <section>
        <h2>주문자 정보</h2>
        <p>이름: {userInfo.name}</p>
        <p>우편번호: {userInfo.postalCode}</p>
        <p>전화번호: {userInfo.phoneNumber}</p>
      </section>

      <section>
        <h2>배송 메세지</h2>
        <select onChange={(e) => setMessage(e.target.value)}>
          <option value="">메세지 선택</option>
          <option value="부재시 경비실에 맡겨주세요.">
            부재시 경비실에 맡겨주세요.
          </option>
          <option value="문앞에 놓아주세요.">문앞에 놓아주세요.</option>
        </select>
      </section>

      <section>
        <h2>주문 상품</h2>
        <ul>
          {orderItems.map((item) => (
            <li key={item.id}>
              {item.title} ({item.price}원) 수량 : {item.quantity}개
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>총 결제금액</h2>
        <p>{totalAmount}원</p>
      </section>

      <div className="order-payment-buttons">
        <button onClick={() => navigate("/order-complete")}>주문하기</button>
        <button onClick={() => window.history.back()}>
          장바구니로 돌아가기
        </button>
      </div>
    </div>
  );
}

export default Order;
