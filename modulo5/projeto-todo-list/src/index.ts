import express, { Express } from "express";
import cors from "cors"; 
import { AddressInfo } from "net";
import { createUser } from "./endpoints/createUser";
import { getUserById } from "./endpoints/getUserById";
import {updateUser} from "./endpoints/updateUser";


const app: Express = express();

app.use(express.json());
app.use(cors());

app.post("user", createUser);
app.get("/user/:id", getUserById);
app.put("user/:id", updateUser);

const server = app.listen(process.env.PORT || 3003, () => {
    if(server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.error("Failure upon starting server.")
    }
});


