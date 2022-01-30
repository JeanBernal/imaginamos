import { Sequelize } from 'sequelize'
import db from '../../../db'



class Database {
    private dataBase: string = db.DB_NAME
    private user: string = db.DB_USER
    private pass: string = db.DB_PASS
    private host: string = db.DB_HOST
    private port: any = db.DB_PORT

    
    public database = async () =>{
        console.log('DATABASE', this.port)
        let newSeq =  new Sequelize(this.dataBase, this.user, this.pass, {
            host: this.host,
            port: this.port,
            dialect: 'postgres',
            dialectOptions: {
                connectTimeout: 30000
            }
        })
        console.log('DATABASE', newSeq)
        return newSeq
    }
}

let newDatabase = new Database()
let database = newDatabase.database
export default database