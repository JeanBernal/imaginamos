import { getResellerPayGateway } from '../main/services/resellerQueries/getResellerPayGateway'

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

jest.mock('../main/config/postgresConfig', () => {
    // Import the sequelize mock library
    const SequelizeMock = require("sequelize-mock");
    return new SequelizeMock();
})

describe("getResellerPayGateway",() => {
    test("Success", async () => {
        const response = await getResellerPayGateway('1')
        let responseJson = JSON.parse(JSON.stringify(response[0]))
        expect(responseJson).toHaveProperty('url');
    })
})
