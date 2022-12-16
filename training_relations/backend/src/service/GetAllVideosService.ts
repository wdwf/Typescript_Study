import { videoRepository } from "../repositories/VideoRepository"


export class GetAllVideosService {
  async execute() {
    
    //Dependendo da situação esse relations é desnecessario
    // por conta de trazer muita informação 
    const videos = await videoRepository.find({ 
      relations:  ["category"],
    });

    return videos;
  }
}