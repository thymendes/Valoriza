import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { UsersRepositories } from "../repositories/UserRepositories";

interface iAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService{
    async execute({email, password}: iAuthenticateRequest ){
        const usersRepositories = getCustomRepository(UsersRepositories);

        //Verificar se o email existe
        const user = await usersRepositories.findOne({
            email
        });

        if(!user) {
            throw new Error ("Email/ Password incorrect");
        }

        //Caso o email exista, verificar se a senha está correta
        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error ("Email/ Password incorrect");
        }

        //Gerar Token
        const token = sign({
            email: user.email
        }, "fcb4d8f8e6731d175de06a2c858202a3", {
             subject: user.id,
             expiresIn: "1d"
        });

        return token;

    }
}

export { AuthenticateUserService }; 