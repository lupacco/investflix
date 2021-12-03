const express = require("express");
const routes = require("./routes");
const database = require("./src/db");
const cors = require("cors");
const Customer = require("./src/models/customerModel");
const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);


database.sync(() => console.log("Banco de dados conectado"));

app.listen(3001, () => {
  console.log("Rodando na 3001");
});

// app.post("/registro", (req, res) => {
//   const name = req.body.name
//   const tel = req.body.tel
//   const email = req.body.email
//   const pwd = req.body.pwd
//   const birthdate = req.body.birthdate
//   const sex = req.body.sex

//   const createdCustomer = Customer.create({
//     name: name,
//     email: email,
//     tel: tel,
//     password: pwd,
//     birthdate: birthdate,
//     sex: sex,
//   })
//   console.log(createdCustomer)
// })
