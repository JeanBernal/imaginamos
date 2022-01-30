import { Model, DataTypes } from "sequelize";
import database from "../config/PostgresConfig";

export class TechnicalModel extends Model{
    id: number | undefined
    name: string | undefined
    last_name: string | undefined
    email: string | undefined
    phone: string | undefined
}

export const technicalMapper = async ()=>{

    let sequelize = await database()

    let mapper = TechnicalModel.init(
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
            }
        },
        {
            tableName: "users",
            sequelize,
            timestamps: false
        }
    )
    return mapper
}
