import { Video } from "../entities/Video";
import { categoryRepository } from "../repositories/CategoryRepository";
import { videoRepository } from "../repositories/VideoRepository";

type VideoRequest = {
  name: string;
  description: string;
  duration: number;
  category_id: string;
}

export class CreateVideoService {
  async execute({ name, description, duration, category_id }: VideoRequest): Promise<Error | Video> {
    
    if(!await categoryRepository.findOneBy({ id: category_id })) {
      return new Error("Category does not exists!")
    }

    const video = videoRepository.create({
      name,
      description,
      duration,
      category_id
    });

    await videoRepository.save(video);

    return video;

  }
}