import { Model, DataTypes } from "sequelize";
import database from "../config/PostgresConfig";

export class UserModel extends Model{
    id: number | undefined
    name: string | undefined
    last_name: string | undefined
    email: string | undefined
    phone: string | undefined
    ticket_id: number | undefined
    password: string | undefined
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
            password: { 
                type: DataTypes.STRING(98), 
                allowNull: false
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