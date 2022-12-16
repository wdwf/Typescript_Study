import express from "express";
import { AppDataSource } from "./db";
import { routes } from "./routes";


AppDataSource.initialize().then(() => {
  
  const app = express();

  app.use(express.json());

  app.use(routes)

  return app.listen(3000, () => {
    console.log("Server: http://localhost:3000");  
  })
})
