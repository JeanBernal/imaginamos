import { UserService } from '../services/UserService'
import { Response } from 'src/main/handler/Response'
import * as RESPONSE_TYPES from  '../types/responseTypes'

class Handler {
  
    readonly getClients = async (event: any): Promise<Response> => {
    
      let response: Response = {
      statusCode: RESPONSE_TYPES.INTERNAL_SERVER_ERROR,
      body: ''
      }

      try {      
        let user = new UserService()
        let userListed = await user.getUsers(event)
        response.statusCode = RESPONSE_TYPES.OK
        response.body = JSON.stringify(userListed)
      } catch (error) {
        console.log(error)
      }
    return response
  }
}

let handler = new Handler()
export let getClients =  handler.getClients