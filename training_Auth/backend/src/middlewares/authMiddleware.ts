import { NextFunction, Request, Response } from "express";
import { userRepository } from "../repositories/userRepository";
import jwt from "jsonwebtoken";
import { UnauthorizedError } from "../helpers/api-erros";

type JwtPayload = {
  id: string
}

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers

  if (!authorization) {
    throw new UnauthorizedError("Acesso não autorizado")
  }

  const token = authorization.split(" ")[1]

  const { id } = jwt.verify(token, process.env.JWT_PASS ?? "") as JwtPayload

  const user = await userRepository.findOneBy({ id });

  if (!user) {
    throw new UnauthorizedError("Acesso não autorizado")
  }

  const { password:_, ...loggedUser } = user

  req.user = loggedUser

  next()
}