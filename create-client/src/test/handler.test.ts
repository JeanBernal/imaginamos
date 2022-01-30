import { handler } from "../../handler";
import * as RESPONSE_TYPES from '../main/types/responseTypes';
import { MocketResponse } from "./mocks/mockStructures";

jest.mock('../main/services/resellerQueries/getResellers', () => ({
    getResellers: jest.fn()
    .mockImplementation(()=>{
        return MocketResponse.RESELLERS
    })
}));

jest.mock('../main/services/resellerQueries/getResellerCatalogs', () => ({
    getResellerCatalogs: jest.fn()
    .mockImplementation(()=>{
        return MocketResponse.RESELLER_CATALOGS
    })
}));

jest.mock('../main/services/resellerQueries/getResellerServices', () => ({
    getResellerServices: jest.fn()
    .mockImplementation(()=>{
        return MocketResponse.RESELLER_SERVICES
    })
}));

jest.mock('../main/services/resellerQueries/getResellerProducts', () => ({
    getResellerProducts: jest.fn()
    .mockImplementation(()=>{
        return MocketResponse.RESELLER_PRODUCTS
    })
}));

jest.mock('../main/services/resellerList', () => ({
    listReseller: jest.fn()
    .mockImplementation(()=>{
        return MocketResponse.LIST_RESELLER
    })
}));

describe('Testing handler', ()=>{
    test('Succes', async()=>{
        let response = await handler()
        expect(response.statusCode).toEqual(RESPONSE_TYPES.OK)
    })
})