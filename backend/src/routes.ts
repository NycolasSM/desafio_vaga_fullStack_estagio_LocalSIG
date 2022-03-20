import { Router } from "express";
import { CreateClientController } from "./controllers/CreateClientController";

const router = Router();

const createClient = new CreateClientController();

router.post("/clients", createClient.handle);

export { router };
