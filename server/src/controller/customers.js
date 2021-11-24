const CustomerRepository = require("../models/customerModel");

function findAll(req, res) {
  CustomerRepository.findAll().then((result) => res.json(result));
}

function findCustomer(req, res) {
  CustomerRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function addCustomer(req, res) {
  await CustomerRepository.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    birthdate: req.body.birthdate,
    sex: req.body.sex,
  }).then((result) => res.json(result));
}

module.exports = { findAll, addCustomer };
