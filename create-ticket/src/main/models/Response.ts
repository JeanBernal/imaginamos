export class Response{
    body: any
    response: boolean
    message: string

    constructor(){
        this.body = {}
        this.response = true
        this.message = ''
    }

    public setResponse(body: Object, response: boolean, message: string ) : void {
        this.body = body
        this.response = response
        this.message = message
        
    }
}