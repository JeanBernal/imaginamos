import { getResellerCatalogs} from '../main/services/resellerQueries/getResellerCatalogs'

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

jest.mock('../main/config/postgresConfig', () => {
    // Import the sequelize mock library
    const SequelizeMock = require("sequelize-mock")
    return new SequelizeMock()
});

describe("getResellerCatalogs",() => {
    test("Success", async () => {
        const response = await getResellerCatalogs('1')
        let responseJson = JSON.parse(JSON.stringify(response[0]))
        expect(responseJson).toHaveProperty('all_services')
    })
})
