import express from "express";
import config from "../config/config";
import usersRoutes from "../modules/users/route";

const router = express.Router();

router.use(config.api.version, usersRoutes);

export default router;
