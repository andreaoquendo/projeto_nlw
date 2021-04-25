import { getCustomRepository, Repository } from "typeorm";
import { MessagesRepository } from "../repositories/MessagesRepository";
import { Message } from "../entities/Message";

interface IMessagesService{
    admin_id?: string;
    text: string;
    user_id: string;
}

class MessagesService{
    private messagesRepository: Repository<Message>;

    constructor(){
        this.messagesRepository = getCustomRepository(MessagesRepository);
    }

    async create({ admin_id, text, user_id }: IMessagesService){

        const message=this.messagesRepository.create({
            admin_id,
            text,
            user_id
        })

        await this.messagesRepository.save(message);
        return message;
    }
    /* Criar uma lista de mensagens  */

    async listByUser(user_id: string){

        const list = await this.messagesRepository.find({
            where:{user_id},
            relations: ['user'] // traz todos os dados do User
        }); // retorna lista

        return list;
    }
}

export { MessagesService };