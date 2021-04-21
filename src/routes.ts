import { Response, Router } from "express";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";


const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();

/*
    Parameter types:
    - route params
    - query params: filters/searches
    - body params
*/

routes.post("/settings", settingsController.create);
routes.post("/users", usersController.create);

export { routes }