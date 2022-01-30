import { Strategy } from "../Strategy"
import * as RESPONSE_TYPES from '../../../types/responseTypes'
import { stringFormat } from "../../StringConstructor"

export class LastName implements Strategy{

    validate(request: any){
        let message: string = ''
        if(request.lastName == undefined || request.lastName == ''){
            message = stringFormat(RESPONSE_TYPES.FIELD_REQUIRED,'lastName')
        }
        return message
    }

}