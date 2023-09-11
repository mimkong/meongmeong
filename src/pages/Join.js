import React, { useState } from "react";
import "./Join.css";

function Join() {
  const [formData, setFormData] = useState({
    name: "",
    userId: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에 회원가입 로직을 추가하세요.
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
          <button type="button">주소 찾기</button>
        </div>
        <button type="submit">회원가입하기</button>
      </form>
    </div>
  );
}

export default Join;
