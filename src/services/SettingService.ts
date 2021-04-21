import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository"

interface ISettingsCreate{
    chat:boolean,
    username: string
}

class SettingsService {

    async create({ chat, username}: ISettingsCreate){   

        const settingsRepository = getCustomRepository(SettingsRepository);

        //check if user already exists
        //SELECT * from settings WHERE username = "username" limit 1
        const userAlreadyexists = await settingsRepository.findOne({
            username
        });

        if(userAlreadyexists){
            throw new Error("User already exists!");
            //we need to pass up this error
        }

        // create rep
        const settings = settingsRepository.create({
            chat,
            username
        })
        //save obj
        await settingsRepository.save(settings);
        
        return settings;
    }

}

export { SettingsService };