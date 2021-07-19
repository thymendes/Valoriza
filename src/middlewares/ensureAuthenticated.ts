import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken"

interface iPayload {
    sub: string;
}

export function ensureAuthenticated (request: Request, response: Response, NextFunction: NextFunction) {
    //Receber o token
    const authToken = request.headers.authorization;

    //Verificar se o token está preenchido

    if(!authToken) {
        return response.status(401).end();
    }

   const [,token] = authToken.split(" ");
   
   //Validar token

   try {
       const { sub } =  verify(token, "fcb4d8f8e6731d175de06a2c858202a3") as iPayload ;
       
       request.user_id = sub;

       return NextFunction(); 
   } catch (error) {
       return response.status(401).end();
   }

   

    //Recuperar informações do usuário 

    return NextFunction();
}