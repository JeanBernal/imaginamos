import { Technical } from "../repositories/Technical"

export class TicketAssignment{
    public assign = async () =>{
        let newTechnical: Technical = new Technical(),
            technicals: any = await newTechnical.get(),
            items: number = technicals.length
            return this.random(items)
            
    }

    private random = (max: number) => {
        return Math.floor((Math.random() * (max - 1 + 1)) + 1);
    }
}