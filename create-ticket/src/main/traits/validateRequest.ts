import { Description} from './strategy/strategies/Description'
import { Context } from './strategy/Context'

export class Request {
    public validateRequest(request: any): Array<string>{
        let messages: string[] = []
        let context: Context
        let executeStrategy: string        
       
        context = new Context(new Description())
        executeStrategy = context.executeStrategy(request)
        if(executeStrategy != ''){
            messages.push(executeStrategy)
        }
            

        return messages
    }
}