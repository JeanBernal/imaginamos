import { Name } from './strategy/strategies/Name'
import { LastName } from './strategy/strategies/LastName'
import { Email } from './strategy/strategies/Email'
import { Phone } from './strategy/strategies/Phone'
import { Context } from './strategy/Context'

export class Request {
    public validateRequest(request: any): Array<string>{
        let messages: string[] = []
        let context: Context
        let executeStrategy: string

        let validations = [
            new Name(),
            new LastName(),
            new Email(),
            new Phone()
        ]
        
        for (let i = 0; i < validations.length; i++) {
            context = new Context(validations[i])
            executeStrategy = context.executeStrategy(request)
            if(executeStrategy != ''){
                messages.push(executeStrategy)
            }
            
        }
        return messages
    }
}