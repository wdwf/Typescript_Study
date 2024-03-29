import { NextFunction, Request, Response } from "express";
import { UserRepository } from "../repositories";


export function can(permissionsRoutes: string[]) {
  return async(request: Request, response: Response, next: NextFunction) => {
    const { userId } = request;

    const user = await UserRepository()
    .findOne({ 
      where: {id: userId},
      relations: ["permissions"],
    })

    if (!user) {
      return response.status(400).json("User does not exists");
    }

    const permissionsExists = user.permissions
    .map(permission => permission.name)
    .some(permission => permissionsRoutes.includes(permission))

    if (!permissionsExists) {
      return response.status(401).end();
    }

    return next();
  }
}

export function is(rolesRoutes: string[]) {
  return async(request: Request, response: Response, next: NextFunction) => {
    const { userId } = request;

    const user = await UserRepository()
    .findOne({ 
      where: {id: userId},
      relations: ["roles"],
    })

    if (!user) {
      return response.status(400).json("User does not exists");
    }

    const roleExists = user.roles
    .map(permission => permission.name)
    .some(permission => rolesRoutes.includes(permission))

    if (!roleExists) {
      return response.status(401).end();
    }

    return next();
  }
}