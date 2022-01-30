import { UserService } from '../services/UserService'
import { Response } from 'src/main/handler/Response'
import * as RESPONSE_TYPES from  '../types/responseTypes'

class Handler {
  
    readonly createClient = async (event: any): Promise<Response> => {
    
      let response: Response = {
      statusCode: RESPONSE_TYPES.INTERNAL_SERVER_ERROR,
      body: ''
      }

      try {      
        let user = new UserService()
        let userCreated = await user.saveUser(event)
        response.statusCode = RESPONSE_TYPES.OK
        response.body = JSON.stringify(userCreated)
      } catch (error) {
        console.log(error)
      }
    return response
  }
}

let handler = new Handler()
export let createClient =  handler.createClient