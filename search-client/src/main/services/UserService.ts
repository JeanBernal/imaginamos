import { Response } from "../models/Response"
import * as RESPONSE_TYPES from '../types/responseTypes'
import { User } from "../repositories/User"

export class UserService {
    
    public async searchUser(event: any): Promise<Response>{

        
        const response: Response = new Response(),
              { id } = event.pathParameters
        try {
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