import { response, Router } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "./repositories/SettingsRepository";

const routes = Router();

/*
    Parameter types:
    - route params
    - query params: filters/searches
    - body params
*/

routes.post("/settings", async (request, response) => {
    const { chat , username }= request.body;

    const settingsRepository = getCustomRepository(SettingsRepository);

    // create rep
    const settings = settingsRepository.create({
        chat,
        username
    })
    //save obj
    await settingsRepository.save(settings);

    return response.json(settings);
});

export { routes }