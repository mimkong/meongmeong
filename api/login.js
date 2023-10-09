module.exports = (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { userId, password } = req.body;

  if (userId === "testId" && password === "testPassword1") {
    res.status(200).json({ token: "fake_token", message: "로그인 성공!" });
  } else {
    res.status(400).json({ error: "아이디나 비밀번호가 잘못되었습니다." });
  }
};
