import { Strategy } from "../Strategy"
import * as RESPONSE_TYPES from '../../../types/responseTypes'
import { stringFormat } from "../../StringConstructor"

export class Email implements Strategy{

    validate(request: any){
        let message: string = ''
        if(request.email == undefined || request.email == ''){
            message = stringFormat(RESPONSE_TYPES.FIELD_REQUIRED,'email')
        }
        return message
    }

}