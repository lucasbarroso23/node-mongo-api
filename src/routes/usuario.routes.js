const express = require("express");
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

module.exports = route;
