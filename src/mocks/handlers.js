import { rest } from "msw";

export const handlers = [
  rest.post("/join", (req, res, ctx) => {
    // 여기서 req.body에는 회원가입 데이터가 있다.
    console.log("Received signup data:", req.body);
    return res(ctx.status(200), ctx.json({ message: "회원가입 성공!" }));
  }),

  rest.post("/login", (req, res, ctx) => {
    const { userId, password } = req.body;

    if (userId === "testId" && password === "testPassword1") {
      return res(
        ctx.status(200),
        ctx.json({ token: "fake_token", message: "로그인 성공!" })
      );
    } else {
      return res(
        ctx.status(400),
        ctx.json({ error: "아이디나 비밀번호가 잘못되었습니다." })
      );
    }
  }),

  rest.get("/api/user", (req, res, ctx) => {
    return res(
      ctx.json({
        name: "멍멍이",
        postalCode: "123-456",
        phoneNumber: "010-1234-5678",
      })
    );
  }),
];
