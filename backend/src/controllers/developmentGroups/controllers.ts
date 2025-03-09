import { NextFunction, Response, Request } from "express";
import DevelopmentGroups from "../../models/developmentGroups";



export async function getAllGroups(req: Request,res: Response, next: NextFunction) {
  try {
    const allGroups = await DevelopmentGroups.findAll()
    res.json(allGroups)
  } catch (e) {
    next()
  }
  }

