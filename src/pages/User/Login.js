import React, { useState } from "react";
import "../../styles/PageStyle.css";
import useUser from "../../hooks/useUser";

function Login() {
  const [Id, setId] = useState("");
  const [password, setPassword] = useState("");

  const { loginUser } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: Id,
          password: password,
        }),
      });

      const data =
        response.headers.get("Content-Type") === "application/json"
          ? await response.json()
          : {};

      if (response.ok) {
        loginUser();
        alert(data.message); // "로그인 성공!"
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error("로그인 에러:", error);
      alert("로그인 중 문제가 발생했습니다.");
    }
  };

  return (
    <div className="container">
      <div className="login-container">
        <h1>LOGIN</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>아이디</label>
            <input
              type="Id"
              value={Id}
              onChange={(e) => setId(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>비밀번호</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">로그인</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
