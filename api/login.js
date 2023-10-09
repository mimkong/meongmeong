module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  if (req.method !== "POST") {
    return res.status(405).end();
  }

  try {
    const parsedBody = await getRequestBody(req);
    console.log(parsedBody);

    const { userId, password } = parsedBody;

    if (userId === "testId" && password === "testPassword1") {
      res.status(200).json({ token: "fake_token", message: "로그인 성공!" });
    } else {
      res.status(400).json({ error: "아이디나 비밀번호가 잘못되었습니다." });
    }
  } catch (e) {
    res.status(400).json({ error: "Error parsing JSON" });
  }
};
