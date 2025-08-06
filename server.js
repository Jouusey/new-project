import express from "express"
import dotenv from "dotenv"

dotenv.config();

const PORT = process.env.SERVER_PORT;

// instanciar a API

const app = express();

// CONFIGURAR middleware

app.use(express.json())

// Chamar rotas

//handler de erros

app.use((_,res) => {
    res.status(404).json({error: "rota não encontrada"})
})

// iniciar a aplicação

app.listen(PORT, () => {
    console.log("SERVIDOR RODANDO NA PORTA")
})