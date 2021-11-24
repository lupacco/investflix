const express = require("express");
const routes = require("./routes");
const database = require("./src/db");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(routes);
app.use(cors());

database.sync(() => console.log("Banco de dados conectado"));

// (async () => {
//   try {
//     const result = await database.sync();
//     console.log("Conectado!");
//   } catch (error) {
//     console.log(error);
//   }
// })();

app.listen(3001, () => {
  console.log("Rodando na 3001");
});
