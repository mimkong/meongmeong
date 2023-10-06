module.exports = (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  console.log("Received signup data:", req.body);
  res.status(200).json({ message: "회원가입 성공!" });
};
