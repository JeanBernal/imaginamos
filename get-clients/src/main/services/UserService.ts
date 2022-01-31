import { Response } from "../models/Response"
import * as RESPONSE_TYPES from '../types/responseTypes'
import { User } from "../repositories/User"
import { Token } from "../traits/Token"

export class UserService {
    
    public async getUsers(event: any): Promise<Response>{

        const response: Response = new Response(),
              {token} = event.headers
    
        try {
            if(!token) {
                response.setResponse({}, false, RESPONSE_TYPES.UNAUTHORIZED_MESSAGE)    
                return response
            }    
            let verify = Token.verifyToken(token)
            if(!verify){
                response.setResponse({}, false, RESPONSE_TYPES.UNAUTHORIZED_MESSAGE)    
                return response
            }
            let newUser: User = new User()
            let users = await newUser.get()
            response.setResponse(users, true, RESPONSE_TYPES.SUCCESS)
            
        } catch (error) {
            console.log(error)
            response.setResponse({}, false, RESPONSE_TYPES.SERVER_ERROR)
        }
        return response
    }


}