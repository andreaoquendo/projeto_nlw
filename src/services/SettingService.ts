import { getCustomRepository, Repository } from "typeorm";
import { Setting } from "../entities/Setting";
import { SettingsRepository } from "../repositories/SettingsRepository"

interface ISettingsCreate{
    chat:boolean,
    username: string
}

class SettingsService {
    private settingsRepository: Repository<Setting>;

    constructor(){
        this.settingsRepository = getCustomRepository(SettingsRepository);
    }

    async create({ chat, username}: ISettingsCreate){   

        //check if user already exists
        //SELECT * from settings WHERE username = "username" limit 1
        const userAlreadyexists = await this.settingsRepository.findOne({
            username
        });

        if(userAlreadyexists){
            throw new Error("User already exists!");
            //we need to pass up this error
        }

        // create rep
        const settings = this.settingsRepository.create({
            chat,
            username
        })
        //save obj
        await this.settingsRepository.save(settings);
        
        return settings;
    }

    async findByUsername(username: string){
        const settings = await this.settingsRepository.findOne({
            username,
        });
        return settings;
    }

    async update(username:string, chat: boolean){
        const settings = await this.settingsRepository.createQueryBuilder().update(Setting).set({ chat }).where("username = :username", {
            username
        }).execute();
    }
}

export { SettingsService };