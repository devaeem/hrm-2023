import express, { Express, Response, Request } from "express";
import config from "./config/config";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";

const app: Express = express();
app.use(cors());
app.use(bodyParser.json({ limit: "20mb" }));
app.use(morgan("dev"));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(`${config.port}`, () => {
  console.log(`Server is running on port ${config.port}`);
});
