import { userMapper, UserModel } from "../models/User";

export class User{
    
    public async update (id: number, ticketId: number): Promise<[number, UserModel[]]> {

        const mapper = await userMapper();
    
        let update = await mapper.update({
    
            'ticket_id': ticketId,      
        },{
            where: {id: id}
        })
        return update    
    }
}