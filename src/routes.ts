import { Router } from "express";
import { AuthenticaUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { GetLast3MessagesController } from "./controllers/GetLast3MessagesController";
import { ProfileUserController } from "./controllers/ProfileUserController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

router.post("/authenticate", new AuthenticaUserController().handle);

router.post("/messages", ensureAuthenticated, new CreateMessageController().handle);

router.get("/message/last3", new GetLast3MessagesController().handle);

router.get("/profile", ensureAuthenticated, new ProfileUserController().handle);

export { router };