import { Request, Response } from "express";
import { GetAllVideosService } from "../service/GetAllVideosService";


export class GetAllVideoController {
  async handle(resquest: Request, response: Response) {

    const service = new GetAllVideosService();

    const videos = await service.execute();

    return response.json(videos)
  }
}