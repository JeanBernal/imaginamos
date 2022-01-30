import { UserService } from '../services/UserService'
import { Response } from 'src/main/handler/Response'
import * as RESPONSE_TYPES from  '../types/responseTypes'

class Handler {
  
    readonly signin = async (event: any): Promise<Response> => {
    
      let response: Response = {
      statusCode: RESPONSE_TYPES.INTERNAL_SERVER_ERROR,
      body: ''
      }

      try {      
        let user = new UserService()
        let userSigned = await user.signUser(event)
        response.statusCode = RESPONSE_TYPES.OK
        response.body = JSON.stringify(userSigned)
      } catch (error) {
        console.log(error)
      }
    return response
  }
}

let handler = new Handler()
export let signin =  handler.signin