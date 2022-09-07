import { Request, Response } from "express";
import addUserTable from "../data/addUserTable";

export const createUser = async (req: Request, res: Response) => {
  try {
    if (!req.body.name || !req.body.nickname) {
      res.status(400).send("Ocorreu algum erro, preencha todos os campos");
    }

    await addUserTable({
      id: Date.now().toString(),
      name: req.body.name,
      nickname: req.body.nickname,
      email: req.body.email,
    });
    res.status(200).send("Usuario criado com sucesso!");
  } catch (error) {
    res.status(400)
    .send({
       message: error.message || error.sqlMessage
    });
  }
};
