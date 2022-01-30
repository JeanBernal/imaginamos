import { Response } from "../models/Response"
import { Request } from "../traits/validateRequest"
import * as RESPONSE_TYPES from '../types/responseTypes'
import { Ticket } from "../repositories/Ticket"
import { TicketAssignment } from "../traits/TicketAssignmente"
import { v4 as uuidv4 } from 'uuid'

export class TicketService {
    
    public async saveTicket(event: any): Promise<Response>{

        const request = new Request(),
              response: Response = new Response(),
              body: any = JSON.parse(event.body)
        let validate: Array<string>,
            newTicketAssignment: TicketAssignment,
            technical: number,
            token: any
        try {

            validate = request.validateRequest(body)
            console.log(validate)
            if(validate.length > 0){
                response.setResponse(JSON.stringify(validate), false, RESPONSE_TYPES.FIELD_REQUIRED)
                return response
            }
            newTicketAssignment = new TicketAssignment()
            technical = await newTicketAssignment.assign()
            token = uuidv4()
            const ticket = {
                token: token,
                description: body.description,
                technicalId: technical        
            }

            let newTicket: Ticket = new Ticket()
            let ticketCreated = await newTicket.create(ticket)
            response.setResponse(ticketCreated, true, RESPONSE_TYPES.SUCCESS)
            
        } catch (error) {
            console.log(error)
            response.setResponse({}, false, RESPONSE_TYPES.SERVER_ERROR)
        }
        return response
    }


}