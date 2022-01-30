import { Strategy } from "./Strategy";

export class Context {
    private strategy: Strategy

    constructor(strategy: Strategy){
        this.strategy = strategy
    }

    setStrategy(strategy: Strategy){
        this.strategy = strategy
    }

    executeStrategy(request: any){
        return this.strategy.validate(request)
    }
}