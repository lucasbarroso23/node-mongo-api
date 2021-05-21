const express = require("express");
const app = express();

require("./database");

app.use(express.json());

app.use("/usuario", require("./src/routes/usuario.routes"));
app.use("/carro", require("./src/routes/carro.routes"));

app.listen(8000, () => {
  console.log("Servidor UP na porta 8000!");
});
