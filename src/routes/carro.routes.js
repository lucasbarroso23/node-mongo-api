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

route.get("/", async (req, res) => {
  try {
    const carros = await Carro.find();

    res.json({ error: false, carros });
  } catch (error) {
    res.json({ error: true, message: error.message });
  }
});

route.get("/:id", async (req, res) => {
  try {
    const carro = await Carro.findById(req.params.id).populate(
      "usuario_id",
      "nome email"
    );

    res.json({ error: false, carro });
  } catch (error) {
    res.json({ error: true, message: error.message });
  }
});

route.put("/:id", async (req, res) => {
  try {
    const carro = await Carro.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({ error: false, carro });
  } catch (error) {
    res.json({ error: true, message: error.message });
  }
});

route.delete("/:id", async (req, res) => {
  try {
    const carro = await Carro.findByIdAndDelete(req.params.id);
    res.json({ error: false });
  } catch (error) {
    res.json({ error: true, message: error.message });
  }
});

module.exports = route;
