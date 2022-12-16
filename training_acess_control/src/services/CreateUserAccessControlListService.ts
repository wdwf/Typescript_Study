import { In } from "typeorm";
import { User } from "../entities/User";
import { PermissionRepository, RoleRepository, UserRepository } from "../repositories";


type UserACLRequest = {
  userId: string;
  roles: string[];
  permissions: string[];
}

export class CreateUserAccessControlListService {
  async execute({ userId, roles, permissions }: UserACLRequest): Promise<User | Error> {

    const repo = UserRepository();

    const user = await repo.findOneBy({ id: userId })

    if (!user) {
      return new Error("User does not exists");
    }

    const permissionsExists = await PermissionRepository().findBy({ id: In(permissions) })

    const rolesExists = await RoleRepository().findBy({ id: In(roles) })

    user.permissions = permissionsExists;
    user.roles = rolesExists;

    repo.save(user);

    return user;
  }
}