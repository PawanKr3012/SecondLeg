import express from "express";
import * as dotenv from "dotenv";

import { db } from "./config/database";
import { handleError } from "./controllers/Error";
import { Role } from "./models/Role";
import { User } from "./models/User";
import { roleRouter } from "./routes/Role";
import { userRouter } from "./routes/User";

dotenv.config();
const PORT = process.env.port || 8000;
const app = express();

db.authenticate()
  .then(() => {
    console.log("Database connected...");
  })
  .catch((err) => {
    console.log("Error: " + err);
  });

app.use(express.json());

app.use(userRouter);
app.use(roleRouter);
app.use(handleError);

Role.hasMany(User);
User.belongsTo(Role);

// db.sync({ force: true })
db.sync()
  .then(() => {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  })
  .catch((err) => console.log("Error: " + err));
