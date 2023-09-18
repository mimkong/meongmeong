const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: "#f4f4f4",
};

function OrderComplete() {
  return (
    <div style={containerStyle}>
      <h2>주문 완료!</h2>
      <p>주문해주셔서 감사합니다.</p>
      <p>주문 내역은 이메일로 발송되었습니다.</p>
      <button onClick={() => (window.location.href = "/")}>
        홈으로 돌아가기
      </button>
    </div>
  );
}

export default OrderComplete;
