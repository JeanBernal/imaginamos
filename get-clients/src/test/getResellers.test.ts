import { getResellers} from '../main/services/resellerQueries/getResellers'

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
})

describe("getResellers",() => {
    test("Success", async () => {
        const response = await getResellers()
        let responseJson = JSON.parse(JSON.stringify(response[0]))
        expect(responseJson).toHaveProperty('img_url')
    })
})
