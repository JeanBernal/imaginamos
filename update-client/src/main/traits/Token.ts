import jwt from 'jsonwebtoken'

export class Token{
    public static verifyToken(token: string): any{
        return  jwt.verify(token, process.env.TOKEN_SECRET || 'token', (err, decoded) => {
            if(err){
                return false
            }else{
                return true
            }
        })     
    }
}