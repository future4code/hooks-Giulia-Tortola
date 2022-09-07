import { Request, Response } from "express"
import editUser from "../data/updateUser";


export const updateUser = async (req: Request, res: Response) => {

    try {

        if (req.body.name === "" || req.body.nickname === "" || req.body.email === "") {
            res.status(400)
                .send("Preencha todos os campos!");
        }

        if (!req.body.name && !req.body.nickname && !req.body.email) {
            res.status(400)
                .send("Preencha um dos campos!");
        }

        await editUser(
            req.params.id,
            req.body.name,
            req.body.nickname,
            req.body.email
        )
        res.status(200)
            .send("Usuário atualizado");

    } catch (error) {
        res.status(400)
            .send({
                message: error.message || error.sqlMessage
            });
    }
};