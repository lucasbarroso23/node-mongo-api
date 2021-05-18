const mongoose = require("mongoose");

const Carro = mongoose.model("Carro", {
  usuario_id: {
    type: mongoose.Types.ObjectId,
    ref: "Usuario",
  },
  placa: {
    type: String,
    required: true,
  },
  cor: {
    type: String,
    required: true,
  },
  modelo: {
    type: String,
    required: true,
  },
  fabricante: {
    type: String,
    required: true,
  },
});
