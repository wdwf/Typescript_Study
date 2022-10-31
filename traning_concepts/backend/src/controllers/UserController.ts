import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [
  {name: 'Josh', email:'J@email.com'},
  {name: 'Drack', email:'D@email.com'},
]

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: { name: 'Bob', email: 'bo@email.com' }, 
      message: { subject: 'Programando', body: 'Funcionou !!!' }
    }
    )
  } 
};