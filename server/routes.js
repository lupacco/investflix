const express = require("express");
const customers = require("./src/controller/customers");

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json({ name: "lalalalala" });
});

routes.get("/clientes", customers.findAll);
routes.post("/registro", customers.addCustomer);

module.exports = routes;
