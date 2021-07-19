import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UserRepositories";
import { classToPlain } from "class-transformer";


class ListUserService {
    async execute(){
        const usersRespositories = getCustomRepository(UsersRepositories);

        const users = await usersRespositories.find();

        return classToPlain(users);
    }
}

export { ListUserService };