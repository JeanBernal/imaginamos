import { getResellerServices} from '../main/services/resellerQueries/getResellerServices'

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

jest.mock('../main/config/postgresConfig', () => {
    // Import the sequelize mock library
    const SequelizeMock = require("sequelize-mock")
    return new SequelizeMock()
});

describe("getResellerServices",() => {
    test("Success", async () => {
        const response = await getResellerServices('1',{id:1})
        let responseJson = JSON.parse(JSON.stringify(response[0]))
        expect(responseJson).toHaveProperty('all_products')
    })
})
