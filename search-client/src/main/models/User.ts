import { Model, DataTypes } from "sequelize";
//import { Ticket } from "./Ticket";
import database from "../config/PostgresConfig";
//import { ticketMapper } from "./Ticket";

export class UserModel extends Model{
    id: number | undefined
    name: string | undefined
    last_name: string | undefined
    email: string | undefined
    phone: string | undefined
    ticket_id: number | undefined
}

export const userMapper = async ()=>{

    let sequelize = await database()

    let mapper = UserModel.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING(98),
                allowNull: false
            },
            last_name: { 
                type: DataTypes.STRING(98), 
                allowNull: false
            },
            email: { 
                type: DataTypes.STRING(98), 
                allowNull: false
            },
            phone: {
                type: DataTypes.INTEGER
            },
            ticket_id: {
                type: DataTypes.INTEGER
            },
        },
        {
            tableName: "users",
            sequelize,
            timestamps: false
        }
    )
    return mapper
}