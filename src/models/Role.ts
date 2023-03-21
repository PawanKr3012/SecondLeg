import Sequelize from "sequelize";
import { db } from "../config/database";

export const Role = db.define(
  "role",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    paranoid: true,
    timestamps: true,
  }
);
