import { response, Router } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsController } from "./controllers/SettingsController";
import { SettingsRepository } from "./repositories/SettingsRepository";

const routes = Router();

const settingsController = new SettingsController();

/*
    Parameter types:
    - route params
    - query params: filters/searches
    - body params
*/

routes.post("/settings", settingsController.create);

export { routes }