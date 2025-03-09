import { Router } from "express";
import {  getAllGroups } from "../controllers/developmentGroups/controllers";

const devGroupsRouter = Router()

devGroupsRouter.get('/', getAllGroups )

export default devGroupsRouter