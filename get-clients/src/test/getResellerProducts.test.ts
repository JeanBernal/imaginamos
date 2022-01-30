import { getResellerProducts } from '../main/services/resellerQueries/getResellerProducts';

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

jest.mock('../main/config/postgresConfig', () => {
    // Import the sequelize mock library
    const SequelizeMock = require("sequelize-mock")
    return new SequelizeMock()
});

describe("getResellerProducts",() => {
    test("Success", async () => {
        const response = await getResellerProducts('1', {id:1})
        let responseJson = JSON.parse(JSON.stringify(response[0]))
        expect(responseJson).toHaveProperty('product_name')
    })
})
