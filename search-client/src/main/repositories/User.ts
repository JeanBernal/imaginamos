import { userMapper } from "../models/User";

export class User{
    
    public async search (id: any) {

        const mapper = await userMapper();
    
        let search = await mapper.findOne({
    
            where: {id: id}
        })
        return search    
    }
}