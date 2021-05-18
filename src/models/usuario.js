const mongoose = require("mongoose");

const Usuario = mongoose.model("Usuario", {
  nome: {
    type: String,
    required: true,
  },
  email: String,
  senha: {
    type: String,
    required: function () {
      return this.idade > 18;
    },
  },
  idade: Number,
  status: Boolean,
  cor_olhos: {
    type: String,
    enum: ["Azul", "Preto", "Castanho", "Verde"],
    required: true,
  },
  habilidades: Array,
  outros: Object,
});

module.exports = Usuario;
