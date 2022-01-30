import { userMapper, UserModel } from "../models/User";

export class User{
    
    public async create (user: any) {

        const mapper = await userMapper();
    
        let create = await mapper.create({
    
            'name': user.name,
            'last_name' : user.lastName,
            'email': user.email,
            'phone': user.phone,
            'ticket_id': null,
            'password': user.password
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

    public async findUser(email: any) {
        const mapper = await userMapper();
        const user = await mapper.findOne({where: {email: email}})
        return user
    }
}