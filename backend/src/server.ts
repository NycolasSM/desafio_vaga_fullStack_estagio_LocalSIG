import "express-async-errors";
import express, { Request, Response } from "express";
import { router } from "./routes";
import { AppError } from "./errors/AppError";

const app = express();

app.use(express.json());

app.use(router);

app.use((err: Error, request: Request, response: Response) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  return response.status(500).json({
    status: "error",
    message: `Erro inesperado - ${err.message}`,
  });
});

app.listen(3001, () => console.log("Server running... PORT 3001"));
