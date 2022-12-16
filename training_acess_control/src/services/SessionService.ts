import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { User } from "../entities/User";
import { UserRepository } from "../repositories";

type UserRequest = {
  username: string;
  password: string;
};

export class SessionService {
  async execute({ username, password }: UserRequest) {
    const repo = UserRepository();

    const user = await repo.findOneBy({ username: username });

    if (!user) {
      return new Error("User does not exists!");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      return new Error("User or Password incorrect");
    }

    const token = sign({}, process.env.SECRET_JWT, {
      subject: user.id,
    });

    return { token };
  }
}