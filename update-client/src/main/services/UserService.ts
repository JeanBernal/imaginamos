import { Response } from "../models/Response"
import { Request } from "../traits/validateRequest"
import * as RESPONSE_TYPES from '../types/responseTypes'
import { User } from "../repositories/User"
import { Token } from "../traits/Token"
import bcrypt from 'bcryptjs'

export class UserService {
    
    public async updateUser(event: any): Promise<Response>{

        const request = new Request(),
              response: Response = new Response(),
              body: any = JSON.parse(event.body),
              { id } = event.pathParameters,
              {token} = event.headers
        let validate: Array<string>,
            password: string
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
            validate = request.validateRequest(body)
            console.log(validate)
            if(validate.length > 0){
                response.setResponse(JSON.stringify(validate), false, RESPONSE_TYPES.FIELD_REQUIRED)
                return response
            }
            password = await this.encryptPassword(body.password)
            const user = {
                name: body.name,
                lastName: body.lastName,
                email: body.email,
                phone: body.phone,
                city: body.city,
                password: password
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

    private async encryptPassword(password: string): Promise<string>{
        const salt = await bcrypt.genSalt(10)
        return bcrypt.hash(password, salt)
    }

    private async validatepassword(password: string, passDatabase: any): Promise<boolean>{
        let compare = await bcrypt.compare(password, passDatabase)
        return compare
    }

}