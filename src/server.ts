import "dotenv/config";
import app from "./app";
import { config } from "./config/env";

app.listen(config.port, () => {
  console.log(`The server is running on port ${config.port}`);
});
