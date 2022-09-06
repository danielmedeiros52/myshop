import express from "express";
import userController from "../controller/userController.js";

const router =  express.Router()


router.get("/user", userController.getAll);
router.get("/user/:id", userController.getByID);
router.post("/user", userController.create);
router.put("/user/:id", userController.update);
router.delete("/user/:id", userController.delete);

export default router;