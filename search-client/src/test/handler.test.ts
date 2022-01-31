import { searchClient } from '../main/handler/Handler'
import * as RESPONSE_TYPES from '../main/types/responseTypes';

const user = {
    id: '999',
    name: 'unit test',
    last_name: 'sequelize',
    email: 'unit_test@mail.com',
    phone: '55555',
    ticket_id: 1,
    password: 'ima2022*'

}


describe('Handler', ()=>{
    test('Succes', async()=>{
        let event = {"body": JSON.stringify(user),
                     "headers" : "token"
                    };
        let response = await searchClient(event)
        expect(response.statusCode).toEqual(RESPONSE_TYPES.OK)
    })
})