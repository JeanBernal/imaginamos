import { Response } from "../models/Response"
import { Request } from "../traits/validateRequest"
import * as RESPONSE_TYPES from '../types/responseTypes'
import { User } from "../repositories/User"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

export class UserService {
    
    public async saveUser(event: any): Promise<Response>{

        const request = new Request(),
              response: Response = new Response(),
              body: any = JSON.parse(event.body)
        let validate: Array<string>,
            password: string
        try {

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
            let userCreated: Object = await newUser.create(user)
            let token = this.generateToken(userCreated)
            response.setResponse({userCreated, token}, true, RESPONSE_TYPES.SUCCESS)
            
        } catch (error) {
            console.log(error)
            response.setResponse({}, false, RESPONSE_TYPES.SERVER_ERROR)
        }
        return response
    }

    public async signUser (event: any){
        const response: Response = new Response(),
              body: any = JSON.parse(event.body)

        try {
            const newUser = new User()
            const user = await newUser.findUser(body.email)
            if(!user){
                response.setResponse({}, false, RESPONSE_TYPES.NOT_FOUND_MESSAGE)
                return response
            }
            let validated = await this.validatepassword(body.password, user.password)
            if(!validated){
                response.setResponse({}, false, RESPONSE_TYPES.INVALID_PASSWORD)
            }else{
                let token = this.generateToken(user)
                response.setResponse({user, token}, true, RESPONSE_TYPES.SUCCESS)
            }

        } catch (error) {
            console.log(error)
            response.setResponse({}, false, RESPONSE_TYPES.SERVER_ERROR)
        }
        return response
    }
    private generateToken(userCreated: any){
        return jwt.sign(
            {
                id: userCreated.id
            }, 
            process.env.TOKEN_SECRET || 'token'
        )
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