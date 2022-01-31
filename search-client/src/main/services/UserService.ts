import { Response } from "../models/Response"
import * as RESPONSE_TYPES from '../types/responseTypes'
import { User } from "../repositories/User"
import { Token } from "../traits/Token"

export class UserService {
    
    public async searchUser(event: any): Promise<Response>{

        
        const response: Response = new Response(),
              { id } = event.pathParameters,
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
            console.log(newUser)
            let user = await newUser.search(id)
            if(user === null){
                response.setResponse({}, false, RESPONSE_TYPES.NOT_FOUND_MESSAGE)    
            }else{
                response.setResponse(user, true, RESPONSE_TYPES.SUCCESS)
            }
            
            
        } catch (error) {
            console.log(error)
            response.setResponse({}, false, RESPONSE_TYPES.SERVER_ERROR)
        }
        return response
    }


}