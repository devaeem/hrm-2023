import express from "express";
import { list, read } from "./userController";

const router = express.Router();

router.get("/users", list);
router.get("/users/:id", read);

export default router;
