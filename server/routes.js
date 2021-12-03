const express = require("express");
const customers = require("./src/controller/customers");

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json({ msg: "Página inicial, retorno em json" });
});

routes.get("/clientes", customers.findAll);
routes.post("/registro", customers.addCustomer);

module.exports = routes;
