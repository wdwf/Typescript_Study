import { Router } from "express";
import { UserController } from "./controllers/userController";
import { authMiddleware } from "./middlewares/authMiddleware";

const routes = Router();

routes.get('/ping', (req, res) => {
  res.json('pong')
})

routes.post('/signup', new UserController().create)
routes.post('/signin', new UserController().login)

//Abaixo desse middleware as rotas devem ser todas autenticadas
routes.use(authMiddleware)
routes.get('/profile', new UserController().getProfile)

export default routes;