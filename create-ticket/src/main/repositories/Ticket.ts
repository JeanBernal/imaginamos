import { ticketMapper, TicketModel } from "../models/Ticket";

export class Ticket{
    
    public async create (ticket: any): Promise<TicketModel> {

        const mapper = await ticketMapper();
    
        let create = await mapper.create({
    
            'token': ticket.token,
            'description' : ticket.description,
            'technical_id' : ticket.technicalId
        })
        return create    
    }
}