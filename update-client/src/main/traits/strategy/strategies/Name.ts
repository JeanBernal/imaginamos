import { Strategy } from "../Strategy"
import * as RESPONSE_TYPES from '../../../types/responseTypes'
import { stringFormat } from "../../StringConstructor"

export class Name implements Strategy{

    validate(request: any){
        let message: string = ''
        if(request.name == undefined || request.name == ''){
            message = stringFormat(RESPONSE_TYPES.FIELD_REQUIRED,'name')
        }
        return message
    }

}