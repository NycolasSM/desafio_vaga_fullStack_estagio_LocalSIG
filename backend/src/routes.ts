import { Router } from "express";
import { CreateClientController } from "./controllers/CreateClientController";
import { GetClientController } from "./controllers/GetClientController";

const router = Router();

const createClient = new CreateClientController();
const getClient = new GetClientController();

router.post("/clients", createClient.handle);
router.get("/client/:id", getClient.handle);

export { router };
