import 'express-async-errors';
import express from "express";
import { AppDataSource } from "./db";
import { errorMiddleware } from "./middlewares/error";
import routes from "./routes";

AppDataSource.initialize().then(() => {
  const app = express();

  app.use(express.json());

  app.use(routes);

  //Middleware para tratamento de erro (sempre antes do app.listen)
  app.use(errorMiddleware);

  return app.listen(process.env.PORT, () => {
    console.log(
      `API iniciada. Acesse a rota http://localhost:${process.env.PORT}`
    );
  });
});
