import { Sequelize } from 'sequelize'
import configs from '../../../configs'



class Database {
    private dataBase: string = configs.DB_NAME
    private user: string = configs.DB_USER
    private pass: string = configs.DB_PASS
    private host: string = configs.DB_HOST
    private port: any = configs.DB_PORT

    
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