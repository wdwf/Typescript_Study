import { AppDataSource } from "../db";
import { Category } from "../entities/Categories";


export const categoryRepository = AppDataSource.getRepository(Category);