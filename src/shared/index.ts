import * as express from "express";
import * as bodyParser from "body-parser";
import { AppDataSource } from "./database/data-source";
import { routes } from "./http/routes/index.routes";
import * as cors from "cors";

AppDataSource.initialize()
  .then(async () => {
    console.log("Data Source has been initialized!");
  })
  .catch((error) => console.log("Error during build: ", error));

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/v1", routes);

// app.get("/status", async function (req: Request, res: Response) {
//   const teste = await AppDataSource.manager.save(
//     AppDataSource.manager.create(User, {
//       name: "Timber",
//     })
//   );
//   res.json(teste);
// });

console.log(
  "Express server has started on port 3000. Open http://localhost:3000/"
);
app.listen(3000);