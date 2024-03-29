import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../types/AuthenticatonData";

export class Authenticator {
  public generateToken = (id: AuthenticationData) => {
    const token = jwt.sign({ id }, process.env.JWT_KEY as string, {
      expiresIn: "1h",
    });

    return token;
  };

  public getData = (token: string): AuthenticationData => {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    return payload.id
  };
}