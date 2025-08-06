import express from "express"
import dotenv from "dotenv"

dotenv.config();

const PORT = process.env.SERVER_PORT;

// instanciar a API

const app = express();

// CONFIGURAR middleware

app.use(express.json())

// Chamar rotas

// iniciar a aplicação

app.listen(PORT, () => {
    console.log("SERVIDOR RODANDO NA PORTA")
})