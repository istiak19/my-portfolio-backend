import compression from "compression";
import cors from "cors";
import express, { Request, Response } from "express";
import cookieParser from "cookie-parser";
import notFound from "./app/middleware/notFound";
import { router } from "./app/route";

const app = express();


app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Portfolio Backend API is running successfully!");
});

// 404 Handler
app.use(notFound);

export default app;