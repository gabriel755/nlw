import { Router } from "express";
import { AunthenticateUserController } from "./controllers/AuthenticateUserController";

const router = Router();

router.post("/authenticate", new AunthenticateUserController().handle)

export { router };