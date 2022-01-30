import { userMapper } from "../models/User";

export class User{
    
    public async get () {

        const mapper = await userMapper();
    
        let get = await mapper.findAll({})
        return get    
    }
}