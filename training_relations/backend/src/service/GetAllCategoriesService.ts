import { Repository } from "typeorm";
import { categoryRepository } from "../repositories/CategoryRepository";


export class GetAllCategoriesService {
  async execute() {
    
    const categories = await categoryRepository.find();

    return categories;

  }
}