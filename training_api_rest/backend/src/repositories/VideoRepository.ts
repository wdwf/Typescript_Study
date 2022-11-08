import { AppDataSource } from "../db";
import { Video } from "../entities/Video";

export const videoRepository = AppDataSource.getRepository(Video);