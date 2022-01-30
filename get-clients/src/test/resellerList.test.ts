import { Settings } from '../main/utilities/Settings';
//import { listReseller } from '../main/services/UserService';
import { MocketResponse } from './mocks/mockStructures';

var resellerValue = jest.fn().mockReturnValue(MocketResponse.LIST_RESELLER)
 const listResellerMock = jest.mock('../main/services/resellerList', () =>{
     return resellerValue
 })
 const resellerCatalogMock = {
    id: '1',
    name: 'prueba mock',
    catalog_id: '1',
    all_services: true
}

jest.mock("../main/models/ResellerCatalog", () => {
    // Import the sequelize mock library
    const SequelizeMock = require("sequelize-mock");
    const dbConnection = new SequelizeMock();
    return {
        resellerCatalogMapper: jest.fn(() => new Promise((resolve) => {
            resolve(dbConnection.define('ResellerCatalog', resellerCatalogMock));
        })),
      }
})
 const resellerPayGatewayMock = {
    id: '1',
    name: 'prueba mock',
    url: 'img/resellerPayGateway'
}

jest.mock("../main/models/ResellerPayGateway", () => {
    // Import the sequelize mock library
    const SequelizeMock = require("sequelize-mock")
    const dbConnection = new SequelizeMock()
    return {
        resellerPayGatewayMapper: jest.fn(() => new Promise((resolve) => {
            resolve(dbConnection.define('ResellerPayGateway', resellerPayGatewayMock));
        })),
      }
})
 const resellerProductMock = {
    id: '1',
    re_seller_id: '1',
    re_seller_name: 'prueba mock',
    catalog_id: '1',
    catalog_name: 'catalog prueba',
    service_id: '1',
    service_name: 'servicio prueba',
    product_id: '1',
    product_name: 'product prueba'
}

jest.mock("../main/models/ResellerProduct", () => {
    // Import the sequelize mock library
    const SequelizeMock = require("sequelize-mock");
    const dbConnection = new SequelizeMock();
    return {
        resellerProductMapper: jest.fn(() => new Promise((resolve) => {
            resolve(dbConnection.define('ResellerProduct', resellerProductMock));
        })),
      }
})
 const resellerServiceMock = {
    id: '1',
    re_seller_id: '1',
    catalog_id: '1',
    service_id: '1',
    all_products: true
}

jest.mock("../main/models/ResellerService", () => {
    // Import the sequelize mock library
    const SequelizeMock = require("sequelize-mock");
    const dbConnection = new SequelizeMock();
    return {
        resellerServiceMapper: jest.fn(() => new Promise((resolve) => {
            resolve(dbConnection.define('ResellerService', resellerServiceMock));
        })),
      }
})
 const resellerMock = {
    id: '1',
    name: 'prueba mock',
    img_url: 'img/reseller'
}
 jest.mock("../main/models/Reseller", () => {
    // Import the sequelize mock library
    const SequelizeMock = require("sequelize-mock");
    const dbConnection = new SequelizeMock();
    return {
        resellerMapper: jest.fn(() => new Promise((resolve) => {
            resolve(dbConnection.define('Reseller', resellerMock))
        })),
      }
})
 jest.mock('../main/config/postgresConfig', () => {
    // Import the sequelize mock library
    const SequelizeMock = require("sequelize-mock")
    return new SequelizeMock()
});
describe('Testing the lambda to list resellers config', ()=>{
    test('Succes', async()=>{
        Settings.PARAMETER_STORE_DB_NAME
       // let response = await listReseller()
        //let responseJson = JSON.parse(JSON.stringify(response))
        
        //expect(responseJson[0]).toHaveProperty('id');
    })
})