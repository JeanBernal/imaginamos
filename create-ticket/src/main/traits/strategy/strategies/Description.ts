import { Strategy } from "../Strategy"
import * as RESPONSE_TYPES from '../../../types/responseTypes'
import { stringFormat } from "../../StringConstructor"

export class Description implements Strategy{

    validate(request: any){
        let message: string = ''
        if(request.description == undefined || request.description == ''){
            message = stringFormat(RESPONSE_TYPES.FIELD_REQUIRED,'description')
        }
        return message
    }

}