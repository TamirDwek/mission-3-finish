import { Sequelize } from "sequelize-typescript";
import config from 'config'
import Meetings from "../models/meetings";
import DevelopmentGroups from "../models/developmentGroups";

const logging = config.get<boolean>(`sequelize.logging`)? console.log : false 

const sequelize = new Sequelize({
    models:[DevelopmentGroups,Meetings],
    dialect:'mysql',
    ...config.get('db'),
    logging,
})



export default sequelize