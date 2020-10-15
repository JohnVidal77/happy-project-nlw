import { Router } from "express";

import OrphanagesController from "./controllers/Orphanages.controller";

const routes = Router();

routes.get("/orphanages", OrphanagesController.index);
routes.post("/orphanage/create", OrphanagesController.create);

export default routes;
