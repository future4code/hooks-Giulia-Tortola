import { UserDatabase } from "../data/UserDatabase";
import { createUserDTO } from "../types/createUserDTO";
import { generateId } from "../services/generateId"
import { InvalidRequest } from "../error/InvalidRequest";
import { InvalidEmail } from "../error/InvalidEmail";


export class UserBusiness {
   create(arg0: { email: any; name: any; password: any; }) {
     throw new Error("Method not implemented.");
   }
   getAll() {
     throw new Error("Method not implemented.");
   }
   public createUser = async (input: createUserDTO) => {
      try {
         const { name, nickname, email, password } = input

         if (!name || !nickname || !email || !password) {
            throw new InvalidRequest
         }

         if (!email.includes("@")) {
            throw new InvalidEmail
         }

         const id = generateId()

         const userDatabase = new UserDatabase()

         await userDatabase.insertUser({
            id,
            name,
            nickname,
            email,
            password
         })

      } catch (error: any) {
         throw new Error(error.message)
      }
   }
}