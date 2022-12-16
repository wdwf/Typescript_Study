import { Repository } from "typeorm";
import { Category } from "../entities/Categories";
import { categoryRepository } from "../repositories/CategoryRepository";


type CategoryRequest = {
  name: string;
  description: string;
}


export class CreateCategoryService {
  
  async execute({ name, description }: CategoryRequest): Promise<Category | Error> {
    
    if(await categoryRepository.findOneBy({ name })) {
      return new Error("Category already exists")
    }

    const category = categoryRepository.create({
      name,
      description
    })

    await categoryRepository.save(category);

    return category;
  }
}