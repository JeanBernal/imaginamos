import { Strategy } from "../Strategy"
import * as RESPONSE_TYPES from '../../../types/responseTypes'
import { stringFormat } from "../../StringConstructor"

export class Phone implements Strategy{

    validate(request: any){
        let message: string = ''
        if(request.phone == undefined || request.phone == ''){
            message = stringFormat(RESPONSE_TYPES.FIELD_REQUIRED,'phone')
        }
        return message
    }

}