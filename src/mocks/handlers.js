import { rest } from "msw";

export const handlers = [
  rest.post("/signup", (req, res, ctx) => {
    // 여기서 req.body에는 회원가입 데이터가 있다.
    console.log("Received signup data:", req.body);
    return res(ctx.status(200), ctx.json({ message: "회원가입 성공!" }));
  }),
];
