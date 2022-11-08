import { Request, Response } from "express";
import { roomRepository } from "../repositories/RoomRepository";
import { subjectRepository } from "../repositories/SubjectRepository";
import { videoRepository } from "../repositories/VideoRepository";
import { BadRequestError, NotFoundError } from "../helpers/api-erros";

export class RoomController {
  async create(req: Request, res: Response) {
    const { name, description } = req.body
    //Validar campos com biblioteca joi

    const newRoom = roomRepository.create({ name, description })

    await roomRepository.save(newRoom)

    return res.status(201).json({ message: 'Sala criada com sucesso' })
  }

  async createVideo(req: Request, res: Response) {
    const { title, url } = req.body;
    const { idRoom } = req.params;

    const room = await roomRepository.findOneBy({ id: parseInt(idRoom) })

    if (!room) {
      throw new BadRequestError("Aula não encontrada");
    }

    const newVideo = videoRepository.create({
      title,
      url,
      room
    })

    await videoRepository.save(newVideo);

    return res.status(201).json({ message: 'Video criado com sucesso', newVideo })
  }

  async roomSubject(req: Request, res: Response) {
    const { subject_id } = req.body;
    const { idRoom } = req.params;

    const room = await roomRepository.findOneBy({ id: parseInt(idRoom) })

    if (!room) {
      throw new NotFoundError("Sala não encontrada");
    }
    
    const subject = await subjectRepository.findOneBy({ id: parseInt(subject_id) }) 
    
    if (!subject) {
      throw new NotFoundError("Disciplina não encontrada")
    }

    const roomUpdate = {
      ...room,
      subjects: [subject]
    }

    await roomRepository.save(roomUpdate)

    return res.status(200).json({ message: 'Sala atualizada com sucesso', room})
  }

  async list(req: Request, res: Response) {
    const rooms = await roomRepository.find({
      //Retorno dos relacionamentos
      relations: {
        subjects: true,
        videos: true
      }
    });

    return res.status(200).json({ rooms })
  }
}