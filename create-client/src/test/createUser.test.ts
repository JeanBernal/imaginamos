import { User } from "../main/repositories/User";

const user = {
    id: '999',
    name: 'unit test',
    last_name: 'sequelize',
    email: 'unit_test@mail.com',
    phone: '55555',
    ticket_id: 1,
    password: 'ima2022*'

}

jest.mock("../main/models/User", () => {
    // Import the sequelize mock library
    const SequelizeMock = require("sequelize-mock");
    const dbConnection = new SequelizeMock();
    return {
        userMapper: jest.fn(() => new Promise((resolve) => {
            resolve(dbConnection.define('User', user));
        })),
      }
})

jest.mock('../main/config/PostgresConfig', () => {
    // Import the sequelize mock library
    const SequelizeMock = require("sequelize-mock")
    return new SequelizeMock()
});

describe("Create User",() => {
    test("Success", async () => {
        let newUser = new User()
        const response = await newUser.create(user)
        expect(response).toHaveProperty('ticket_id')
    })
})
