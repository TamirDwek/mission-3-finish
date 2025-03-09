import express, { json } from "express";
import config from "config";
import sequelize from "./db/sequelize";
import cors from "cors"
import devGroupsRouter from "./routers/developmentGroups";
import meetingRouter from "./routers/meeting";
const port = config.get<string>("app.port");
const name = config.get<string>("app.name");
const force = config.get<boolean>("sequelize.sync.force");

const app = express();
(async () => {
  await sequelize.sync({ force });

  app.use(cors())

  app.use(json());
  app.use('/groups', devGroupsRouter)
  app.use('/meetings', meetingRouter)

  app.listen(port, () => console.log(`${name} started on port ${port}...`));
})();
