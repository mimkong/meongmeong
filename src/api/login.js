module.exports = async (req, res) => {
  let parsedBody;

  // Content-Type 헤더가 application/json인 경우
  if (req.headers["content-type"] === "application/json") {
    try {
      parsedBody = await req.json();
    } catch (err) {
      res.status(400).send("Invalid JSON");
      return;
    }
  } else {
    res.status(400).send("Expected Content-Type: application/json");
    return;
  }

  console.log(parsedBody);

  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { userId, password } = parsedBody;

  if (userId === "testId" && password === "testPassword1") {
    res.status(200).json({ token: "fake_token", message: "로그인 성공!" });
  } else {
    res.status(400).json({ error: "아이디나 비밀번호가 잘못되었습니다." });
  }
};
