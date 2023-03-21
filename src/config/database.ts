import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";

dotenv.config();

export const db = new Sequelize(process.env.DATABASE as string, "postgres", process.env.PASSWORD, {
  host: "localhost",
  dialect: "postgres",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
