import { categoryRepository } from "../repositories/CategoryRepository";

type CategoryUpdateRequest = {
  id: string;
  name: string;
  description: string;
};

export class UpdateCategoryService {
  async execute({ id, name, description }: CategoryUpdateRequest) {

    const category = await categoryRepository.findOneBy({ id: id });

    if(!category) {
      return new Error("Category does not exists!");
    }

    //é necessario fazer uma validação pra o campo não ficar vazio
    category.name = name ? name : category.name;
    category.description = description ? description : category.description;

    await categoryRepository.save(category);

    return category;
  }
}
