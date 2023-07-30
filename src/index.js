require("dotenv").config();
const express = require("express");
const cors = require("cors");

const port = process.env.PORT || 3000;
const app = express();
const connectToDatabase = require("./database/database");

const auth = require("./routes/auth");
const docs = require("./routes/docs");
const carrinho = require("./routes/carrinho");
const categoria = require("./routes/categoria");
const pedido = require("./routes/pedido");
const produto = require("./routes/produto");
const usuario = require("./routes/usuario");

app.use(express.json());
app.use(cors());

connectToDatabase();

app.get("/", (req, res) => {
  res.send({
    message:
      "Bem vindo a API do Market Place, para acessar a documentação use a rota /docs/api-docs",
  });
});

app.use("/auth", auth);
app.use("/docs", docs);
app.use("/carrinho", carrinho);
app.use("/categoria", categoria);
app.use("/pedido", pedido);
app.use("/produto", produto);
app.use("/usuario", usuario);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
