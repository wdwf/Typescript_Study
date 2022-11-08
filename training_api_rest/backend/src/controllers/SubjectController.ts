import { Request, Response } from "express";
import { BadRequestError } from "../helpers/api-erros";
import { subjectRepository } from "../repositories/SubjectRepository";

export class SubjectController {

  async create(req: Request, res: Response) {
    const { name }  = req.body;

      if (!name) {
        throw new BadRequestError("Preencha todos os campos")
      }

      const newSubject = subjectRepository.create({ name })

      await subjectRepository.save(newSubject)

      return res.status(201).json({ message: 'Aula criada com sucesso' })
  }


}