import { Request, Response } from "express";
import { BadRequestError } from "../helpers/api-erros";
import { userRepository } from "../repositories/userRepository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";



export class UserController {
  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const userExists = await userRepository.findOneBy({ email });

    if (userExists) {
      throw new BadRequestError("Email já cadastrado");
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = userRepository.create({
      name,
      email,
      password: hashPassword,
    });

    await userRepository.save(newUser);

    const { password: _, ...user } = newUser;

    return res.status(201).json({ message: "Cadastrado com sucesso", user });
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const user = await userRepository.findOneBy({ email });

    if (!user) {
      throw new BadRequestError("E-mail ou senha invalidos");
    }

    const verifyPass = await bcrypt.compare(password, user.password);

    if (!verifyPass) {
      throw new BadRequestError("E-mail ou senha invalidos");
    }

    //Cria um token - sign -> serve para passar as infos q
    //se deseja armazenar dentro do token
    const token = jwt.sign({ id: user.id }, process.env.JWT_PASS ?? "", {
      expiresIn: "8h",
    });

    const { password:_, ...userLogin } = user

    return res.json({
      user: userLogin,
      token: token
    })
    
  }

  async getProfile(req:Request, res:Response) {

    return res.json(req.user)
    
  }
}
