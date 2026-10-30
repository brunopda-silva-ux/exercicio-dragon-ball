# Exercício Dragon Ball

Projeto simples para cadastrar e consultar personagens de Dragon Ball usando uma API Node.js.

## Como executar

1. Abra a pasta do projeto no VS Code.
2. Abra o terminal dentro da pasta.
3. Execute `npm install`.
4. Execute `npm start`.
5. Abra o arquivo `index.html` no navegador.

A API ficará disponível em `http://localhost:3000`.

## Rotas

- GET `/personagens`: consulta os personagens cadastrados.
- POST `/personagens`: cadastra um personagem com nome, ki, imagem e idade.

Os dados iniciais ficam em memória. Ao reiniciar o servidor, os novos cadastros são reiniciados.
