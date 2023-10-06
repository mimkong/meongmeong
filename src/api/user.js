module.exports = (req, res) => {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  res.json({
    name: "멍멍이",
    postalCode: "123-456",
    phoneNumber: "010-1234-5678",
  });
};
