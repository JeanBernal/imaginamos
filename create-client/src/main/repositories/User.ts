import { userMapper } from "../models/User";

export class User{
    
    public async create (user: any) {

        const mapper = await userMapper();
    
        let create = await mapper.create({
    
            'name': user.name,
            'last_name' : user.lastName,
            'email': user.email,
            'phone': user.phone,
            'ticket_id': null  
        })
        return create    
    }
    
    public async update (user: any, id: number) {

        const mapper = await userMapper();
    
        let update = await mapper.update({
    
            'name': user.name,
            'last_name' : user.lastName,
            'email': user.email,
            'phone': user.phone,
            'ticket_id': null       
        },{
            where: {id: id}
        })
        return update    
    }
}