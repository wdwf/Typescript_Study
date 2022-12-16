import { categoryRepository } from "../repositories/CategoryRepository";



export class DeleteCategoryService {
  async execute( id: string ) {

    if(!(await categoryRepository.findOneBy({ id: id }))) {
      return new Error("Category does not exists");
    }

    await categoryRepository.delete(id);
  }
}