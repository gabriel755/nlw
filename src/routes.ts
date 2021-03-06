import { Router } from "express";
import { AunthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CerateMessageController";
import { GetLast3MessagesController } from "./controllers/GetLast3MessagesController";
import { ProfileUserController } from "./controllers/ProfileUserController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

router.post("/authenticate", new AunthenticateUserController().handle);

router.post("/messages", ensureAuthenticated, new CreateMessageController().handle);

router.get("/messages/last3", new GetLast3MessagesController().handle)

router.get("/profile", new ProfileUserController().handle);

export { router };