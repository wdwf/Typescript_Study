import { AppDataSource } from "../db";
import { Room } from "../entities/Room";

export const roomRepository = AppDataSource.getRepository(Room)