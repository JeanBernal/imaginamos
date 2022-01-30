import { TicketService } from '../services/TicketService'
import { Response } from 'src/main/handler/Response'
import * as RESPONSE_TYPES from  '../types/responseTypes'

class Handler {
  
    readonly createTicket = async (event: any): Promise<Response> => {
    
      let response: Response = {
      statusCode: RESPONSE_TYPES.INTERNAL_SERVER_ERROR,
      body: ''
      }

      try {      
        let ticket = new TicketService()
        let ticketCreated = await ticket.saveTicket(event)
        response.statusCode = RESPONSE_TYPES.OK
        response.body = JSON.stringify(ticketCreated)
      } catch (error) {
        console.log(error)
      }
    return response
  }
}

let handler = new Handler()
export let createTicket =  handler.createTicket