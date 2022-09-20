import express, { application } from "express";
import cors from "cors";
import { v4 as passwordGenerator } from 'uuid';
import { emitWarning } from "process";
import connection from "./database/connection";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});


app.post("/users", async (req, res) => {
  const errorCode = 400
  try{
    const id = passwordGenerator();
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password

  if(!name || !email || !password) {
    throw new Error("Verifique os campos obrigatórios")
  }
  await connection.raw(`
  INSERT INTO labecommerce_users (id, name, email, password)
  VALUES("${id}","${name}","${email}","${password}")`)
  res.status(200).send(`Bem vinda ao Labecommerce ${name}`)
} catch (error) {
  res.status(errorCode).send(error.message)
}
})