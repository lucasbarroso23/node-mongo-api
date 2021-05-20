const express = require("express");
const route = express.Router();

const Carro = require("../models/carro");

route.post("/", async (req, res) => {
  try {
    const carro = await new Carro(req.body).save();

    return res.json({ error: false, carro });
  } catch (error) {
    res.json({ error: true, message: error.message });
  }
});

module.exports = route;
