import React, { useState } from "react";
import "../../styles/PageStyle.css";
import DaumPost from "./DaumPost";
import validateInput from "./validateInput";
import useUser from "../../hooks/useUser";

function Join() {
  const { loginUser } = useUser();

  const [formData, setFormData] = useState({
    name: "",
    userId: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    address: "",
  });

  const [showPost, setShowPost] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateInput(formData)) {
      return; // 유효성 검사 실패 시 함수 종료
    }
    // /join경로에 POST요청을 보내 회원가입 시도 후 동작 수행하기
    try {
      const response = await fetch("/api/join", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        loginUser();
        alert(data.message); // "회원가입 성공!"
      } else {
        alert(data.error || "회원가입 실패");
      }
    } catch (error) {
      console.error("회원가입 에러:", error);
      alert("회원가입 중 문제가 발생했습니다.");
    }
  };

  const handleComplete = (data) => {
    let fullAddress = data.address;
    setFormData({ ...formData, address: fullAddress });
    setShowPost(false); // 주소 검색 완료 시 컴포넌트 숨기기
  };

  return (
    <div className="join-container">
      <h1>JOIN US</h1>
      <form className="join-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label>이름</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label>아이디</label>
          <input
            type="text"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label>비밀번호</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label>비밀번호 확인</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label>전화번호</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label>주소</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <button
          className="address-btn"
          type="button"
          onClick={() => setShowPost(true)}
        >
          주소 찾기
        </button>
        <button className="submit-btn" type="submit">
          회원가입하기
        </button>
      </form>
      {/* 주소 찾기 모달창 */}
      {showPost && (
        <div
          className="modal"
          onClick={(e) => {
            if (e.target.className === "modal") {
              setShowPost(false); // 모달 백그라운드 클릭 시 컴포넌트 숨기기
            }
          }}
        >
          <div className="modal-content">
            <DaumPost handleComplete={handleComplete} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Join;
