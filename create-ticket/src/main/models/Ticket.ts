import { Model, DataTypes } from "sequelize";
import database from "../config/PostgresConfig";

export class TicketModel extends Model{
    id: number | undefined
    token: string | undefined
    description: string | undefined
    technical_id: number | undefined
}

export const ticketMapper = async ()=>{

    let sequelize = await database()

    let mapper = TicketModel.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            token: { 
                type: DataTypes.STRING(98), 
                allowNull: false
            },
            description: { 
                type: DataTypes.STRING(98), 
                allowNull: false
            },
            technical_id: {
                type: DataTypes.INTEGER
            },
        },
        {
            tableName: "tickets",
            sequelize,
            timestamps: false
        }
    )
    return mapper
}


