import pkg from "pg"
import dotenv, { configDotenv } from "dotenv"
import { hostname } from "zod";

const {Pool} = pkg

dotenv.config();

const pool = new Pool({

    user:process.env.PGUSER,
    host:process.env.PGHOST,
    database:process.env.PGDB,
    password:process.env.PGPASSWORD,
    port:process.env.PGPORT
    
})

pool.on("error", (err) => {
    console.error("Erro ao conectar ao banco de dados")
    process.exit(-1)
})


export default pool;