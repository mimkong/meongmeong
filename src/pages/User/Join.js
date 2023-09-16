import React, { useState } from "react";
import "../../styles/PageStyle.css";
import DaumPost from "./DaumPost";
import validateInput from "./validateInput";
import useUser from "../../hooks/useUser";

function Join() {
  const [isLoggedIn, loginUser] = useUser();

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
    // msw
    try {
      const response = await fetch("/join", {
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
    setShowPost(false); // 주소 검색 컴포넌트 숨기기
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="이름"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="userId"
          placeholder="아이디"
          value={formData.userId}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="비밀번호 확인"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="전화번호"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <div className="address-container">
          <input
            type="text"
            name="address"
            placeholder="주소"
            value={formData.address}
            onChange={handleChange}
          />
          <button type="button" onClick={() => setShowPost(true)}>
            주소 찾기
          </button>
        </div>
        <button type="submit">회원가입하기</button>
      </form>
      {/* 주소 찾기 모달창 */}
      {showPost && (
        <div
          className="modal"
          onClick={(e) => {
            if (e.target.className === "modal") {
              setShowPost(false);
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
