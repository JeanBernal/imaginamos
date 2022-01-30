import { technicalMapper, TechnicalModel } from "../models/Technical";

export class Technical{
    
    public async get (): Promise<Array<TechnicalModel>> {

        const mapper = await technicalMapper();
    
        let get = await mapper.findAll({})
        return get    
    }
}