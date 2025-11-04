import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./database/db.js";
import postRouter, { initialRouter } from "./routes/posts.js";
import { handleSSEConnection } from "./sse/sseManager.js";

// 환경변수 로드
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// cors 설정
app.use(cors()); // 모든 도메인 허용

// 프론트에서 받은 json형태의 데이터를 객체로 파싱(변환)하여 사용하도록 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, async () => {
  console.log("Server running at", PORT);

  // TODO: DB연결
});
