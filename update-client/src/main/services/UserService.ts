import { Response } from "../models/Response"
import { Request } from "../traits/validateRequest"
import * as RESPONSE_TYPES from '../types/responseTypes'
import { User } from "../repositories/User"

export class UserService {
    
    public async updateUser(event: any): Promise<Response>{

        const request = new Request(),
              response: Response = new Response(),
              body: any = JSON.parse(event.body),
              { id } = event.pathParameters
        let validate: Array<string>
        try {

            validate = request.validateRequest(body)
            console.log(validate)
            if(validate.length > 0){
                response.setResponse(JSON.stringify(validate), false, RESPONSE_TYPES.FIELD_REQUIRED)
                return response
            }
            
            const user = {
                name: body.name,
                lastName: body.lastName,
                email: body.email,
                phone: body.phone,
                city: body.city,
            }

            let newUser: User = new User()
            console.log(newUser)
            let updated: any = await newUser.update(user, id)
            if(updated[0] === 0){
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