import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";

class CreateTagService {
    async execute(name:string) {
        const tagsRepositories = getCustomRepository(TagsRepositories);

        //Verifica se o nome está preenchido ( o campo não está vazio )
        if(!name){
            throw new Error ("Invalid name!");
        }
        //Verifica se a tag já existe no banco de dados (repositório> DB )
        const tagAlreadyExists = await tagsRepositories.findOne({
            name
        });

        //Se já existir a tag lançamos um erro (excessão) 
        if(tagAlreadyExists) {
            throw new Error("Tag already exists");
        }

        //Caso a tag não exista nós criamos a tag e salvamos, por fim deixamos ela disponivel para uso (return)
        const tag = tagsRepositories.create({
            name
        });

        await tagsRepositories.save(tag);
        return tag;
    }
}

export { CreateTagService };