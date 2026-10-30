const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let personagens = [
  {
    id: 1,
    nome: "Goku",
    ki: 9000,
    imagem: "https://upload.wikimedia.org/wikipedia/commons/0/09/Man_Silhouette.png",
    idade: 43
  },
  {
    id: 2,
    nome: "Vegeta",
    ki: 8500,
    imagem: "https://upload.wikimedia.org/wikipedia/commons/0/09/Man_Silhouette.png",
    idade: 48
  },
  {
    id: 3,
    nome: "Gohan",
    ki: 7000,
    imagem: "https://upload.wikimedia.org/wikipedia/commons/0/09/Man_Silhouette.png",
    idade: 23
  }
];

let proximoId = 4;

// Consultar todos os personagens
app.get("/personagens", (req, res) => {
  res.status(200).json(personagens);
});

// Cadastrar um novo personagem
app.post("/personagens", (req, res) => {
  const { nome, ki, imagem, idade } = req.body;

  if (
    !nome ||
    ki === undefined ||
    !imagem ||
    idade === undefined ||
    Number(ki) < 0 ||
    Number(idade) < 0
  ) {
    return res.status(400).json({
      mensagem: "Preencha nome, ki, imagem e idade com valores válidos."
    });
  }

  const novoPersonagem = {
    id: proximoId++,
    nome: String(nome).trim(),
    ki: Number(ki),
    imagem: String(imagem).trim(),
    idade: Number(idade)
  };

  personagens.push(novoPersonagem);

  return res.status(201).json({
    mensagem: "Personagem cadastrado com sucesso!",
    personagem: novoPersonagem
  });
});

app.get("/", (req, res) => {
  res.send("API Dragon Ball funcionando! Acesse /personagens para consultar os personagens.");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
