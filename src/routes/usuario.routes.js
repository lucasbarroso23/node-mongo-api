const express = require("express");
const Carro = require("../models/carro");
const route = express.Router();

const Usuario = require("../models/usuario");

route.post("/", async (req, res) => {
  try {
    const usuario = await new Usuario(req.body).save();

    return res.json({ error: false, usuario });
  } catch (error) {
    res.json({ error: true, message: error.message });
  }
});

route.get("/", async (req, res) => {
  try {
    const usuarios = await Usuario.find();

    res.json({ error: false, usuarios });
  } catch (error) {
    res.json({ error: true, message: error.message });
  }
});

route.get("/:id", async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    const carros = await Carro.find({ usuario_id: req.params.id });

    res.json({ error: false, usuario: { ...usuario._doc, carros } });
  } catch (error) {
    res.json({ error: true, message: error.message });
  }
});

route.put("/:id", async (req, res) => {
  try {
    const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({ error: false, usuario });
  } catch (error) {
    res.json({ error: true, message: error.message });
  }
});

route.delete("/:id", async (req, res) => {
  try {
    const usuario = await Usuario.findByIdAndDelete(req.params.id);
    res.json({ error: false });
  } catch (error) {
    res.json({ error: true, message: error.message });
  }
});

module.exports = route;
