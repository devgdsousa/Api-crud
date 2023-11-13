import { Router } from "express";
import userControler from "../userControler"

const router = Router();

router.post('/users', userControler.createdUser)
router.get("/users", userControler.FindAll)
router.get("/user/:id", userControler.FindOne)
router.put('/user/:id', userControler.updateAt)
router.delete("/user/:id", userControler.deletedUser)


export{router}